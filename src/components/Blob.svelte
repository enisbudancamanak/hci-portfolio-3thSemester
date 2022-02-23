<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	import {
		Canvas,
		Scene,
		PerspectiveCamera,
		DirectionalLight,
		//BasicShadowMap,
		//PCFShadowMap,
		PCFSoftShadowMap,
		//VSMShadowMap,
		AmbientLight,
		BoxBufferGeometry,
		PlaneBufferGeometry,
		Mesh,
		MeshStandardMaterial,
		WebGLRenderer,
		OrbitControls,
		DoubleSide,
		MathUtils,
		Vector3,
		BufferGeometry,
		BufferAttribute,
		TextureLoader,
		PointsMaterial,
		Points,
		Clock
	} from 'svelthree';

	import { GLTFLoader } from 'svelthree-three';
	const loader = new GLTFLoader();
	const clock = new Clock();

	let scene;
	let canvas;
	let particlesMesh;

	onMount(() => {
		createParticles();

		if (particlesMesh) startUpdate();

		// Resize Canvas
		window.addEventListener('resize', function () {
			canvas.doResize(window.innerWidth, window.innerHeight);
		});
	});

	function createParticles() {
		scene = scene.getScene();

		const textureLoader = new TextureLoader();
		const circleStarTexture = textureLoader.load('src/assets/textures/star.png');

		//Particles
		const particlesGeometry = new BufferGeometry();
		const particlesCount = 10000;
		const posArray = new Float32Array(particlesCount * 3);

		for (let i = 0; i < particlesCount * 3; i++) {
			posArray[i] = (Math.random() - 0.5) * (Math.random() * 5);
		}

		particlesGeometry.setAttribute('position', new BufferAttribute(posArray, 3));

		const materialParticles = new PointsMaterial({
			size: 0.005,
			map: circleStarTexture,
			transparent: true
		});

		particlesMesh = new Points(particlesGeometry, materialParticles);
		scene.add(particlesMesh);
	}

	let mouseX = 0;
	let mouseY = 0;
	let mouseXHalf = 0;
	let mouseYHalf = 0;
	const windowHalfX = window.innerWidth / 2;
	const windowsHalfY = window.innerHeight / 2;
	document.addEventListener('mousemove', (event) => {
		mouseXHalf = event.clientX - windowHalfX;
		mouseYHalf = event.clientY - windowsHalfY;
		mouseX = event.clientX;
		mouseY = event.clientY;
	});

	function startUpdate() {
		requestAnimationFrame(update);
	}

	function update() {
		const elapsedTime = clock.getElapsedTime();
		particlesMesh.rotation.y = -0.008 * elapsedTime;

		// if (mouseX > 0) {
		// 	particlesMesh.rotation.y = -mouseX * (elapsedTime * 0.000008);
		// 	particlesMesh.rotation.x = -mouseY * (elapsedTime * 0.000008);
		// }

		requestAnimationFrame(update);
	}
</script>

<Canvas let:sti bind:this={canvas} w={window.innerWidth} h={window.innerHeight}>
	<Scene {sti} let:scene bind:this={scene} id="scene1" props={{ background: 0x101016 }}>
		<PerspectiveCamera {scene} id="cam1" pos={[0, 0, -2]} lookAt={[0, 0, 0]} />
		<AmbientLight {scene} intensity={0.25} />
		<DirectionalLight {scene} pos={[1, 2, 1]} intensity={0.8} shadowMapSize={512 * 8} castShadow />

		<!-- <OrbitControls {scene} /> -->
	</Scene>

	<WebGLRenderer
		{sti}
		sceneId="scene1"
		camId="cam1"
		config={{ antialias: true, alpha: true }}
		enableShadowMap
		shadowMapType={PCFSoftShadowMap}
	/>
</Canvas>
