import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBoxRef = document.querySelector('.gallery');

//створення картинок
function creatingPictureMarkup(gallery) {
  return gallery
    .map(
      ({
        preview,
        original,
        description,
      }) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
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
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const gallery = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
  });
}
