import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
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
              <img class="gallery__image" src="${preview}" alt="${description}" />
           </a>
        </li>`;
    })
    .join("");
}
console.log(createGalleryItemsMarkup(galleryItems));

let gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
