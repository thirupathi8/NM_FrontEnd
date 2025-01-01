import React from 'react'

const PdfViewer = ({ fileUrl }) => {
  const pdfUrl = `${fileUrl}#toolbar=0`;
  return (
    <div>
      <iframe src={pdfUrl} className='h-[100vh]' width="100%"></iframe>
    </div>
  )
}

export default PdfViewer
