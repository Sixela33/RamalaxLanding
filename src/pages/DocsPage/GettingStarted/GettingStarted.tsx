import { ArrowRight } from 'lucide-react'

export default function GettingStarted() {
  return (
    <section id="intro">
        <h2 className="text-2xl font-bold mb-6">What is Ramelax?</h2>
        <p className="text-gray-400 mb-6">
            Ramelax is Argentina's premier asset tokenization platform, enabling investors worldwide to access
            Argentine financial markets through blockchain technology. We transform traditional financial assets into
            digital tokens, making investment more accessible, transparent, and efficient.
        </p>
        <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
        <ul className="space-y-4">
            {[
            'Fractional ownership of premium Argentine assets',
            'Automated dividend distributions in stablecoins',
            'Real-time trading and instant settlement',
            '24/7 market access',
            ].map((benefit, i) => (
            <li key={i} className="flex items-center gap-3">
                <ArrowRight className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">{benefit}</span>
            </li>
            ))}
        </ul>
        </div>
    </section>
  )
}
