<script lang="ts">
	import organizerEnhanced from '../assets/organizer.png?enhanced&format=webp'
	import Button from '$lib/components/Button/Button.svelte'
	import Review from '$lib/components/Review/Review.svelte'
</script>

<section id="reviews" class="container">
	<h2>Отзывы и оценки</h2>
	<div class="write_review">
		<Button fullWidth>Написать отзыв</Button>
	</div>
	<Review
		thumb={organizerEnhanced.img.src}
		username="Иван Иванов"
		date={new Date()}
		text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, at deserunt enim eum fuga
						 itaque nostrum, optio perspiciatis quae reiciendis, sint ut vitae voluptate. Aperiam commodi
						  consectetur consequuntur corporis cumque eaque enim, exercitationem ipsa, modi necessitatibus,
						   quisquam temporibus ullam. Aliquid animi atque aut eius, error incidunt nihil saepe sed tempore." />
	<Review
		thumb={organizerEnhanced.img.src}
		username="Иван Иванов"
		date={new Date()}
		text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, at deserunt enim eum fuga
						 itaque nostrum, optio perspiciatis quae reiciendis, sint ut vitae voluptate. Aperiam commodi
						  consectetur consequuntur corporis cumque eaque enim, exercitationem ipsa, modi necessitatibus,
						   quisquam temporibus ullam. Aliquid animi atque aut eius, error incidunt nihil saepe sed tempore." />
	<Review
		thumb={organizerEnhanced.img.src}
		username="Иван Иванов"
		date={new Date()}
		text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, at deserunt enim eum fuga
						 itaque nostrum, optio perspiciatis quae reiciendis, sint ut vitae voluptate. Aperiam commodi
						  consectetur consequuntur corporis cumque eaque enim, exercitationem ipsa, modi necessitatibus,
						   quisquam temporibus ullam. Aliquid animi atque aut eius, error incidunt nihil saepe sed tempore." />

	<Button bg="white">Посмотреть еще</Button>
</section>

<style lang="scss">
	.write_review {
		max-width: 370px;
		width: 100%;
		margin-top: 30px;
		margin-bottom: 30px;
	}
</style>
