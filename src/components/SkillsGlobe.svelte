<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import * as THREE from 'three';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import TextSprite from '@seregpie/three.text-sprite';

	// Load Chance

	//Loading
	onMount(async () => {
		// Canvas
		const canvas = document.querySelector('canvas.skillsCanvas');

		// Scene
		const scene = new THREE.Scene();

		/**
		 * Sizes
		 */
		const sizes = {
			width: window.innerWidth,
			height: window.innerHeight
		};

		/**
		 * Camera
		 */
		// Base camera
		const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
		camera.position.x = -0.5;
		camera.position.y = 0;
		camera.position.z = 20;
		scene.add(camera);

		/**
		 * Renderer
		 */
		const renderer = new THREE.WebGLRenderer({
			canvas: canvas,
			alpha: true
		});
		renderer.setSize(sizes.width, sizes.height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

		// Objects
		// CREATE TEXTS
		var textsArray = [];
		var textStringArray = [
			'Ruby On Rails',
			'Python',
			'Flutter',
			'Spring Boot',
			'PHP (Laravel)',
			'Phaser 3',
			'THREE.JS',
			'Java',
			'Angular',
			'Android',
			'Javascript',
			'SQL',
			'Wordpress',
			'HTML / CSS',
			'MatLab'
		];

		for (let i = 0; i < textStringArray.length; i++) {
			textsArray[i] = createText(textStringArray[i]);
			textsArray[i].position.set(
				chance.floating({ min: 0, max: 25 }),
				chance.floating({ min: -12.5, max: 12.5 }),
				chance.floating({ min: -30, max: 0 })
			);
			scene.add(textsArray[i]);
		}

		// Lights
		const aboveLight = new THREE.PointLight(0x54346d, 2);
		aboveLight.position.set(-2, 4, 1);
		aboveLight.intensity = 1.5;
		scene.add(aboveLight);

		const leftLight = new THREE.PointLight(0x8734c7, 2);
		leftLight.position.set(-12, -14, 1);
		leftLight.intensity = 2;
		scene.add(leftLight);

		const rightLight = new THREE.PointLight(0x760f8b, 2);
		rightLight.position.set(9.1, -3, -8.6);
		rightLight.intensity = 5;
		scene.add(rightLight);

		window.addEventListener('resize', () => {
			// Update sizes
			sizes.width = window.innerWidth;
			sizes.height = window.innerHeight;

			// Update camera
			camera.aspect = sizes.width / sizes.height;
			camera.updateProjectionMatrix();

			// Update renderer
			renderer.setSize(sizes.width, sizes.height);
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		});

		// Controls
		const controls = new OrbitControls(camera, canvas);
		controls.enableDamping = true;
		controls.enableZoom = false;

		// controls.dispose()
		// controls.update()
		// function onDocumentMouseMove(event) {
		//   // Manually fire the event in OrbitControls
		//   controls.handleMouseMoveRotate(event)
		// }
		// document.addEventListener('mousemove', onDocumentMouseMove, false)

		/**
		 * Animate
		 */

		//Move On Mouse Move
		// let mouseX = 0
		// let mouseY = 0
		// let mouseXHalf = 0
		// let mouseYHalf = 0
		// let targetX = 0
		// let targetY = 0
		// const windowHalfX = window.innerWidth / 2
		// const windowsHalfY = window.innerHeight / 2
		// document.addEventListener('mousemove', (event) => {
		//   mouseXHalf = event.clientX - windowHalfX
		//   mouseYHalf = event.clientY - windowsHalfY
		//   mouseX = event.clientX
		//   mouseY = event.clientY
		// })

		// const clock = new THREE.Clock()

		// var target = new THREE.Vector3()

		const tick = () => {
			// targetX = mouseXHalf * 0.001
			// targetY = mouseYHalf * 0.001

			// const elapsedTime = clock.getElapsedTime()

			// Render
			renderer.render(scene, camera);

			// Call tick again on the next frame
			window.requestAnimationFrame(tick);
		};

		tick();
	});

	function createText(string) {
		let text = new TextSprite({
			alignment: 'left',
			color: chance.pickone(['#C0CCFB', '#FFC8E5', '#D8C0CC', '#FFC7FF', '#FFE3E7']),
			fontFamily: 'Poppins',
			fontSize: 1.3,
			fontStyle: 'bold',
			text: [string].join('\n')
		});

		return text;
	}
</script>

<div><canvas class="skillsCanvas" /></div>
