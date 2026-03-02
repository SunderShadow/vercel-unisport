<script lang="ts">
	import type { Snippet } from 'svelte'
	import { fade } from 'svelte/transition'

	type Props = {
		children: Snippet
		title: string
		visible?: boolean
	}

	function preventCloseIfInnerClicked(e: Event) {
		e.stopPropagation()
		e.preventDefault()
	}

	function close() {
		visible = false
	}

	let { children, title, visible = $bindable(false) }: Props = $props()
</script>

{#if visible}
	<aside onclick={close} transition:fade={{ duration: 300 }}>
		<div class="inner-wrapper" onclick={preventCloseIfInnerClicked}>
			<div class="header">
				<span class="title">{title}</span>
				<button class="close" onclick={close}>
					<svg
						width="15"
						height="15"
						viewBox="0 0 15 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M7.5 9.09696L1.91065 14.6863C1.70152 14.8954 1.43536 15 1.11217 15C0.788973 15 0.522813 14.8954 0.313688 14.6863C0.104562 14.4772 0 14.211 0 13.8878C0 13.5646 0.104562 13.2985 0.313688 13.0894L5.90304 7.5L0.313688 1.91065C0.104562 1.70152 0 1.43536 0 1.11217C0 0.788973 0.104562 0.522813 0.313688 0.313688C0.522813 0.104562 0.788973 0 1.11217 0C1.43536 0 1.70152 0.104562 1.91065 0.313688L7.5 5.90304L13.0894 0.313688C13.2985 0.104562 13.5646 0 13.8878 0C14.211 0 14.4772 0.104562 14.6863 0.313688C14.8954 0.522813 15 0.788973 15 1.11217C15 1.43536 14.8954 1.70152 14.6863 1.91065L9.09696 7.5L14.6863 13.0894C14.8954 13.2985 15 13.5646 15 13.8878C15 14.211 14.8954 14.4772 14.6863 14.6863C14.4772 14.8954 14.211 15 13.8878 15C13.5646 15 13.2985 14.8954 13.0894 14.6863L7.5 9.09696Z"
							fill="black" />
					</svg>
				</button>
			</div>
			{@render children()}
		</div>
	</aside>
{/if}

<style lang="scss">
	aside {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: #00000066;

		z-index: var(--header-z-index);
		cursor: pointer;
	}

	.title {
		font-weight: 700;
		font-size: 30px;
		letter-spacing: -1%;
	}

	.inner-wrapper {
		cursor: auto;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		padding: 20px;

		background-color: #ffffff;
		border-radius: 20px;

		:global > * + * {
			margin-top: 20px;
		}
	}

	.header {
		display: flex;
		align-items: center;
		gap: 20px;
	}

	.close {
		display: flex;

		margin-left: auto;
		width: 40px;
		height: 40px;
		border-radius: 10px;
		border: 1px solid #e5e7eb;
		background: none;

		> svg {
			margin: auto;
		}
	}
</style>
