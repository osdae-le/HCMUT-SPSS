import { useState } from "react";
import { Button, Typography } from "@material-tailwind/react";
import logo from "../assets/logo.svg";
import upload from "../assets/uploadIcon.svg";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Set worker source for pdfjs
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;

export function AddNewFile() {
  const [numPages, setNumPages] = useState(null);
  const [file, setFile] = useState(null);
  const [step, setStep] = useState(1);
  const [activePage, setActivePage] = useState(1);

  // Load PDF document and set page count
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  // Handle PDF file selection
  const handleChangeFile = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  // Convert file to a blob URL for Document component
  const fileBlobUrl = file ? URL.createObjectURL(file) : null;

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/aws", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      const bodyData = {
        name: data.key.split("/")[1],
        fileType: "PDF",
        pageNum: numPages,
        size: file.size,
        studentId: user.id,
      };

      const res = await fetch("http://localhost:5000/api/files", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
      });

      if (res.ok) {
        alert("File uploaded successfully!");
        setFile(null);
        setActivePage(1);
        setStep(1);
        setNumPages(0);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="w-[80vw] mx-auto">
      <div
        className={`${
          step > 1 && "hidden"
        } flex justify-center w-full flex-col`}
      >
        <div className="w-fit mx-auto">
          <img
            alt="Image Icon"
            className="rounded-t-md"
            src={logo}
            width={200}
            height={100}
          />
        </div>
        <h3 className="block antialiased tracking-normal font-sans text-3xl font-semibold leading-snug w-full text-center text-black mb-4">
          Upload new file here!
        </h3>
      </div>
      <div className={`${step > 1 && "hidden"}`}>
        <h5 className="antialiased tracking-normal font-sans text-xl font-semibold leading-snug flex items-center text-black mb-2">
          * Upload File
        </h5>
        <label className="max-w-[600px] mx-auto flex justify-center items-center cursor-pointer !border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent focus-within:!border-gray-900 focus-within:!border-t-gray-900 h-12 rounded-lg bg-[#F0F0F0]">
          <p className="antialiased font-sans text-base font-light leading-relaxed text-normal flex items-center">
            Upload file
            <img
              alt="Upload Icon"
              width="12"
              height="12"
              className="h-4 w-5 ml-2"
              src={upload}
            />
          </p>
          <input
            type="file"
            accept="application/pdf"
            className="hidden"
            onChange={handleChangeFile}
          />
        </label>
        {file && (
          <Typography color="gray" className="my-2 text-center">
            PDF File: {file.name}
          </Typography>
        )}
      </div>

      <div
        className={`flex flex-col md:flex-row gap-2 my-2 ${
          step == 1 ? "justify-end" : "justify-center"
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
            onClick={() => setStep((prev) => prev + 1)}
          >
            Next
          </Button>
        )}
        {step === 2 && (
          <Button
            className="w-full lg:max-w-[15rem] bg-primary"
            onClick={handleUpload}
          >
            Upload
          </Button>
        )}
      </div>
      {fileBlobUrl && (
        <>
          <div className="flex justify-between gap-2 my-4">
            <button
              className="cursor-pointer"
              onClick={() => setActivePage((prev) => prev - 1)}
              disabled={activePage === 1}
            >
              Previous
            </button>
            <Typography color="gray" className="my-2 text-center">
              Page: {activePage} of {numPages}
            </Typography>
            <button
              className="cursor-pointer"
              onClick={() => setActivePage((prev) => prev + 1)}
              disabled={activePage === numPages}
            >
              Next
            </button>
          </div>
          <Document
            className={`${step !== 2 ? "hidden" : ""} w-fit mx-auto`}
            file={fileBlobUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={(error) => console.error("Error loading PDF:", error)}
          >
            {/* {Array.from(new Array(1), (_el, index) => ( */}
            <Page
              key={`page_${activePage}`}
              pageNumber={activePage}
              width={800}
            />
          </Document>
        </>
      )}
    </div>
  );
}

export default AddNewFile;
