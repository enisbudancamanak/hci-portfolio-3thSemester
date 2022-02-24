<script>
	import PageTransitions from '../components/PageTransitions.svelte';
	import { onMount } from 'svelte';
	import 'material-icons/iconfont/material-icons.css';
	import { Carousel } from '@fancyapps/ui';

	// import { count } from '../stores/stores';

	onMount(async () => {
		const myCarouselMockups = new Carousel(document.querySelector('.carouselMockups'), {
			// Options
		});
		const myCarouseShowcase = new Carousel(document.querySelector('.carouselShowcase'), {
			// Options
		});
		setTimeout(() => initPlayer(), 10);
	});

	function initPlayer() {
		let player = new VideoPlayer({
			target: document.getElementById('videoPlayer'),
			props: {
				poster: '/portfolioImages/ARthlete/pic (1).png',
				source: '/videos/ARthlete/ARthlete introduction.mp4',
				color: '#6F4CE1'
			}
		});
	}
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://unpkg.com/svelte-video-player@latest/dist/svelte-video-player.css"
	/>
	<script src="https://unpkg.com/svelte-video-player@latest/dist/svelte-video-player.js"></script>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.css" />
</svelte:head>

<PageTransitions>
	<main>
		<!-- <div
			class="flex w-screen h-screen  px-80 z-10 absolute overflow-x-hidden overflow-scroll overflow-y-visible"
		/> -->

		<div
			class="w-screen h-screen overflow-x-hidden overflow-scroll overflow-y-visible absolute z-40"
		>
			<a class="fixed top-0 right-0 pt-10 pr-20 z-50 text-5xl" href="/works"
				><span class="material-icons-outlined">close</span></a
			>
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
							<div class="flex justify-between pb-32">
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
						</div>
						<div class="max-w-5xl pb-24">
							<h1 class="text-4xl font-bold text-white text-center pb-4">Showcase</h1>
							<div id="myCarousel" class="carouselShowcase carousel">
								<div class="carousel__slide">
									<img data-lazy-src="/portfolioImages/ARthlete/showcase (1).png" />
								</div>
								<div class="carousel__slide">
									<img data-lazy-src="/portfolioImages/ARthlete/showcase (2).png" />
								</div>
								<div class="carousel__slide">
									<img data-lazy-src="/portfolioImages/ARthlete/showcase (3).png" />
								</div>
							</div>
						</div>

						<div class="max-w-5xl ">
							<h1 class="text-4xl font-bold text-white text-center pb-4">Mockups</h1>
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
	}

	:global(.player-icon:hover) {
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
