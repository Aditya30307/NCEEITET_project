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
    loader.load('models/carUpdated.glb', function (gltf) {
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




// working code that is the main logic

document.addEventListener('DOMContentLoaded', () => {
    const search = document.getElementsByClassName('search');
    const lower = document.getElementsByClassName("lower");
    const clear = document.getElementsByClassName("clear");
    const vehicle = document.querySelector(".selection");
    let card =0;
    const wheels = 2;
    const service = 3;
    const modification = 2;
    const cleaning = 3;
    let count = 0;
    let stationNames = [0,"PITSTOP", "AUTOHUB", "XYZ"];
    function removeElement() {
      while (lower[0].firstChild){
        lower[0].removeChild(lower[0].firstChild);
      }
    }
    
function contact(num, elem){
  const phone = document.createElement("div");
  phone.classList.add("specificInfo");
  phone.innerText =  `Contact - ${num}`;
  elem.append(phone);
}

function address(lane, elem){
  const location = document.createElement("div")
  location.classList.add("specificInfo");
  location.innerText = `Address - ${lane}`
  elem.append(location);
}

function book(elem){
  const booking = document.createElement("div");
  booking.classList.add("booking");
  booking.classList.add("specificInfo");
  booking.innerText = "Book now"
  elem.append(booking);

}
function stationName(elem, name){
  elem.innerText = name;
}

    clear[0].addEventListener("click", ()=>{
      count = 0;
      search[0].value = "";
    })
    search[0].addEventListener('keydown', (e) => {
          if (e.key ===  "Enter" && count == 0){
            let searchChanged = search[0].value.toLowerCase();
            if (searchChanged == "wheels") {
              count++;
              removeElement();
              for(let i = 0; i < wheels;i++) {
                card++;
                const result = document.createElement("div");
                result.classList.add("card");
                lower[0].append(result);
                for(let j = 1; j < 3; j++){
                  const info = document.createElement("div");
                  info.classList.add("info");
                  info.classList.add(`info${j}`)
                  result.append(info);
                  if (j == 1){
                    info.innerText = stationNames[card]
                  }
                  if (j == 2) {
                    contact(9796654527, info);
                    address("Samba",info)
                    book(info);
                  }
                }
              }
              card = 0;
            }
            else if (searchChanged == "service" || searchChanged == "servicing"){
              removeElement();
              for (let i = 0; i < service; i++) {
                card++
                const result = document.createElement("div");
                result.classList.add("card");
                lower[0].append(result);
                for(let j = 1; j < 3; j++){
                  const info = document.createElement("div");
                  info.classList.add("info");
                  info.classList.add(`info${j}`)
                  result.append(info);
                  if (j == 1){
                    info.innerText = stationNames[card]
                  }
                  if (j == 2) {
                    contact(9796654527, info);
                    address("Samba",info)
                    book(info);
                  }
                }
              }
              card =0;
            }
            else if (searchChanged == "cleaning"){
              removeElement();
              for (let i = 0; i < cleaning; i++) {
                card++;
                const result = document.createElement("div");
                result.classList.add("card");
                lower[0].append(result);
                for(let j = 1; j < 3; j++){
                  const info = document.createElement("div");
                  info.classList.add("info");
                  info.classList.add(`info${j}`)
                  result.append(info);
                  if (j == 1){
                    info.innerText = stationNames[card]
                  }
                  if (j == 2) {
                    contact(9796654527, info);
                    address("Samba",info)
                    book(info);
                  }
                }
              }
              card = 0;
            }
            else if (searchChanged == "modification"){
              removeElement();
              for (let i = 0; i < modification; i++) {
                card++
                const result = document.createElement("div");
                result.classList.add("card");
                // result.innerText = "modification";
                lower[0].append(result);
                for(let j = 1; j < 3; j++){
                  const info = document.createElement("div");
                  info.classList.add("info");
                  info.classList.add(`info${j}`)
                  result.append(info);
                  if (j == 1){
                    info.innerText = stationNames[card]
                  }
                  if (j == 2) {
                    contact(9796654527, info);
                    address("Samba",info)
                    book(info);
                  }
                }
                
              }
              card = 0
            }
            else{
              removeElement();
              const noResult = document.createElement("h3");
              noResult.classList.add("heading");
              noResult.innerText = `No search results for "${search[0].value}" try searching for something else`;
              lower[0].append(noResult);
            }
          }
          else if (e.key == "Backspace" ){
            // count = 0;
            // console.log(count);
            console.log(e);
            if(search[0].value.length == 0){
              count = 0;
              console.log(count);
            }
          }
    });
});
