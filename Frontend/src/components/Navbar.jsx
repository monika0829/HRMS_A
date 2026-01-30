export default function Navbar({ setPage, activePage }) {
  return (
    <div className="w-64 bg-slate-800 text-white p-6 flex flex-col">
      <h2 className="text-2xl font-bold text-indigo-400 mb-8">
        HRMS
      </h2>

      {/* Employees Button */}
      <button
        onClick={() => setPage("employee")}
        className={`w-full py-3 rounded-lg text-white font-medium transition-all
          ${
            activePage === "employee"
              ? "bg-gradient-to-r from-indigo-600 to-indigo-500"
              : "bg-slate-700 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-indigo-400"
          }`}
      >
        Employees
      </button>

      {/* Attendance Button */}
      <button
        onClick={() => setPage("attendance")}
        className={`w-full py-3 rounded-lg text-white font-medium mt-3 transition-all
          ${
            activePage === "attendance"
              ? "bg-gradient-to-r from-indigo-600 to-indigo-500"
              : "bg-slate-700 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-indigo-400"
          }`}
      >
        Attendance
      </button>
    </div>
  );
}
