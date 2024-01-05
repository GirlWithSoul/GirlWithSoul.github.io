const texts = document.querySelectorAll(".text-changing");

    texts.forEach((text) => {
        text.innerHTML = text.innerText
        .split("")
        .map((letter) => `<span class="letter">${letter}</span>`)
        .join("");
    });

    const letters = document.querySelectorAll(".letter");

    letters.forEach((letter) => {
        letter.addEventListener("mouseover", () => {
        letter.style.color = "#1DED54";

        setTimeout(() => {
            letter.style.color = "#ECFDF1";
        }, 350);
    });
});
