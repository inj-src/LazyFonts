// Make the DIV element draggable:

export function dragElement(dragger: HTMLDivElement, root: HTMLDivElement) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    dragger.onmousedown = dragMouseDown;

    function dragMouseDown(e: any) {
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e: any) {
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        const {right, width} = root.getBoundingClientRect();
        const {bottom, height} = dragger.getBoundingClientRect();

        const top = root.offsetTop - pos2;
        const left = root.offsetLeft - pos1;  
        const tolerance = 10;

        function SetPosition () {
            root.style.left = (
                left < tolerance ?
                tolerance :
                right > window.innerWidth + (width / 2)?
                window.innerWidth - (width / 2) - 1:
                left
            ) + "px"
        
            root.style.top = (
                top < tolerance ?
                tolerance :
                bottom  > window.innerHeight ?
                window.innerHeight - height - tolerance :
                top
            ) + "px"
        }SetPosition()

        window.addEventListener("resize", () => {
            dragger.style.height = getComputedStyle(dragger).height
            SetPosition()
        }) 
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
