import Login from "./Login_page/Login.jsx";
import Printer_Header from "./printer/Header/Header.jsx";
import Printer_Navbar from "./printer/Navbar/Navbar.jsx";
import Printer_Menu from "./printer/Menu/Menu.jsx";
import Printer_File_manage from "./printer/File_manage/File_manage.jsx";
import Printer_Money from "./printer/Buy/money.jsx";
import Printer_History_pay from "./printer/Buy/history_pay.jsx";
import Printer_HistoryPrint from "./printer/HistoryPrint/HistoryPrint.jsx";
import Printer_PrintInterface from "./printer/PrintInterface/PrintInterface.jsx";
// -----------------------------------------//
import SPSO_Menu from "./SPSO/Menu/Menu.jsx";
import SPSO_Header from "./SPSO/Header/Header.jsx";
import SPSO_Setting from "./SPSO/Setting/Setting.jsx";
import SPSO_Navbar from "./SPSO/Navbar/Navbar.jsx";
import SPSO_PrinterManage from "./SPSO/PrinterManage/printer.jsx";
import SPSO_Report from "./SPSO/Report/SummaryReport.jsx";
import SPSO_HistoryPrint from "./SPSO/PrintHistory/ManagePrinted.jsx";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import PrivateRoutes from "./components/PrivateRoutes.jsx";
import AddNewFile from "./printer/File/AddNewFile.jsx";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Printer_Header />

          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<Printer_Menu />} />
              <Route
                path="/PfileManage"
                element={
                  <>
                    <Printer_Navbar />
                    <Printer_File_manage />
                  </>
                }
              />
              <Route
                path="/Ppayment"
                element={
                  <>
                    <Printer_Navbar />
                    <Printer_Money />
                    <Printer_History_pay />{" "}
                  </>
                }
              />
              <Route
                path="/Pprint"
                element={
                  <>
                    <Printer_Navbar />
                    <Printer_PrintInterface />
                  </>
                }
              />
              <Route
                path="/Phistory"
                element={
                  <>
                    <Printer_Navbar />
                    <Printer_HistoryPrint />
                  </>
                }
              />
              <Route
                path="/Pfile"
                element={
                  <>
                    <Printer_Navbar />
                    <AddNewFile />
                  </>
                }
              />

              <Route
                path="/Shistory"
                element={
                  <>
                    <SPSO_Navbar />
                    <SPSO_HistoryPrint />
                  </>
                }
              />
              <Route
                path="/Ssetting"
                element={
                  <>
                    <SPSO_Navbar />
                    <SPSO_Setting />
                  </>
                }
              />
              <Route
                path="/SprinterManage"
                element={
                  <>
                    <SPSO_Navbar />
                    <SPSO_PrinterManage />
                  </>
                }
              />
              <Route
                path="/Sreport"
                element={
                  <>
                    <SPSO_Navbar />
                    <SPSO_Report />
                  </>
                }
              />
            </Route>
            <Route
              path="/login"
              element={
                <>
                  <Login />
                </>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
