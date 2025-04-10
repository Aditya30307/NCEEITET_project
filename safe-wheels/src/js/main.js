import * as THREE from 'three';
import { GLTFLoader } from 'three-stdlib';
import { OrbitControls } from 'three-stdlib';

let scene, camera, renderer, model, controls;

init();

function init() {
    // Create scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);  // Set background color to white
    console.log('Scene created:', scene);

    // Set up camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(15, 8, 20);  // Adjusted camera position to be more in front of the model
    camera.lookAt(new THREE.Vector3(0, 0, 0));  // Looking at the center of the model
    console.log('Camera created:', camera);

    // Set up renderer
    renderer = new THREE.WebGLRenderer();
    ; // Set a fixed size for the 3D model container
    renderer.setClearColor(0xffffff, 1); // Set the clear color (background) to white
    document.getElementById('3d-model-container').appendChild(renderer.domElement);
    console.log('Renderer attached to DOM.');

    // Add ambient light and a directional light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); // Ambient light
    scene.add(ambientLight);
    console.log('Ambient light added.');

    const directionalLight = new THREE.DirectionalLight(0xffffff, 5); // Directional light
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);
    console.log('Directional light added.');

    // Load 3D model
    const loader = new GLTFLoader();
    loader.load('/public/models/carUpdated.glb', function (gltf) {
        console.log('Model loaded successfully:', gltf);  // Log model data
        model = gltf.scene;
        model.scale.set(1.2, 1.2, 1.2); // Scale the model to its actual size
        model.position.set(0, -0.5, 0); // Center the model
        scene.add(model);
    }, undefined, function (error) {
        console.error('Error loading model:', error);  // Log any error loading the model
    });

    // Set up OrbitControls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Enable smooth transitions
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;
    console.log('OrbitControls initialized.');

    // Start animation loop
    animate();
}

function animate() {
    requestAnimationFrame(animate);
  
    if (model) {
      // Rotate around model's own center
      model.rotation.y += 0.01;
    }
  
    controls.update();
    renderer.render(scene, camera);
  }
  

// Resize the renderer on window resize
window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    console.log('Window resized. Renderer updated.');
});
