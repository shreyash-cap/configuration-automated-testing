import ValidateSanity from "./sanity/index.mjs";
import dotenv from "dotenv";
dotenv.config();

const Run = async () => {
  try {
    await ValidateSanity();
    console.log("Program Exited Successfully.");
  } catch (err) {
    console.error(err);
    console.log("Program Exiting Unsuccessfully");
  }
};

Run();
