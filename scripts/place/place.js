export const placeComponent = (place) => {
  console.log(place);
  return `
  <h3>${place.title}<h3>
  <image src="${place.images[0].url}">
  ${place.bodyText}
  <input type="checkbox" id=${place.id}>Add to trip</input>
  `;
};
