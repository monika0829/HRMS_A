import { useState } from "react";
import Navbar from "./components/Navbar";
import Employee from "./components/Employee";
import Attendance from "./components/Attendance";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("employee");

  return (
    <div className="flex min-h-screen bg-slate-900 text-white">
      
      {/* Sidebar */}
      <Navbar setPage={setPage} activePage={page} />

      {/* Main Content */}
      <main className="flex-1 p-6">
        {page === "employee" && <Employee />}
        {page === "attendance" && <Attendance />}
      </main>

    </div>
  );
}
