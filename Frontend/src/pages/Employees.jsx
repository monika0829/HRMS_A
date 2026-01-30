const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("SENDING TO BACKEND:", form); 

  try {
    await addEmployee(form);
    fetchEmployees();
  } catch (err) {
    console.error(err);
  }
};
