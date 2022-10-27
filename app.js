const express = require('express');

const app = express();
const sharks = require('./routes/sharks');

const path = `${__dirname}/views/`;
const port = process.env.PORT || 8080;

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path));
app.use('/sharks', sharks);

app.listen(port, () => {
  document.write(`Example app listening on ${port}!`);
});
