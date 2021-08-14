// explore getElementsByTagName
const heading3 = document.getElementsByTagName('h3');
for (const hd3 of heading3) {
    hd3.style.color = "orange";
}

const categories = document.getElementById('categories');
categories.style.backgroundColor  = 'pink';
categories.style.padding  = '30px';

const backpack = document.getElementById('backpack');
backpack.style.backgroundColor = 'tomato';

// explore getElementsByClassName
const card = document.getElementsByClassName('card');
for (const crd of card) {
    crd.style.borderRadius = '50px';
}


