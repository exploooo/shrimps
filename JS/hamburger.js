let $menuIconBool = false;
const $menuIcon = document.querySelector('header .fa-bars');
const $menu = document.querySelector('.hamburger-menu');


const rotateForward = function(){
    $menuIcon.style.transform = 'rotate(90deg)';
    $menuIconBool=true;
}

const rotateBackwards = function(){
    $menuIcon.style.transform = 'rotate(0deg)';
    $menuIconBool = false;
}

const comeIn = function(){
    $menu.style.left = '0%';
}

const comeOut = function(){
    $menu.style.left = '100%';
}

const toggleMenu = function(){
    $menu.classList.toggle('hidden');
}


$menuIcon.addEventListener('click', function(){
    if($menuIconBool==false){
        rotateForward();
        toggleMenu();
        setTimeout(comeIn, 100);
    }
    else{
        rotateBackwards();
        comeOut();
        setTimeout(toggleMenu, 200);
    }
});