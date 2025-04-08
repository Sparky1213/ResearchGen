import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';
import logo1 from './logo.png';
const navItems = [
  { label: 'About', path: '/about' },
  { label: 'Presentations', path: '/presentations' },
  { label: 'Podcasts', path: '/podcasts' },
  { label: 'Shorts/Reel', path: '/shorts' },
  { label: 'Comic/Story', path: '/comic' },
];

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className=" top-0 left-0 right-0 z-50 bg-white dark:bg-[#382D76] shadow-md"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img 
              src={logo1}
              // alt="Logo" 
              className="h-16 w-auto cursor-pointer"
              onClick={() => navigate('/')}
            />
          </div>

          
        </div>
      </div>
    </motion.nav>
  );
}