console.log("Hello world! Ten kod jest już w repozytorium :)");

let backgroundButton = document.querySelector(".body__backgroundButton");
let body = document.querySelector(".body");
let motiveName = document.querySelector(".body__motiveName");

backgroundButton.addEventListener("click", () => {
    body.classList.toggle("body__motive");

    //     if (body.classList.contains("body__motive")) {
    //         motiveName.innerText = "jasny";
    //     } else {
    //         motiveName.innerText = "ciemny";
    //     }
    // });

    body.classList.contains("body__motive") ? motiveName.innerText = "jasny" : motiveName.innerText = "ciemny";
})

let buttonElement = document.querySelector(".section__button");
let photoElement = document.querySelector(".section__photo")

buttonElement.addEventListener("click", () => {
    if (photoElement.classList.contains("hidden")) {
        buttonElement.innerText = "Usuń zdjęcie";
        photoElement.classList.remove("hidden");
    } else {
        photoElement.classList.add("hidden");
        buttonElement.innerText = "Dodaj zdjęcie";
    }
});



