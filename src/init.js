import "dotenv/config";
import "./db";
import "./models/Video";
import "./models/User";
import app from "./server"

const PORT = 7856;

const handleListening = () => 
    console.log("✅ Server listening on port 7856! ✅");

app.listen(PORT, handleListening);
