{
    const welcome = () => {
        console.log("Hello world! Ten kod jest już w repozytorium :)");
    };

    const onChangeBackgroundClick = () => {
        const body = document.querySelector(".body");
        const motiveName = document.querySelector(".body__motiveName");

        body.classList.toggle("body__motive");
        body.classList.contains("body__motive") ? motiveName.innerText = "jasny" : motiveName.innerText = "ciemny";

        //     if (body.classList.contains("body__motive")) {
        //         motiveName.innerText = "jasny";
        //     } else {
        //         motiveName.innerText = "ciemny";
        //     }
        // });
    };

    const init = () => {
        const backgroundButton = document.querySelector(".body__backgroundButton");
        backgroundButton.addEventListener("click", onChangeBackgroundClick);

        welcome();
       
    };

    init();



    const togglePhoto = () => {
        const buttonElement = document.querySelector(".section__button");
        const photoElement = document.querySelector(".section__photo");
        
    buttonElement.addEventListener("click", () => {
        if (photoElement.classList.contains("hidden")) {
            buttonElement.innerText = "Usuń zdjęcie";
            photoElement.classList.remove("hidden");
        } else {
            photoElement.classList.add("hidden");
            buttonElement.innerText = "Dodaj zdjęcie";
        }
    });
};
togglePhoto();
}