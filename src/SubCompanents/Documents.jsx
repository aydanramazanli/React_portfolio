import React from 'react'
//import { Document, Page, pdfjs } from "react-pdf";
import { Document, Page} from 'react-pdf/dist/esm/entry.webpack'
import cv from '../assets/documents/Aydan Samedova- front end developer .pdf'
import { pdfjs } from 'react-pdf';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const Documents = () => {
  return (
    <Document file={cv}   onLoadError={console.error}>
    <Page height='600' pageNumber={1} />
    </Document>
  )
}

export default Documents