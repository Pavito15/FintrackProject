const { QueryCommand } = require("@aws-sdk/client-dynamodb");
const dynamodb = require("../config/dynamodb");
const { GetCommand, PutCommand } = require("@aws-sdk/lib-dynamodb");
const { randomUUID } = require("crypto");

class Users {
  static async create(data) {
    try {
      const { name, email, password } = data;
      let encryptedPassword = bcrypt.hashSync(password, 8);
      let newUser = {
        id: randomUUID().replace(/-/g, ""),
        name,
        email,
        password: encryptedPassword,
        created_at: new Date().toISOString(),
      };

      await dynamodb.send(
        new PutCommand({
          TableName: "Users",
          Item: newUser,
        })
      );

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  static async getUserByEmail(email) {
    try {
      const result = await dynamodb.send(
        new QueryCommand({
          TableName: "Users",
          IndexName: "email-index",
          KeyConditionExpression: "email = :uid",
          ExpressionAttributeValues: {
            ":uid": email,
          },
        })
      );

      return result.Items[0] || null;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}

module.exports = Users;
