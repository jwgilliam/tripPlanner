export const placeComponent = (place) => {
  return `
  <h3>${place.title}</h3>
  <image class="place-image" src="${place.images[0].url}">
  <div class="place-body">
    ${place.bodyText}
  </div>
  <button class="place-select-button" id=${place.id} name="${place.id}">Add to trip</button>
  `;
};
