"use client";

export function PDFViewer({ url }: { url: string }) {
  return <iframe src={url} className="w-full h-screen" />;
}
