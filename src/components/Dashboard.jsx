// import React from "react";

// function Dashboard() {
//     return (
//       <div className="row">
//         <div className="col-12">
//           <h1 className="h2 mb-4">Dashboard</h1>
//           <div className="row g-4">
//             <div className="col-md-3">
//               <div className="card">
//                 <div className="card-body">
//                   <h5 className="card-title">Total Patients</h5>
//                   <h2 className="mb-0">1,234</h2>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-3">
//               <div className="card">
//                 <div className="card-body">
//                   <h5 className="card-title">Active Tests</h5>
//                   <h2 className="mb-0">56</h2>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-3">
//               <div className="card">
//                 <div className="card-body">
//                   <h5 className="card-title">Pending Reports</h5>
//                   <h2 className="mb-0">23</h2>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-3">
//               <div className="card">
//                 <div className="card-body">
//                   <h5 className="card-title">QC Alerts</h5>
//                   <h2 className="mb-0">3</h2>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
  

//   export default Dashboard;


import React, { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

function Dashboard() {
  const [patientsCount, setPatientsCount] = useState(0);
  const [activeTestsCount, setActiveTestsCount] = useState(0);
  const [pendingReportsCount, setPendingReportsCount] = useState(0);
  const [qcAlertsCount, setQcAlertsCount] = useState(0);

  useEffect(() => {

    localStorage.setItem('patientsCount', '1500');
localStorage.setItem('activeTestsCount', '70');
localStorage.setItem('pendingReportsCount', '45');
localStorage.setItem('qcAlertsCount', '5');


    // Retrieve and parse data from localStorage
    const storedPatientsCount = parseInt(localStorage.getItem("patientsCount")) || 0;
    const storedActiveTestsCount = parseInt(localStorage.getItem("activeTestsCount")) || 0;
    const storedPendingReportsCount = parseInt(localStorage.getItem("pendingReportsCount")) || 0;
    const storedQcAlertsCount = parseInt(localStorage.getItem("qcAlertsCount")) || 0;

    setPatientsCount(storedPatientsCount);
    setActiveTestsCount(storedActiveTestsCount);
    setPendingReportsCount(storedPendingReportsCount);
    setQcAlertsCount(storedQcAlertsCount);
  }, []);

  // Pie chart data
  const pieData = {
    labels: ["Pending Reports", "Active Tests", "QC Alerts"],
    datasets: [
      {
        label: "Reports Overview",
        data: [pendingReportsCount, activeTestsCount, qcAlertsCount],
        backgroundColor: ["#FF5733", "#FF8D1A", "#F5A623"],
        borderColor: ["#FF5733", "#FF8D1A", "#F5A623"],
        borderWidth: 1,
      },
    ],
  };

  // Bar chart data
  const barData = {
    labels: ["Test A", "Test B", "Test C", "Test D", "Test E"],
    datasets: [
      {
        label: "Tests Stats",
        data: [12, 19, 3, 5, 2],
        backgroundColor: "#42A5F5",
        borderColor: "#1E88E5",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container mt-4">
      <h1 className="h2 mb-4">Dashboard</h1>

      {/* Cards Section */}
      <div className="row g-4">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Total Patients</h5>
              <h2 className="mb-0">{patientsCount}</h2>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Active Tests</h5>
              <h2 className="mb-0">{activeTestsCount}</h2>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Pending Reports</h5>
              <h2 className="mb-0">{pendingReportsCount}</h2>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">QC Alerts</h5>
              <h2 className="mb-0">{qcAlertsCount}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="row mt-4">
        {/* Pie Chart */}
        <div className="col-md-6">
          <h5>Reports Overview</h5>
          <div style={{ height: "300px" }}>
            <Pie
              data={pieData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: "top",
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Bar Chart */}
        <div className="col-md-6">
          <h5>Tests Stats</h5>
          <Bar
            data={barData}
            options={{
              responsive: true,
              maintainAspectRatio: true,
              plugins: {
                legend: {
                  position: "top",
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
