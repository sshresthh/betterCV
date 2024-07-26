
'use client'

import React, { useEffect, useState } from 'react'
import { CV } from '@/types'
import { cvToLatex } from '@/lib/cvToLatex'

interface LaTeXPreviewProps {
  cv: CV
}

export function LaTeXPreview({ cv }: LaTeXPreviewProps) {
  const [latex, setLatex] = useState('')

  useEffect(() => {
    setLatex(cvToLatex(cv))
  }, [cv])

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-2">LaTeX Preview</h2>
      <pre className="whitespace-pre-wrap font-mono text-sm">
        {latex}
      </pre>
    </div>
  )
}