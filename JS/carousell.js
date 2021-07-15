let $images;
let $iterator;

const main = function(){
    elements();
    events();
}

const elements = function(){
    $images = document.querySelectorAll('.img-gallery-container img');
    $iterator = 100;
    $dots = document.querySelectorAll('.img-gallery-dots .fa-circle');
}

const events = function(){
    for (let i=0; i<$images.length; i++){
        $images[i].style.left = `0%`;
    }
    setInterval(changePhoto, 5000);
}

const changePhoto = function(){
    for (let i=0; i<$images.length; i++){
        $images[i].style.left = `-${$iterator}%`;
    }

    if($iterator + 100 > $images.length*100 - 100){
        $iterator = 0;
    }

    else{
        $iterator+=100;
    }
}



document.addEventListener('DOMContentLoaded', main);