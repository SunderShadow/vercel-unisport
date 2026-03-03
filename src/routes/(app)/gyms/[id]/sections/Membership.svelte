<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte'

	const options = [
		{
			title: 'Месячный',
			economy: 0,
			cost: 5990,
			period: 'месяц'
		},
		{
			title: '3 месяца',
			economy: 1980,
			cost: 15990,
			period: '3 месяца'
		},
		{
			label: 'Самый выгодный',
			title: 'Годовой',
			economy: 21890,
			cost: 49990,
			period: 'год'
		}
	]

	function prettyCost(cost: number) {
		const costStr = cost.toString()
		let newCost = ''

		for (let i = costStr.length - 1; i >= 0; i--) {
			newCost += costStr[i]

			if ((costStr.length - i) % 3 === 0) {
				newCost += ' '
			}
		}

		return newCost.split('').reverse().join('')
	}

	let selected: number = $state(-1)
	function select(id: number) {
		selected = id
	}
</script>

<section id="membership" class="box">
	<h2 class="block">Абонементы</h2>
	<p class="block">Выберите подходящий тариф</p>

	<div class="block options">
		{#each options as option, id (id)}
			{#if option.label}
				<div class="option-label">{option.label}</div>
			{/if}
			<div class="option" class:selected={id === selected} onclick={() => {select(id)}}>
				<div>
					<h3>{option.title}</h3>
					{#if option.economy}
						<div class="badge">Экономия {option.economy} ₽</div>
					{/if}
				</div>

				<div class="cost">
					<span>{prettyCost(option.cost)} ₽</span>
					<span>/{option.period}</span>
				</div>
			</div>
		{/each}
	</div>

	<div class="block">
		<Button accent fullWidth>Купить абонемент</Button>
	</div>
</section>

<style lang="scss">
	@use "$scss/mixins/bg";
	@use "$scss/mixins/scr";

	.option-label + .option,
	.option + .option-label,
	.option + .option {
    margin-top: 20px;
	}

  @include scr.mobile {
    .option-label + .option {
      margin-top: 10px;
		}
  }

	.option-label {
		color: var(--text-content-color);
	}

	.option {
    display: flex;
		justify-content: space-between;
		align-items: flex-start;

		padding: 20px;
    border: 1px solid #E5E7EB;
		border-radius: 14px;

		cursor: pointer;

    opacity: .8;

    transition-property: border-color, opacity;
    transition-duration: var(--transition-duration);

		.badge {
			background: #65656533;
			padding: 2px 10px;
			border-radius: 10em;
			font-size: .75em;
      margin-top: 12px;
		}

		h3 {
      margin: 0;
		}

		.cost {
			text-align: right;

			> span:first-child {
				@include bg.accent;

				-webkit-background-clip: text;
				background-clip: text;
				color: transparent;
				font-weight: 600;
        font-size: 2.25em;

				@include scr.mobile {
					font-size: 1.15em;
				}
			}

			> span {
        display: block;
				color: var(--text-content-color);
        margin-top: 2px;
			}
		}

		&.selected {
      border-color: #F66D49;
      opacity: 1;
    }

    &:hover, &.selected {
      opacity: 1;
    }
	}
</style>