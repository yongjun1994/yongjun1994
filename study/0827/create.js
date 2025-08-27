const { v4: uuidv4 } = require("uuid");
const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const data = JSON.parse(event.body);
  const postId = uuidv4();

  const params = {
    TableName: "BlogPosts0827",
    Item: {
      postId,
      title: data.title,
      content: data.content,
      author: data.author,
      createdAt: new Date().toISOString(),
    },
  };

  await dynamoDb.put(params).promise();

  return {
    statusCode: 201,
    body: JSON.stringify({ message: "Post created", postId }),
  };
};
