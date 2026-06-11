
function buildRabbit() {
    const name = document.getElementById('nameField').value;
    let results = document.getElementById('results');

    results.innerHTML = "Your new rabbit, <strong>" + name + "</strong>, will arrive"
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
}