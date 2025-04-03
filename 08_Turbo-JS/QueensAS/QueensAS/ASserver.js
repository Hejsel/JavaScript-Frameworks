const express=require("express"),app=express();
const port = 3000, IP = "127.0.0.1";
app.use("/",express.static("U:\\undervisning\\IBA\\2. sem\\JF\\08 Wasm\\QueensAS"));
app.listen(port, IP, () => {
  console.log(`Serveren kører på http://${IP}:${port}`);
});