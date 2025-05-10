class AuthAPI {
  static url = "http://ec2-3-21-22-144.us-east-2.compute.amazonaws.com/auth";

  static logout() {
    if (window.confirm("¿Estás seguro de querer cerrar sesión?")) {
      localStorage.removeItem("usertype");
      document.cookie =
        "userToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      window.location.replace("/");
    }
  }

  static async login(email, password) {
    let response = await Request.post(this.url, { email, password });
    return response;
  }

  static async checkLog() {
    let response = await Request.get(this.url);
    return response;
  }
}
