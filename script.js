document.querySelectorAll('.timeline-event').forEach(event => {
    event.addEventListener('mouseover', function () {
        const info = this.getAttribute('data-info');
        this.querySelector('.content').setAttribute('data-info', info);
    });
});