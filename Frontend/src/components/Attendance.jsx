// import { useEffect, useState } from "react";
// import { getEmployees } from "../services/employeeService";
// import { markAttendance, getAttendance } from "../services/attendanceService";

// export default function Attendance() {
//   const [employees, setEmployees] = useState([]);
//   const [attendance, setAttendance] = useState([]);
//   const [form, setForm] = useState({
//     employee_id: "",
//     date: "",
//     status: "Present"
//   });

//   // ✅ DEFINE FIRST
//   const loadEmployees = async () => {
//     const data = await getEmployees();
//     setEmployees(data);
//   };

//   const submitAttendance = async (e) => {
//     e.preventDefault();
//     await markAttendance(form);
//     const records = await getAttendance(form.employee_id);
//     setAttendance(records);
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // ✅ USE AFTER DEFINITION
//   useEffect(() => {
//     loadEmployees();
//   }, []);

//   return (
//     <div className="card">
//       <h2>Attendance Management</h2>

//       <form onSubmit={submitAttendance}>
//         <select
//           name="employee_id"
//           value={form.employee_id}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select Employee</option>
//           {employees.map(emp => (
//             <option key={emp.employee_id} value={emp.employee_id}>
//               {emp.full_name}
//             </option>
//           ))}
//         </select>

//         <input
//           type="date"
//           name="date"
//           value={form.date}
//           onChange={handleChange}
//           required
//         />

//         <select name="status" value={form.status} onChange={handleChange}>
//           <option value="Present">Present</option>
//           <option value="Absent">Absent</option>
//         </select>

//         <button type="submit">Mark Attendance</button>
//       </form>

//       {attendance.length === 0 && <p>No attendance records</p>}

//       {attendance.length > 0 && (
//         <ul>
//           {attendance.map((a, i) => (
//             <li key={i}>
//               {a.date} – {a.status}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }
// import { useEffect, useState } from "react";
// import { getEmployees } from "../services/employeeService";

// export default function Attendance() {
//   const [employees, setEmployees] = useState([]);
//   const [employeeId, setEmployeeId] = useState("");
//   const [status, setStatus] = useState("Present");

//   useEffect(() => {
//     getEmployees().then(setEmployees);
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Attendance marked: ${employeeId} - ${status}`);
//   };

//   return (
//     <div className="card">
//       <h2>Attendance</h2>

//       <form onSubmit={handleSubmit}>
//         <select value={employeeId} onChange={e => setEmployeeId(e.target.value)} required>
//           <option value="">Select Employee</option>
//           {employees.map(emp => (
//             <option key={emp.employee_id} value={emp.employee_id}>
//               {emp.full_name}
//             </option>
//           ))}
//         </select>

//         <select value={status} onChange={e => setStatus(e.target.value)}>
//           <option>Present</option>
//           <option>Absent</option>
//           <option>WFH</option>
//         </select>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { getEmployees } from "../services/employeeService";

export default function Attendance() {
  const [employees, setEmployees] = useState([]);
  const [employeeId, setEmployeeId] = useState("");
  const [status, setStatus] = useState("Present");

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await getEmployees();
        setEmployees(data || []);
      } catch (err) {
        console.error("Error fetching employees", err);
      }
    };

    fetchEmployees();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!employeeId) {
      alert("Please select an employee");
      return;
    }

    alert(`Attendance marked successfully`);
    setEmployeeId("");
    setStatus("Present");
  };

  return (
    <div className="page">
      <h2>Mark Attendance</h2>

      <form onSubmit={handleSubmit} className="form">
        <label>Employee</label>
        <select
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
        >
          <option value="">-- Select Employee --</option>
          {employees.map((emp) => (
            <option key={emp.employee_id} value={emp.employee_id}>
              {emp.full_name}
            </option>
          ))}
        </select>

        <label>Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
          <option value="WFH">WFH</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
