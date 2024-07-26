// app/api/generate-pdf/route.ts
import { NextResponse } from 'next/server'
import { getCV } from '@/lib/cvOperations'
import { generatePDF } from '@/lib/pdfGenerator' // You'll need to implement this

export async function POST(req: Request) {
  try {
    const { id } = await req.json()
    
    // Fetch CV data
    const cv = await getCV(id)
    
    // Generate PDF
    const pdfBuffer = await generatePDF(cv.content)
    
    // Create a Blob from the PDF Buffer
    const blob = new Blob([pdfBuffer], { type: 'application/pdf' })
    
    // Create a response with the PDF
    return new NextResponse(blob, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="cv_${id}.pdf"`,
      },
    })
  } catch (error) {
    console.error('Error generating PDF:', error)
    return NextResponse.json({ error: 'Failed to generate PDF' }, { status: 500 })
  }
}
