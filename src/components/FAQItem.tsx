import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface FAQItem {
    question: string;
    answer: string;
  }  

export function FAQItem({ question, answer }: FAQItem) {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
        <div className="border-b border-green-800">
            <button
            className="w-full py-6 px-4 flex items-center justify-between text-left hover:bg-black/20 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-medium text-emerald-400">{question}</span>
                {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-emerald-400" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-emerald-400" />
                )}
            </button>
            {isOpen && (
            <div className="px-4 pb-6 text-gray-300 leading-relaxed">
                {answer}
            </div>
            )}
      </div>
    );
  }