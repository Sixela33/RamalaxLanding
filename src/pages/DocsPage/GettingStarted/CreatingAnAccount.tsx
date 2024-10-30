

export default function CreatingAnAccount() {
  return (
    <section id="account" className="bg-gray-800/50 rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-6">Creating an Account</h2>
      <p className="text-gray-400 mb-6">
        Follow these steps to create a Ramelax account and gain access to the Argentine financial markets through our
        tokenized platform.
      </p>

      <div className="space-y-6">
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Step 1: Register</h3>
          <p className="text-gray-400">
            Go to the Ramelax registration page and provide your email address, a secure password, and accept our
            terms of service. You’ll receive a verification email to confirm your registration.
          </p>
        </div>

        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Step 2: Complete KYC Verification</h3>
          <p className="text-gray-400">
            To ensure regulatory compliance, all users are required to complete KYC (Know Your Customer) verification.
            Upload a valid ID and proof of address, which will be verified by our team within 24 hours.
          </p>
        </div>

        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Step 3: Fund Your Account</h3>
          <p className="text-gray-400">
            Once your account is verified, you can fund it using supported payment methods. Funds will be reflected
            in your account, allowing you to start trading tokenized Argentine assets.
          </p>
        </div>

        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Step 4: Start Trading</h3>
          <p className="text-gray-400">
            You’re all set! Browse available assets on Ramelax, place trades, and begin building your portfolio.
            Enjoy access to fractional ownership and real-time trading on the Argentine market.
          </p>
        </div>
      </div>
    </section>
  );
}
