<script>
	import PageTransitions from '../components/PageTransitions.svelte';
	import { onMount } from 'svelte';
	import 'material-icons/iconfont/material-icons.css';
	import { Carousel } from '@fancyapps/ui';
	import Swal from 'sweetalert2';

	// import { count } from '../stores/stores';

	onMount(async () => {
		const myCarouselMockups = new Carousel(document.querySelector('.carouselMockups'), {
			// Options
		});
		const myCarouseShowcase = new Carousel(document.querySelector('.carouselShowcase'), {
			// Options
		});

		await initPlayer();
	});

	function openAPKPopUp() {
		Swal.fire({
			imageUrl: 'portfolioImages/ARthlete/arthlete-apk-qrcode.png',
			imageWidth: 300,
			imageHeight: 300,
			imageAlt: 'Custom image',
			heightAuto: false,
			footer:
				'<a href="https://drive.google.com/file/d/1MWiflc6Uj2b4zGZgJgRfV1y2CRWfTH4-/view" target="_blank"> Zum Download der APK-Datei</a>'
		});
	}

	function initPlayer() {
		try {
			let player = new VideoPlayer({
				target: document.getElementById('videoPlayer'),
				props: {
					poster: '/portfolioImages/ARthlete/pic (1).png',
					source: '/videos/ARthlete/ARthlete introduction.mp4',
					color: '#6F4CE1'
				}
			});
		} catch (e) {
			location.reload();
		}
	}
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://unpkg.com/svelte-video-player@latest/dist/svelte-video-player.css"
	/>
	<script src="https://unpkg.com/svelte-video-player@latest/dist/svelte-video-player.js"></script>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.css" />
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.4.4/sweetalert2.css"
		integrity="sha512-40/Lc5CTd+76RzYwpttkBAJU68jKKQy4mnPI52KKOHwRBsGcvQct9cIqpWT/XGLSsQFAcuty1fIuNgqRoZTiGQ=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	/></svelte:head
>

<PageTransitions>
	<main>
		<!-- <div
			class="flex w-screen h-screen  px-80 z-10 absolute overflow-x-hidden overflow-scroll overflow-y-visible"
		/> -->

		<div
			class="w-screen h-screen overflow-x-hidden overflow-scroll overflow-y-visible absolute z-40"
		>
			<a class="fixed top-0 right-0 mt-5 mr-10 z-50 text-5xl" href="/works"
				><span class="material-icons-outlined">close</span>
			</a>

			<div
				class="cursor-pointer fixed bottom-0 right-0 mb-10 mr-10 z-50 text-5xl shadow bg-[#FEAE00] btn-circle flex justify-center items-center"
				on:click={() => {
					openAPKPopUp();
				}}
			>
				<span class="material-icons-outlined !text-black">android</span>
			</div>

			<section class="w-screen h-max bg-gradient-to-r from-[#FEAE00] to-[#FE9000] relative pb-48">
				<div class="heroCustom min-h-screen relative">
					<div style="font-family: Poppins;" class="text-neutral-content">
						<div class="pt-24">
							<div class="max-w-5xl flex justify-between w-screen">
								<div>
									<!-- style="-webkit-text-stroke: 0.5px white; color: transparent;" -->
									<h1 class="text-6xl font-bold">ARthlete - Prototyp</h1>
									<p class="mb-5">AR - App rund um Fitness</p>
								</div>
								<div>
									<p class="text-4xl text-black">Unity</p>
								</div>
							</div>
							<div id="videoPlayer" class="pb-8" />
							<div class="flex justify-between pb-24">
								<h1 class="text-4xl font-bold text-black">Über ARthlete</h1>
								<p
									style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"
									class="max-w-prose font-medium"
								>
									ARthlete ist eine Zusammensetzung aus den Begriffen Augmented Reality, kurz AR,
									und Athlete. Daraus lässt sich korrekt schließen, dass die Anwendung Augmented
									Reality benutzt, um sportliche Inhalte darzustellen. Die gezeigten Inhalte sind
									Sportübungen, welche mit Hilfe unserer App nahezu in echter Umgebung angeschaut
									werden können. ARthlete soll helfen, Kindern und Erwachsenen, welche vorher wenig
									Kontakt mit Eigengewichtübungen hatten, einen leichten Einstieg in dieses Gebiet
									zu gewähren. Dies soll vorallem mit dem spielerischen Aspekt des Augmented Reality
									ermöglicht werden. Hierzu wird ein Deck von Karten mit verschiedensten
									Körpergewichtsübungen zur Verfügung gestellt. Durch das Einscannen einer solchen
									Karte mit Hilfe der Handykamera, erscheint ein 3D-Modell, welches die vorgelegte
									Übung vormacht. Der Nutzer kann dann durch Gestensteuerung und durch die
									Positionierung des Mobilgeräts die Sicht auf das Modell optimieren, um gewisse
									Regionen und Abläufe in den Vordergrund zu setzen.
								</p>
							</div>
							<div class="flex justify-between pb-32">
								<p
									style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"
									class="max-w-prose font-medium"
								>
									Die Umsetzung von ARthlete fand in der Umgebung von Unity statt, hierbei wurden
									die integrierten AR-Technologien ARFoundation und ARKit XR Plugins verwendet, als
									Hilfe dazu wurde ein sogenannter Helper: <a
										class="link underline"
										href="https://github.com/newyellow/arfoundation-helper">ARFoundation-Helper</a
									> verwendet, die groben AR-Funktionen in Unity bereitgestellt hat. Die Herausforderung
									bei der Umsetzung lag dabei ein Objekt einer Karte zuzuordnen dies wurde durch den
									Helper vereinfacht, die Logik dabei war das Image Tracking, hier wurde ein Bild als
									Stütze genommen, in diesem Fall unsere designten Karten, wobei die animierten Modelle
									ausgeführt werden. Im Anschluss wurde viel experimentiert, um die Relation von Karte
									und angezeigtem Model stimmig zu machen. Zzgl. spielte die Performance des Endgerätes
									eine große Rolle, welche am Anfang auch zu App-Crashes geführt hat, diese wurden mit
									viel Recherche und probieren erfolgreich beseitigt, sodass Endgeräte jeder möglichen
									Art in der Lage waren die AR Funktion zu nutzen.
								</p>
								<h1 class="text-4xl font-bold text-black">Umsetzung in Unity</h1>
							</div>
						</div>
						<div class="max-w-5xl pb-24">
							<h1 class="text-4xl font-bold text-black text-center pb-4">Showcase</h1>
							<p class="text-base text-white text-left">
								Um die Möglichkeit des Menüs, d.h. wechseln von Homescreen auf z.B. Account – Seite
								zu gewährleisten, wurden verschiedene Szenen in Unity entwickelt.
							</p>
							<div id="myCarousel" class="carouselShowcase carousel">
								<div class="carousel__slide">
									<img data-lazy-src="/portfolioImages/ARthlete/showcase (1).png" />
									<h1 class="text-center text-white">Szene: Profile</h1>
								</div>
								<div class="carousel__slide">
									<img data-lazy-src="/portfolioImages/ARthlete/showcase (2).png" />
									<h1 class="text-center text-white">Szene: Homescreen</h1>
								</div>
								<div class="carousel__slide">
									<img data-lazy-src="/portfolioImages/ARthlete/showcase (3).png" />
									<h1 class="text-center text-white">Szene: Login</h1>
								</div>
							</div>
						</div>
						<div class="max-w-5xl pb-24">
							<h1 class="text-4xl font-bold text-black text-center pb-4">Mockups</h1>
							<div id="myCarousel" class="carouselMockups carousel">
								<div class="carousel__slide">
									<img data-lazy-src="/portfolioImages/ARthlete/mockup (1).png" />
								</div>
								<div class="carousel__slide">
									<img data-lazy-src="/portfolioImages/ARthlete/mockup (2).png" />
								</div>
								<div class="carousel__slide">
									<img data-lazy-src="/portfolioImages/ARthlete/mockup (3).png" />
								</div>
							</div>
						</div>
						<div class="max-w-5xl pb-24">
							<h1 class="text-4xl font-bold text-black text-center pb-4">Karten Designs</h1>
							<div class="flex gap-2 justify-center w-100">
								<img class="!w-60 !h-auto" src="/portfolioImages/ARthlete/card (1).png" />
								<img class="!w-60 !h-auto" src="/portfolioImages/ARthlete/card (2).png" />
							</div>
						</div>
						<!-- <div class="max-w-5xl">
							<h1 class="text-4xl font-bold text-black text-center pb-4">Evaluation</h1>
						</div> -->
					</div>
				</div>
			</section>
			<!-- <section class="w-screen h-screen bg-black relative flex justify-center items-center">
				Test
			</section> -->
		</div>
	</main>
</PageTransitions>

<style>
	.carousel {
		color: #170724;

		--carousel-button-bg: #fff;
		--carousel-button-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
			0 1px 3px 0 rgb(0 0 0 / 12%);

		--carousel-button-svg-width: 20px;
		--carousel-button-svg-height: 20px;

		--carousel-button-svg-stroke-width: 2.5;
		overflow-x: unset;
	}

	:global(body.swal2-shown > [aria-hidden='true']) {
		transition: 0.1s filter;
		filter: blur(50px);
	}

	:global(.swal2-shown) {
		display: unset;
	}

	:global(.player-icon) {
		cursor: pointer;
	}

	.heroCustom {
		background-position: 50%;
		background-size: cover;
		display: grid;
		place-items: center;
		width: 100%;
	}
	.heroCustom > * {
		grid-column-start: 1;
	}
</style>
