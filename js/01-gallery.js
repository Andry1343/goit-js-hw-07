import { galleryItems } from './gallery-items.js';
// Change code below this line


////////////////Варіант №1////////////////

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
gallery.addEventListener('click', e => {
  e.preventDefault();
  const isGalleryEl = e.target.classList.contains('gallery__image');
  if (!isGalleryEl) {
    return;
  }

  const instance = basicLightbox.create(
    `
  <img src="${e.target.dataset.source}" width="800">
  `,
    {
      onShow: () => {
        document.addEventListener('keydown', closeModal);
      },
      onClose: () => {
        document.removeEventListener('keydown', closeModal);
      },
    }
  );

  function closeModal(e) {
    if (e.key === 'Escape') {
      instance.close();
      console.log(e.key);
    }
  }
  instance.show();
});


////////////////Варіант №2////////////////
/* const gallery = document.querySelector('.gallery');

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
    `,
    {
      onShow: () => {
        document.addEventListener('keydown', closeModal);
      },
      onClose: () => {
        document.removeEventListener('keydown', closeModal);
      },
    }
  );
  instance.show();

  function closeModal(e) {
    if (e.key === 'Escape') {
      instance.close();
      console.log(e.key);
    }
  }
} */