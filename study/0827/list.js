const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.handler = async () => {
  const params = {
    TableName: "BlogPosts0827",
    Limit: 20,
  };

  try {
    const result = await dynamoDb.scan(params).promise();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(result.Items || []),
    };
  } catch (error) {
    console.error("DynamoDB Scan Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal server error" }),
    };
  }
};
