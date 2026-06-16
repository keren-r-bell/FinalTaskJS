let color = "";
let name = "";

// Attach listeners, as explained to us by MDN & Gemini, to the interactive elements.
function setUp() {
    const nameField = document.getElementById('nameField')
    nameField.addEventListener('change', nameUpdate);

    const radios = document.getElementsByName('rabbitColor')
    for (let i = 0; i < radios.length; i++) {
        radios[i].addEventListener('change', radioUpdate);
    }

    const checkboxes = document.getElementsByName('accessories')
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('change', checkboxUpdate);
    }
}

// When listeners are triggerd by a change in form contents, update the left pane showing the order preview,
// And check if the form is ready to be sent based on global variables we update.
function nameUpdate(event) {
    const nameDisplay = document.getElementById('rabbitName');
    name = event.target.value;
    if (name != '') {
        nameDisplay.innerHTML = name;
    } else {
        nameDisplay.innerHTML = "<span style='color: #0005'>Your rabbit's name...</span>"
    }
    isFormReady();
}
function radioUpdate(event) {
    const rabbitPreview = document.getElementById('mainRabbit');
    rabbitPreview.className = event.target.value;

    color = event.target.value;
    isFormReady();
}
function checkboxUpdate(event) {
    const matchingAccessory = document.getElementById(event.target.id + 'Img')
    //Toggle the visual style of the accessory via CSS
    if (event.target.checked == true) {
        matchingAccessory.className = ''
    } else {
        matchingAccessory.className = 'disabledEffect'
    }
}

// Checks if the form is ready to send in order to update its visuals, and if needed, return a yes/no.
// Values are not inputted but are global, since they are needed in other parts of the code.
function isFormReady() {
    const readyButton = document.getElementById('submitButton');
    if (name.length > 0 && color.length > 0) {
        readyButton.className = ''
        return true
    } else {
        readyButton.className = 'disabledEffect'
        return false
    }
}

// Called once the button is clicked.
function buildRabbit() {
    let results = document.getElementById('results');
    if (isFormReady() == true) {
        // If the form is ready, update the Results bubble with new text detailing the order.
        results.innerHTML = "Your new rabbit, <strong>" + name + "</strong>,<br> will be colored <strong style='text-shadow: 0 1px 4px #0008; color: " + color + "'>" + color + "</strong>, <br>";
        
        // Go over all possible accessories, and add checked ones to the array.
        let accessories = [];
        const checkboxes = document.getElementsByName('accessories')
        for (let i=0; i < checkboxes.length; i++ ) {
            if (checkboxes[i].checked) {
                accessories[accessories.length] = checkboxes[i].value;
            }
        }
        // If there are any accessories, list them.
        if (accessories.length > 0) {
            results.innerHTML += "and will be bundled with the following extras: ";
            let accList = "";
            for (let i = 0; i < accessories.length; i++) {
                accList += accessories[i] 
                if (i < (accessories.length - 1)) {
                    // Separate by commas if the list isn't done
                    accList += ", ";
                }
            }
            results.innerHTML += accList + ".";

        // If there are no accessories, detail that.
        } else {
            results.innerHTML += "and feature no extras.";
        }
        // Styling the price nicely :)
        const finalPrice = 28 + (3 * accessories.length)- 0.01
        results.innerHTML += "<br>Total Price: <strong style='font-size: 21px'>" + finalPrice + "$</strong>"
    } else {
        // If the button is not ready, the function is still called in order to display an error message in a pop-up bubble.
        results.innerHTML = "<span style='color: red'>Please select a proper name and color!</span>";
    }
    setResultsHidden(false);
}

// Toggle the visibility of the result pop-up box.
function setResultsHidden(truthness) {
    document.getElementById('resultBox').hidden = truthness;
}