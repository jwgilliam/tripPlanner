import { parkSearch } from "./park/parkSearch.js";
import tripListComponent from "./trips/tripList.js";
import { getTrips } from "./trips/tripProvider.js";
import tripConstructor from "./trips/tripBuilder.js";


parkSearch();
getTrips().then(tripListComponent)
tripConstructor()
