import { useEffect, useState } from "react";
import api from "../services/api";
import Card from "../components/Navbar";

export default function Attendance() {
  const [employees, setEmployees] = useState([]);
  const [records, setRecords] = useState([]);
  const [form, setForm] = useState({
    employee_id: "",
    date: "",
    status: "Present"
  });

  useEffect(() => {
    api.get("/employees").then(res => setEmployees(res.data));
  }, []);

  const mark = async () => {
    if (!form.employee_id || !form.date) return alert("Select all fields");
    await api.post("/attendance", form);
    loadRecords(form.employee_id);
  };

  const loadRecords = async (id) => {
    const res = await api.get(`/attendance/${id}`);
    setRecords(res.data);
  };

  return (
    <Card title="Attendance Management">
      <select className="border p-2 mb-2 w-full"
        onChange={e => {
          setForm({...form, employee_id:e.target.value});
          loadRecords(e.target.value);
        }}>
        <option value="">Select Employee</option>
        {employees.map(emp => (
          <option key={emp.employee_id} value={emp.employee_id}>
            {emp.full_name}
          </option>
        ))}
      </select>

      <input type="date" className="border p-2 mb-2 w-full"
        onChange={e => setForm({...form, date:e.target.value})} />

      <select className="border p-2 mb-3 w-full"
        onChange={e => setForm({...form, status:e.target.value})}>
        <option>Present</option>
        <option>Absent</option>
      </select>

      <button onClick={mark}
        className="bg-green-600 text-white px-4 py-2 rounded mb-4">
        Mark Attendance
      </button>

      {records.length === 0 ? (
        <p className="text-gray-500">No attendance records</p>
      ) : (
        <ul className="text-sm space-y-1">
          {records.map((r, i) => (
            <li key={i}>
              {r.date} — {r.status}
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
