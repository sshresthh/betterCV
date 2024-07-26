import { CV } from "@/types";

export function cvToLatex(cv: CV): string {
  let latex = `
\\documentclass{resume}
\\usepackage[left=0.75in,top=0.6in,right=0.75in,bottom=0.6in]{geometry}

\\name{${cv.personalInfo.name}}
\\address{
  ${cv.personalInfo.email} \\\\
  ${cv.personalInfo.phone} \\\\
  ${cv.personalInfo.address}
}

\\begin{document}

\\begin{rSection}{Summary}
${cv.summary}
\\end{rSection}

\\begin{rSection}{Education}
${cv.education
  .map(
    (edu) => `
  \\textbf{${edu.institution}} \\hfill ${edu.year}
  \\\\
  ${edu.degree}
`
  )
  .join("\n")}
\\end{rSection}

\\begin{rSection}{Experience}
${cv.experience
  .map(
    (exp) => `
  \\textbf{${exp.company}} \\hfill ${exp.startDate} - ${exp.endDate}
  \\\\
  \\textit{${exp.position}}
  \\\\
  ${exp.description}
`
  )
  .join("\n")}
\\end{rSection}

\\begin{rSection}{Skills}
${cv.skills.map((skill) => `${skill.name} (${skill.level})`).join(", ")}
\\end{rSection}

\\end{document}
`;

  return latex;
}
