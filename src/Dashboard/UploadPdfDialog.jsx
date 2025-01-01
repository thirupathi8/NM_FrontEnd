import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogClose,
    DialogDescription,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { storage } from '@/firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useUser } from '@clerk/clerk-react';

const UploadPdfDialog = ({ children, onUploadComplete  }) => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(false);
    const { user } = useUser();

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!file || !user) return;

        setLoading(true);

        const storageRef = ref(storage, `pdfs/${file.name}`);
        try {
            const snapshot = await uploadBytes(storageRef, file);
            const url = await getDownloadURL(snapshot.ref);

            const data = {
                userId: user.id,
                title: title,
                fileUrl: url,
            };

            const response = await fetch(import.meta.env.VITE_ADD_PDF_LINK, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            setLoading(false);
            if (onUploadComplete) {
                onUploadComplete();
              }
            document.querySelector('[data-dialog-close]').click();
        
        } catch (error) {
            console.error("Error uploading file:", error);
            setLoading(false);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Upload PDF File</DialogTitle>
                    <DialogDescription asChild>
                        <div className=''>
                            <h2 className='mt-5'>Select a file to Upload</h2>
                            <div className='flex gap-2 p-3 rounded-md border'>
                                <input type="file" onChange={handleFileChange} accept='application/pdf' />
                            </div>
                            <div className='mt-5'>
                                <label>File Name *</label>
                                <Input placeholder="File Name" onChange={(e) => setTitle(e.target.value)} />
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-end">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary" data-dialog-close>
                            Close
                        </Button>
                    </DialogClose>
                    <Button onClick={handleUpload} disabled={loading} className="relative flex items-center justify-center">
                        {loading ? (
                            <span className="absolute w-4 h-4 border-2 border-t-transparent border-gray-500 rounded-full animate-spin"></span>
                        ) : (
                            "Upload"
                        )}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default UploadPdfDialog;
