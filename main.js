let save = document.getElementById("save");
let hover_dd = document.getElementById("hover-dd");
let nav_div = document.getElementById("nav-div");
let x = document.getElementById("x");
let bars = document.getElementById("bars");
let display_nav = true;

save.addEventListener("mouseover", function() {
    hover_dd.classList.remove("dn");
    hover_dd.classList.add("df");
});

save.addEventListener("mouseout", function() {
    hover_dd.classList.remove("df");
    hover_dd.classList.add("dn");
});

bars.addEventListener("click", function() {
    if (display_nav == true) {
        nav_div.classList.remove("dn");
        bars.classList.add("dn");
        x.classList.remove("dn");
        display_nav = false;
    }else {
        nav_div.classList.add("dn");
        x.classList.add("dn");
        bars.classList.remove("dn");
        display_nav = true;
    }
    
});

x.addEventListener("click", function() {
    if (display_nav == true) {
        nav_div.classList.remove("dn");
        bars.classList.add("dn");
        x.classList.remove("dn");
        display_nav = false;
    }else {
        nav_div.classList.add("dn");
        x.classList.add("dn");
        bars.classList.remove("dn");
        display_nav = true;
    }
    
});



