// Footer.js
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0a192f] text-gray-400 text-center py-6 mt-10">
      <div className="flex justify-center space-x-6 mb-4 text-teal-300 text-2xl">
        <a href="https://github.com/Varsha567" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-white transition" />
        </a>
        <a href="https://linkedin.com/in/mani-varsha-gubbala-554663248" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-white transition" />
        </a>
        <a href="mailto:varsha.gubbala@gmail.com">
          <FaEnvelope className="hover:text-white transition" />
        </a>
      </div>
      <p className="text-sm">&copy; 2025 Mani Varsha Gubbala. All rights reserved.</p>
    </footer>
  );
}
