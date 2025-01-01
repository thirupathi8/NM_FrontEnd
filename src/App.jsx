import { useState, useEffect } from 'react'
import { useUser } from '@clerk/clerk-react';
import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';
import './App.css'
import DLayout from './Dashboard/Layout.jsx';
import WLayout from './Workspace/Layout';
import SignUp from './SingUp/SignUp.jsx';

function App() {

  const { user, isLoaded } = useUser();
  const [selectedPdf, setSelectedPdf] = useState(null);

  const handleAddUser = async () => {
    if (!user) return;

    const userData = {
      id: user.id,
      email: user.primaryEmailAddress?.emailAddress,
      firstName: user.firstName,
      lastName: user.lastName,
      profileImage: user.imageUrl,
    };

    await fetch(import.meta.env.VITE_ADD_USER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

  };

  useEffect(() => {
    if (user) {
      handleAddUser();
    }
  }, [user]);

  const handlePdfSelect = (pdf) => {
    setSelectedPdf(pdf);
  };
  return (
    <>
      <SignedOut>
        <SignUp />
      </SignedOut>
      <SignedIn>
      {selectedPdf ? (
          <WLayout pdf={selectedPdf} onBack={() => setSelectedPdf(null)} />
        ) : (
          <DLayout onPdfSelect={handlePdfSelect} />
        )}
      </SignedIn>
    </>
  )
}

export default App
