// Access Elements 
let img = document.querySelectorAll(".slide");
let button = document.querySelectorAll("span");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let slide_active = 0;

// check if buttons in click 
button.forEach((e) => {
    // if button in click
    e.addEventListener("click", () => {
        // if button in click not some active button 
        if(e.className != document.querySelector(".active").className) {
            img[0].style.cssText  = `margin-left: -${Number(e.className-1) + Number(e.className-1)}0%;`;
            slide_active= (Number(e.className) -1) + (Number(e.className) -1) ;
            button.forEach((btn) => {
                // remove active class to button all
                btn.classList.remove("active");
            })
            // add active class to button click 
            e.classList.add("active");
            button[0].className == "1 active" ? left.classList.add("hidden") & right.classList.remove("hidden"): button[4].className == "5 active" ? right.classList.add("hidden") & left.classList.remove("hidden") : left.classList.remove("hidden") & right.classList.remove("hidden");
        }
    })
})

// if right button 
right.addEventListener("click", () => {
    slide_active += 2;
    img[0].style.cssText  = `margin-left: -${slide_active}0%;`;
    button.forEach((btn) => {
        // remove active class to slides all 
        btn.classList.remove("active");
    })
    button[slide_active - slide_active/2].classList.add("active");
    left.classList.remove("hidden");
    if(slide_active == 8) {
        // if come in last slide
        right.classList.add("hidden");
    }
})

// if left button 
left.addEventListener("click", () => {
    slide_active -= 2;
    img[0].style.cssText  = `margin-left: -${slide_active}0%;`;
    button.forEach((btn) => {
        // remove active class to slides all 
        btn.classList.remove("active");
    })
    button[slide_active - slide_active/2].classList.add("active");
    right.classList.remove("hidden");
    if(slide_active== 0) {
        // if come in first slide
        left.classList.add("hidden");
    }
})
