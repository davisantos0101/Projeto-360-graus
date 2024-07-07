const conteiner = document.querySelector(".container");

const img = document.querySelector(".car-img");

const cursor = {
    isDragging: false,
    initialPosition: 0,

};

let currentImage = 1;

const updateImage = (direction) => {
    if (direction < 0) {
        if(currentImage == 12){
            currentImage = 1;
        } else{
            currentImage += 1;
        }
    }

    if (direction > 0) {
        if(currentImage == 1){
            currentImage = 12;
        } else{
            currentImage -= 1;
        }
    }

    img.src = `./img/${currentImage}.jpg`;
};

conteiner.addEventListener("mousedown", (event) => {
    cursor.isDragging = true;
    cursor.initialPosition = event.clientX;
});

conteiner.addEventListener("mouseup", () => {
    cursor.isDragging = false;
});

conteiner.addEventListener("mousemove", ({ clientX}) => {
    if (!cursor.isDragging) return;

    const offset = cursor.initialPosition - clientX;

   if (Math.abs(offset) >= 50){
        updateImage(offset);
        cursor.initialPosition = clientX;
   }

});