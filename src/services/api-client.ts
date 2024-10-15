import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f7bac453060c4dee98bf513e8427a0ff",
  },
});
