class UserAPI {
  static url = "http://3.21.22.144/users";

  static async createUser(name, email, password) {
    let response = await Request.post(this.url, { name, email, password });
    return response;
  }
}
