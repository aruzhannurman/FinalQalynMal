
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

console.log(sum) ;
// var min = 1000;
// var max = 8000;

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// getRandomInt(min, max)