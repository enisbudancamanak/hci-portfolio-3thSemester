<script>
	import PageTransitions from '../components/PageTransitions.svelte';
	import { onMount } from 'svelte';
	import Vivus from 'vivus';

	onMount(async () => {});
</script>

<PageTransitions>
	<main>
		<div class="flex w-screen h-screen items-center pl-80 z-10 absolute">
			<div class="hero min-h-screen">
				<div class="flex-col hero-content justify-end w-full lg:flex-row-reverse ">
					<img
						src="images/imageFromMyself.jpg"
						class="max-w-xs rounded-full shadow-2xl"
						alt="imageFromMyself"
					/>
					<div>
						<h1 class="text-5xl font-bold">About Me</h1>
						<p class="py-6 max-w-prose">
							I am a full stack developer with focus on front-end, my current residence is in
							Bremen, Germany. I love programming of any kind and have been doing it for a good 4
							years of my 20 years. In these 4 years I have worked on many own but also in agency
							and student projects. Currently I'm a student at the University of Applied Sciences
							Bremen and I'm doing my Bachelor in Media Informatics in the 2nd semester and working
							as a mini-jobber at WebMen GmbH.
						</p>
					</div>
				</div>
			</div>
		</div>
	</main>
</PageTransitions>

<style>
</style>
