document.querySelectorAll(".accordion").forEach((accordion) => {
    const parent = accordion.closest('.accordions');

    accordion.querySelector(".accordion__header").addEventListener("click", function() {
        if (parent && parent.classList.contains('accordions--toggle')) {
            parent.querySelectorAll('.accrdion').forEach(accordion => {
                accordion.classList.remove("accordion--open")
            });
        }
        accordion.classList.add('accordion--open')
        accordion.classList.toggle("accordion__open");
    });
});


document.querySelectorAll('[data-modal]').forEach(trigger => {
    trigger.addEventListener('click', function() {
        document.getElementById(trigger.dataset.modal).classList.add('modal--open');
    });
})
document.que