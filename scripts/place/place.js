export const placeComponent = (place) => {
  return `
  <h3>${place.title}</h3>
  <image class="place-image" src="${place.images[0].url}">
  <div class="place-bodyw">
    ${place.bodyText}
  </div>
  <label for ="${place.id}">Add to trip</label>
  <input class="place-checkbox" type="checkbox" id=${place.id} name="${place.id}">
  `;
};
