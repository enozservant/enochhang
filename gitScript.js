var offsetX = 0, startX = null;
var offsetY = 0, startY = null;
var body = document.body;
var cube = document.getElementById("tridiv");
var cube_resume = document.getElementById("cube");
var backUP = document.getElementById("backUP");
cube.addEventListener("mousedown", function(event) {
    // cube_resume.style.webkitAnimationPlayState = 'paused';
    cube_resume.style.animation = "";
    startX = event.pageX - offsetX;
    startY = event.pageY - offsetY;
});
cube.addEventListener("mouseup", function() {
    startX = null; startY = null;
});
//Removing Drag for cube. Will instead implement a scroll and transform.
cube.addEventListener("mousemove", function(event) {
    if (startX && startY) {
        offsetX = event.pageX - startX;
        offsetY = event.pageY - startY;
        cube_resume.style['-webkit-transform'] = 'rotateY(-'+offsetX+'deg) rotateX(-'+offsetY+'deg)';
    }
});
backUP.addEventListener("click", function(event) {
    smoothScroll("tridiv");
})
window.addEventListener("scroll", function(event) {
    //Bring Element to the bottom right of the screen fixed.
    // cube.style.top = "90%";
    // cube.style.position =
    var first_section = document.getElementById("Experience");
    if(window.scrollY >= first_section.offsetTop) {
        backUP.style.display = "block";
    } else {
        backUP.style.display = "none";
    }
});
window.addEventListener("load", function(){
    smoothScroll("tridiv");
});

var faces = document.getElementsByClassName("face");
for(var i = 0; i < faces.length; i++) {
    faces[i].addEventListener("click", function(event){
        var toElement = this.childNodes[0].innerHTML;
        smoothScroll(toElement);
    });
}

/*
<div class="face ft"><p class="face-text">Experience</p></div>
<div class="face bk"><p class="face-text">Other Works</p></div>
<div class="face rt"><p class="face-text">Education</p></div>
<div class="face lt"><p class="face-text">Goals</p></div>
<div class="face bm"><p class="face-text">Projects</p></div>
<div class="face tp"><p class="face-text">Contact</p></div>
*/
//Used to create a corner cube
// var extra_cube = document.getElementById("extra");
// var cube2 = cube.cloneNode([true]);
// cube2.removeAttribute("id");
// cube2.style.position = "fixed";
// cube2.style.left = "85%";
// cube2.style.top = "80%";
// cube2.style.animation = "none";
// cube2.style['-webkit-transform'] = "rotateY(0deg) rotateX(0deg)";
// cube2.style.perspectiveOrigin = "left bottom";
// extra_cube.appendChild(cube2);