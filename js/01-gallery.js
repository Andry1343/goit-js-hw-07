import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const render = galleryItems
  .map(
    item => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', render);

gallery.addEventListener('click', onclick);

function onclick(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) return;

  const currentImage = e.target;
  const instance = basicLightbox.create(
    `<div class="modal">
        <img src="${currentImage.dataset.source}" width="800"/>
    </div>
    `
  );
  instance.show();

  document.addEventListener(
    'keydown',
    e => {
      if (e.key === 'Escape') {
        instance.close();
        console.log(e.key);
      }
    },
    { once: true }
  );
}
