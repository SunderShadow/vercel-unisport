<script lang="ts">
	import logo from "$lib/assets/img/logo.png"
	import Section2 from './+page/Section2/Section2.svelte'

	import maxsimTepin from "./assets/maxim_tepin.png?enhanced&format=webp"
	import maxsimGrigoriev from "./assets/maxim_grigoriev.png?enhanced&format=webp"
	import alisaLarina from "./assets/alisa_larina.png?enhanced&format=webp"
	import valeriySidorov from "./assets/valeriy_sidorov.png?enhanced&format=webp"
	import pepeDancing from "./assets/pepe_dancing.gif"
</script>

<main>
	<div class="container">
		<h1 class="title">О проекте</h1>
		<p class="subtitle">Что такое юниспорт?</p>
	</div>

	<section class="container unisport">
		<h2>Юниспорт</h2>
		<enhanced:img src={logo} />
		<p>
			— это Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
			industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
			it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
			typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
			containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
			versions of Lorem Ipsum.
		</p>
	</section>

	<Section2 />

	<section id="team" class="container">
		<h2>Наша команда</h2>
		<p class="subtitle">Юниспорт создала команда <a href="#">Инновиума</a></p>

		<div class="grid">
			<article class="member">
				<enhanced:img src={maxsimTepin} width="420" height="420"/>
				<h3>Максим Тепин</h3>
				<p>Project | Product менеджер</p>
			</article>
			<article class="member">
				<enhanced:img src={valeriySidorov} width="420" height="420"/>
				<h3>Валерий Сидоров</h3>
				<p>Стратегический директор</p>
			</article>
			<article class="member">
				<enhanced:img src={alisaLarina} width="420" height="420"/>
				<h3>Алиса Ларина</h3>
				<p>Графический дизайнер, СММ специалист</p>
			</article>
			<article class="member">
				<enhanced:img src={pepeDancing} width="420" height="420"/>
				<h3>Александр Шведов</h3>
				<p>Frontend-разработчик</p>
			</article>
			<article class="member">
				<enhanced:img src={maxsimGrigoriev} width="420" height="420"/>
				<h3>Максим Григорьев</h3>
				<p>Backend-разработчик, Devops-инженер</p>
			</article>
			<article class="member">
				<enhanced:img src={pepeDancing} width="420" height="420"/>
				<h3>Егор Протасов</h3>
				<p>QA-инженер, SEO-специалист</p>
			</article>
		</div>
	</section>
</main>

<style lang="scss">
	@use "$scss/mixins/scr";

	main {
    padding-top: var(--header-height);
    margin-bottom: 50px;
	}

	.title, .subtitle {
		text-align: center;
	}

	.subtitle {
		color: var(--text-content-color);
	}

	.unisport {
		max-width: 690px;

    img { height: 39px;}
		h2 {display: none}
	}

	#team {
		a {
			text-decoration: underline;
			color: var(--color-accent-1)
		}
	}

	.grid {
    margin-top: 50px;

    display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 70px;

		@include scr.tablet {
      grid-template-columns: repeat(2, 1fr);
		}

    @include scr.mobile {
      grid-template-columns: 1fr;
    }

		img {
			width: 100%;
			border-radius: 14px;
			background-color: #B7B7B7;
			aspect-ratio: 1 / 1;
      height: auto;
		}

		h3 {
      margin-top: 10px;
      margin-bottom: 10px;
		}

		p {
      margin-top: 10px;
      margin-bottom: 0;
		}
	}

  main {
    :global {
      section + section {
        margin-top: 50px;
      }

      section.container {
        .badge {
          width: fit-content;
          margin-left: auto;
          margin-right: auto;
          font-size: 0.75em;

          @include scr.mobile {
            font-size: 0.85em;
          }
        }

        h2 {
          text-align: center;
          margin-top: 20px;
					font-size: 2rem;
          margin-bottom: 20px;

          @include scr.mobile {
            font-size: 1.5715em;
          }
        }

        .text-content {
          max-width: 890px;
          text-align: center;
          margin: 20px auto;

          color: var(--text-content-color);

          @include scr.desktop {
            font-size: 18px;
          }
        }
      }
    }
	}
</style>