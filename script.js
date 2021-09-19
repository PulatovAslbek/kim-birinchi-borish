const elForm = document.querySelector('.form');
const elInput = document.querySelector('.input');
const elResultWalker = document.querySelector('.result-walker');
const elResultBike = document.querySelector('.result-bike');
const elResultAvto = document.querySelector('.result-avto');
const elResultPlane = document.querySelector('.result-plane');

const elWalkSpeed = 3.6;
const elBikeSpeed = 20.1;
const elAvtoSpeed = 70;
const elPlaneSpeed = 800;

if (elForm) {elForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
  
    let elInputValue = Number(elInput.value.trim());
  
    let elWalkSpeedResult =  Math.floor(elInputValue / elWalkSpeed) + ` soat: ` +  Math.floor((elInputValue / elWalkSpeed)* 60 % 60)  + `   minut: ` + Math.floor((elInputValue / elWalkSpeed) * 60 * 60 % 60) +  `  secund:`;
  
    let elBikeSpeedResult =  Math.floor(elInputValue / elBikeSpeed) + ` soat: ` + Math.floor((elInputValue / elBikeSpeed) * 60 % 60)  + `   minut: ` + Math.floor((elInputValue / elBikeSpeed) * 60 * 60 % 60) +  `  secund:`;
  
    let elAvtoSpeedResult =  Math.floor(elInputValue / elAvtoSpeed) + ` soat: ` + Math.floor((elInputValue / elAvtoSpeed) * 60 % 60)  + `   minut: ` + Math.floor((elInputValue / elAvtoSpeed) * 60 * 60 % 60) +  `  secund:`;
  
    let elPlaneSpeedResult =  Math.floor(elInputValue / elPlaneSpeed) + ` soat: ` + Math.floor((elInputValue / elPlaneSpeed) * 60 % 60)  +  `   minut: ` + Math.floor((elInputValue / elPlaneSpeed) * 60 * 60 % 60) +  `  secund:`;
  
    elResultWalker.textContent = elWalkSpeedResult;
    elResultBike.textContent = elBikeSpeedResult;
    elResultAvto.textContent = elAvtoSpeedResult;
    elResultPlane.textContent = elPlaneSpeedResult;
  });
  
  };