import axios from "axios";

const SEARCH_API_URL = "./master.json";

async function masterKeywordApi() {
  const response = await axios.get(SEARCH_API_URL);
  return response.data;
}

export { masterKeywordApi };
