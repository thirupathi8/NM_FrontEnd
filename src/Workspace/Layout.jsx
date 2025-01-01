import React from 'react'
import Header from './Header.jsx'
import PdfViewer from './PdfViewer.jsx'
import TextEditor from './TextEditor.jsx'

const WLayout = ({ pdf, onBack }) => {
  return (
    <div>
      <Header />
      <div className='grid grid-cols-2 gap-5'>
        <div>
          <TextEditor pdfId={pdf._id}/>
        </div>
        <div>
          <PdfViewer fileUrl={pdf.fileURL} />
        </div>
      </div>
    </div>
  )
}

export default WLayout
