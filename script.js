const navSlide = () => {
    const burger = document.getElementById("burger");
    const nav = document.querySelector(".nav")
    burger.addEventListener('click',() => {
        burger.classList.toggle('cross');
        nav.classList.toggle('toggle');
    })
}


navSlide();