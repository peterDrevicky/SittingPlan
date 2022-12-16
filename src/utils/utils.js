import { map, startsWith } from "lodash";
import data from "../data/data.json";

export const getPersonsByPlace = (placesNumber) => {
  const personsByPlace = map(data.people, (person) => {
    if (startsWith(placesNumber, person.sittingPlace)) {
      return person;
    }
  });

  console.log("personsByPlace", personsByPlace);
};
