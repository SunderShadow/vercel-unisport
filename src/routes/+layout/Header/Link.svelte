<script module lang="ts">
	import Self from './Link.svelte'
	import { page } from '$app/state'

	export type Link = {
		href?: string
		text: string
		children?: Array<Link>
	}
</script>

<script lang="ts">
	let { href, text, children }: Link = $props()
</script>

{#if children}
	<div class="link-tree">
		<button class="tree-name">
			<span>{text}</span>
			<svg viewBox="0 0 360 360" xml:space="preserve">
				<g id="SVGRepo_iconCarrier">
					<path
						id="XMLID_225_"
						d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
					></path>
				</g>
			</svg>
		</button>
		<div class="children">
			<div class="children-wrapper">
				{#each children as child}
					<Self {...child} />
				{/each}
			</div>
		</div>
	</div>
{:else}
	<a class="link" class:active={page.url.pathname.startsWith(href)} {href}>{text}</a>
{/if}

<style lang="scss">
	@use '$scss/mixins/bg';
	@use '$scss/mixins/scr';

	.link-tree {
		position: relative;
	}

	:global {
		.link-tree:hover,
		.link-tree:has(a.active) > {
			.tree-name {
				color: #fff;

				svg {
					fill: #fff;
				}

				&::before {
					transform: none;
				}
			}
		}

		.link-tree:has(a.active) > .tree-name::before {
			opacity: 1;
		}
	}

	.link.active {
		color: #fff;
		svg {
			fill: #fff;
		}

		&::before {
			transform: none !important;
			opacity: 1;
		}
	}

	a:hover {
		color: #fff;
		svg {
			fill: #fff;
		}

		&::before {
			transform: none;
		}
	}

	.tree-name {
		background: none;
		border: none;
		width: 100%;
		display: flex;
		align-items: center;
		gap: 10px;

		svg {
			width: 12px;
			height: 12px;
			fill: #000000;

			transition: transform var(--transition-duration);
		}
	}

	.tree-name,
	a {
		position: relative;
		padding: 10px 30px;

		@include scr.higher_than_tablet {
			text-align: center;
		}

		transition: color var(--transition-duration);

		overflow: hidden;

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;

			opacity: 0.75;
			@include bg.accent;
			transform: translateY(-101%);

			@include scr.tablet {
				transform: translateX(-101%);
			}

			transition-property: transform, opacity;
			transition-duration: var(--transition-duration);
			z-index: -1;
		}
	}

	.children :global {
		a::before {
			@include scr.tablet {
				transform: translateY(-101%);
			}
		}
		a:has(+ a:hover)::before {
			transform: translateY(101%);
		}

		a:hover + a + a {
			transition: none;
		}

		a:has(+ a + a:hover)::before {
			transform: translateY(101%);
			transition: none;
		}
	}

	.link-tree {
		border-radius: 14px 14px 0 0;
		position: relative;
		cursor: default;

		@include scr.tablet {
			svg {
				transform: rotate(270deg);
			}
		}

		@include scr.higher_than_tablet {
			&:hover {
				svg {
					transform: rotate(180deg);
				}
			}

			:global a {
				padding-left: 0;
				padding-right: 0;
			}
		}
	}
	@include scr.higher_than_tablet {
		.link-tree:hover {
			> .children {
				--visible: 1;
				visibility: visible;
			}
		}
	}

	@include scr.tablet {
		.link-tree:not(:has(.children:hover)):hover {
			> .children {
				--visible: 1;
				visibility: visible;
			}
		}
	}

	.children {
		--visible: 0;

		position: absolute;
		width: 100%;
		top: 100%;
		left: 50%;
		transform: translateX(-50%) translateY(calc(-10px * (1 - var(--visible))));

		@include scr.tablet {
			left: 100%;
			top: 0;
			transform: none;
		}

		visibility: hidden;
		opacity: var(--visible);

		border-radius: 0 0 10px 10px;
		border-top: none;
		overflow: hidden;

		transition-duration: var(--transition-duration);
		transition-property: opacity, visibility, transform;
		transform-origin: top;

		background: rgba(255, 255, 255, 0.85);
		backdrop-filter: blur(64px);
	}

	.children-wrapper {
		:global {
			> a {
				display: block;
			}
		}
	}
</style>
