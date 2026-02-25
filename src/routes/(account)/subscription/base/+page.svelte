<script>
	import Promotion from '../Promotion.svelte'
	import About from './About.svelte'
	import Referal from './Referal.svelte'
	import Functional from './Functional.svelte'
	import Oferta from './Oferta.svelte'
</script>

<main class="container">
	<svg class="page-bg" width="1400" height="1281" viewBox="0 0 1400 1281" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M1329.36 194.466C1349.57 203.126 1380.1 231.168 1390.82 252.199C1402.78 274.88 1403.19 319.829 1391.23 342.098C1379.68 363.954 1049.71 693.856 1028.68 704.578C1017.13 710.764 1004.34 713.238 985.37 713.238C950.724 713.238 930.513 702.928 894.629 667.876C845.134 618.391 799.35 588.7 740.368 568.081C692.11 551.173 652.514 545.812 592.707 548.287C487.942 552.41 410.812 586.225 322.957 667.876C285.836 701.691 269.75 709.114 233.866 709.114C174.059 708.289 121.676 648.495 128.688 588.287C132.4 558.184 143.537 540.451 183.958 501.688C303.159 386.222 446.283 328.489 613.33 328.489C746.143 328.489 862.457 368.077 951.549 443.543L973.409 462.1L1102.1 333.438C1180.46 255.498 1237.38 201.889 1247.28 196.94C1267.49 186.631 1307.92 185.806 1329.36 194.466Z" fill="url(#paint0_linear_1671_9442)" fill-opacity="0.3"/>
		<path d="M677.262 648.494C834.41 683.959 935.463 839.013 905.353 997.366C896.714 1042.8 822.551 1134.09 787.2 1144.99C764.703 1151.93 720.498 1157.1 689.714 1144.99C660.518 1133.51 643.097 1119.13 635.122 1089.91C626.666 1058.93 637.252 1029.21 658.031 1010.94C716.188 959.81 686.748 860.457 610.031 860.457C598.482 860.457 583.221 863.344 575.796 867.055C568.372 870.766 473.506 962.314 364.616 1070.77C174.884 1259.64 165.81 1268.3 144.362 1274.48C116.314 1282.73 105.59 1282.73 77.9552 1274.48C47.4331 1265.41 15.2611 1233.25 6.18692 1202.73C-2.06231 1175.1 -2.06231 1164.38 6.18692 1136.34C12.3738 1114.89 20.6231 1106.23 211.18 914.891C320.483 805.198 421.536 707.052 435.147 697.155C503.203 648.495 594.77 629.937 677.262 648.494Z" fill="url(#paint1_linear_1671_9442)" fill-opacity="0.3"/>
		<ellipse cx="924.577" cy="150.618" rx="150.616" ry="150.618" fill="url(#paint2_linear_1671_9442)" fill-opacity="0.3"/>
		<defs>
			<linearGradient id="paint0_linear_1671_9442" x1="-1.83865e-10" y1="734.603" x2="1400" y2="734.603" gradientUnits="userSpaceOnUse">
				<stop stop-color="#F66D49"/>
				<stop offset="1" stop-color="#F43F5E"/>
			</linearGradient>
			<linearGradient id="paint1_linear_1671_9442" x1="-1.83865e-10" y1="734.603" x2="1400" y2="734.603" gradientUnits="userSpaceOnUse">
				<stop stop-color="#F66D49"/>
				<stop offset="1" stop-color="#F43F5E"/>
			</linearGradient>
			<linearGradient id="paint2_linear_1671_9442" x1="773.961" y1="150.618" x2="1075.19" y2="150.618" gradientUnits="userSpaceOnUse">
				<stop stop-color="#F66D49"/>
				<stop offset="1" stop-color="#F43F5E"/>
			</linearGradient>
		</defs>
	</svg>

	<h1>Базовая подписка</h1>
	<p>
		Наша подписка открывает вам путь мире большого спорта и дает доступ к преимум функциям сервиса
	</p>

	<div class="boxes">
		<Promotion />
		<About />
		<Referal />
		<Functional />
		<Oferta />
	</div>
</main>

<style lang="scss">
	main {
		position: relative;
		margin-top: 50px;
		margin-bottom: 50px;
	}

	.page-bg {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: -1;
	}

	h1, p {
		text-align: center;
    margin: 0;
	}

	p {
		color: var(--text-content-color);
		font-size: 18px;
    margin-top: 15px;
	}

	.boxes {
		margin-top: 50px;
		max-width: 690px;

		margin-left: auto;
		margin-right: auto;

		:global > * + * {
			margin-top: 30px;
		}
	}
</style>
