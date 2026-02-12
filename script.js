function openLightbox(img) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
}

function closeLightbox(e) {
    if (
        e.target.classList.contains("lightbox") ||
        e.target.classList.contains("lightbox-close")
    ) {
        document.getElementById("lightbox").style.display = "none";
    }
}
