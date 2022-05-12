function changeBg(){
    var navbar = document.getElementById('Background');
    var scrollValue = window.scrollY;
    if (scrollValue < 700){
        navbar.classList.remove('bgColor')
    }
    else{
        navbar.classList.add('bgColor')
    }
}
window.addEventListener('scroll', changeBg);
window.addEventListener('load', changeBg);










