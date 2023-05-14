const form = document.querySelector("form");
const nextBtn = form.querySelector(".nextBtn");
const backBtn = form.querySelector(".backBtn");
const allInput = form.querySelectorAll(".first input");

nextBtn.addEventListener("click", () => {
    let atLeastOneFilled = false;
    allInput.forEach(input => {
        if (input.value !== "") {
            atLeastOneFilled = true;
        }
    });
    if (atLeastOneFilled) {
        form.classList.add('secActive');
    } else {
        form.classList.remove('secActive');
    }
});

backBtn.addEventListener("click", () => form.classList.remove('secActive'));
