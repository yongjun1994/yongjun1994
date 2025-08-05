const http = require("http");
const url = require("url");
http
  .createServer((req, res) => {
    const userInfo = url.parse(req.url, true).query;

    res.end(`[user] name: ${userInfo.name}, age: ${userInfo.age}`);

    const path = url.parse(req.url, true).pathname;
    res.setHeader("Content-Type", "text/html");

    if (path === "/user") {
      userInfo(req, res);
    } else if (path === "/feed") {
      feed(req, res);
    } else {
      NOTFOUND(req, res);
    }
  })
  .listen("3000", () => console.log("라우터를 만들어보자!"));

  const user = (req, res) => {
    res.end(`[user] name : andy, age: 30`);
  };

  const feed = (req, res) => {
    res.end(`<ul>
      <li>pictu
      re;1</li>
      <li>picture2</li>
      <li>picture3</li>
      </ul>
      `);
  };