const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  try {
    const postId = event.pathParameters.id;
    const data = JSON.parse(event.body);

    const params = {
      TableName: "BlogPosts0827",
      Key: { postId },
      UpdateExpression: "set title = :t, content = :c",
      ExpressionAttributeValues: {
        ":t": data.title,
        ":c": data.content,
      },
      ReturnValues: "UPDATED_NEW",
    };

    const result = await dynamoDb.update(params).promise();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(result.Attributes),
    };
  } catch (error) {
    console.error("Update Error:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal server error" }),
    };
  }
};
