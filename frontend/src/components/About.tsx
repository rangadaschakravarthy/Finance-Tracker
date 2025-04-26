import React from "react";
import { Info, Github, Mail } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <div className="flex items-center mb-4">
        <Info className="text-blue-500 mr-2" />
        <h2 className="text-2xl font-bold">About This App</h2>
      </div>
      <p className="text-gray-700 mb-4">
        This personal finance tracker helps you manage your monthly income and expenses
        efficiently. You can log your daily expenses, calculate remaining balances,
        and carry forward savings month-to-month.
      </p>
      <p className="text-gray-700 mb-4">
        Built using <strong>React</strong>, <strong>TypeScript</strong>, and <strong>MongoDB</strong>,
        with a sleek UI powered by <strong>Tailwind CSS</strong> and <strong>Lucide Icons</strong>.
      </p>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Contact & Links</h3>
        <div className="flex flex-col gap-2">
          <a href="mailto:you@example.com" className="flex items-center text-blue-600 hover:underline">
            <Mail className="mr-2" /> rangadaschakravarthy76@gmail.com
          </a>
          <a href="https://github.com/rangadaschakravarthy/Finance-Tracker" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:underline">
            <Github className="mr-2" /> GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
