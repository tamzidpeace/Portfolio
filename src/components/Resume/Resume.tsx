import { useState, useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import pdfUrl from "../../Assets/Arafat_Kamal_CV.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function Resume() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState<number>();


  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <section className="min-h-screen relative py-20">      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Download Button */}
        <div className="flex justify-center mb-8">
          <a
            href={pdfUrl}
            download="Arafat_Kamal_CV.pdf"
            className="btn-primary flex items-center space-x-2 cursor-pointer"
          >
            <AiOutlineDownload className="text-lg" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden border border-slate-200">
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={
                <div className="p-8 text-center text-slate-600">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-4"></div>
                  Loading PDF...
                </div>
              }
              error={
                <div className="p-8 text-center text-red-600">
                  Error loading PDF
                </div>
              }
            >
              {Array.from(new Array(numPages), (_, index) => (
                <div key={`page_${index + 1}`} className="mb-5 last:mb-0">
                  <Page
                    pageNumber={index + 1}
                    scale={width > 1200 ? 1.2 : width > 786 ? 1.0 : 0.8}
                    loading={
                      <div className="p-8 text-center text-slate-600">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-4"></div>
                        Loading page...
                      </div>
                    }
                    renderTextLayer={true}
                    renderAnnotationLayer={true}
                    className="border-b border-slate-200 last:border-b-0"
                  />
                </div>
              ))}
            </Document>
          </div>
        </div>

        {/* Second Download Button */}
        <div className="flex justify-center">
          <a
            href={pdfUrl}
            download="Arafat_Kamal_CV.pdf"
            className="btn-primary flex items-center space-x-2"
          >
            <AiOutlineDownload className="text-lg" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}