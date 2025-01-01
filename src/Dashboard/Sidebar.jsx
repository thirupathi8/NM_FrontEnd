import React from 'react'
import { Button } from '@/components/ui/button'
import { LayoutIcon } from 'lucide-react'
import UploadPdfDialog from './UploadPdfDialog'


const Sidebar = ({ onPdfUploadComplete  }) => {
    return (
        <div style={{ boxShadow: '0 4px 6px rgba(153, 153, 153)' }} className='p-7 h-screen'>
            <img src="src\assets\logo.svg" alt="logo" width={120} height={120} />
            <div className='mt-10'>
                <UploadPdfDialog onUploadComplete={onPdfUploadComplete}>
                    <Button className="w-full">+ Upload PDF</Button>
                </UploadPdfDialog>

                <div className='flex gap-2 items-center p-3 mt-5 hover:bg-slate-100 rounded-lg cursor-pointer'>
                    <LayoutIcon />
                    <h2>Workspace</h2>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
