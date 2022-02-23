<script>
	import { onMount } from 'svelte';
	import PageTransitions from '../components/PageTransitions.svelte';

	let SkillsGlobe;
	onMount(async () => {
		SkillsGlobe = (await import('../components/SkillsGlobe.svelte')).default;
	});
</script>

<PageTransitions>
	<main>
		<div class="flex w-screen h-screen items-center px-80 z-10 absolute">
			<h1
				id="mouseholdInfo"
				style="font-family: Poppins;"
				class="absolute right-0 bottom-0 pb-8 pr-8 text-2xl"
			>
				HOLD MOUSE AND MOVE
			</h1>
			<div class="">
				<div class="flex-col hero-content lg:flex-row-reverse">
					<div class="absolute top-0 left-20 !outline-none !border-none !-z-30">
						<svelte:component this={SkillsGlobe} />
					</div>

					<div>
						<h1 class="text-5xl font-bold">My Skills</h1>
						<p class="py-6 max-w-prose">
							The main focus of my activities, are in the front-end. My love for code started in
							high school in 2017 with Java. Since then, there have been more and more opportunities
							and increasing interest in more projects related to new programming languages. I am
							currently working mainly on my own projects, but also as a mini-jobber in an agency,
							as well as projects in college (as a media computer scientist).
						</p>
					</div>
				</div>
			</div>
		</div>
	</main>
</PageTransitions>

<style>
	@keyframes flickerAnimation {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@-o-keyframes flickerAnimation {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@-moz-keyframes flickerAnimation {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@-webkit-keyframes flickerAnimation {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	#mouseholdInfo {
		-webkit-animation: flickerAnimation 2s infinite;
		-moz-animation: flickerAnimation 2s infinite;
		-o-animation: flickerAnimation 2s infinite;
		animation: flickerAnimation 2s infinite;
	}
</style>
