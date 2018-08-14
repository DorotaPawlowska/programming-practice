
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
//    console.log(checkboxes);

let lastChecked;
console.log('last checked ' + lastChecked);

function handleCheck(e) {
    //if shift key down
    // and they are checking it

    let inBetween = false;

    if(e.shiftKey && this.checked){

        checkboxes.forEach(function (checkbox) {

            console.log(checkbox);
            console.log('last checked ' + lastChecked);

            if(checkbox === this || checkbox === lastChecked){
                console.log('last checked ' + lastChecked);

                inBetween = !inBetween;
                console.log('check them inbetween');
            }

            if(inBetween){
                checkbox.checked = true;
            }
        });

    }

    lastChecked = this;
    console.log('last checked ' + lastChecked);

//        console.log(e);
}

checkboxes.forEach(function (checkbox) {
    return checkbox.addEventListener('click', handleCheck);
});
