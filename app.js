$(function(){
    mobileMenu();
    window.addEventListener("scroll",changeHeaderStyle,false);
})

const changeHeaderStyle = ()=>{
    if(window.scrollY > 30){
        const header = document.querySelector('.header');
        header.style.background = "rgba(0,0,0,.5)";
    }

    if(window.scrollY < 30){
        const header = document.querySelector('.header');
        header.style.background = "transparent";   
    }
}

const mobileMenu = () =>{
    let menu = document.querySelector('.menu');
    let hamb = document.querySelector('.hamb');
    $(hamb).click((e)=>{
        $(menu).toggleClass('open');
        e.preventDefault();
    })
}