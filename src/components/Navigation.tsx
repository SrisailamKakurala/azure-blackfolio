
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-primary">DEV</Link>
          <div className="flex space-x-8">
            <Link to="/" className="text-sm text-gray-300 hover:text-white transition-colors">HOME</Link>
            <Link to="/projects" className="text-sm text-gray-300 hover:text-white transition-colors">PROJECTS</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
