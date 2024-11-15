import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import RamelaxLogo from './RamelaxLogo';
import { HashLink } from 'react-router-hash-link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Resources', href: '/#resources' },
    { name: 'Partners', href: '/#partners' },
    { name: 'Docs', href: '/docs#nav' },
    { name: 'FAQ', href: '/faq#nav' },
  ];

  return (
    <>
    <nav id='nav' className="w-full bg-black/80 backdrop-blur-md z-50 border-b border-green-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <RamelaxLogo/>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <HashLink
              key={link.name}
              to={link.href}
              className="text-gray-300 hover:text-green-400 transition-colors"
              >
                {link.name}
              </HashLink>
            ))}
            <a 
              target='_blank'
              href='https://tally.so/r/w5qlAM'
              className="bg-green-500 hover:bg-green-600 text-black font-semibold py-2 px-4 rounded-lg transition-all transform hover:scale-105">
                Early Access
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-green-400 transition-colors"
              >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-green-900/50">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-green-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  >
                  {link.name}
                </a>
              ))}
              <a 
                target='_blank'
                href='https://tally.so/r/w5qlAM'
                className="bg-green-500 hover:bg-green-600 text-black font-semibold py-2 px-4 rounded-lg transition-all transform hover:scale-105">
                  Early Access
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
        </>
  );
}