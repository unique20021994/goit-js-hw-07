import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const items = [];
galleryItems.forEach((element) => {
  const galleryItem = document.createElement('div');
  galleryItem.className = 'gallery__item';
  const galleryLink = document.createElement('a');
  galleryLink.className = 'gallery__link';
  galleryLink.href = element.original;
  const galleryImage = document.createElement('img');
  galleryImage.className = 'gallery__image';
  galleryImage.src = element.preview;
  galleryImage.alt = element.description;
  galleryImage.setAttribute('data-source', element.original);
  galleryItem.append(galleryLink);
  galleryLink.append(galleryImage);
  items.push(galleryItem);
});

gallery.append(...items);

gallery.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const selectedImage = e.target.getAttribute('data-source');

  

  const hanleEscClose = (e) => {
    if (e.key === 'Escape') {
      instance.close();
    }
  };

  const lightboxOptions = {
    onShow: () => gallery.addEventListener('keydown', hanleEscClose),
    onClose: () => gallery.removeEventListener('keydown', hanleEscClose),
  };

  const instance = basicLightbox.create(
    `
  <div class="modal">
  <img src="${selectedImage}" width="800" height="600">
  </div>
`,
    lightboxOptions
  );
  instance.show();
});
