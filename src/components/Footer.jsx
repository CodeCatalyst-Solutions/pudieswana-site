import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-gray-400 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Bottom row: logo left, columns right */}
        <div className="flex justify-between items-start">
          <span className="text-white font-bold text-lg">Pudieswana</span>

          <div className="grid grid-cols-2 md:grid-cols-4 text-left">
            <div>
              <h4 className="text-white font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-white">About</Link></li>
                <li><Link to="/services" className="hover:text-white">Services</Link></li>
                <li><Link to="/projects" className="hover:text-white">Projects</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Solutions</h4>
              <ul className="space-y-2 text-sm">
                <li>Engineering</li>
                <li>Mining</li>
                <li>Supply</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Industries</h4>
              <ul className="space-y-2 text-sm">
                <li>Construction</li>
                <li>Transportation</li>
                <li>Cleaning</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>Kuruman, South Africa</li>
                <li>info@pudieswana.co.za</li>
                <li className="text-purple-400">Built by CodeCatalyst Solutions</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
