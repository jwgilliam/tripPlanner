// API documentation at: https://www.nps.gov/subjects/developer/api-documentation.htm#/
import settings from "../.settings.js";

let parks = [];
let stateCodes = [];
let parkCode;
let selectedPark;

export const useSelectedPark = () => {
  return selectedPark;
};

export const useParks = () => {
  return parks;
};

export const useStateCodes = () => {
  return stateCodes;
};

export const useParkCode = () => {
  return parkCode;
};

export const setParkCode = (code) => {
  parkCode = code;
};

export const setSelectedPark = (park) => {
  selectedPark = park;
};

export const getStateCodes = () => {
  return fetch(`http://localhost:8088/states`)
    .then((response) => response.json())
    .then((response) => {
      stateCodes = response.slice();
    });
};

export const getParks = (state) => {
  let key = settings.key;

  return fetch(
    `https://developer.nps.gov/api/v1/parks?stateCode=${state.abbreviation}&api_key=${key}`
  )
    .then((response) => response.json())
    .then((response) => {
      parks = response.data;
    });
};

export const getParkbyParkCode = (parkCode) => {
  let key = settings.key;

  return fetch(
    `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=${key}`
  )
    .then((response) => response.json())
    .then((response) => {
      setSelectedPark(response.data);
    });
};
