import { parkSearch } from "./park/parkSearch.js";
import tripListComponent from "./trips/tripList.js";
import { getTrips } from "./trips/tripProvider.js";


parkSearch();
getTrips().then(tripListComponent)
