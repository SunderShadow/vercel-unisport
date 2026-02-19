<div>
	<h1>Промокод</h1>
	<div class="my-promo">Мой промокод</div>
</div>

<div class="copy-promo">
	<input type="text" value="12345678" readonly />
	<button class="button">
		<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M15.332 2.875H3.83203V15.3333"
				stroke="white"
				stroke-width="1.91667"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M7.66406 6.70837H19.1641V18.2084C19.1641 18.7167 18.9621 19.2042 18.6027 19.5637C18.2432 19.9231 17.7557 20.125 17.2474 20.125H9.58073C9.0724 20.125 8.58489 19.9231 8.22544 19.5637C7.866 19.2042 7.66406 18.7167 7.66406 18.2084V6.70837Z"
				stroke="white"
				stroke-width="1.91667"
				stroke-linecap="round"
				stroke-linejoin="round" />
		</svg>
		<span>Скопировать промокод</span>
	</button>
</div>

<span>Ввести промокод друга</span>

<div class="friend-promo">
	<input type="text" placeholder="Промокод друга" />
	<button class="button round">
		<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M8.625 17.25L14.375 11.5L8.625 5.75"
				stroke="white"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round" />
		</svg>
	</button>
</div>

<style lang="scss">
	.my-promo {
		margin-top: 10px;
	}

	.copy-promo {
		display: flex;
		gap: 20px;
		flex-wrap: wrap;

		input {
			width: 315px;
			font-size: 1.2em;
		}

		button {
			flex-grow: 1;
		}
	}

	.friend-promo {
		display: flex;
		gap: 20px;

		input {
			flex-grow: 1;
		}
	}

	input {
		padding: 20px 25px;
		border-radius: 14px;
		border: 1px solid #d8dadc;
		color: inherit;
	}
</style>
