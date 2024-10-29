import React from 'react';
import { BookOpen, Coins, FileText } from 'lucide-react';
import GettingStarted from './GettingStarted/GettingStarted';
import HowItWorks from './GettingStarted/HowItWorks';
import { Stocks } from './Asset types/Stocks';
import { Bonds } from './Asset types/Bonds';
import { AssetBacking } from './Asset types/AssetBacking';
import { KYCRequirements } from './LegalYCompliance/KYCRequirements';
import { RegulatoryFramework } from './LegalYCompliance/RegulatoryFramework';
import { TermsOfService } from './LegalYCompliance/TermsOfService';

const sections = [
  {
    title: 'Getting Started',
    icon: BookOpen,
    items: [
      { title: 'What is Ramelax?', id: 'intro' },
      { title: 'How it Works', id: 'how-it-works' },
      { title: 'Creating an Account', id: 'account' },
    ],
  },
  {
    title: 'Asset Types',
    icon: Coins,
    items: [
      { title: 'Stocks', id: 'stocks' },
      { title: 'Bonds', id: 'bonds' },
      { title: 'Asset Backing', id: 'backing' },
    ],
  },
  {
    title: 'Legal & Compliance',
    icon: FileText,
    items: [
      { title: 'Regulatory Framework', id: 'regulatory' },
      { title: 'KYC Requirements', id: 'kyc' },
      { title: 'Terms of Service', id: 'terms' },
    ],
  },
];

export function DocsPage() {
  const [activeSection, setActiveSection] = React.useState('intro');

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex gap-12">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="sticky top-6">
              {sections.map((section) => (
                <div key={section.title} className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <section.icon className="h-5 w-5 text-green-400" />
                    <h3 className="font-semibold">{section.title}</h3>
                  </div>
                  <div className="flex flex-col gap-2">
                    {section.items.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveSection(item.id)}
                        className={`text-left px-4 py-2 rounded-lg transition-colors ${
                          activeSection === item.id
                            ? 'bg-green-500/20 text-green-400'
                            : 'text-gray-400 hover:text-green-400'
                        }`}
                      >
                        {item.title}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 max-w-3xl">
            <div className="prose prose-invert prose-green">
              <h1 className="text-4xl font-bold mb-8">Documentation</h1>

              {activeSection === 'intro' && <GettingStarted/>}

              {activeSection === 'how-it-works' && <HowItWorks/>}
              {activeSection === 'stocks' && <Stocks/>}
              {activeSection === 'bonds' && <Bonds/>}
              {activeSection === 'backing' && <AssetBacking/>}
              {activeSection === 'regulatory' && <RegulatoryFramework/>}
              {activeSection === 'kyc' && <KYCRequirements/>}  
              {activeSection === 'terms' && <TermsOfService/>}  
              {activeSection === 'account' && <TermsOfService/>}


              {/* Additional sections would follow the same pattern */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}