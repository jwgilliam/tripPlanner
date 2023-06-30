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
    });
};

// Leaving this route in: however since it is not a promise the app runs ahead and the data does not populate until after it is needed.
// export const getPlacesById = (placeIds) => {
//   let key = settings.key;
//   let getPlaces = [];

//   placeIds.map((placeId) => {
//     fetch(
//       `https://developer.nps.gov/api/v1/places?id=${placeId}&api_key=${key}&limit=10`
//     )
//       .then((response) => response.json())
//       .then((response) => {
//         getPlaces.push(response.data[0]);
//         console.log(getPlaces);
//       });
//   });

//   places = getPlaces;
// };

// Probably need to change this one once the trip container is built. Probablly a put route to update trip object?
export const savePlaces = (places) => {
  return fetch(`http://localhost:8088/places/1`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(places),
  });
};

export const deletePlaces = () => {
  return fetch(`http://localhost:8088/places`, {
    method: "DELETE",
  });
};
