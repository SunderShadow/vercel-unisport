<section class="container">
	<div class="mobile_info">
		<div class="rating">
			<div>4.5</div>
			<a href="">
				<span>Все отзывы</span>
				<svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M0.5 8.5L4.5 4.5L0.5 0.5"
						stroke="#272327"
						stroke-linecap="round"
						stroke-linejoin="round" />
				</svg>
			</a>
		</div>
	</div>

</section>

<style lang="scss">
	@use '$scss/mixins/scr';

	section {
		margin-top: 30px;
		margin-bottom: 30px;
	}

	.mobile_info {
		display: none;
		@include scr.tablet {
			display: flex;
		}

		flex-wrap: wrap;
		gap: 20px;
		margin-bottom: 20px;

		.rating {
			display: flex;
			align-items: center;
			gap: 5px;

			a {
				display: flex;
				gap: 5px;
				align-items: center;
			}

			> div:first-child {
				background: #01b306;
				padding: 4.5px 10px;
				border-radius: 10em;
				color: #fff;
				font-weight: 400;
				font-size: 16px;
			}
		}

	}

</style>
