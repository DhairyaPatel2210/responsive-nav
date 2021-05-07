const navSlide = () => {
    const burger = document.getElementById("burger");
    const nav = document.querySelector(".nav")
    burger.addEventListener('click',() => {
        burger.classList.toggle('cross');
        nav.classList.toggle('toggle');
    })
}

const callUp = () =>{
    const contactButton = document.querySelector(".Contact-button")
    const hiddenDiv = document.querySelectorAll(".contact-links div")
    const image = document.getElementById("phone-image");
    contactButton.addEventListener('click',() => {   
        if(hiddenDiv[0].style.opacity == 1){
            hiddenDiv.forEach((divs,index) => {
                divs.style.animation = `linksFadeOut 0.3s`;
                divs.style.opacity = 0;
                image.src = "images/icons8-up.svg";
            })
            contactButton.style.opacity = 1;
        }
        else{
            hiddenDiv.forEach((divs,index) => {
                divs.style.animation = `linksFadeIn 0.3s`;
                divs.style.opacity = 1;
                image.src = "images/icons8-down.svg";
            })
            contactButton.style.opacity = 0.5;
        }
    })
}

navSlide();
callUp();
