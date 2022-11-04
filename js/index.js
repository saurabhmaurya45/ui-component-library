var script = document.createElement('script');   
script.src = './js/js/uiComponentLibrary.min.js'   
document.head.appendChild(script)


var script = document.createElement('script');   
script.src = './js/js/uiComponentLibrary.min.js'   
document.head.appendChild(script)
let navstate = true;
let leftLststate = true;


function mobileNavShow(){
    let navbar = document.querySelector(".navbar");
    let leftNav = document.querySelector(".left-nav");
    let rightNav = document.querySelector(".right-nav");
    if(leftLststate === false){
        mobileLeftLstShow();
    }
    if (navstate===true){
        navbar.style.height = "40vh";
        leftNav.style.display = "flex";
        rightNav.style.display = "flex";
    }else{
        leftNav.style.display = 'none';
        rightNav.style.display = 'none';
        navbar.style.height = "48px";
    }
    navstate = !navstate;
}

function mobileLeftLstShow(){
    let item = document.querySelector(".left-section");
    if(navstate===false){
        mobileNavShow();
    }
    if(leftLststate === true){
        item.style.visibility = 'visible';
        // navstate = !navstate;
    }
    else{
        item.style.visibility = 'hidden';
    }
    leftLststate = !leftLststate;
}

