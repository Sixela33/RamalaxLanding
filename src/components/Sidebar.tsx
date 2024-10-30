import { BookOpen, Coins, FileText } from 'lucide-react' 

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

type SidebarProps = {
    activeSection: string;
    setActiveSection: (sectionId: string) => void;
    isSidebarOpen: boolean;
    setSidebarOpen: (isOpen: boolean) => void;
}

export const Sidebar = ({ activeSection, setActiveSection, isSidebarOpen, setSidebarOpen }:SidebarProps) => (
    <div className={`
      fixed md:relative top-0 left-0 h-full
      w-64 md:w-auto
      bg-gray-900 md:bg-transparent
      z-50 md:z-auto
      transform transition-transform duration-300 ease-in-out
      ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      overflow-y-auto
      md:block
    `}>
      <div className="sticky top-6 p-4 md:p-0">
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
                  onClick={() => {
                    setActiveSection(item.id);
                    setSidebarOpen(false);
                  }}
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
  );