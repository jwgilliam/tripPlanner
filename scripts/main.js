import { parkSearch } from "./park/parkSearch.js";
import tripListComponent from "./trips/tripList.js";
import { getTrips } from "./trips/tripProvider.js";
import tripConstructor from "./trips/tripBuilder.js";
import { parkList } from "./park/parkList.js";
import { placeList } from "./place/placeList.js";

parkSearch();
getTrips().then(tripListComponent);
tripConstructor();
parkList();
placeList();
