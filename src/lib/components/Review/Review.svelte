<script lang="ts">
	import Rating from '$lib/components/Rating/Rating.svelte'

	let { thumb, username, date, text } = $props()
</script>

<article class="review">
	<header>
		<div class="userinfo">
			<img src={thumb} width="53" height="53" />
			<span>{username}</span>
		</div>
		<time datetime={date}>{date.toLocaleDateString()}</time>
	</header>

	<Rating value={4.2} />

	<p>{text}</p>
</article>

<style lang="scss">
	.review {
		max-width: 670px;

		* + * {
			margin-top: 10px;
		}
	}

	.userinfo {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	img {
		border-radius: 10em;
	}

	time {
		display: block;
		color: var(--text-content-color);
		margin-top: 10px;
	}
</style>
