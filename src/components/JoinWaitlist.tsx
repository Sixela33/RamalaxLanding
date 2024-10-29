import { useState } from 'react';
import { db } from '../firebase/FirebaseApp';
import { collection, addDoc } from 'firebase/firestore/lite';

type JoinWaitlistProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function JoinWaitlist({ isOpen, setIsOpen }: JoinWaitlistProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleJoin = async (e: any) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setMessage('');
    try {
      await addDoc(collection(db, 'waitlist'), { email });
      setIsSuccess(true);
      setMessage('Successfully joined the waitlist!');
      setEmail('');
    } catch (error) {
      setIsSuccess(false);
      setMessage('Failed to join the waitlist. Please try again.');
      console.error('Error adding document: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setMessage('')
    setIsOpen(false)
  }

  return (
    <>
      {isOpen && (
        <div 
          onClick={handleClose}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300">
          <div 
            onClick={e => e.stopPropagation()}
            className="bg-gray-900 text-white p-8 rounded-lg w-11/12 max-w-md shadow-xl ">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Join the Waitlist</h2>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-200 transition-all duration-200 hover:rotate-90"
              >
                X
              </button>
            </div>
            
            <h4 className="text-gray-300 mb-6">
              Be part of the future
            </h4>

            <form onSubmit={handleJoin} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-700 text-gray-300 rounded-lg outline-none focus:border focus:border-green-400 transition-colors"
                required
              />
              <button
                type="submit"
                className={`w-full px-4 py-2 rounded-lg text-white transition-colors ${
                  isLoading
                    ? 'bg-green-400 cursor-not-allowed'
                    : 'bg-green-500 hover:bg-green-600'
                }`}
                disabled={isLoading}
              >
                {isLoading ? 'Joining...' : 'Join Waitlist'}
              </button>
            </form>

            {message && (
              <p
                className={`mt-4 text-sm text-center transition-all duration-200 ${
                  isSuccess ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {message}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}