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
    cube
});
window.addEventListener("load", function(){
    smoothScroll("tridiv");
});