<script>
	import PageTransitions from '../components/PageTransitions.svelte';
	import { onMount } from 'svelte';

	// import { count } from '../stores/stores';

	onMount(async () => {});
</script>

<PageTransitions>
	<main>
		<div class="flex w-screen h-screen items-center px-80 z-10 absolute">
			<div class="hero min-h-screen">
				<div class="flex-col hero-content lg:flex-row-reverse">
					<div class="card flex-shrink-0 shadow-2xl bg-gray-600 bg-opacity-30">
						<div class="contactForm">
							<div style="display: flex; gap: 0.5em; justify-content: center;">
								<input type="text" placeholder="Name" name="" id="" />
								<input type="text" placeholder="Subject" />
							</div>
							<input type="text" placeholder="E-Mail" />
							<input type="text" name="" id="" placeholder="Message" style="height: 7em;" />
						</div>
						<button id="contact-button">Send message!</button>
					</div>
					<div class="text-center lg:text-left">
						<h1 class="text-5xl font-bold">Contact Me!</h1>
						<p class="py-6 max-w-prose">
							Do you have any questions or even a request? Feel free to use the form (just a demo
							version)
						</p>
					</div>
				</div>
			</div>
		</div>
	</main>
</PageTransitions>

<style>
	.contactForm {
		width: 35em;
		display: flex;
		flex-direction: column;
		gap: 1em;
		padding: 2em;
	}

	.contactForm input {
		width: 100%;
		height: 3em;
		text-align: left;
		background-color: #6f4ce163;
		border: none;
		padding: 10px;
		color: white;
		font-size: 1em;
		border-radius: 10px;
		-webkit-box-shadow: 5px 2px 50px -7px black;
		box-shadow: 5px 2px 50px -7px black;
	}

	.contactForm input:focus {
		outline: none;
	}

	.contactForm input::placeholder {
		color: rgb(199, 199, 199);
	}

	a:link {
		color: white;
	}

	#contact-button {
		appearance: none;
		outline: 0;
		background-color: transparent;
		border: 2px solid #6f4ce1;
		padding: 10px 15px;
		color: white;
		border-radius: 0px 0px 20px 20px;
		width: 100%;
		cursor: pointer;
		font-size: 18px;
		transition-duration: 0.25s;
		float: right;
	}

	#contact-button:hover {
		color: #412f4e;
		border: 2px solid white;
		background-color: white;
	}
</style>
