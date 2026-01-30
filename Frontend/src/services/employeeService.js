const BASE_URL = "http://127.0.0.1:8000/employees";

export const getEmployees = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const addEmployee = async (data) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (!res.ok) throw new Error("Failed");
  return res.json();
};

export const deleteEmployee = async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE"
  });
};
