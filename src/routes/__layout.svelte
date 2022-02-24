<script>
	import '../app.css';
	import PageTransitions from '../components/PageTransitions.svelte';
	import Sidebar from '../components/Sidebar.svelte';
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';
	import 'material-icons/iconfont/material-icons.css';

	import { count } from '../stores/stores';

	let blob;
	let loading = true;

	onMount(async () => {
		// display galaxy background
		blob = (await import('../components/Blob.svelte')).default;
		loading = false;

		// hide loadingScreen when site is loaded
		// if (blob) {
		// 	document.getElementById('loadingScreen').style.display = 'none';
		// }

		// Follow Cursor section
		var prevTarget = null;
		window.addEventListener('mousemove', (e) => {
			coords.set({ x: e.clientX, y: e.clientY });

			var target = e.target;
			if (target !== prevTarget) {
				prevTarget = target;
				if (
					target.tagName.toLowerCase() == 'button' ||
					target.tagName.toLowerCase() == 'a' ||
					target.tagName.toLowerCase() == 'path' ||
					target.tagName.toLowerCase() == 'svg' ||
					target.tagName.toLowerCase() == 'h1' ||
					target.tagName.toLowerCase() == 'img'
				) {
					size.set(30);
				} else {
					size.set(10);
				}
			}
		});

		window.addEventListener('mouseup', (e) => {
			size.set(10);
		});

		// window.addEventListener('mousedown', (e) => {
		// 	size.set(30);
		// });
	});

	let coords = spring(
		{ x: 50, y: 50 },
		{
			stiffness: 0.07,
			damping: 0.3
		}
	);

	let size = spring(10);
</script>

{#if loading}
	<div
		id="loadingScreen"
		class="!fixed !z-50 w-screen h-screen flex justify-center bg-[#101016] items-center"
	>
		<div class="lds-ellipsis">
			<div />
			<div />
			<div />
			<div />
		</div>
	</div>
{:else}{/if}

<div
	class="mask mask-squircle !z-40 fixed top-0 left-0 mx-32 my-12 w-20 h-20 bg-[#6F4CE1]  hover:cursor-pointer"
>
	<a href="/" class="flex flex-col items-center justify-center h-full">
		<h1 class="text-4xl">EB</h1>
		<p>Portfolio</p>
	</a>
</div>

<div
	class="mask mask-squircle !z-40 fixed bottom-0 right-0 mx-32 my-12 w-12 h-12 bg-[#6F4CE1]  hover:cursor-pointer"
>
	<a href="/contact" class="flex flex-col items-center justify-center h-full">
		<span class="material-icons-outlined"> email </span>
	</a>
</div>

<Sidebar />
<div class="w-100 h-100 bg-neutral relative">
	<div class="absolute top-0 left-0 !outline-none !border-none z-0">
		<svelte:component this={blob} />
	</div>
	<PageTransitions>
		<slot />
	</PageTransitions>
</div>

<div class="!absolute !h-screen !w-screen pointer-events-none">
	<svg id="followCursor" class="pointer-events-auto !z-50">
		<circle cx={$coords.x} cy={$coords.y} r={$size} />
	</svg>
</div>

<style>
	svg {
		width: 100%;
		height: 100%;
	}
	circle {
		stroke: #fff;
		fill: transparent;
	}

	/* Spinner */
	.lds-ellipsis {
		display: inline-block;
		position: relative;
		width: 80px;
		height: 80px;
	}
	.lds-ellipsis div {
		position: absolute;
		top: 33px;
		width: 13px;
		height: 13px;
		border-radius: 50%;
		background: #fff;
		animation-timing-function: cubic-bezier(0, 1, 1, 0);
	}
	.lds-ellipsis div:nth-child(1) {
		left: 8px;
		animation: lds-ellipsis1 0.6s infinite;
	}
	.lds-ellipsis div:nth-child(2) {
		left: 8px;
		animation: lds-ellipsis2 0.6s infinite;
	}
	.lds-ellipsis div:nth-child(3) {
		left: 32px;
		animation: lds-ellipsis2 0.6s infinite;
	}
	.lds-ellipsis div:nth-child(4) {
		left: 56px;
		animation: lds-ellipsis3 0.6s infinite;
	}
	@keyframes lds-ellipsis1 {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
	}
	@keyframes lds-ellipsis3 {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(0);
		}
	}
	@keyframes lds-ellipsis2 {
		0% {
			transform: translate(0, 0);
		}
		100% {
			transform: translate(24px, 0);
		}
	}
</style>
