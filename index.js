const express = require('express');
const app = express();
const port = 3000;

// use cors so the project is testable by freeCodeCamp
const cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));

const publicPath = __dirname + '/public';
const indexHtmlPath = publicPath + '/index.html';

// const loggingMiddleware = (req, res, next) => {
//   console.log(`Methode: ${req.method}, Pfad ${req.path}, IP: ${req.ip}`);
//   next();
// }

const rootHandler = (req, res) => {
  res.sendFile(indexHtmlPath);
}

const headerHandler = (req, res) => {
  res.json({
    ipaddress: req.ip,
    language: req.headers["accept-language"],
    software: req.headers["user-agent"]
  })
}

app.get('/', /*loggingMiddleware,*/ rootHandler);
app.use('/public', express.static(publicPath));
app.get('/api/whoami', headerHandler)

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})