import CVPreview from "@/components/CVPreview";

export default function PreviewCV({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Preview Your CV</h1>
      <CVPreview id={params.id} />
    </div>
  );
}
