class UserAPI {
  static url = "http://ec2-3-21-22-144.us-east-2.compute.amazonaws.com/users";

  static async createUser(name, email, password) {
    let response = await Request.post(this.url, { name, email, password });
    return response;
  }
}
