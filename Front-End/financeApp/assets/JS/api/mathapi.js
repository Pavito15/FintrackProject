class MathAPI {
  static urlBase =
    "http://ec2-3-21-22-144.us-east-2.compute.amazonaws.com/math";

  static async GetData() {
    try {
      let incomesResponse = await Request.get(`${this.urlBase}/income`),
        expensesResponse = await Request.get(`${this.urlBase}/expenses`),
        balanceResponse = await Request.get(`${this.urlBase}/balance`);

      let incomes = await incomesResponse.json(),
        expenses = await expensesResponse.json(),
        balance = await balanceResponse.json();

      return {
        incomes: incomes.total_income,
        expenses: expenses.total_expense,
        balance: balance.balance,
      };
    } catch (error) {
      alert("Ha ocurrido un error");
      window.location.replace("/index.html");
    }
  }
}
