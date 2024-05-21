import { config } from "dotenv";
import mongoose from "mongoose";

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`);
});
