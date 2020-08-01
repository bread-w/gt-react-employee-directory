import axios from "axios";

export default {
  getRandomPerson: () => {
      return axios.get("https://randomuser.me/api/?results=25")
  },
};
