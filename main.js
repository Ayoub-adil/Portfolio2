import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight, false );


var sectionElement = document.querySelector('.Scene');
sectionElement.appendChild(renderer.domElement);


let model;
const loader = new GLTFLoader();
loader.load( './assets/Trident.glb', function ( gltf ) {
	model = gltf.scene; // to animate
	// console.log(gltf.scene);
	gltf.scene.position.set(0, 0, 0);
	gltf.scene.scale.set(0.5, 0.5, 0.5);	
	scene.add( gltf.scene );
} );

const ambientLight = new THREE.AmbientLight(0xd6a32e, 1); 
scene.add(ambientLight);


camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
	//model.rotation.x += 0.01;
	model.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();