<script lang="ts">
	import Modal from '$lib/components/Modal/Modal.svelte'
	import Input from '$lib/components/Form/Input.svelte'
	import Button from '$lib/components/Button/Button.svelte'
	import { tick } from 'svelte'

	type Props = {
		visible: boolean
	}

	type Option = {
		_t: string
		_v: string
	}

	const options: Array<Option> = [
		{
			_t: 'Ростов-на-Дону',
			_v: 'rnd'
		},
		{
			_t: 'Москва',
			_v: 'msk'
		},
		{
			_t: 'Мурманск',
			_v: 'mrmnsk'
		}
	]

	let current = $state(options[0])
	function choose(option: Option) {
		current = option
		tick().then(() => {
			alert(`Выбран новый город, - "${option._t}" жаль что функционала пока нет`)
		})
	}

	function search() {
		alert('А поиск тоже пока не работает)')
	}

	let { visible = $bindable() }: Props = $props()
</script>

<Modal title="Выберите город" bind:visible>
	<div class="choose">
		<div class="search">
			<Input placeholder={current._t} />
			<Button round accent onclick={search}>
				<svg
					width="23"
					height="23"
					viewBox="0 0 23 23"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M14.8542 13.4167H14.0971L13.8288 13.1579C14.8005 12.031 15.3345 10.5922 15.3333 9.10417C15.3333 7.87216 14.968 6.66781 14.2835 5.64343C13.5991 4.61905 12.6262 3.82064 11.488 3.34917C10.3497 2.8777 9.09726 2.75434 7.88892 2.99469C6.68058 3.23505 5.57065 3.82832 4.69948 4.69948C3.82832 5.57065 3.23505 6.68058 2.99469 7.88892C2.75434 9.09726 2.8777 10.3497 3.34917 11.488C3.82064 12.6262 4.61905 13.5991 5.64343 14.2835C6.66781 14.968 7.87216 15.3333 9.10417 15.3333C10.6471 15.3333 12.0654 14.7679 13.1579 13.8288L13.4167 14.0971V14.8542L18.2083 19.6363L19.6363 18.2083L14.8542 13.4167ZM9.10417 13.4167C6.71792 13.4167 4.79167 11.4904 4.79167 9.10417C4.79167 6.71792 6.71792 4.79167 9.10417 4.79167C11.4904 4.79167 13.4167 6.71792 13.4167 9.10417C13.4167 11.4904 11.4904 13.4167 9.10417 13.4167Z"
						fill="white" />
				</svg>
			</Button>
		</div>

		<div class="cities">
			{#each options as option}
				<button
					class="option"
					class:selected={current._v === option._v}
					onclick={() => {
						choose(option)
					}}>
					{option._t}
				</button>
			{/each}
		</div>
	</div>
</Modal>

<style lang="scss">
	@use '$lib/components/Modal/env' as modal;

	.search {
		display: flex;
		gap: 20px;
		align-items: center;

		:global .input {
			flex-grow: 1;
			border-radius: 10em;
			border: 1px solid #656565;
		}
	}

	.cities {
		margin-top: 50px;
		margin-left: -(modal.$padding);
		margin-right: -(modal.$padding);
	}

	.option {
		width: 100%;
		background: none;
		border: none;
		outline: none;
		padding: 20px;
		text-align: left;

		&.selected {
			background: #ebeaed;
		}
	}

	.choose {
		max-width: 410px;
		width: 100vw;
	}
</style>
