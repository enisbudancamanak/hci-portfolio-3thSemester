<script>
	import PageTransitions from '../components/PageTransitions.svelte';
	import { onMount } from 'svelte';
	import 'material-icons/iconfont/material-icons.css';
	import { Fancybox } from '@fancyapps/ui';

	onMount(async () => {});
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.css" />
</svelte:head>

<PageTransitions>
	<main>
		<div
			class="flex w-100 h-screen items-center justify-center pl-80 z-10 absolute overflow-y-hidden"
		>
			<div class="flex-col hero-content lg:flex-row gap-8">
				<div class="grid image-grid">
					<div class="grid-block">
						<div class="tile">
							<a class="tile-link" href="/arthlete">
								<img class="tile-img tile-img6" src="/portfolioImages/ARthlete/pic (1).png" />
							</a>
						</div>
					</div>

					<div class="grid-block">
						<div class="tile">
							<a
								class="tile-link"
								data-fancybox="slimehero"
								data-src="/portfolioImages/slimeHero/pic (1).png"
								href=""
								data-caption="Semesterproject: 2nd semester (2021) <a class='link link-primary' href='https://slimehero.enisbudancamanak.works/' target='_blank'>to website</a>."
							>
								<img class="tile-img tile-img1" src="/portfolioImages/slimeHero/pic (1).png" />
							</a>
							<a
								data-fancybox="slimehero"
								data-src="/portfolioImages/slimeHero/pic (2).png"
								data-caption="Semesterproject: 2nd semester (2021) <a class='link link-primary' href='https://slimehero.enisbudancamanak.works/' target='_blank'>to website</a>."
							>
								<img src="/portfolioImages/slimeHero/pic (2).png" hidden />
							</a>
							<a
								data-fancybox="slimehero"
								data-src="/portfolioImages/slimeHero/pic (3).png"
								data-caption="Semesterproject: 2nd semester (2021) <a class='link link-primary' href='https://slimehero.enisbudancamanak.works/' target='_blank'>to website</a>."
							>
								<img src="/portfolioImages/slimeHero/pic (3).png" hidden />
							</a>
							<a
								data-fancybox="slimehero"
								data-src="/portfolioImages/slimeHero/pic (4).png"
								data-caption="Semesterproject: 2nd semester (2021) <a class='link link-primary' href='https://slimehero.enisbudancamanak.works/' target='_blank'>to website</a>."
							>
								<img src="/portfolioImages/slimeHero/pic (4).png" hidden />
							</a>
							<a
								data-fancybox="slimehero"
								data-src="/portfolioImages/slimeHero/pic (5).png"
								data-caption="Semesterproject: 2nd semester (2021) <a class='link link-primary' href='https://slimehero.enisbudancamanak.works/' target='_blank'>to website</a>."
							>
								<img src="/portfolioImages/slimeHero/pic (5).png" hidden />
							</a>
							<a
								data-fancybox="slimehero"
								data-src="/portfolioImages/slimeHero/pic (6).png"
								data-caption="Semesterproject: 2nd semester (2021) <a class='link link-primary' href='https://slimehero.enisbudancamanak.works/' target='_blank'>to website</a>."
							>
								<img src="/portfolioImages/slimeHero/pic (6).png" hidden />
							</a>
							<a
								data-fancybox="slimehero"
								data-src="/portfolioImages/slimeHero/pic (7).png"
								data-caption="Semesterproject: 2nd semester (2021) <a class='link link-primary' href='https://slimehero.enisbudancamanak.works/' target='_blank'>to website</a>."
							>
								<img src="/portfolioImages/slimeHero/pic (7).png" hidden />
							</a>
						</div>
					</div>

					<div class="grid-block">
						<div class="tile">
							<a
								class="tile-link"
								data-fancybox="interactiveGraphics"
								data-src="/portfolioImages/interactiveGraphics/pic (1).png"
								data-caption="Semesterproject: 2nd semester (2021) <a class='link link-primary' href='https://enisbudancamanak.github.io/datengrafik_dashboard/' target='_blank'>to website</a>."
								href=""
							>
								<img
									src="/portfolioImages/interactiveGraphics/pic (1).png"
									class="tile-img tile-img2"
								/>
							</a>
							<a
								data-fancybox="interactiveGraphics"
								data-src="/portfolioImages/interactiveGraphics/pic (2).png"
								data-caption="Semesterproject: 2nd semester (2021) <a class='link link-primary' href='https://enisbudancamanak.github.io/datengrafik_dashboard/' target='_blank'>to website</a>."
							>
								<img src="/portfolioImages/interactiveGraphics/pic (2).png" hidden />
							</a>
							<a
								data-fancybox="interactiveGraphics"
								data-src="/portfolioImages/interactiveGraphics/pic (3).png"
								data-caption="Semesterproject: 2nd semester (2021) <a class='link link-primary' href='https://enisbudancamanak.github.io/datengrafik_dashboard/' target='_blank'>to website</a>."
							>
								<img src="/portfolioImages/interactiveGraphics/pic (3).png" hidden />
							</a>
						</div>
					</div>

					<div class="grid-block">
						<div class="tile">
							<a
								class="tile-link"
								data-fancybox="drinkhub"
								data-src="/portfolioImages/DrinkHUB/pic (1).png"
								href=""
								data-caption="Semesterproject: 2nd semester (2021)"
							>
								<img src="/portfolioImages/DrinkHUB/pic (1).png" class="tile-img tile-img4" />
							</a>
							<a
								data-fancybox="drinkhub"
								data-src="/portfolioImages/DrinkHUB/pic (2).png"
								data-caption="Semesterproject: 2nd semester (2021)"
							>
								<img src="/portfolioImages/DrinkHUB/pic (2).png" hidden />
							</a>
							<a
								data-fancybox="drinkhub"
								data-src="/portfolioImages/DrinkHUB/pic (3).png"
								data-caption="Semesterproject: 2nd semester (2021)"
							>
								<img src="/portfolioImages/DrinkHUB/pic (3).png" hidden />
							</a>
							<a
								data-fancybox="drinkhub"
								data-src="/portfolioImages/DrinkHUB/pic (4).png"
								data-caption="Semesterproject: 2nd semester (2021)"
							>
								<img src="/portfolioImages/DrinkHUB/pic (4).png" hidden />
							</a>
						</div>
					</div>

					<div class="grid-block">
						<div class="tile">
							<a
								class="tile-link"
								data-fancybox="sinofsloth"
								data-src="/portfolioImages/sinOfSloth/pic1.png"
								href=""
								data-caption="Semesterproject: 1st semester (2020/2021) <a class='link link-primary' href='https://enisbudancamanak.github.io/SinOfSlothWebsite/' target='_blank'>to website</a>."
							>
								<img src="/portfolioImages/sinOfSloth/pic1.png" class="tile-img tile-img3" />
							</a>
							<a
								data-fancybox="sinofsloth"
								data-src="/portfolioImages/sinOfSloth/pic2.png"
								data-caption="Semesterproject: 1st semester (2020/2021) <a class='link link-primary' href='https://enisbudancamanak.github.io/SinOfSlothWebsite/' target='_blank'>to website</a>."
							>
								<img src="/portfolioImages/sinOfSloth/pic2.png" hidden />
							</a>
						</div>
					</div>

					<div class="grid-block">
						<div class="tile">
							<a
								class="tile-link"
								data-fancybox="clouthub"
								data-src="/portfolioImages/cloutHUBDesktop/pic (1).png"
								href=""
								data-caption="Project at school: Europaschule Schulzentrum SII Utbremen (2019)"
							>
								<img
									src="/portfolioImages/cloutHUBDesktop/pic (1).png"
									class="tile-img tile-img4"
								/>
							</a>
							<a
								data-fancybox="clouthub"
								data-src="/portfolioImages/cloutHUBDesktop/pic (2).png"
								data-caption="Project at school: Europaschule Schulzentrum SII Utbremen (2019)"
							>
								<img src="/portfolioImages/cloutHUBDesktop/pic (2).png" hidden />
							</a>
							<a
								data-fancybox="clouthub"
								data-src="/portfolioImages/cloutHUBDesktop/pic (3).png"
								data-caption="Project at school: Europaschule Schulzentrum SII Utbremen (2019)"
							>
								<img src="/portfolioImages/cloutHUBDesktop/pic (3).png" hidden />
							</a>
							<a
								data-fancybox="clouthub"
								data-src="/portfolioImages/cloutHUBDesktop/pic (4).png"
								data-caption="Project at school: Europaschule Schulzentrum SII Utbremen (2019)"
							>
								<img src="/portfolioImages/cloutHUBDesktop/pic (4).png" hidden />
							</a>
						</div>
					</div>

					<div class="grid-block">
						<div class="tile">
							<a
								class="tile-link"
								data-fancybox="cloutweb"
								data-src="/portfolioImages/cloutWEB/pic (1).png"
								href=""
								data-caption="Project at school: Europaschule Schulzentrum SII Utbremen (2020)  <a class='link link-primary' href='https://www.cloutweb.tk/home' target='_blank'>to website</a>."
							>
								<img src="/portfolioImages/cloutWEB/pic (1).png" class="tile-img tile-img5" />
							</a>
							<a
								data-fancybox="cloutweb"
								data-src="/portfolioImages/cloutWEB/pic (2).png"
								data-caption="Project at school: Europaschule Schulzentrum SII Utbremen (2020)  <a class='link link-primary' href='https://www.cloutweb.tk/home' target='_blank'>to website</a>."
							>
								<img src="/portfolioImages/cloutWEB/pic (2).png" hidden />
							</a>
							<a
								data-fancybox="cloutweb"
								data-src="/portfolioImages/cloutWEB/pic (3).png"
								data-caption="Project at school: Europaschule Schulzentrum SII Utbremen (2020)  <a class='link link-primary' href='https://www.cloutweb.tk/home' target='_blank'>to website</a>."
							>
								<img src="/portfolioImages/cloutWEB/pic (3).png" hidden />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</PageTransitions>

<style>
	:global(img) {
		opacity: 0.9;
		transition: all 0.2s;
	}
	:global(img):hover {
		opacity: 1;
		transform: scale(1.04);
	}

	.grid {
		width: 100%;
		max-width: 80%;

		display: flex;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		/* padding-top: 11em; */
	}

	.grid-block {
		flex: 50%;
		padding: 0.5rem;
	}

	.image-grid {
		-webkit-transform: rotateX(deg) rotateZ(30deg);
		transform: rotateX(45deg) rotateZ(30deg);
		-webkit-perspective: 1000px;
		perspective: 1000px;

		width: 60% !important;
	}

	.image-grid .tile-link:hover .tile-img {
		top: -0.5rem;
		left: -0.5rem;
	}

	.image-grid .tile-img {
		position: relative;
		top: 0;
		left: 0;
		-webkit-transition-property: opacity, top, left, box-shadow;
		transition-property: opacity, top, left, box-shadow;
	}

	.tile-link {
		display: block;
	}

	.tile-link:hover .tile-img {
		opacity: 1;
	}

	.tile-link:hover .tile-img-link {
		display: block;
	}

	.tile-link:hover .tile-img-link:hover .tile-img {
		opacity: 0.5;
	}

	.tile-img {
		display: block;
		width: 100%;
		height: auto;
		opacity: 1;
		-webkit-box-shadow: 5px 2px 50px -7px black;
		box-shadow: 5px 2px 50px -7px black;
		border-radius: 10px;
		-webkit-transition-property: opacity;
		transition-property: opacity;
		-webkit-transition-duration: 0.125s;
		transition-duration: 0.125s;
		-webkit-transition-timing-function: ease-in;
		transition-timing-function: ease-in;
	}
	.tile-link:hover .tile-img1 {
		box-shadow: 5px 5px rgba(244, 170, 200, 0.4), 10px 10px rgba(244, 170, 200, 0.3),
			15px 15px rgba(244, 170, 200, 0.2), 20px 20px rgba(244, 170, 200, 0.1),
			25px 25px rgba(244, 170, 200, 0.05);
	}

	.tile-link:hover .tile-img2 {
		box-shadow: 5px 5px rgba(214, 221, 244, 0.4), 10px 10px rgba(214, 221, 244, 0.3),
			15px 15px rgba(214, 221, 244, 0.2), 20px 20px rgba(214, 221, 244, 0.1),
			25px 25px rgba(214, 221, 244, 0.05);
	}

	.tile-link:hover .tile-img3 {
		box-shadow: 5px 5px rgba(188, 97, 129, 0.4), 10px 10px rgba(188, 97, 129, 0.3),
			15px 15px rgba(188, 97, 129, 0.2), 20px 20px rgba(188, 97, 129, 0.1),
			25px 25px rgba(188, 97, 129, 0.05);
	}

	.tile-link:hover .tile-img4 {
		box-shadow: 5px 5px rgba(214, 221, 244, 0.4), 10px 10px rgba(214, 221, 244, 0.3),
			15px 15px rgba(214, 221, 244, 0.2), 20px 20px rgba(214, 221, 244, 0.1),
			25px 25px rgba(214, 221, 244, 0.05);
	}

	.tile-link:hover .tile-img5 {
		box-shadow: 5px 5px rgba(203, 215, 193, 0.4), 10px 10px rgba(203, 215, 193, 0.3),
			15px 15px rgba(203, 215, 193, 0.2), 20px 20px rgba(203, 215, 193, 0.1),
			25px 25px rgba(203, 215, 193, 0.05);
	}

	.tile-link:hover .tile-img5 {
		box-shadow: 5px 5px rgba(244, 170, 200, 0.4), 10px 10px rgba(244, 170, 200, 0.3),
			15px 15px rgba(244, 170, 200, 0.2), 20px 20px rgba(244, 170, 200, 0.1),
			25px 25px rgba(244, 170, 200, 0.05);
	}

	.tile-link:hover .tile-img6 {
		box-shadow: 5px 5px rgba(254, 169, 0, 0.4), 10px 10px rgba(254, 169, 0, 0.3),
			15px 15px rgba(254, 169, 0, 0.2), 20px 20px rgba(254, 169, 0, 0.1),
			25px 25px rgba(254, 169, 0, 0.05);
	}
</style>
