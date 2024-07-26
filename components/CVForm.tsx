// components/CVForm.tsx
"use client";

import { createCV, getCV, updateCV } from "@/lib/cvOperations";
import { CV, Education, Experience, Skill } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function CVForm({ id }: { id?: string }) {
  const [formData, setFormData] = useState<CV>({
    title: "",
    personalInfo: { name: "", email: "", phone: "", address: "" },
    summary: "",
    education: [],
    experience: [],
    skills: [],
  });
  const router = useRouter();

  useEffect(() => {
    if (id) {
      fetchCV();
    }
  }, [id]);

  const fetchCV = async () => {
    if (id) {
      const cv = await getCV(id);
      setFormData(cv.content);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (id) {
        await updateCV(id, formData);
      } else {
        await createCV(formData);
      }
      router.push("/dashboard");
    } catch (error) {
      console.error("Error saving CV:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [name]: value,
      },
    }));
  };

  const addEducation = () => {
    setFormData((prev) => ({
      ...prev,
      education: [...prev.education, { institution: "", degree: "", year: "" }],
    }));
  };

  const updateEducation = (
    index: number,
    field: keyof Education,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      education: prev.education.map((edu, i) =>
        i === index ? { ...edu, [field]: value } : edu
      ),
    }));
  };

  const addExperience = () => {
    setFormData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    }));
  };

  const updateExperience = (
    index: number,
    field: keyof Experience,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp, i) =>
        i === index ? { ...exp, [field]: value } : exp
      ),
    }));
  };

  const addSkill = () => {
    setFormData((prev) => ({
      ...prev,
      skills: [...prev.skills, { name: "", level: "Beginner" }],
    }));
  };

  const updateSkill = (index: number, field: keyof Skill, value: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.map((skill, i) =>
        i === index ? { ...skill, [field]: value } : skill
      ),
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-4">
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="CV Title"
        className="w-full p-2 mb-4 border rounded"
      />

      <h2 className="text-xl font-bold mb-2">Personal Information</h2>
      <input
        name="name"
        value={formData.personalInfo.name}
        onChange={handlePersonalInfoChange}
        placeholder="Full Name"
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        name="email"
        value={formData.personalInfo.email}
        onChange={handlePersonalInfoChange}
        placeholder="Email"
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        name="phone"
        value={formData.personalInfo.phone}
        onChange={handlePersonalInfoChange}
        placeholder="Phone"
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        name="address"
        value={formData.personalInfo.address}
        onChange={handlePersonalInfoChange}
        placeholder="Address"
        className="w-full p-2 mb-4 border rounded"
      />

      <h2 className="text-xl font-bold mb-2">Summary</h2>
      <textarea
        name="summary"
        value={formData.summary}
        onChange={handleChange}
        placeholder="Professional Summary"
        className="w-full p-2 mb-4 border rounded"
        rows={4}
      />

      <h2 className="text-xl font-bold mb-2">Education</h2>
      {formData.education.map((edu, index) => (
        <div key={index} className="mb-4">
          <input
            value={edu.institution}
            onChange={(e) =>
              updateEducation(index, "institution", e.target.value)
            }
            placeholder="Institution"
            className="w-full p-2 mb-2 border rounded"
          />
          <input
            value={edu.degree}
            onChange={(e) => updateEducation(index, "degree", e.target.value)}
            placeholder="Degree"
            className="w-full p-2 mb-2 border rounded"
          />
          <input
            value={edu.year}
            onChange={(e) => updateEducation(index, "year", e.target.value)}
            placeholder="Year"
            className="w-full p-2 mb-2 border rounded"
          />
        </div>
      ))}
      <button
        type="button"
        onClick={addEducation}
        className="bg-green-500 text-white p-2 rounded mb-4"
      >
        Add Education
      </button>

      <h2 className="text-xl font-bold mb-2">Experience</h2>
      {formData.experience.map((exp, index) => (
        <div key={index} className="mb-4">
          <input
            value={exp.company}
            onChange={(e) => updateExperience(index, "company", e.target.value)}
            placeholder="Company"
            className="w-full p-2 mb-2 border rounded"
          />
          <input
            value={exp.position}
            onChange={(e) =>
              updateExperience(index, "position", e.target.value)
            }
            placeholder="Position"
            className="w-full p-2 mb-2 border rounded"
          />
          <input
            value={exp.startDate}
            onChange={(e) =>
              updateExperience(index, "startDate", e.target.value)
            }
            placeholder="Start Date"
            className="w-full p-2 mb-2 border rounded"
          />
          <input
            value={exp.endDate}
            onChange={(e) => updateExperience(index, "endDate", e.target.value)}
            placeholder="End Date"
            className="w-full p-2 mb-2 border rounded"
          />
          <textarea
            value={exp.description}
            onChange={(e) =>
              updateExperience(index, "description", e.target.value)
            }
            placeholder="Description"
            className="w-full p-2 mb-2 border rounded"
            rows={3}
          />
        </div>
      ))}
      <button
        type="button"
        onClick={addExperience}
        className="bg-green-500 text-white p-2 rounded mb-4"
      >
        Add Experience
      </button>

      <h2 className="text-xl font-bold mb-2">Skills</h2>
      {formData.skills.map((skill, index) => (
        <div key={index} className="mb-2">
          <input
            value={skill.name}
            onChange={(e) => updateSkill(index, "name", e.target.value)}
            placeholder="Skill Name"
            className="w-full p-2 mb-2 border rounded"
          />
          <select
            value={skill.level}
            onChange={(e) => updateSkill(index, "level", e.target.value)}
            className="w-full p-2 mb-2 border rounded"
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Expert">Expert</option>
          </select>
        </div>
      ))}
      <button
        type="button"
        onClick={addSkill}
        className="bg-green-500 text-white p-2 rounded mb-4"
      >
        Add Skill
      </button>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Save CV
      </button>
    </form>
  );
}
