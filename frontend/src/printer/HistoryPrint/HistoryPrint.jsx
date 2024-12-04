import React, { useEffect } from "react";
import styles from "./HistoryPrint.module.css";
const data = [
  {
    STT: 1,
    tenTaiLieu: "Capstone_Project_Autumn_2023",
    dinhDang: "PDF",
    ngayIn: "30/9/2024 - 18:38",
    soTrang: 5,
    khoGiay: "A4",
    matTo: 2,
  },
  {
    STT: 2,
    tenTaiLieu: "Capstone_Project_Autumn_2024",
    dinhDang: "PNG",
    ngayIn: "03/11/2024 - 10:10",
    soTrang: 12,
    khoGiay: "A5",
    matTo: 1,
  },
  {
    STT: 3,
    tenTaiLieu: "Capstone_Project_Autumn_2025",
    dinhDang: "DOCX",
    ngayIn: "11/11/2024 - 12:00",
    soTrang: 4,
    khoGiay: "A3",
    matTo: 2,
  },
  {
    STT: 4,
    tenTaiLieu: "Capstone_Project_Autumn_2026",
    dinhDang: "EXE",
    ngayIn: "01/10/2024 - 08:08",
    soTrang: 3,
    khoGiay: "A4",
    matTo: 2,
  },
  {
    STT: 5,
    tenTaiLieu: "Capstone_Project_Autumn_2027",
    dinhDang: "PPTX",
    ngayIn: "24/9/2024 - 13:45",
    soTrang: 7,
    khoGiay: "A4",
    matTo: 2,
  },
  {
    STT: 6,
    tenTaiLieu: "Capstone_Project_Autumn_2028",
    dinhDang: "PDF",
    ngayIn: "16/11/2024 - 15:15",
    soTrang: 22,
    khoGiay: "A3",
    matTo: 4,
  },
  {
    STT: 7,
    tenTaiLieu: "Capstone_Project_Autumn_2023",
    dinhDang: "PDF",
    ngayIn: "30/9/2024 - 18:38",
    soTrang: 5,
    khoGiay: "A4",
    matTo: 2,
  },
  {
    STT: 8,
    tenTaiLieu: "Capstone_Project_Autumn_2024",
    dinhDang: "PNG",
    ngayIn: "03/11/2024 - 10:10",
    soTrang: 12,
    khoGiay: "A5",
    matTo: 1,
  },
  {
    STT: 9,
    tenTaiLieu: "Capstone_Project_Autumn_2025",
    dinhDang: "DOCX",
    ngayIn: "11/11/2024 - 12:00",
    soTrang: 4,
    khoGiay: "A3",
    matTo: 2,
  },
  {
    STT: 10,
    tenTaiLieu: "Capstone_Project_Autumn_2026",
    dinhDang: "EXE",
    ngayIn: "01/10/2024 - 08:08",
    soTrang: 3,
    khoGiay: "A4",
    matTo: 2,
  },
  {
    STT: 11,
    tenTaiLieu: "Capstone_Project_Autumn_2027",
    dinhDang: "PPTX",
    ngayIn: "24/9/2024 - 13:45",
    soTrang: 7,
    khoGiay: "A4",
    matTo: 2,
  },
  {
    STT: 12,
    tenTaiLieu: "Capstone_Project_Autumn_2028",
    dinhDang: "PDF",
    ngayIn: "16/11/2024 - 15:15",
    soTrang: 22,
    khoGiay: "A3",
    matTo: 4,
  },
];

const History_print = () => {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      return;
    }
    const formatDate = (dateString) => {
      const options = { day: "2-digit", month: "2-digit", year: "2-digit" };
      return new Date(dateString).toLocaleDateString("en-GB", options);
    };

    const fetchHistory = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/students/${user.id}/printer-history`
        );
        const data = await response.json();
        console.log(data);
        const res = [];
        data.forEach((element) => {
          const files = element.printerFiles.map((file, index) => {
            return {
              STT: res.length + index + 1,
              tenTaiLieu: element.name,
              dinhDang: element.fileType,
              ngayIn: formatDate(file.createdAt),
              soTrang: file.customPageRanges
                ? file.customPageRanges.length
                : file.endPage - file.startPage + 1,
              khoGiay: file.pageSize,
              matTo: file.pagePerSide,
            };
          });
          res.push(...files);
        });
        console.log(res);
        setData(res);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className={styles.container}>
      <table className={`${styles.table} w-full`}>
        <thead>
          <tr>
            <td colSpan="7" className={styles.totalCount}>
              Tổng: {data.length}
            </td>
          </tr>
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
          {data.map((item, index) => (
            <tr key={index}>
              <td className="text-center">{index + 1}</td>
              <td className="text-center">{item.tenTaiLieu}</td>
              <td className="text-center">{item.dinhDang}</td>
              <td className="text-center">{item.ngayIn}</td>
              <td className="text-center">{item.soTrang}</td>
              <td className="text-center">{item.khoGiay}</td>
              <td className="text-center">{item.matTo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History_print;
