let color = "";

function buildRabbit() {
    const name = document.getElementById('nameField').value;

    let accessories = [];

    if (document.getElementById('topHat').checked) {
        accessories.push("Top Hat");
    }
    if (document.getElementById('cuteCap').checked) {
        accessories.push("Cute Cap");
    }
    if (document.getElementById('bowTie').checked) {
        accessories.push("Bow Tie");
    }
    if (document.getElementById('walkingCane').checked) {
        accessories.push("Walking Cane");
    }
    if (document.getElementById('handBag').checked) {
        accessories.push("Hand Bag");
    }

    let results = document.getElementById('results');
    results.innerHTML = "Your new rabbit, <strong>" + name + "</strong>, will arrive in <strong>" + color + "</strong> color, and with the following accessories: ";

    for (let i = 0; i < accessories.length; i++) {
        results.innerHTML += "<br>" + accessories[i];
    }
}

function setUp() {
    const nameField = document.getElementById('nameField')
    nameField.addEventListener('change', nameUpdate);

    document.querySelectorAll('input[name="rabbitColor"]').forEach(radio => {
        radio.addEventListener('change', radioUpdate);
    });
    document.querySelectorAll('input[name="accessories"]').forEach(checkbox => {
        checkbox.addEventListener('change', checkUpdate);
    });
}

function nameUpdate(event) {
    const nameDisplay = document.getElementById('rabbitName');
    nameDisplay.innerHTML = event.target.value;
}
function checkUpdate(event) {
    const matchingAccessory = document.getElementById(event.target.id + 'Img')
    if (matchingAccessory.className = 'disabled') {
        matchingAccessory.className = 'enabled'
    } else {
        matchingAccessory.className = 'disabled'
    }
}
function radioUpdate(event) {
    const rabbitPreview = document.getElementById('mainRabbit');
    rabbitPreview.className = event.target.value;

    color = event.target.value;
}