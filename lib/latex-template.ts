// lib/latex-template.ts
export function fillLatexTemplate(template: string, data: any) {
  // TODO: Implement template filling logic
  return template.replace(/{{(\w+)}}/g, (_, key) => data[key] || "");
}
