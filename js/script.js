

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

    
    


    containerImg.innerHTML += image;
   

    

}



let containerImgDestro = document.querySelector( '.col-2');



for(let i = 0; i < items.length; i++){

    let image = `<div class ="ridimensiona opacity"><img class="" src="${items[i]}" alt=""> </div>`;
    


    containerImgDestro.innerHTML += image;
}




const imagesBig = document.querySelectorAll('.slider img');
imagesBig[0].classList.add('active');
imagesBig[0].classList.add('first');
imagesBig[imagesBig.length - 1].classList.add('last');








const buttonUp = document.querySelector('.sopra');
const buttonDown = document.querySelector('.sotto');

buttonDown.addEventListener('click', function(){
    let Active = document.querySelector('.slider img.active');

    let imgNext = Active.nextElementSibling;
    Active.classList.remove('active');
    imgNext.classList.add('active');


});

buttonUp.addEventListener('click', function(){
    let Active = document.querySelector('.slider img.active');

    let imgNext = Active.previousElementSibling;
    Active.classList.remove('active');
    imgNext.classList.add('active');
});







