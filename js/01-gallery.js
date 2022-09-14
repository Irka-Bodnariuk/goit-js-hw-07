import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryBoxRef = document.querySelector('.gallery');

//створення картинок
function creatingPictureMarkup(gallery) {
  return gallery
    .map(
      ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join('');
}

galleryBoxRef.insertAdjacentHTML(
  'beforeend',
  creatingPictureMarkup(galleryItems)
);

//при кліку на зображення
galleryBoxRef.addEventListener('click', openPicture);

function openPicture(e) {
  e.preventDefault(); // заборона на відкривання в новому вікні
  // якщо не img
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);
  instance.show();
  //закриття Escape
  document.addEventListener('keydown', clousePicture);
  function clousePicture(e) {
    if (e.code === 'Escape') {
      instance.close();
    }
  }
}
