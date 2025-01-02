import React from 'react'
import { useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import PdfViewer from '@/Workspace/PdfViewer.jsx';

const Page = ({ onPdfSelect, fetchKey }) => {
  const { user } = useUser();
  const userId = user.id;
  const [pdfs, setPdfs] = useState([]);

  const fetchPdfs = async () => {
    try {
      const result = await fetch(`${import.meta.env.VITE_GET_PDF_LINK}${userId}`);
      if (!result.ok) {
        throw new Error('Failed to fetch PDFs');
      }
      const data = await result.json();
      setPdfs(data.result);
    } catch (error) {
      console.error("Error fetching PDFs:", error);
    }
  };

  useEffect(() => {
    fetchPdfs();
  }, [fetchKey, userId]);

  return (
    <div className='m-10'>
      <h2 className='font-medium text-3xl'>Workspace</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10'>
        {pdfs.length > 0 ? pdfs?.map((pdf, index) => (
          <div key={index} onClick={() => onPdfSelect(pdf)} className='flex p-5 shadow-md rounded-md flex-col items-center justify-center border cursor-pointer hover:scale-105 transition-all'>
            <img src="/pdf.png" alt="pdf" width={50} height={50} />
            <h2 className='mt-3 font-medium text-lg'>{pdf.title}</h2>
          </div>
        )) : ([1, 2, 3, 4, 5, 6, 7].map((item, index) => (
          <div key={index} className='bg-slate-200 rounded-md h-[100px] animate-pulse'></div>
        )))}
      </div>
    </div>
  )
}

export default Page
