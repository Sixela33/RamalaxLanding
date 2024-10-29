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

  const handleJoin = async (e:any) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setMessage('');
    try {
      await addDoc(collection(db, 'waitlist'), { email });
      setMessage('Successfully joined the waitlist!');
      setEmail('');
    } catch (error) {
      setMessage('Failed to join the waitlist. Please try again.');
      console.error('Error adding document: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-800 text-white p-6 rounded-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Join the Waitlist</h2>
            <form onSubmit={handleJoin} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-700 text-gray-300 rounded-lg outline-none focus:border-green-400"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                disabled={isLoading}
              >
                {isLoading ? 'Joining...' : 'Join Waitlist'}
              </button>
            </form>
            {message && <p className="mt-4 text-sm text-center">{message}</p>}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-300 hover:text-white"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
