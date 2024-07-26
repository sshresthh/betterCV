"use client";
import { useEffect, useState } from "react";
import PDFViewer from "./PDFViewer";

export function CVPreview({ id }: { id: string }) {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  useEffect(() => {
    // TODO: Fetch PDF URL from API
    setPdfUrl(`/api/pdf/${id}`);
  }, [id]);

  return pdfUrl ? <PDFViewer url={pdfUrl} /> : <div>Loading...</div>;
}
