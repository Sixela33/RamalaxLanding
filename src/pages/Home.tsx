import { useState } from 'react';
import { Banknote, BarChart3, Lock } from 'lucide-react';
import { Feature } from '../components/Feature';
import { Stat } from '../components/Stat';
import { ResourceButton } from '../components/ResourceButton';
import Footer from '../components/Footer';
import JoinWaitlist from '../components/JoinWaitlist';
import ContactForm from '../components/ContactForm';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      <JoinWaitlist
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(22,163,74,0.1)_0%,transparent_65%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 relative">
          <div className="text-center space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-8">
              Investing in Argentina was Never Easier
            </h1>
            <p className="text-xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Invest in Argentina's future through blockchain-powered tokenized stocks and bonds with automatic dividend distribution
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                target='_blank'
                href='https://tally.so/r/w5qlAM'
                className="bg-green-500 hover:bg-green-600 text-black font-bold py-5 px-10 rounded-lg text-xl transition-all transform hover:scale-105">
                Start Investing
              </a>
              <a href='#resources'>
                <button className="border border-green-500 text-green-400 hover:bg-green-500/10 font-bold py-5 px-10 rounded-lg text-xl transition-all">
                    Learn More
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>



      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24" id="markets">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <Feature 
            icon={<Banknote className="w-8 h-8 text-green-400" />}
            title="Automated Dividends"
            description="Receive dividends directly to your wallet in real-time, powered by smart contracts"
          />
          <Feature 
            icon={<BarChart3 className="w-8 h-8 text-green-400" />}
            title="Market Access"
            description="Trade tokenized Argentine stocks and bonds 24/7 with instant settlement"
          />
          <Feature 
            icon={<Lock className="w-8 h-8 text-green-400" />}
            title="Secure Platform"
            description="Built on blockchain technology ensuring transparency and security"
          />
        </div>
      </div>

        {/* Stats Section */}
        <div className="border-y border-green-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <Stat number="$1M+" label="Total average daily volume in 2022" />
                <Stat number="100+" label="Tradeable assets" />
                <Stat number="99.9%" label="Platform Uptime" />
            </div>
            </div>
        </div>


        {/* Partners Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24" id="partners">
            <h2 className="text-3xl font-bold text-center mb-12">Trusted Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
            <img 
                src={"/Alchemy.svg"}
                alt="Alchemy"
                className="w-full h-12 object-contain opacity-50 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"/>
            <img 
                src={"/Alpaca.svg"}
                alt="Alpaca"
                className="w-full h-12 object-contain opacity-50 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"/>
            <img 
                src={"/Base.svg"}
                alt="Base"
                className="w-full h-12 object-contain opacity-50 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"
            />
            <img 
                src={"/ChainLink.svg"}
                alt="ChainLink"
                className="w-full h-12 object-contain opacity-50 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"
            />
            </div>
        </div>

        {/* Resources Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24" id="resources">
            <h2 className="text-3xl font-bold text-center mb-12">Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ResourceButton
                title="Whitepaper"
                description="Learn about our technology, tokenomics, and vision for the future"
                href="/docs"
            />
            <ResourceButton
                title="Documentation"
                description="Learn about our technology, tokenomics, and vision for the future"
                href="/docs"
            />
            <ResourceButton
                title="FAQ"
                description="Common questions about our platform and services"
                href="/faq"
            />
            </div>
        </div>

        <ContactForm/>

        <Footer/>
    </div>

  );
}

export default App;