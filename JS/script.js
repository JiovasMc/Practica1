document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const panel = document.getElementById('panel');
    const panelContent = document.querySelector('.panel-content');

    toggleButton.addEventListener('click', function() {
        panel.classList.toggle('open');
        
        if (panel.classList.contains('open')) {
            toggleButton.setAttribute('aria-expanded', 'true');
        } else {
            toggleButton.setAttribute('aria-expanded', 'false');
        }
    });

    // Agregar contenido adicional para demostrar el scroll
    for (let i = 1; i <= 20; i++) {
        const div = document.createElement('div');
        div.className = 'content-item';
        div.textContent = `Elemento de contenido ${i}`;
        panelContent.appendChild(div);
    }
});