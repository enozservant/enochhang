var offsetX = 0, startX = null;
var offsetY = 0, startY = null;
var body = document.body;
var cube = document.getElementById("tridiv");
var cube_resume = document.getElementById("cube");
cube.addEventListener("mousedown", function(event) {
    cube_resume.style.webkitAnimationPlayState = 'paused';
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
window.addEventListener("scroll", function(event) {
    //Bring Element to the bottom right of the screen fixed.
    // cube.style.top = "90%";
    // cube.style.position =
});
window.addEventListener("load", function(){
    smoothScroll("tridiv");
});

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