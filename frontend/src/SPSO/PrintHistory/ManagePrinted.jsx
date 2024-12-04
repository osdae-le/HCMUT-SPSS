import React, { useState, useEffect } from 'react';
import './MngPrintedFile.css';

function DocumentList() {
  const [totalDocuments, setTotalDocuments] = useState(0);
  const [documentData, setDocumentData] = useState([]);

  useEffect(() => {
    const fetchDocumentData = async () => {
      const data = [
        { id: 1, name: 'Capstone_Project_Autumn_2024', format: 'PDF', date: '30/9/2024 - 18:38', pages: 5, size: 'A4', sides: 2 },
        { id: 2, name: 'Capstone_Project_Autumn_2023', format: 'PDF', date: '30/9/2024 - 18:38', pages: 5, size: 'A4', sides: 2 },
        { id: 3, name: 'Capstone_Project_Autumn_2023', format: 'WORD', date: '30/9/2024 - 18:38', pages: 5, size: 'A4', sides: 2 },
        { id: 4, name: 'Capstone_Project_Autumn_2023', format: 'PPTS', date: '30/9/2024 - 18:38', pages: 5, size: 'A4', sides: 2 },
        { id: 5, name: 'Capstone_Project_Autumn_2023', format: 'XLXS', date: '30/9/2024 - 18:38', pages: 5, size: 'A4', sides: 2 },
        { id: 6, name: 'Capstone_Project_Autumn_2023', format: 'PDF', date: '30/9/2024 - 18:38', pages: 5, size: 'A4', sides: 2 },
      ];

      setDocumentData(data);
      setTotalDocuments(data.length);
    };

    fetchDocumentData();
  }, []);

  return (
    <div className="container">
      <div className="header-filters">
        <div className="header">
          <h2>Tổng: {totalDocuments}</h2> {/* Hiển thị tổng số tài liệu động */}
        </div>
        <div className="filters">
          <div className="filter-group date-group">
            <div className="input-container">
              <label htmlFor="date">Ngày in</label>
              <input type="date" id="date" />
              <span>-</span>
              <input type="date" id="date-end" />
            </div>
            <div className="checkbox-container">
              <input type="checkbox" id="all-date" />
              <label htmlFor="all-date">Tất cả</label>
            </div>
          </div>
          <div className="filter-group mssv-group">
            <div className="input-container">
              <label htmlFor="mssv">MSSV</label>
              <input type="text" id="mssv" />
            </div>
            <div className="checkbox-container">
              <input type="checkbox" id="all-mssv" />
              <label htmlFor="all-mssv">Tất cả</label>
            </div>
          </div>
          <div className="filter-group paper-size-group">
            <div className="input-container">
              <label htmlFor="paper-size">Khổ giấy</label>
              <select id="paper-size">
                <option>Chọn</option>
                <option>A0</option>
                <option>A1</option>
                <option>A2</option>
                <option>A3</option>
                <option>A4</option>
                <option>A5</option>
              </select>
            </div>
            <div className="checkbox-container">
              <input type="checkbox" id="all-paper" />
              <label htmlFor="all-paper">Tất cả</label>
            </div>
          </div>
          <div className="filter-group printer-group">
            <div className="input-container">
              <label htmlFor="printer">Máy in</label>
              <input type="text" id="printer" />
            </div>
            <div className="checkbox-container">
              <input type="checkbox" id="all-printer" />
              <label htmlFor="all-printer">Tất cả</label>
            </div>
          </div>
          <button className="filter-button">Lọc</button>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên tài liệu</th>
            <th>Định dạng</th>
            <th>Ngày in</th>
            <th>Số trang</th>
            <th>Khổ giấy</th>
            <th>Mặt/tờ</th>
          </tr>
        </thead>
        <tbody>
          {documentData.map((doc, index) => (
            <tr key={doc.id}>
              <td><p>{index + 1}</p></td>
              <td><p>{doc.name}</p></td>
              <td><p>{doc.format}</p></td>
              <td><p>{doc.date}</p></td>
              <td><p>{doc.pages}</p></td>
              <td><p>{doc.size}</p></td>
              <td><p>{doc.sides}</p></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DocumentList;
