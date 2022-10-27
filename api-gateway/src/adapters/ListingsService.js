import got from "got";

const LISTINGS_SERVICE_URI = "http://listings-service:7100";

export default class ListingsService {
  static async fetchAllListings() {
    const url = `${LISTINGS_SERVICE_URI}/listings`;
    console.log(`fetching data from ${url}`);
    const body = await got.get(url).json();
    return body;
  }
}
