import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

// Create styles
interface Props {
  url: string;
}

// Create Document Component
export default function (props: Props) {
  return (
    <Document file={props.url}>
      <Page size="A4"></Page>
    </Document>
  );
}
