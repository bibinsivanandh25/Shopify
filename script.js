// Price range
(function () {
  var parent = document.querySelector('.price-slider');
  if (!parent) return;

  var rangeS = parent.querySelectorAll('input[type=range]'),
    numberS = parent.querySelectorAll('input[type=number]');

  rangeS.forEach(function (el) {
    el.oninput = function () {
      var slide1 = parseFloat(rangeS[0].value),
        slide2 = parseFloat(rangeS[1].value);

      if (slide1 > slide2) {
        [slide1, slide2] = [slide2, slide1];
      }

      numberS[0].value = slide1;
      numberS[1].value = slide2;
    };
  });

  numberS.forEach(function (el) {
    el.oninput = function () {
      var number1 = parseFloat(numberS[0].value),
        number2 = parseFloat(numberS[1].value);

      if (number1 > number2) {
        var tmp = number1;
        numberS[0].value = number2;
        numberS[1].value = tmp;
      }

      rangeS[0].value = number1;
      rangeS[1].value = number2;
    };
  });
})();

let dropLink = document.querySelector('#dropLink');
let dropDown = document.querySelector('.dropDown');
dropLink.addEventListener('click', e => {
  console.log(e.target);
  let active = dropDown.classList.toggle('active');
  if (active === true) {
    dropDown.style.display = 'block';
  } else {
    dropDown.style.display = 'none';
  }
});

let dropMenu = document.querySelector('#dropMenu');
let dropDownMenu = document.querySelector('.dropDownMenu');
dropMenu.addEventListener('click', e => {
  console.log(e.target);
  let active = dropDownMenu.classList.toggle('active');
  if (active === true) {
    dropDownMenu.style.display = 'block';
  } else {
    dropDownMenu.style.display = 'none';
  }
});

let dropMensBlock = document.querySelector('#dropMensBlock');
let dropDownMensBlock = document.querySelector('.dropDownMensBlock');
dropMensBlock.addEventListener('click', e => {
  console.log(e.target);
  let active = dropDownMensBlock.classList.toggle('active');
  if (active === true) {
    dropDownMensBlock.style.display = 'block';
  } else {
    dropDownMensBlock.style.display = 'none';
  }
});

let homeMenu = document.querySelector('#homeMenu');
let homeMenuDrop = document.querySelector('.homeMenuDrop');
homeMenu.addEventListener('click', e => {
  console.log(e.target);
  let active = homeMenuDrop.classList.toggle('active');
  if (active === true) {
    homeMenuDrop.style.display = 'block';
  } else {
    homeMenuDrop.style.display = 'none';
  }
});
