import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#projects", label: t.nav.projects },
    { href: "#experience", label: t.nav.experience },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#"
          className="text-2xl font-bold tracking-tight"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-primary">J</span>D
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ y: -2 }}
            >
              {link.label}
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <motion.button
            onClick={() => setLanguage(language === "en" ? "pt" : "en")}
            className="px-3 py-1.5 text-sm font-medium rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {language.toUpperCase()}
          </motion.button>

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-full border border-border"
            whileTap={{ scale: 0.9 }}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-4 mx-6 rounded-2xl overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
