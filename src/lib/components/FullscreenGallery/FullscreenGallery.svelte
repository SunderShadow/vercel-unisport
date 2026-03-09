<script lang="ts" module>
	export type Props = {
		images: Array<string>,
		visible: boolean,
		currentI?: number,

		// Actions
		toNext?: (e: Event) => void,
		toPrev?: (e: Event) => void,
		set?: (i: number) => void,
	}
</script>

<script lang="ts">
	import {fade} from 'svelte/transition'

	let {
		images,
		visible = $bindable(),
		currentI = $bindable(0),
		toNext = $bindable(), toPrev = $bindable(), set = $bindable()
	}: Props = $props()

	const iBound = images.length - 1

	set = (i: number) => { currentI = i }

	toNext = (e) => {
		e.stopPropagation()
		if (currentI === iBound) {
			currentI = 0
		} else {
			currentI++
		}
	}

	toPrev = () => {
		e.stopPropagation()

		if (currentI === 0) {
			currentI = iBound
		} else {
			currentI--
		}
	}

	function preventExitIfImgClicked(e) {
		e.stopPropagation()
	}

	function close() {
		visible = false
	}
</script>

{#if visible}
	<div class="fullscreen-gallery" onclick={close} transition:fade={{duration: 300}}>
		<button
			onclick={toPrev}
			class="fullscreen-gallery__btn fullscreen-gallery__btn-prev">
			&larr;
		</button>

		<div class="tape" onclick={preventExitIfImgClicked}>
			<img src={images[currentI]} alt="">
		</div>

		<button
			onclick={toNext}
			class="fullscreen-gallery__btn fullscreen-gallery__btn-next">
			&rarr;
		</button>
	</div>
{/if}
<style lang="scss">
	.fullscreen-gallery {
		--btn-size: var(--gallery-btn-size, 50px);

    position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;

		background: var(--gallery-bg-color, rgba(0, 0, 0, 0.5));
		z-index: var(--gallery-z-index, 10);

		&__btn {
      display: flex;
			align-items: center;
			justify-content: center;

			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			width: var(--btn-size);
      height: var(--btn-size);
			border-radius: 100%;

			background: #fff;
			border: none;

			&-prev {
				left: 20px;
			}

      &-next {
        right: 20px;
      }
		}
	}

	.tape {
		position: absolute;
		top: 50%;
		left: 50%;
		height: fit-content;

		padding: 0 100px;
		transform: translate(-50%, -50%);
	}
</style>