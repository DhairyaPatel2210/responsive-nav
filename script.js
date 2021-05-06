const navslide = () => {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('links');
    const links = document.querySelectorAll('.links li');
    
    burger.addEventListener('click', () => {
        nav.classList.toggle("nav-active");
        links.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation='';
            }
            else{
                link.style.animation = `linksFadeIn 0.5 ease forwards ${index/7 + 2}s`;
            }
        }) 
        
        burger.classList.toggle('toggle');
    })

    
}

navslide();