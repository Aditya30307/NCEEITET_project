// app.js
import { init } from './main.js';  // Import init() from main.js
import { logic } from './script.js';  // Import initializeSearch() from script.js

document.addEventListener('DOMContentLoaded', () => {
  // Initialize the 3D model and start the animation
  init();
  
  // Initialize the search-related functionality
  logic();
});
