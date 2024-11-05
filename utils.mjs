import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const WriteIntoJSONFile = async (fileName, data, folderName = "default") => {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const dirname = path.join(__dirname, `outputs/${folderName}`);
    if (!fs.existsSync(dirname)) {
      fs.mkdirSync(dirname, { recursive: true });
    }

    fs.writeFileSync(
      `${dirname}/${fileName}`,
      JSON.stringify(data, null, 2),
      "utf-8"
    );
  } catch (err) {
    console.error("Error writing into json: ", err);
    throw err;
  }
};

const WriteIntoCSVFile = async (fileName, data, folderName = "default") => {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const dirname = path.join(__dirname, `outputs/${folderName}`);
    if (!fs.existsSync(dirname)) {
      fs.mkdirSync(dirname, { recursive: true });
    }

    fs.writeFileSync(`${dirname}/${fileName}`, data, "utf-8");
  } catch (err) {
    console.error("Error writing into json: ", err);
    throw err;
  }
};

export {
  WriteIntoJSONFile,
  WriteIntoCSVFile
};
