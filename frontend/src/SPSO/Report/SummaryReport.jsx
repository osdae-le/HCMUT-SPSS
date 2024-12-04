import React, { useState, useEffect } from 'react';
import './SummaryReport.css'; 

function Dashboard() {
  const [storageUsed, setStorageUsed] = useState(0);
  const [storageTotal, setStorageTotal] = useState(0);
  const [totalPrints, setTotalPrints] = useState(0);
  const [totalAccess, setTotalAccess] = useState(0);
  const [accessData, setAccessData] = useState([]);

  useEffect(() => {
    setStorageUsed(1234);
    setStorageTotal(1235);
    setTotalPrints(3000);
    setTotalAccess(10000);
    setAccessData([10000, 1000, 3000, 2000, 5000, 10000, 6000, 9000, 8000, 7000, 4000, 2000]);
  }, []);

  const printingData = [
    { type: 'A4', width: '50%', value: Math.round(totalPrints * 0.5), percentage: '50%' },
    { type: 'A3', width: '25%', value: Math.round(totalPrints * 0.25), percentage: '25%' },
    { type: 'A2', width: '12%', value: Math.round(totalPrints * 0.12), percentage: '12%' },
    { type: 'A1', width: '8%', value: Math.round(totalPrints * 0.08), percentage: '8%' },
    { type: 'A0', width: '5%', value: Math.round(totalPrints * 0.05), percentage: '5%' },
  ];

  return (
    <div className="container">
      <div className="top-section">
        <div className="filter-section">
          <h3 className="section-title">Lọc theo</h3>
          <form className="filter-form">
            <div className="form-group">
              <label htmlFor="month">Tháng</label>
              <select id="month">
                <option value="all">Tất cả</option>
                {[...Array(12).keys()].map((month) => (
                  <option key={month + 1} value={month + 1}>
                    Tháng {month + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="year">Năm</label>
              <input type="number" id="year" placeholder="YYYY" />
            </div>
            <button type="submit">Áp dụng</button>
          </form>
        </div>

        <div className="storage-section">
          <h3 className="section-title">Lưu trữ hệ thống</h3>
          <div className="storage-value">
            {storageUsed}/{storageTotal}
            <div className="unitGB">(GB)</div>
          </div>
        </div>
      </div>

      <div className="printing-section">
        <h2>In ấn</h2>
        <div className="chart-bar-container">
          <div className="chart-bar">
            {printingData.map((data, index) => (
              <div key={index} className={`bar ${data.type.toLowerCase()}`} style={{ width: data.width }}></div>
            ))}
          </div>
          <div className="chart-summary">
            <p>Tổng: {totalPrints} (tờ)</p>
          </div>
          <div className="legend">
            {printingData.map((data, index) => (
              <div className="legend-item" key={index}>
                <div className={`legend-color ${data.type.toLowerCase()}`}></div> {data.type}: {data.percentage} <br /> {data.value}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="access-section">
        <h2>Truy cập</h2>
        <div className="chart-access-container">
          <div className="chart-access">
            {accessData.map((value, index) => (
              <div key={index} className="access-bar" style={{ height: `${(value / totalAccess) * 100}%` }}>
                <span className="value">{value}</span>
              </div>
            ))}
          </div>
          <div className="chart-labels">
            {['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'].map((label, index) => (
              <span key={index}>{label}</span>
            ))}
          </div>
          <p className="total-access">Biểu đồ lượng truy cập theo tháng năm 2024</p>
          <p className="total-access">Tổng: {totalAccess}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
