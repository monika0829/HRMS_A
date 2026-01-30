export default function Employee() {
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="w-full max-w-xl bg-slate-800 rounded-2xl shadow-xl p-6">

        <h2 className="text-2xl font-semibold text-white mb-6">
          Add Employee
        </h2>
              <div className="page">
                <h2>Add Employee</h2>

                <div className="card">
                  <form className="form">
                    <input type="text" placeholder="Employee ID" />
                    <input type="text" placeholder="Employee Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="text" placeholder="Department" />

                    <button type="submit">Add Employee</button>
                  </form>
                </div>
             </div>

        <button
          className="w-full py-3 rounded-lg text-white font-medium
                     bg-gradient-to-r from-indigo-600 to-indigo-500
                     hover:from-indigo-500 hover:to-indigo-400
                     transition"
        >
          Add Employee
        </button>

      </div>
    </div>
  );
}
