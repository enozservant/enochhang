/*
    Anything here can be used by anyone.
*/

//Made to scroll to whichever element you pass through on the page.
// The parameter is a string.
var smoothScroll = function(elementId) {
    var MIN_PIXELS_PER_STEP = 16;
    var MAX_SCROLL_STEPS = 40;
    var target = document.getElementById(elementId);
    var scrollContainer = target;
    do {
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop === 0);

    var targetY = 0;
    do {
        if (target === scrollContainer) break;
        targetY += target.offsetTop;
    } while ((target = target.offsetParent));

    var pixelsPerStep = Math.max(
        MIN_PIXELS_PER_STEP,
        Math.abs(targetY - scrollContainer.scrollTop) / MAX_SCROLL_STEPS
    );

    var isUp = targetY < scrollContainer.scrollTop;

    var stepFunc = function() {
        if (isUp) {
        scrollContainer.scrollTop = Math.max(
            targetY,
            scrollContainer.scrollTop - pixelsPerStep
        );
        if (scrollContainer.scrollTop <= targetY) {
            return;
        }
        } else {
        scrollContainer.scrollTop = Math.min(
            targetY,
            scrollContainer.scrollTop + pixelsPerStep
        );

        if (scrollContainer.scrollTop >= targetY - 100) {
            return;
        }
        }

        window.requestAnimationFrame(stepFunc);
    };

    window.requestAnimationFrame(stepFunc);
};