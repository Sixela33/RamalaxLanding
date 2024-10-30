import RamelaxLogo from './RamelaxLogo'
import {HashLink} from 'react-router-hash-link'

export default function Footer() {
  return (
    <footer className="border-t border-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <RamelaxLogo/>
            <div className="flex gap-8 text-gray-400">
            <HashLink to="/faq#nav" className="hover:text-green-400">About</HashLink>
            <HashLink to="/docs#nav" className="hover:text-green-400">Documentation</HashLink>
            <HashLink to="/#resources" className="hover:text-green-400">Contact</HashLink>
            </div>
        </div>
        </div>
    </footer>
  )
}
