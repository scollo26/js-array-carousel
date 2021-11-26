
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
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

const containeritems = document.querySelector('.slider .items');
const containerthumbs = document.querySelector('.slider .thumbs');

for (let i = 0; i < items.length; i++) {

    
    let classElement = '';
    if (i == 0) {
        classElement = 'first active';
    } else if (i == items.length - 1) { 
        classElement = 'last';
    }

    const tag = `
        <div class="item ${classElement}">
            <img src="${items[i]}" >
            <div class ="text">
            <h3>${title[i]}</h3>
            <p>${text[i]}</p>
        </div>`;
    const tagThumb = `
        <div class="thumb ${classElement}">
             <img src="${items[i]}">
        </div>`;

    containeritems.innerHTML += tag;
    containerthumbs.innerHTML += tagThumb;
}




const buttonNext = document.querySelector('.slider .thumbs .next');
const buttonPrev = document.querySelector('.slider .thumbs .prev');


buttonNext.addEventListener('click',function () {
    
        const elementActive = document.querySelector('.slider .items .item.active');
        const thumbActive = document.querySelector('.slider .thumbs .thumb.active');
        

       
        const listClasses = elementActive.classList; 
        let find = false;
        for (let i = 0; i < listClasses.length; i++) {
            if (listClasses[i] == 'last') {
                find = true;
                // console.log(listClasses[i]);
            }
        }

        
        

        // controllo-img
        if (find == false) { 
            
            elementActive.classList.remove('active');
            const elementNext = elementActive.nextElementSibling;
            elementNext.classList.add('active');
        }

        let lastThumb = thumbActive.classList.contains('last');

        // controllo-thumbs
        if (lastThumb == false) {
            // rimuove-classe
            thumbActive.classList.remove('active');
            const thumbNext = thumbActive.nextElementSibling;
            // aggiunge-classe
            thumbNext.classList.add('active');
        }



    }
);


buttonPrev.addEventListener('click',function () {
        const elementActive = document.querySelector('.slider .items .item.active');
        const thumbActive = document.querySelector('.slider .thumbs .thumb.active');

        const listClasses = elementActive.classList; 

        let find = false;

        for (let i = 0; i < listClasses.length; i++) {
            if (listClasses[i] == 'first') {
                find = true;
                console.log(listClasses[i]);
            }
        }

        

         // controllo-img
        if (find == false) { 
            console.log(elementActive);
             // rimuove-classe
            elementActive.classList.remove('active');
            const elementPrev = elementActive.previousElementSibling;

            console.log(elementPrev);

            // aggiunge-classe
            elementPrev.classList.add('active');
        }

        let firstThumb = thumbActive.classList.contains('first');
        
        // controllo-thumbs
        if (firstThumb == false) {
            // rimuove-classe
            thumbActive.classList.remove('active');
            const thumbPrev = thumbActive.previousElementSibling;
            // aggiunge-classe
            thumbPrev.classList.add('active');
        }



    }
);