import axios from "axios";

export default {
  getRandomPeople: () => {
    return axios.get("https://randomuser.me/api/?results=25");
  },
  getPersonByName: (name) => {
    return axios.get("https://randomuser.me/api/?inc=" + name);
  },
};
