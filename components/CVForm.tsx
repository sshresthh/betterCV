"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function CVForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    // Add more fields as needed
  });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Send data to API and get CV ID
    const response = await fetch("/api/generate-pdf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const { id } = await response.json();
    router.push(`/cv/preview/${id}`);
  };
}
