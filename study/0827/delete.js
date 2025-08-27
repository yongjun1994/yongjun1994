const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  try {
    const postId = event.pathParameters.id;

    const params = {
      TableName: "BlogPosts0827", // 정확한 테이블 이름
      Key: { postId },
    };

    await dynamoDb.delete(params).promise();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({ message: "Post deleted" }),
    };
  } catch (error) {
    console.error("Delete Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal server error" }),
    };
  }
};
