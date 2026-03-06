<script lang="ts">
	import organizerEnhanced from '../assets/organizer.png'
</script>

<section id="organizer" class="container">
	<h2>Организатор</h2>
	<a href="">
		<enhanced:img src={organizerEnhanced} width="53" height="53" />
		<span>Иван Иванов</span>
		<span class="rating">4.5</span>
	</a>
</section>

<style lang="scss">
	#organizer {
		img {
			border-radius: 10em;
		}

		:global button {
			padding: 12px 50px;
			gap: 15px;
		}

		a {
			width: fit-content;
			display: flex;
			gap: 15px;
			align-items: center;
			background-color: #ffffff;
			padding: 12px 50px;
			border-radius: 10em;

			box-shadow:
				0 4px 6px -4px #0000001a,
				0 10px 15px -3px #0000001a,
				0 -10px 15px -3px #0000001a;

			span:last-child {
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
