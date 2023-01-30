import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const galleryPictures = createGallery(galleryItems);

gallery.insertAdjacentHTML("afterbegin", galleryPictures);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, description, original }) => {
      return `<a class="gallery__item" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join("");
}

gallery.addEventListener("click", OnGalleryContainerClick);

function OnGalleryContainerClick(event) {
  event.preventDefault();
}

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "botton",
});
lightbox.on("show.simplelightbox", function () {});
