import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import GettingStarted from './GettingStarted/GettingStarted';
import HowItWorks from './GettingStarted/HowItWorks';
import { Stocks } from './Asset types/Stocks';
import { Bonds } from './Asset types/Bonds';
import { AssetBacking } from './Asset types/AssetBacking';
import { KYCRequirements } from './LegalYCompliance/KYCRequirements';
import { RegulatoryFramework } from './LegalYCompliance/RegulatoryFramework';
import { TermsOfService } from './LegalYCompliance/TermsOfService';
import { Sidebar } from '../../components/Sidebar';

export function DocsPage() {
  const [activeSection, setActiveSection] = useState('intro');
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case 'intro':
        return <GettingStarted />;
      case 'how-it-works':
        return <HowItWorks />;
      case 'stocks':
        return <Stocks />;
      case 'bonds':
        return <Bonds />;
      case 'backing':
        return <AssetBacking />;
      case 'regulatory':
        return <RegulatoryFramework />;
      case 'kyc':
        return <KYCRequirements />;
      case 'terms':
        return <TermsOfService />;
      case 'account':
        return <TermsOfService />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      <div className="container mx-auto px-4 sm:px-6 py-8">
        {/* Toggle Button */}
        <button
          className="md:hidden flex items-center gap-2 text-green-400 mb-4"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <X /> : <Menu />}
          <span>{isSidebarOpen ? 'Close Menu' : 'Open Menu'}</span>
        </button>

        <div className="md:flex md:gap-12">
          <Sidebar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            isSidebarOpen={isSidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />

          {/* Main Content */}
          <div className="flex-1 max-w-3xl">
            <div className="prose prose-invert prose-green">
              <h1 className="text-4xl font-bold mb-8">Documentation</h1>
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocsPage;