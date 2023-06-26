// API documentation at: https://www.nps.gov/subjects/developer/api-documentation.htm#/
// https://developer.nps.gov/api/v1/parks?stateCode=${selectedState}&limit=25&fields=addresses&sort=states&api_key=${settings.npsKey}
import settings from "../.settings.js";

let parks = [{ description: "test" }];
let stateCodes = [];

export const useParks = () => {
  return parks;
};

export const useStateCodes = () => {
  return stateCodes;
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
      parks = response.slice();
    });
};
