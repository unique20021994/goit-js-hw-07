import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const items = [];

galleryItems.forEach(element => {
  const galleryItem = document.createElement('li');
  const galleryLink = document.createElement('a');
  galleryLink.className = 'gallery__item';
  galleryLink.href = element.original;
  const galleryImage = document.createElement('img');
  galleryImage.className = 'gallery__image';
  galleryImage.src = element.preview;
  galleryImage.setAttribute('title', element.description);
  galleryImage.alt = element.description;
  galleryItem.append(galleryLink);
  galleryLink.append(galleryImage);
  items.push(galleryItem);
})
gallery.append(...items);
new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
})