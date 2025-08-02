import { motion } from "framer-motion";

interface HeaderProps {
  title?: string;
}

function Header({ title = "Bog" }: HeaderProps) {
  const navItems = [
    { label: "merch", href: "https://store.fun/bog" },
    { label: "unbogline", href: "https://jup.ag/tokens/EXgaZEkfdJMGhaK6uMcC7qnsFodEsdaLii8p442ppump" },
    { label: "bog yourself", href: "https://t.me/THEBOGFOUNDRY" },
    { label: "lore", href: "#" },
    { label: "X", href: "https://x.com/bogeveryone" },
    { label: "instagram", href: "https://www.instagram.com/bog__sol/" },
  ];

  return (
    <motion.header 
      className="sticky top-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10 shadow-xl"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Title */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-8 h-8 rounded-lg overflow-hidden">
              <img 
                src="/bog.jpg" 
                alt="Bog Logo" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-gray-300 hover:text-white transition-colors duration-200"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              className="text-gray-300 hover:text-white p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;