const GetHealthSurvey = async (client, employerID) => {
  try {
    let healthSurveyData = await client.fetch(
      `*[_type=='healthSurveys' && employer._ref=='${employerID}']`
    );
    return healthSurveyData;
  } catch (err) {
    console.log("ERROR in getting Health Survey");
    throw err;
  }
};

const ValidateHealthSurvey = async (client, employerID) => {
  let validations = [];
  try {
    let healthSurveyData = await GetHealthSurvey(client, employerID);
    if (healthSurveyData.length === 0) {
      return {
        success: false,
        validations,
      };
    } else {
      validations.push("Health Survey exists");
    }

    return {
      success: true,
      validations,
    };
  } catch (err) {
    console.log("ERROR in validating health survey");
    throw err;
  }
};

export default ValidateHealthSurvey;
