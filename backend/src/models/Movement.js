const dynamodb = require("../config/dynamodb");
const { PutCommand } = require("@aws-sdk/lib-dynamodb");
const { randomUUID } = require("crypto");

class Movement {
  static async create(data, callback) {
    try {
      const { user_id, type, description, amount } = data;

      const newMovement = {
        id: randomUUID(),
        user_id,
        type,
        description,
        amount,
      };
      await dynamodb.send(
        new PutCommand({
          TableName: "Movements",
          Item: newMovement,
        })
      );

      callback(false, newMovement);
    } catch (error) {
      console.error(error);
      callback(true, error);
    }
  }

  static getById(id, callback) {
    console.log(`Voy a obtener el movimiento ${id}`);
    callback();
  }

  static getMovements(user_id, callback) {
    console.log(`Voy a obtener los movimientos del usuario ${user_id}`);
    callback();
  }

  static update(id, data, callback) {
    console.log(`Voy a actualizar el movimiento ${id} con la data: ${data}`);
    callback();
  }

  static delete(id, callback) {
    console.log(`Voy a borrar el movimiento ${id}`);
    callback();
  }
}

module.exports = Movement;
