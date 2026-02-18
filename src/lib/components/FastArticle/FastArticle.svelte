<script lang="ts">
	type Props = {
		img: string
		title: string
		date: string
		badge: string
	}

	let { badge, img, title, date }: Props = $props()
</script>

<article>
	<div class="badge">
		{badge}
	</div>

	<enhanced:img src={img} width="295" height="200" />
	<h1>{title}</h1>
	<time>{date}</time>
</article>

<style lang="scss">
	article {
		aspect-ratio: 335 / 365;
		border-radius: 14px;
		padding: 20px;
		box-shadow:
			0 4px 6px -4px #0000001a,
			0 10px 15px -3px #0000001a,
			0 -10px 15px -3px #0000001a;
	}

	h1 {
		max-width: 231px;
		margin-top: 20px;

		font-size: 1em;
		font-weight: 700;
	}

	.badge {
		position: absolute;
		top: 30px;
		left: 30px;

		background: linear-gradient(90deg, rgba(246, 109, 73, 0.8) 0%, rgba(244, 63, 94, 0.8) 100%);
		border: none;
		color: #fff;
		font-weight: 700;
	}

	img {
		width: 100%;
		object-fit: cover;
	}

	time {
		margin-top: 20px;

		font-size: 0.85em;
		font-weight: 400;

		letter-spacing: 1px;

		color: #969fa8;
	}
</style>
