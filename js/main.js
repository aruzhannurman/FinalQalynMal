


let sum = 0;
function validate(){


  //01
  if (document.getElementById('01').checked){
    sum += 500;
    localStorage.clear();
    localStorage.setItem("sum",sum);
  } 
  //03
  if (document.getElementById('03').checked){
    sum += 300;
    localStorage.clear();
    localStorage.setItem("sum",sum);
  }
  //05
  if (document.getElementById('05').checked){
    sum += 200;
    sessionStorage.clear();
    sessionStorage.setItem("sum",sum);
  } 
  //06
  if (document.getElementById('06').checked){
    sum += 100;
    sessionStorage.clear();
    sessionStorage.setItem("sum",sum);
  } 
  //07
  if (document.getElementById('07').checked){
    sum+=300;
    sessionStorage.clear();
    sessionStorage.setItem("sum",sum);
  } 
  //08
  if (document.getElementById('08').checked){
    sum += 300;
    sessionStorage.clear();
    sessionStorage.setItem("sum",sum);
  } 
  //09
  if (document.getElementById('09').checked){
    sum += 600;
    localStorage.clear();
    localStorage.setItem("sum",sum);
  }
  //10
  if (document.getElementById('10').checked){
    sum += 250;
    sessionStorage.clear();
    sessionStorage.setItem("sum",sum);
  } 
  //11
  if (document.getElementById('11').checked){
    sum += 450;
    localStorage.clear();
    localStorage.setItem("sum",sum);
  } 
  //12
  if (document.getElementById('12').checked){
    sum += 500;
    localStorage.clear();
    localStorage.setItem("sum",sum);
  } 
  //13
  if (document.getElementById('13').checked){
    sum += 800;
    localStorage.clear();
    localStorage.setItem("sum",sum);
  }
  //14
  if (document.getElementById('14').checked){
    sum += 200;
    localStorage.clear();
    localStorage.setItem("sum",sum);
  } 
  //15
  if (document.getElementById('15').checked){
    sum += 100;
    localStorage.clear();
    localStorage.setItem("sum",sum);
  } 
  //17
  if (document.getElementById('17').checked){
    sum += 150;
    localStorage.clear();
    localStorage.setItem("sum",sum);
  } 
  //18
  if (document.getElementById('18').checked){
    sum += 500;
    localStorage.clear();
    localStorage.setItem("sum",sum);
  } 
  //19
  if (document.getElementById('19').checked){
    sum += 300;
    localStorage.clear();
    localStorage.setItem("sum",sum);
  } 
  //21
  if (document.getElementById('21').checked){
    sum -= 300;
    localStorage.clear();
    localStorage.setItem("sum",sum);
  } 
}

// let textinputs = document.querySelectorAll('input[type=checkbox]'); 
// let empty = [].filter.call( textinputs, function( el ) {
//    return !el.checked
// });

// if (textinputs.length == empty.length) {
//     alert("None filled");
//     return false;
// }
console.log(sum) ;
// var min = 1000;
// var max = 8000;

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// getRandomInt(min, max)












// let W = window.innerWidth;
// let H = window.innerHeight;
// const canvas = document.getElementById("canvas");
// const context = canvas.getContext("2d");
// const maxConfettis = 150;
// const particles = [];

// const possibleColors = [
//   "DodgerBlue",
//   "OliveDrab",
//   "Gold",
//   "Pink",
//   "SlateBlue",
//   "LightBlue",
//   "Gold",
//   "Violet",
//   "PaleGreen",
//   "SteelBlue",
//   "SandyBrown",
//   "Chocolate",
//   "Crimson"
// ];

// function randomFromTo(from, to) {
//   return Math.floor(Math.random() * (to - from + 1) + from);
// }

// function confettiParticle() {
//   this.x = Math.random() * W; // x
//   this.y = Math.random() * H - H; // y
//   this.r = randomFromTo(11, 33); // radius
//   this.d = Math.random() * maxConfettis + 11;
//   this.color =
//     possibleColors[Math.floor(Math.random() * possibleColors.length)];
//   this.tilt = Math.floor(Math.random() * 33) - 11;
//   this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
//   this.tiltAngle = 0;

//   this.draw = function() {
//     context.beginPath();
//     context.lineWidth = this.r / 2;
//     context.strokeStyle = this.color;
//     context.moveTo(this.x + this.tilt + this.r / 3, this.y);
//     context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
//     return context.stroke();
//   };
// }

// function Draw() {
//   const results = [];

//   // Magical recursive functional love
//   requestAnimationFrame(Draw);

//   context.clearRect(0, 0, W, window.innerHeight);

//   for (var i = 0; i < maxConfettis; i++) {
//     results.push(particles[i].draw());
//   }

//   let particle = {};
//   let remainingFlakes = 0;
//   for (var i = 0; i < maxConfettis; i++) {
//     particle = particles[i];

//     particle.tiltAngle += particle.tiltAngleIncremental;
//     particle.y += (Math.cos(particle.d) + 3 + particle.r / 2) / 2;
//     particle.tilt = Math.sin(particle.tiltAngle - i / 3) * 15;

//     if (particle.y <= H) remainingFlakes++;

//     // If a confetti has fluttered out of view,
//     // bring it back to above the viewport and let if re-fall.
//     if (particle.x > W + 30 || particle.x < -30 || particle.y > H) {
//       particle.x = Math.random() * W;
//       particle.y = -30;
//       particle.tilt = Math.floor(Math.random() * 10) - 20;
//     }
//   }

//   return results;
// }

// window.addEventListener(
//   "resize",
//   function() {
//     W = window.innerWidth;
//     H = window.innerHeight;
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//   },
//   false
// );

// // Push new confetti objects to `particles[]`
// for (var i = 0; i < maxConfettis; i++) {
//   particles.push(new confettiParticle());
// }

// // Initialize
// canvas.width = W;
// canvas.height = H;
// Draw();






