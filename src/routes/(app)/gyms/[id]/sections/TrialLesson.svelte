<script>
	import Button from '$lib/components/Button/Button.svelte'
</script>

<section id="test_lesson" class="box">
	<h2 class="block">Пробное занятие</h2>
	<p class="block">Бесплатно познакомьтесь с клубом</p>

	<ul class="block">
		<li>Экскурсия по клубу</li>
		<li>Консультация тренера</li>
		<li>Пробная тренировка</li>
	</ul>

	<div class="block btn">
		<Button fullWidth>Записаться</Button>
	</div>
</section>

<style lang="scss">
	@use "$scss/mixins/bg";

	section {
    display: flex;
		flex-direction: column;
		flex-grow: 1;

		color: #fff;

		@include bg.accent;
	}

	ul {
    margin-top: auto !important;
		font-size: 1.1em;
    padding-left: 2.5ex;
	}

	.btn {
    margin-top: 30px;

		:global button {
      background: #fff;
      color: var(--text-color);
		}
	}
</style>
