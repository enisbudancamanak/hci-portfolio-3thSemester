<script>
	import { onMount } from 'svelte';
	// import { count } from '../stores/stores';

	// let scrollPosition = 0;
	let elems;
	function setActiveMenu(element) {
		[].forEach.call(elems, function (el) {
			el.classList.remove('active');
		});

		document.querySelector('#' + element.target.id).classList.add('active');
	}

	function getCurrentElement() {
		console.log(window.location.href.replace);
		// TODO: GET CURRENT PATH AND SET MENUPOINT
		document.querySelector('#' + window.location.href);
	}

	onMount(async () => {
		elems = document.querySelectorAll('.menuPoint a');

		setActiveMenu();

		// const pages = ['index', 'about', 'skills', 'works', 'contact'];
		// window.addEventListener('wheel', function (e) {
		// 	// if ($count != scrollPosition) {
		// 	// 	scrollPosition = $count;
		// 	// }
		// 	if (scrollPosition != 3) {
		// 		if (scrollPosition < pages.length && scrollPosition > 0)
		// 			if (e.deltaY < 0) {
		// 				scrollPosition -= 1;
		// 			} else if (e.deltaY > 0) {
		// 				scrollPosition += 1;
		// 			}
		// 		if (scrollPosition == 0) {
		// 			if (e.deltaY > 0) {
		// 				scrollPosition += 1;
		// 			}
		// 		} else if (scrollPosition == 4) {
		// 			if (e.deltaY < 0) {
		// 				scrollPosition -= 1;
		// 			}
		// 		}
		// 		// console.log(pages.at($count));
		// 		var nextPage = pages.at(scrollPosition);
		// 		document.getElementById(nextPage).click();
		// 	}
		// });
	});
</script>

<div class="hidden h-screen items-center absolute z-20 px-20 sm:flex">
	<ul class="menu p-4 rounded-box text-primary font-bold">
		<li class="hover:text-white menuPoint" on:click={(element) => setActiveMenu(element)}>
			<a href="/" id="index">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="inline-block w-5 h-5 mr-2 stroke-current"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
					/>
				</svg>
				Home
			</a>
		</li>
		<li class="hover:text-white menuPoint">
			<a href="/about" id="about" on:click={(element) => setActiveMenu(element)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="inline-block w-5 h-5 mr-2 stroke-current"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
					/>
				</svg>
				About Me
			</a>
		</li>
		<li class="hover:text-white menuPoint" on:click={(element) => setActiveMenu(element)}>
			<a href="/skills" id="skills">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="inline-block w-5 h-5 mr-2 stroke-current"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
					/>
				</svg>
				Skills
			</a>
		</li>
		<li class="hover:text-white menuPoint" on:click={(element) => setActiveMenu(element)}>
			<a href="/works" id="works">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="inline-block w-5 h-5 mr-2 stroke-current"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
					/>
				</svg>
				Works
			</a>
		</li>
		<li class="hover:text-white menuPoint" on:click={(element) => setActiveMenu(element)}>
			<a href="/contact" id="contact">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="inline-block w-5 h-5 mr-2 stroke-current"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
					/>
				</svg>
				Contact
			</a>
		</li>
	</ul>
</div>

<style>
	.menu {
		gap: 0.5em;
	}
</style>
