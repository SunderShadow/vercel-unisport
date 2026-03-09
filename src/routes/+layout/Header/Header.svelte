<script lang="ts">
	import type { Auth } from '$lib/types'

	import logo from '$lib/assets/img/logo.png?enhanced&format=webp'
	import { afterNavigate, goto, onNavigate } from '$app/navigation'
	import CityChooseModal from './CityChooseModal.svelte'
	import Link from './Link.svelte'
	import type { Link as _Link } from './Link.svelte'

	type Props = {
		user: null | Auth.UserData
	}

	let { user }: Props = $props()

	const authorized = $derived(!!user)

	// Mobile only
	let navVisible = $state(false)

	let cityChooseModalVisible = $state(false)

	let nav: Array<_Link> = [
		{
			text: 'Каталог',
			children: [
				{ href: '/catalog/events', text: 'Мероприятия' },
				{ href: '/catalog/gyms', text: 'Комплекс' }
			]
		},
		{ href: '/map', text: 'Карта' },
		{ href: '/about', text: 'О нас' },
		{ href: '#', text: 'Стать партнером' }
	]

	afterNavigate(() => {
		navVisible = false
	})

	function toggleNav() {
		navVisible = !navVisible
	}

	function handleAuthClick() {
		if (authorized) {
			goto('/account')
		} else {
			login()
		}
	}

	function login() {}
</script>

<CityChooseModal bind:visible={cityChooseModalVisible} />

<header>
	<button id="open-nav" class="default" aria-label="Открыть меню" onclick={toggleNav}>
		<svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M4.04108 17.25C3.75496 17.25 3.5153 17.158 3.32208 16.974C3.12887 16.79 3.03193 16.5626 3.03125 16.2917C3.03058 16.0208 3.12752 15.7933 3.32208 15.6093C3.51664 15.4253 3.75631 15.3333 4.04108 15.3333H20.1982C20.4844 15.3333 20.7244 15.4253 20.9182 15.6093C21.1121 15.7933 21.2087 16.0208 21.2081 16.2917C21.2074 16.5626 21.1104 16.7903 20.9172 16.975C20.724 17.1596 20.4844 17.2513 20.1982 17.25H4.04108ZM4.04108 12.4583C3.75496 12.4583 3.5153 12.3663 3.32208 12.1823C3.12887 11.9983 3.03193 11.7709 3.03125 11.5C3.03058 11.2291 3.12752 11.0017 3.32208 10.8177C3.51664 10.6337 3.75631 10.5417 4.04108 10.5417H20.1982C20.4844 10.5417 20.7244 10.6337 20.9182 10.8177C21.1121 11.0017 21.2087 11.2291 21.2081 11.5C21.2074 11.7709 21.1104 11.9987 20.9172 12.1833C20.724 12.3679 20.4844 12.4596 20.1982 12.4583H4.04108ZM4.04108 7.66667C3.75496 7.66667 3.5153 7.57467 3.32208 7.39067C3.12887 7.20667 3.03193 6.97922 3.03125 6.70833C3.03058 6.43744 3.12752 6.21 3.32208 6.026C3.51664 5.842 3.75631 5.75 4.04108 5.75H20.1982C20.4844 5.75 20.7244 5.842 20.9182 6.026C21.1121 6.21 21.2087 6.43744 21.2081 6.70833C21.2074 6.97922 21.1104 7.20699 20.9172 7.39162C20.724 7.57626 20.4844 7.66794 20.1982 7.66667H4.04108Z"
				fill="#272327" />
		</svg>
	</button>

	<div id="logo">
		<a href="/"><enhanced:img src={logo} width="168" height="37" alt="Юниспорт" /></a>
	</div>

	<nav class:visible={navVisible}>
		{#each nav as link}
			<Link {...link} />
		{/each}
	</nav>

	<button
		id="city-choose"
		onclick={() => {
			cityChooseModalVisible = true
		}}>
		<span>Ростов-на-Дону</span>

		<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M5 7.5L10 12.5L15 7.5"
				stroke="#374151"
				stroke-width="1.33333"
				stroke-linecap="round"
				stroke-linejoin="round" />
		</svg>
	</button>

	<button id="auth" class:no-auth={!user} class="button" onclick={handleAuthClick}>
		{#if authorized}
			<span>{user.name}</span>
			<img src={user.imgUrl} alt="" />
		{:else}
			<span class="no-auth">Вход</span>
			<svg
				class="no-auth"
				width="25"
				height="25"
				viewBox="0 0 25 25"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M8.33203 8.41312V6.50099C8.33203 5.99387 8.53152 5.50751 8.8866 5.14892C9.24169 4.79032 9.72328 4.58887 10.2254 4.58887H20.0712C20.5734 4.58887 21.055 4.79032 21.4101 5.14892C21.7652 5.50751 21.9646 5.99387 21.9646 6.50099V17.9738C21.9646 18.4809 21.7652 18.9672 21.4101 19.3258C21.055 19.6844 20.5734 19.8859 20.0712 19.8859H10.2254C9.72328 19.8859 9.24169 19.6844 8.8866 19.3258C8.53152 18.9672 8.33203 18.4809 8.33203 17.9738V16.0616"
					stroke="#272327"
					stroke-width="1.4375"
					stroke-linecap="round"
					stroke-linejoin="round" />
				<path
					d="M12.8766 16.0621L16.6634 12.2378L12.8766 8.41357M2.27344 12.2378H15.906"
					stroke="#272327"
					stroke-width="1.4375"
					stroke-linecap="round"
					stroke-linejoin="round" />
			</svg>
		{/if}
	</button>
</header>

<style lang="scss">
	@use '$lib/scss/mixins/scr';

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;

		gap: 35px;

		height: var(--header-height);
		padding-left: 20px;
		padding-right: 20px;

		background: rgba(255, 255, 255, 0.6);
		backdrop-filter: blur(8px);

		font-size: 0.775em;
		font-weight: 500;

		@include scr.mobile {
			gap: 10px;
		}
	}

	nav {
		justify-self: center;
		display: flex;
		margin-left: auto;
		font-size: 14px;

		@media (max-width: 1230px) {
			font-size: 12px;
		}

		@media (min-width: 1231px) {
			transform: translateX(20%);
		}

		@include scr.higher_than_tablet {
      :global {
        & > .link,
        & .tree-name {
          border-radius: 10em;
        }
        & .link-tree .tree-name {
          transition: border-radius var(--transition-duration);
        }
        & .link-tree:hover .tree-name {
          border-radius: 10em 10em 0 0;
        }
      }
		}

		@include scr.tablet {
			--visible: 1;
			--shadow-opacity: calc(0.25 * (1 - var(--visible)));

			flex-direction: column;

			.children {
				--visibility: 0;
				visibility: hidden;
			}

			position: fixed;
			top: var(--header-height);
			height: calc(100dvh - var(--header-height));
			bottom: 0;
			left: 0;
			width: 100%;
			max-width: 50vw;

			box-shadow: 0 100vw 0 100vw rgba(#000, var(--shadow-opacity));
			background: #fff;
			transform: translateX(calc(-100% * var(--visible)));
			transition-property: transform, box-shadow;
			transition-duration: var(--transition-duration);
			z-index: var(--header-z-index);

			&.visible {
				--visible: 0;
			}
		}
	}

	#logo {
		img {
			object-fit: contain;
			height: 100%;
		}

		@include scr.tablet {
			height: 25px;
		}
	}

	#auth {
		height: 32px;
		width: 138px;

		padding: 0;
		cursor: pointer;

		&:not(.no-auth) {
			background: none;
			box-shadow: none;
			width: auto;
			color: var(--text-color);
			font-size: 14px;
			font-weight: 500;

			img {
				width: 2rem;
				height: 2rem;
				object-fit: cover;
				object-position: center;
				border-radius: 10em;
			}
		}

		@media (min-width: 1100px) {
			svg {
				display: none;
			}
		}

		@media (max-width: 1100px) {
			height: fit-content;
			width: auto;
			background: none;

			span {
				display: none;
			}
		}
	}

	#open-nav {
		all: unset;

		@include scr.desktop {
			display: none;
		}
	}

	#city-choose {
		all: unset;

		display: flex;
		gap: 8px;
		align-items: center;
		color: var(--text-color);

		margin-left: auto;

		cursor: pointer;

		@include scr.tablet {
			display: none;
		}
	}
</style>
