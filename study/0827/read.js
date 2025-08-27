const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  try {
    const postId = event.pathParameters.id;

    const params = {
      TableName: "BlogPosts0827",
      Key: { postId },
    };

    const result = await dynamoDb.get(params).promise();

    if (!result.Item) {
      return {
        statusCode: 404,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: "Post not found" }),
      };
    }

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result.Item),
    };
  } catch (error) {
    console.error("Read Error:", error);

    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: "Internal server error" }),
    };
  }
};
