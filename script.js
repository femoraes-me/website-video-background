let toogleMenu = document.querySelector('.toogle');
let showcase = document.querySelector('.showcase');

toogleMenu.addEventListener('click', () => {
    
    showcase.classList.toggle('active')
    
    if (toogleMenu.classList.contains('active')){
        toogleMenu.classList.remove('active')
    } else {
        toogleMenu.classList.add('active')
    }
});