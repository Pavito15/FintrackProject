class MovementsAPI {
  static urlBase = "http://3.21.22.144/movements";

  static async CreateMovement(type, description, amount) {
    let response = await Request.post(this.urlBase, {
      type,
      description,
      amount,
    });
    return response;
  }

  static async GetMovements() {
    return await Request.get(this.urlBase);
  }

  static async GetMovement(id) {
    let url = `${this.urlBase}/${id}`;
    return await Request.get(url);
  }

  static async DeleteMovement(id) {
    let url = `${this.urlBase}/${id}`;
    return await Request.delete(url);
  }
}
