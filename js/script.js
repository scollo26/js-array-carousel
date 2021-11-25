

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];


const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
];


let containerImg = document.querySelector( '.container-img .position-relative');



for(let i = 0; i < items.length; i++){
    
    let image = `<img class="" src="${items[i]}" alt="">`;
    console.log(image);


    containerImg.innerHTML += image;
}


const imagesDom = document.querySelectorAll('.slider img');
console.log(imagesDom);
imagesDom[0].classList.add('first', 'active' );
console.log(imagesDom);
imagesDom[imagesDom.length - 1].classList.add('last');
console.log(imagesDom);


let Active = document.querySelector('.slider .active');

let imgActive= Active.classList;


let last = false;
for (let i = 0; i < imgActive.length; i++) {
  console.log(i, imgActive[i]);

  if (imgActive[i] == 'last') {  
    last = true;
  }
}

if(last == false ){
    Active.classList.remove('active');

}