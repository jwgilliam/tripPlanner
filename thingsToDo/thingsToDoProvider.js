import settings from "../.settings.js"

let thingsToDo = []
let plannedThingsToDo = []
let plannedThingsIds = []

export const useThingsToDo = () => {
  return thingsToDo
}

export const usePlannedThingsToDo = () => {
  return plannedThingsToDo
}

export const usePlannedThingsIds = () => {
  return plannedThingsIds
}

const setThingsToDo = (thingsArray) => {
  thingsToDo = thingsArray
}

const setPlannedThingsIds = (thingsArray) => {
  plannedThingsIds = thingsArray
}

const setPlanedThingsToDo = (thingsArray) => {
  plannedThingsToDo = thingsArray
}

