import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const getEmployees = () => API.get("/employees");
export const addEmployee = (data) => API.post("/employees", data);

export const getAttendance = () => API.get("/attendance");
export const markAttendance = (data) => API.post("/attendance", data);
