const imageClass = ".work-thumb-img";
const images = document.querySelectorAll(imageClass);

if (images.length > 0) {
    images.forEach(element => {
        element.onclick = function() {
            openImage(element.id);
        };
    });
};

function closeModalFn() {
    const modalcontainer = document.getElementById("image-modal-container");
    modalcontainer.classList.remove("show");

    document.body.style.overflowY = "scroll";

    const closeModal = document.getElementById("close-modal");
    closeModal.classList.remove("show");
};

function openImage(imageId) {
    const modalcontainer = document.getElementById("image-modal-container");
    modalcontainer.classList.add("show");

    const closeModal = document.getElementById("close-modal");
    closeModal.classList.add("show");
    closeModal.onclick = function() {
        closeModalFn();
    };

    document.body.style.overflow = "hidden";

    const mainImage = document.getElementById("main-image");
    mainImage.src = `./src/img/works/${imageId}.png`;
};