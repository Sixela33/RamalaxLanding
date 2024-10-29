import { Shield, Banknote, Building2 } from 'lucide-react'

export default function HowItWorks() {
  return (
    <section id="how-it-works">
    <h2 className="text-2xl font-bold mb-6">How it Works</h2>
    <div className="space-y-8">
      <div className="bg-gray-800/50 rounded-xl p-6">
        <div className="flex items-center gap-4 mb-4">
          <Shield className="h-8 w-8 text-green-400" />
          <h3 className="text-xl font-semibold">Asset Custody</h3>
        </div>
        <p className="text-gray-400">
          Traditional assets are held by our licensed custodian partners, ensuring 1:1 backing for all tokens.
          Each token represents direct ownership of the underlying asset.
        </p>
      </div>
      <div className="bg-gray-800/50 rounded-xl p-6">
        <div className="flex items-center gap-4 mb-4">
          <Banknote className="h-8 w-8 text-green-400" />
          <h3 className="text-xl font-semibold">Dividend Distribution</h3>
        </div>
        <p className="text-gray-400">
          When companies pay dividends, they are automatically distributed to token holders' wallets in
          stablecoins, providing instant access to earnings.
        </p>
      </div>
      <div className="bg-gray-800/50 rounded-xl p-6">
        <div className="flex items-center gap-4 mb-4">
          <Building2 className="h-8 w-8 text-green-400" />
          <h3 className="text-xl font-semibold">Regulatory Compliance</h3>
        </div>
        <p className="text-gray-400">
          Our platform operates under full compliance with Argentine securities regulations and international
          standards for digital assets.
        </p>
      </div>
    </div>
  </section>
  )
}
