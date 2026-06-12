let color = "";
let name = "";

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
    if (event.target.checked == true) {
        matchingAccessory.className = ''
    } else {
        matchingAccessory.className = 'disabledEffect'
    }
}

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

function buildRabbit() {
    let results = document.getElementById('results');
    if (isFormReady() == true) {
        results.innerHTML = "Your new rabbit, <strong>" + name + "</strong>,<br> will be colored <strong style='text-shadow: 0 1px 4px #0008; color: " + color + "'>" + color + "</strong>, <br>";
        
        let accessories = [];
        const checkboxes = document.getElementsByName('accessories')
        for (let i=0; i < checkboxes.length; i++ ) {
            if (checkboxes[i].checked) {
                accessories[accessories.length] = checkboxes[i].value;
            }
        }
        if (accessories.length > 0) {
            results.innerHTML += "and will be bundled with the following extras: ";
            let accList = "";
            for (let i = 0; i < accessories.length; i++) {
                accList += accessories[i] 
                if (i < (accessories.length - 1)) {
                    accList += ", ";
                }
            }
            results.innerHTML += accList + ".";

        } else {
            results.innerHTML += "and feature no extras.";
        }
        const finalPrice = 28 + (3 * accessories.length)- 0.01
        results.innerHTML += "<br>Total Price: <strong style='font-size: 21px'>" + finalPrice + "$</strong>"
    } else {
        results.innerHTML = "<span style='color: red'>Please select a proper name and color!</span>";
    }
    setResultsHidden(false);
}


function setResultsHidden(truthness) {
    document.getElementById('resultBox').hidden = truthness;
}