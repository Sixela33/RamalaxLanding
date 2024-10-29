import React from 'react';

export function KYCRequirements() {
  return (
    <div id="kyc" className="bg-gray-800/50 rounded-xl p-6 mb-6">
      <h3 className="text-xl font-semibold mb-4">KYC Requirements</h3>
      <p className="text-gray-400">
        To comply with anti-money laundering (AML) regulations, all users must complete Know Your Customer (KYC) verification. 
        This ensures a safe trading environment by confirming user identity and reducing fraud.
      </p>
    </div>
  );
}
