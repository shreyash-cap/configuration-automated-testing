const GetAllEmployers = async (client) => {
  try {
    const employers = await client.fetch(`*[_type=='employer']`);
    return employers;
  } catch (err) {
    console.log("ERROR in getting employers");
    throw err;
  }
};

export { GetAllEmployers };
