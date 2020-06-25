const fs = require("fs");

const readStream = fs.createReadStream("./blog1.txt", { encoding: "utf8" });
const writeStream = fs.createWriteStream("./blog4.txt");

// readStream.on("data", (chunk) => {
//   console.log("NEW CHUNK");
//   console.log(chunk);
//   writeStream.write("\n New Chunck \n");
//   writeStream.write(chunk);
// });

readStream.pipe(writeStream);
