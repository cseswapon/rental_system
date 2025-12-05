import app from "./app";
import config from "./config";

app.listen(config.PORT, () => {
  console.log(`Server Running Port: http://localhost:${config.PORT}`);
});
