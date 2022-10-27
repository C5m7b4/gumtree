import got from "got";

const USERS_SERVICE_URI = "http://users-service:7101";

export default class UsersService {
  static async createUser({ email, password }) {
    const url = `${USERS_SERVICE_URI}/users`;
    console.log("users_service url", url);
    const body = await got
      .post(url, {
        json: {
          email,
          password,
        },
      })
      .json();
    return body;
  }
}
