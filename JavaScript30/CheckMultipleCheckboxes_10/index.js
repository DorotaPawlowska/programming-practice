
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
var lastChecked;
function handleCheck(e) {
    // if shift key down
    // and they are checking it
    var inBetween = false;
    if(e.shiftKey && this.checked){
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if(checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween;
                console.log('check them inbetween');
            }
            if(inBetween){
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
}
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
