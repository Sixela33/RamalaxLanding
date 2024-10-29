import React from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../components/FAQItem';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
    {
      question: "What is Ramelax?",
      answer: "Ramelax is an innovative platform that brings the stock market to the blockchain, allowing users to invest in fractional shares of real stocks through tokenized assets. With Ramelax, users can buy, sell, and trade tokens that represent portions of stocks, making traditional stock market investments more accessible and adaptable to varying budgets."
    },
    {
      question: "How does tokenization work on Ramelax?",
      answer: "Tokenization on Ramelax involves creating digital tokens that represent shares of publicly traded stocks. Each token corresponds to a fraction of a share, enabling users to participate in the stock market with lower minimum investments than traditional brokerage services."
    },
    {
      question: "Which stock markets does Ramelax support?",
      answer: "Ramelax currently offers tokenized stocks from the U.S. and Argentine stock markets. We're actively exploring other markets, and the platform's expansion will depend on user interest and demand."
    },
    {
      question: "Are there any dividends for token holders?",
      answer: "Yes, token holders may be eligible to receive dividends if the underlying stock pays them. Ramelax distributes dividends to token holders in proportion to the number of tokens they hold. Dividend payments are processed in stablecoins, such as USDC, to ensure seamless transactions on the blockchain."
    },
    {
      question: "Is Ramelax regulated?",
      answer: "Ramelax is committed to regulatory compliance and collaborates with legal and financial experts to ensure adherence to securities laws and other regulations in the markets where it operates. Our goal is to maintain full transparency and security for our users."
    },
    {
      question: "How can I create an account on Ramelax?",
      answer: "To create an account, visit the Ramelax website, click on 'Sign Up,' and complete the registration process. We require KYC (Know Your Customer) verification to ensure compliance with regulatory standards and enhance security for all users."
    },
    {
      question: "How do I purchase tokens on Ramelax?",
      answer: "Once registered and verified, you can deposit funds into your Ramelax wallet and choose the stocks you wish to invest in. The platform allows direct purchase of fractional shares through tokenized assets."
    },
    {
      question: "Can I trade my tokens with other users?",
      answer: "Yes, Ramelax enables peer-to-peer (P2P) trading among whitelisted users, allowing them to buy, sell, or trade their stock tokens directly on the platform. This flexibility enhances liquidity and makes it easier for users to adjust their portfolios."
    },
    {
      question: "Is my investment secure on Ramelax?",
      answer: "Ramelax prioritizes user security, implementing robust protocols including two-factor authentication (2FA), encryption, and secure storage. We constantly monitor and update our security practices to protect user assets and data."
    },
    {
      question: "What cryptocurrencies are supported for deposits?",
      answer: "Currently, Ramelax supports USDC (USD Coin) deposits for purchasing tokens. Additional cryptocurrencies may be considered in the future to expand funding options for users."
    },
    {
      question: "How are dividends distributed on Ramelax?",
      answer: "If the underlying stock of a token pays dividends, Ramelax will distribute those dividends to token holders proportionally. Dividend payments are generally processed in USDC to maintain ease of use within the platform."
    },
    {
      question: "How can I track my investment performance on Ramelax?",
      answer: "You can monitor the performance of your tokenized assets directly on your dashboard, which provides real-time price updates, dividend records, and a history of your transactions. We also offer portfolio insights to help you make informed decisions."
    },
    {
      question: "Can I withdraw my funds from Ramelax?",
      answer: "Yes, you can withdraw funds from your Ramelax account at any time, subject to any applicable withdrawal fees and verification processes. Funds can be withdrawn in USDC, with plans to add additional withdrawal options in the future."
    },
    {
      question: "Are there any fees for using Ramelax?",
      answer: "Ramelax applies a small transaction fee for trading, which helps cover operational costs and maintain the platform. Detailed fee information is available on our website and in your account settings."
    },
    {
      question: "How does Ramelax ensure the token’s backing by real stocks?",
      answer: "Ramelax holds the equivalent shares in a custodial account to match the number of tokens issued, ensuring each token is fully backed by real assets. This approach allows users to participate in stock market growth with peace of mind about the underlying assets."
    }
];
  

function FaqPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-12">
          <HelpCircle className="w-10 h-10 text-emerald-400" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
        </div>
        
        <div className="space-y-1 bg-black/50 rounded-xl border border-emerald-900/50 backdrop-blur-sm">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <p className="mt-8 text-center text-gray-400">
          Can't find what you're looking for?{' '}
          <a href="#" className="text-emerald-400 hover:text-emerald-300 transition-colors">
            Contact our support team
          </a>
        </p>
      </div>
    </div>
  );
}

export default FaqPage;