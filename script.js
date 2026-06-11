function myFunction(event) {
    const rabbitPreview = document.getElementById('mainRabbit');

    rabbitPreview.className = event.target.value;
}

document.querySelectorAll('input[name="rabbitColor"]').forEach(radio => {
    radio.addEventListener('change', myFunction);
});