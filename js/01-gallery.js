import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryPictures = createGallery(galleryItems);

gallery.insertAdjacentHTML("afterbegin", galleryPictures);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, description, original }) => {
      return `<a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join("");
}

gallery.addEventListener("click", OnGalleryContainerClick);

function OnGalleryContainerClick(event) {
  const isGalleryItemEl = event.target.classList.contains("gallery__image");
  event.preventDefault();
  if (!isGalleryItemEl) {
    return;
  }

  const originalImg = event.target.dataset.source;
  const lightBox = basicLightbox.create(`<img src ='${originalImg}'>`);
  lightBox.show();

  gallery.addEventListener("keydown", OnEscButtonPush);

  function OnEscButtonPush(event) {
    if (event.key === "Escape") {
      lightBox.close();
    }
  }
}
