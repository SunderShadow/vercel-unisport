<script lang="ts">
	import Modal from '$lib/components/Modal/Modal.svelte'
	import { tick } from 'svelte'
	import Search from '$lib/components/Search/Search.svelte'

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
		<Search placeholder={current._t}/>

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
