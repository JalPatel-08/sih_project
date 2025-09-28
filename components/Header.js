import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Notification from "./Notification";

// Import icons from Material-UI
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EventIcon from "@mui/icons-material/Event";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CreateIcon from "@mui/icons-material/Create";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const router = useRouter();
  const { data: session } = useSession();
  const userRole = session?.user?.role || localStorage.getItem('role') || 'user';

  useEffect(() => setMounted(true), []);

  const navigationItems = [
    { href: "/dashboard", Icon: DashboardIcon, text: "Dashboard" },
    { href: "/posts", Icon: CreateIcon, text: "Posts" },
    { href: "/events", Icon: EventIcon, text: "Events" },
    { href: "/connect", Icon: PeopleIcon, text: "Connect" },
    { href: "/jobs", Icon: WorkIcon, text: "Jobs" },
    { href: "/resources", Icon: MenuBookIcon, text: "Resources" },
    { href: "/news", Icon: NewspaperIcon, text: "News" },
  ];
  
  // Add admin link only for admin users
  if (userRole === 'admin') {
    navigationItems.push({ href: "/admin", Icon: DashboardIcon, text: "Admin" });
  }

  const NavLink = ({ href, Icon, text }) => {
    const isActive = router.pathname === href;
    return (
      <Link href={href}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            isActive
              ? "bg-blue-600 text-white"
              : "text-gray-300 hover:text-white hover:bg-gray-700/50"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        >
          <Icon className="h-5 w-5" />
          <span className="text-sm font-medium">{text}</span>
        </motion.div>
      </Link>
    );
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-40 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center"
              >
                <Image
                  src="/campusconnect-logo.svg"
                  alt="AlumniSetu Logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                  priority
                />
                <span className="ml-3 text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  AlumniSetu
                </span>
              </motion.div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* Notification Component */}
            <Notification />

            {/* Theme Toggle */}
            {mounted && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                {resolvedTheme === "dark" ? (
                  <LightModeIcon className="h-5 w-5 text-yellow-400" />
                ) : (
                  <DarkModeIcon className="h-5 w-5 text-gray-700" />
                )}
              </motion.button>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <CloseIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 space-y-2"
            >
              {navigationItems.map((item) => (
                <NavLink key={item.href} {...item} />
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;