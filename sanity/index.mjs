import { createClient } from "@sanity/client";
import ValidateHealthSurvey from "./health-survey.mjs";
import { GetAllEmployers } from "./employer.mjs";
import * as utils from "../utils.mjs";

const ValidateSanity = async () => {
  console.log("Validate Sanity Called");
  try {
    //  client for getting information
    const client = createClient({
      projectId: process.env.SANITY_PROJECT_ID,
      dataset: "production",
      useCdn: true,
      apiVersion: "2024-05-03",
    });

    //  different validations
    let data = {};
    let employers = await GetAllEmployers(client);
    for (const employer of employers) {
      if (!Object.hasOwn(data, employer.name)) {
        data[employer.name] = {};
      }
      console.log(`Processing Validation for ${employer.name}`);
      let validationHSResult = await ValidateHealthSurvey(client, employer._id);
      data[employer.name]["health-survey"] = validationHSResult;
    }

    await utils.WriteIntoJSONFile("health-survey-validation.json", data);
  } catch (err) {
    console.log("ERROR in ValidateSanity");
    throw err;
  }
};

export default ValidateSanity;
