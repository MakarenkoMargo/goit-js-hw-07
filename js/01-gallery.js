import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector(".gallery");
const galleryItemMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryItemMarkup);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `;
    })
    .join("");
}
console.log(createGalleryItemsMarkup(galleryItems));

galleryContainer.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  showModal(e.target.dataset.source);
}

function showModal(src) {
  basicLightbox
    .create(
      `
		<img width="1400" height="900" src="${src}">
	`
    )
    .show();
}
window.addEventListener("keydown", onEscKeyPress);
function onEscKeyPress(e) {
  const ESC_KEY_CODE = "Escape";
  if (e.code === ESC_KEY_CODE) {
    closeModal();
  }
}
function closeModal() {
  const instance = document.querySelector(".basicLightbox");
  instance.classList.remove("basicLightbox--visible");
  window.removeEventListener("keydown", onEscKeyPress);
}
