const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')
const router = require('./router');
const {main} = require('./model/db.model')
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(cors());
app.use(router);

(async function () {
    try {
      await main();
      console.log("Connected to DB!");
      app.listen(port, () => {
        console.log(`[server]: Server running at http://localhost:${port}`);
      });
    } catch (error) {
      console.log(error);
    }
  })();


//   2024-02-20T10:37:55.174+00:00
//   2024-02-20T10:37:55.174+00:00
//   2024-02-20T12:58:28.536Z