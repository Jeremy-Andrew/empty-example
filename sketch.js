function setup() {
  createCanvas(400, 400);
  createP("The Jeremy Daily");
}


function draw() {
  background(220);
}
//JEREMY DAILY LOGO
let img1; // Declare variable 'img'.

function setup() {
  createCanvas(720, 400);
  img1 = loadImage('assets/JeremyDailyLogo.png'); // Load the image
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  image(img1, 0, 0);
}
//FACE OF THE MAN
let img2; // Declare variable 'img'.

function setup() {
  createCanvas(720, 400);
  img2 = loadImage('assets/Bacon.jpg'); // Load the image
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  image(img2, 0, 0);
}
//ARTIST RENDERING
let img3; // Declare variable 'img'.

function setup() {
  createCanvas(720, 400);
  img3 = loadImage('assets/Cheese.jpg'); // Load the image
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  image(img3, 0, 0);
}
