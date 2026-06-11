function setUpRadio() {
    document.querySelectorAll('input[name="rabbitColor"]').forEach(radio => {
        radio.addEventListener('change', radioUpdate);
    });
}

function radioUpdate(event) {
    const rabbitPreview = document.getElementById('mainRabbit');
    rabbitPreview.className = event.target.value;
}