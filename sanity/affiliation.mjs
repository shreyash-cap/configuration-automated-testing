const GetAllAffiliations = async (client, employerID = "") => {
  try {
    let affiliations;
    if (employerID === "") {
      affiliations = await client.fetch(`*[_type=="affiliation"]`);
    } else {
      affiliations = await client.fetch(
        `*[_type=='affiliation' && employer._ref=='${employerID}']`
      );
    }
    return affiliations;
  } catch (err) {
    console.log("ERROR in getting affiliations");
    throw err;
  }
};

export { GetAllAffiliations };
