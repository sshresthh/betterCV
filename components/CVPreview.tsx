"use client";

import { getCV } from "@/lib/cvOperations";
import { CV } from "@/types";
import { useEffect, useState } from "react";

export function CVPreview({ id }: { id: string }) {
  const [cv, setCV] = useState<CV | null>(null);

  useEffect(() => {
    const fetchCV = async () => {
      const fetchedCV = await getCV(id);
      setCV(fetchedCV.content);
    };
    fetchCV();
  }, [id]);

  if (!cv) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4 border rounded shadow-lg">
      <h1 className="text-3xl font-bold mb-4">{cv.title}</h1>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Personal Information</h2>
        <p>{cv.personalInfo.name}</p>
        <p>{cv.personalInfo.email}</p>
        <p>{cv.personalInfo.phone}</p>
        <p>{cv.personalInfo.address}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Summary</h2>
        <p>{cv.summary}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Education</h2>
        {cv.education.map((edu, index) => (
          <div key={index} className="mb-2">
            <p className="font-bold">{edu.institution}</p>
            <p>{edu.degree}</p>
            <p>{edu.year}</p>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Experience</h2>
        {cv.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <p className="font-bold">{exp.company}</p>
            <p>{exp.position}</p>
            <p>
              {exp.startDate} - {exp.endDate}
            </p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Skills</h2>
        {cv.skills.map((skill, index) => (
          <div key={index} className="mb-1">
            <span className="font-bold">{skill.name}: </span>
            <span>{skill.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
