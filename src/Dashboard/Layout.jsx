import React from 'react'
import Sidebar from './Sidebar.jsx'
import Header from './Header.jsx'
import Page from './Page.jsx'
import { useState } from 'react'

const DLayout = ({ onPdfSelect }) => {

  const [fetchKey, setFetchKey] = useState(0);

  const handlePdfUploadComplete = () => {
    setFetchKey((prevKey) => prevKey + 1);
  };

  return (
    <div>
      <div className='md:w-64 h-screen fixed'>
        <Sidebar onPdfUploadComplete={handlePdfUploadComplete}/>
      </div>
      <div className='md:ml-64'>
        <Header />
        <div className='mt-5 ml-10'>
          <Page onPdfSelect={onPdfSelect} fetchKey={fetchKey} />
        </div>
      </div>
    </div>
  )
}

export default DLayout