import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-gray-400 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <hr className="border-white/10 mb-12" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-10">
          <div className="flex items-center gap-2">
            <img
              src="/pudieswana-logo.png"
              alt="Pudieswana"
              className="h-8 w-8 object-contain"
            />
            <span className="text-white font-bold text-lg">
              Pudieswana Engineering & Mining
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-left w-full sm:w-auto">
            <div>
              <h4 className="text-white font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="hover:text-white">
                    Projects
                  </Link>
                </li>
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
                <li>Randfontein, Gauteng, South Africa</li>
                <li>
                  <a
                    href="mailto:info@pudieswana.co.za"
                    className="hover:text-white"
                  >
                    info@pudieswana.co.za
                  </a>
                </li>
                <li className="text-purple-400">
                  Built by CodeCatalyst Solutions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
