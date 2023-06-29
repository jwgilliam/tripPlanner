import settings from "../.settings.js";

let places = [];

export const usePlaces = () => {
  return places;
};

export const getPlaces = (parkCode) => {
  let key = settings.key;
  return fetch(
    `https://developer.nps.gov/api/v1/places?parkCode=${parkCode}&api_key=${key}&limit=10`
  )
    .then((response) => response.json())
    .then((response) => {
      places = response.data;
      console.log(places);
    });
};
