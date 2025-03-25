import React, { useState, useEffect } from 'react';
import { auth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from '../firebase';

export default function Login() {
  const [email, setEmail] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const actionCodeSettings = {
      url: window.location.origin + '/dashboard',
      handleCodeInApp: true,
    };
    await sendSignInLinkToEmail(auth, email, actionCodeSettings);
    window.localStorage.setItem('emailForSignIn', email);
    alert('Magic link sent! Check your inbox.');
  };

  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      const storedEmail = window.localStorage.getItem('emailForSignIn');
      if (storedEmail) {
        signInWithEmailLink(auth, storedEmail, window.location.href).then(() => {
          window.location.href = '/dashboard';
        });
      }
    }
  }, []);

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
      <h1 className='text-2xl font-bold mb-4'>Partner Portal Login</h1>
      <form onSubmit={handleLogin} className='bg-white p-6 rounded shadow-md'>
        <input type='email' className='border p-2 mb-4 w-full' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type='submit' className='bg-blue-600 text-white px-4 py-2 rounded w-full'>Send Magic Link</button>
      </form>
    </div>
  );
}
