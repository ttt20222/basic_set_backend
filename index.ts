import app from "./src/app";
import { getEnv } from "./src/util/envUtil";

function startServer() {
  const PORT = getEnv("PORT", "3000");

  app.listen(PORT, () => {
    console.log("=================================");
    console.log(`✅ Server is running on port ${PORT}`);
    console.log("=================================");
  });
}

startServer();
