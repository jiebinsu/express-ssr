import app from './server';

const port = process.env.PORT || 4000;
app.listen(port, function listenHandler() {
  console.info(`Running on ${port}...`);
});
