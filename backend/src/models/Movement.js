const dynamodb = require("../config/dynamodb");
const {
  PutCommand,
  GetCommand,
  QueryCommand,
  UpdateCommand,
  DeleteCommand,
} = require("@aws-sdk/lib-dynamodb");
const { randomUUID } = require("crypto");

class Movement {
  static async create(data, callback) {
    try {
      const { type, description, amount, date, user_id } = data;

      const newMovement = {
        id: randomUUID().replace(/-/g, ""),
        user_id,
        type,
        description,
        amount,
        date,
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

  static async getById(id, callback) {
    try {
      const result = await dynamodb.send(
        new GetCommand({
          TableName: "Movements",
          Key: { id },
        })
      );

      if (!result.Item) {
        return callback(true, { message: "Movimiento no encontrado" });
      }

      callback(false, result.Item);
    } catch (error) {
      console.error(error);
      callback(true, error);
    }
  }

  static async getMovements(user_id, callback) {
    try {
      const result = await dynamodb.send(
        new QueryCommand({
          TableName: "Movements",
          IndexName: "user_id-index", // asegúrate de tener un GSI por user_id
          KeyConditionExpression: "user_id = :uid",
          ExpressionAttributeValues: {
            ":uid": user_id,
          },
        })
      );

      callback(false, result.Items || []);
    } catch (error) {
      console.error(error);
      callback(true, error);
    }
  }

  static async update(id, data, callback) {
    try {
      const updateExpressions = [];
      const expressionAttributeValues = {};
      const expressionAttributeNames = {};

      for (const [key, value] of Object.entries(data)) {
        updateExpressions.push(`#${key} = :${key}`);
        expressionAttributeNames[`#${key}`] = key;
        expressionAttributeValues[`:${key}`] = value;
      }

      const result = await dynamodb.send(
        new UpdateCommand({
          TableName: "Movements",
          Key: { id },
          UpdateExpression: `SET ${updateExpressions.join(", ")}`,
          ExpressionAttributeNames: expressionAttributeNames,
          ExpressionAttributeValues: expressionAttributeValues,
          ReturnValues: "ALL_NEW",
        })
      );

      callback(false, result.Attributes);
    } catch (error) {
      console.error(error);
      callback(true, error);
    }
  }

  static async delete(id, callback) {
    try {
      await dynamodb.send(
        new DeleteCommand({
          TableName: "Movements",
          Key: { id },
        })
      );

      callback(false, { message: "Movimiento eliminado correctamente" });
    } catch (error) {
      console.error(error);
      callback(true, error);
    }
  }
}

module.exports = Movement;
