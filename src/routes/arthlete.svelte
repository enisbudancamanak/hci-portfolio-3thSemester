<script>
	import PageTransitions from '../components/PageTransitions.svelte';
	import { onMount } from 'svelte';
	import 'material-icons/iconfont/material-icons.css';

	// import { count } from '../stores/stores';

	onMount(async () => {
		initPlayer();
	});

	function initPlayer() {
		let player = new VideoPlayer({
			target: document.getElementById('videoPlayer'),
			props: {
				poster: 'src/assets/portfolioImages/ARthlete/pic (1).png',
				source: 'src/assets/videos/ARthlete/ARthlete introduction.mp4',
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
			<section class="w-screen bg-[#FE9C00] relative">
				<div class="heroCustom min-h-screen relative">
					<div style="font-family: Poppins;" class="text-neutral-content">
						<div class="max-w-5xl flex justify-between w-screen">
							<div>
								<h1
									style="-webkit-text-stroke: 0.5px white; color: transparent;"
									class="text-6xl font-bold"
								>
									ARthlete - Prototyp
								</h1>
								<p class="mb-5">AR - App rund um Fitness</p>
							</div>
							<div>
								<p class="text-4xl text-black">Unity</p>
							</div>
						</div>
						<div id="videoPlayer" />
						<div style="font-family: Poppins;" class="text-neutral-content">
							<div class="max-w-5xl">
								<div>
									<h1
										style="-webkit-text-stroke: 0.5px white; color: transparent;
									"
										class="text-6xl font-bold"
									>
										ARthlete - Prototyp
									</h1>
									<p class="mb-5">AR - App rund um Fitness</p>
								</div>
								<div>
									<p class="text-4xl text-black">Unity</p>
								</div>
							</div>
							<div id="videoPlayer" />
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
