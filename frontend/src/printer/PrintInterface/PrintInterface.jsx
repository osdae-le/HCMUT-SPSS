import { useEffect, useState } from "react";
import "./Printinterface.css";
import { Button, Typography } from "@material-tailwind/react";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Set worker source for pdfjs
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;


const campus = ["II", "I"];
const building = {
  I: [
    "A1",
    "A2",
    "A3",
    "A4",
    "A5",
    "B1",
    "B2",
    "B3",
    "B4",
    "B5",
    "B6",
    "C4",
    "C5",
    "C6",
  ],
  II: ["H1", "H2", "H3", "H6"],
};

const pagesOptions = [
  {
    id: 1,
    value: "Tât cả",
  },
  {
    id: 2,
    value: "Chẵn",
  },
  {
    id: 3,
    value: "Lẻ",
  },
  {
    id: 4,
    value: "Tùy chỉnh",
  },
];

const pagerSize = [
  {
    id: 1,
    value: "A1",
  },
  {
    id: 2,
    value: "A2",
  },
  {
    id: 3,
    value: "A3",
  },
  {
    id: 4,
    value: "A4",
  },
];

const Print_control_panel = () => {
  const [numPages, setNumPages] = useState(null);
  const [step, setStep] = useState(1);
  const [printers, setPrinters] = useState([]);
  const [data, setData] = useState([]);
  const [file, setFile] = useState(null);
  const [activePage, setActivePage] = useState(1);

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedPrinter, setSelectedPrinter] = useState(null);
  const [printFile, setPrintFile] = useState({
    pagePerSheet: 1,
    startPage: 1,
    endPage: 1,
    pageOption: 1,
    orientation: "portrait",
    pageSize: "A4",
    copies: 1,
    printType: "color",
    printSides: "one-sided",
  });

  const [pageArray, setPageArray] = useState([]);

  const [location, setLocation] = useState({
    campus: "",
    building: "",
  });

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
          `http://localhost:5000/api/students/${user.id}/files`
        );
        const data = await response.json();
        console.log(data);
        const files = data.items.map((file) => {
          return {
            id: file.id,
            name: file.name,
            format: file.fileType,
            pages: file.pageNum,
            uploadDate: formatDate(file.createdAt),
          };
        });
        setData(files);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchPrinters = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/printers");
        const data = await response.json();
        console.log(data);
        setPrinters(data.items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPrinters();
    fetchHistory();
  }, []);

  // useEffect(() => {
  //   if (selectedFile) {
  //     console.log(selectedFile, data);
  //     const fileName = data.find((item) => item.id === selectedFile);
  //     console.log(fileName);

  //   }
  // }, [selectedFile, data]);

  const handleNext = () => {
    const fileName = data.find((item) => item.id == selectedFile).name;
    const fetchFile = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/aws/${fileName}`
        );
        const data = await response.json(); // return downloadUrl from s3 and fileName
        console.log(data);

        const response2 = await fetch(data.downloadURL);
        const blob = await response2.blob();
        const url = URL.createObjectURL(blob);
        setFile(url);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFile();
    setStep((prev) => prev + 1);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPrintFile((prev) => ({
      ...prev,
      pageOption: 1,
      endPage: numPages,
    }));
    setActivePage(1);
    setPageArray(Array.from(new Array(numPages), (_el, index) => index + 1));
  };

  useEffect(() => {
    if (selectedPrinter) {
      const printer = printers
        .filter((item) => {
          return (
            (location.campus === "" || item.campus === location.campus) &&
            (location.building === "" || item.building === location.building)
          );
        })
        .find((item) => item.id == selectedPrinter);

      if (!printer) {
        setSelectedPrinter(null);
      }
    }
  }, [location, selectedPrinter, printers]);

  console.log("location", location);
  console.log("file", file);

  const handleSubmit = async () => {
    console.log("selectedPrinter", selectedPrinter);
    const data = {
      pagePerSide: printFile.pagePerSheet,
      startPage: printFile.startPage,
      endPage: printFile.endPage,
      orientation: printFile.orientation === "portrait" ? "Portrait" : "Landscape",      
      pageSize: printFile.pageSize,
      copies: Number(printFile.copies),
      printType: printFile.printType === "color" ? "Colour" : "BlackAndWhite",
      printSide: printFile.printSides === "one-sided" ? "OneSide" : "TwoSide",
      printerId: Number(selectedPrinter),
      fileId: Number(selectedFile),
      customPageRanges: pageArray,
    };

    const response = await fetch("http://localhost:5000/api/printer-files", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const res = await response.json();

    if (response.ok) {
      console.log(res);
      alert("File uploaded successfully!");
      setFile(null);
      setActivePage(1);
      setStep(1);
      setNumPages(0);
    }

    
  };

  console.log("selectedPrinter", selectedPrinter);

  return (
    <div className="contain_container">
      <div className="flex w-[80%] mx-auto gap-x-6 my-[20px] flex-col">
        {step == 1 && (
          <form className="max-w-lg w-full mx-auto">
            <label
              htmlFor="file"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Chọn tài liệu đã tải lên
            </label>
            <select
              id="file"
              onChange={(e) => setSelectedFile(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {selectedFile == null && (
                <option selected>Chọn tài liệu đã tải lên</option>
              )}
              {data.map((item, index) => (
                <option key={index} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </form>
        )}

        <div
          className={`flex flex-col md:flex-row gap-2 my-6 ${
            step == 1 ? "justify-end" : "justify-between"
          }`}
        >
          {step > 1 && (
            <Button
              className="w-full lg:max-w-[15rem] bg-primary"
              onClick={() => setStep((prev) => prev - 1)}
            >
              Back
            </Button>
          )}
          {step < 2 && (
            <Button
              className="w-full lg:max-w-[15rem] bg-primary"
              onClick={handleNext}
              disabled={selectedFile == null}
            >
              Next
            </Button>
          )}
          {step === 2 && (
            <Button className="w-full lg:max-w-[15rem] bg-primary" onClick={handleSubmit}>
              Print
            </Button>
          )}
        </div>

        {step == 2 && (
          <div className="grid grid-cols-12 gap-x-6">
            <div className="border-primary border-[2px] rounded-[10px] col-span-5 !w-full pb-6 pt-2">
              <div>
                <h2 className="text-center text-2xl font-bold">
                  Print Setting
                </h2>
              </div>
              <div className="flex flex-col px-6 py-2">
                <div className="left-panel">
                  <label htmlFor="campus">Campus </label>
                  <select
                    id="campus"
                    value={location.campus}
                    onChange={(e) =>
                      setLocation({
                        campus: e.target.value,
                        building: "",
                      })
                    }
                  >
                    {location.campus == "" && (
                      <option selected>Chọn campus</option>
                    )}
                    {campus.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>

                  <label htmlFor="building">Building</label>
                  {location.campus !== "" ? (
                    <select
                      id="building"
                      value={location.building}
                      onChange={(e) => {
                        setLocation({
                          ...location,
                          building: e.target.value,
                        });
                      }}
                    >
                      {location.building == "" && (
                        <option selected>Chọn building</option>
                      )}
                      {building[location.campus].map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <p>Vui lòng chọn campus trước</p>
                  )}

                  <label htmlFor="printer">Máy in</label>
                  <select id="printer" value={selectedPrinter} onChange={(e)=>setSelectedPrinter(e.target.value)}>
                    {selectedPrinter == null && (
                      <option selected>Chọn máy in</option>
                    )}
                    {printers
                      .filter((item) => {
                        return (
                          (location.campus === "" ||
                            item.campus === location.campus) &&
                          (location.building === "" ||
                            item.building === location.building)
                        );
                      })
                      .map((item, index) => (
                        <option key={index} value={item.id}>
                          {item.name} -{" "}
                          {!location.campus ? `${item.campus} - ` : ""}{" "}
                          {!location.building ? `${item.building} - ` : ""}{" "}
                          {item.room}
                        </option>
                      ))}
                  </select>
                  <label htmlFor="pages">Trang</label>
                  <select
                    id="pages"
                    value={printFile.pageOption}
                    onChange={(e) => {
                      const value = e.target.value;
                      console.log(value);
                      setPrintFile((prev) => ({
                        ...prev,
                        pageOption: value,
                      }));
                      setActivePage(1);
                      if (value == 1) {
                        setPageArray(
                          Array.from(
                            new Array(numPages),
                            (_el, index) => index + 1
                          )
                        );
                      } else if (value == 2) {
                        setPageArray(
                          Array.from(
                            new Array(Math.floor(numPages / 2)),
                            (_el, index) => index * 2 + 2
                          )
                        );
                      } else if (value == 3) {
                        setPageArray(
                          Array.from(
                            new Array(Math.floor(numPages / 2)),
                            (_el, index) => index * 2 + 1
                          )
                        );
                      } else {
                        setPageArray(
                          Array.from(
                            new Array(numPages),
                            (_el, index) => index + 1
                          )
                        );
                      }
                    }}
                  >
                    {pagesOptions.map((item, index) => (
                      <option key={index} value={item.id}>
                        {item.value}
                      </option>
                    ))}
                  </select>
                  {printFile.pageOption == 4 && (
                    <input
                      type="text"
                      id="custom-pages"
                      onChange={(e) => {
                        const value = e.target.value;
                        console.log(value);
                        const regex = /^(\d+(-\d+)?)(,\d+(-\d+)?)*$/;
                        if (regex.test(value)) {
                          const ranges = value.split(",");
                          const result = [];

                          ranges.forEach((range) => {
                            if (range.includes("-")) {
                              // Handle ranges like "1-5"
                              const [start, end] = range.split("-").map(Number);
                              for (let i = start; i <= end; i++) {
                                result.push(i);
                              }
                            } else {
                              // Handle single numbers like "6"
                              result.push(Number(range));
                            }
                          });
                          result
                            .sort((a, b) => a - b)
                            .filter((item) => item <= numPages);
                          setPageArray(result);
                          setActivePage(1);
                        }
                      }}
                    />
                  )}
                  <label htmlFor="paper-size">Khổ giấy</label>
                  <select id="paper-size" value={printFile.pageSize}>
                    {pagerSize.map((item, index) => (
                      <option key={index} value={item.value}>
                        {item.value}
                      </option>
                    ))}
                  </select>
                </div>
                {/* <div className="divider"></div> */}
                <div className="right-panel !mt-4">
                  <label htmlFor="pages-per-sheet">Số trang mỗi tờ</label>
                  <select
                    id="pages-per-sheet"
                    value={printFile.pagePerSheet}
                    onChange={(e) => {
                      const value = e.target.value;
                      setPrintFile({
                        ...printFile,
                        pagePerSheet: value,
                      });
                    }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                    <option value="9">9</option>
                    <option value="16">16</option>
                  </select>

                  <label htmlFor="orientation">Hướng</label>
                  <select id="orientation" value={printFile.orientation}>
                    <option value="portrait">Portrait</option>
                    <option value="landscape">Landscape</option>
                  </select>

                  <label htmlFor="print-type">Loại in</label>
                  <select id="print-type" value={printFile.printType}>
                    <option value="color">Màu</option>
                    <option value="black-white">Đen trắng</option>
                  </select>

                  <label htmlFor="print-sides">In một/hai mặt </label>
                  <select
                    id="print-sides"
                    value={printFile.printSides}
                    onChange={(e) =>
                      setPrintFile({
                        ...printFile,
                        printSides: e.target.value,
                      })
                    }
                  >
                    <option value="one-sided">Một mặt</option>
                    <option value="two-sided">Hai mặt</option>
                  </select>

                  <label htmlFor="copies">Copies</label>
                  <input
                    id="copies"
                    type="number"
                    className="py-[4px] border-[1px] border-black rounded-[4px] px-2"
                    value={printFile.copies}
                    onChange={(e) =>
                      setPrintFile({ ...printFile, copies: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="footer !w-full !px-6 !py-2 !mx-0 !hidden">
                <p>
                  <span className="warning-icon">⚠️</span> Số giấy cần in nhiều
                  hơn số giấy hiện có <br /> Vui lòng mua đủ giấy trước khi in
                </p>
                <button
                  className="print-button"
                  onClick={() => alert("Đang thực hiện in. Vui lòng chờ...")}
                >
                  in
                </button>
              </div>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-6">
              {file && (
                <>
                  <Document
                    className={`${step !== 2 ? "hidden" : ""} w-fit mx-auto`}
                    file={file}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={(error) =>
                      console.error("Error loading PDF:", error)
                    }
                  >
                    {/* {Array.from(new Array(1), (_el, index) => ( */}
                    <Page
                      key={`page_${activePage}`}
                      pageNumber={pageArray[activePage - 1]}
                      width={400}
                    />
                  </Document>
                  <div className="flex justify-between gap-2 my-4">
                    <button
                      className="cursor-pointer"
                      onClick={() => setActivePage((prev) => prev - 1)}
                      disabled={activePage === 1}
                    >
                      Previous
                    </button>
                    <Typography color="gray" className="my-2 text-center">
                      Page: {activePage} of {pageArray.length}
                    </Typography>
                    <button
                      className="cursor-pointer"
                      onClick={() => setActivePage((prev) => prev + 1)}
                      disabled={activePage === pageArray.length}
                    >
                      Next
                    </button>
                  </div>
                </>
              )}
              <hr className="border-primary border-[2px] rounded-[10px] my-12" />
              <div className="grid grid-cols-2 w-full gap-6">
                <div>Pages each copy: </div>
                <div className="text-right">
                  {Math.round(
                    Math.round(pageArray.length / printFile.pagePerSheet) /
                      (printFile.printSides === "two-sided" ? 2 : 1)
                  )}{" "}
                  pages
                </div>
                <div>Total pages: </div>{" "}
                <div className="text-right">
                  {Math.round(
                    Math.round(pageArray.length / printFile.pagePerSheet) /
                      (printFile.printSides === "two-sided" ? 2 : 1)
                  ) * printFile.copies}{" "}
                  pages
                </div>
                <div>Your account balance: </div>
                <div className="text-right"> 1000 pages</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Print_control_panel;
