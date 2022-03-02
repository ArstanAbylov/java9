document.querySelectorAll(".accordion").forEach((accordion) => {
    accordion
        .querySelector(".accordion__heder")
        .addEventListener("click", function() {
            accordion.classList.toggle("accordion__open");
        });
});