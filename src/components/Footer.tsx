import { LinkedinIcon, XIcon, GithubIcon } from './Icons';
import { Mail } from 'lucide-react';
import Button from './Button';

export default function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 bg-[#050505]">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">Renuga Sree</h2>
            <p className="text-muted-foreground max-w-xs">
              AI/ML Engineer & Data Scientist building the future of intelligent systems.
            </p>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/RENUGASREE" target="_blank" rel="noopener noreferrer">
              <Button variant="icon">
                <GithubIcon className="w-5 h-5" />
              </Button>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Button variant="icon">
                <LinkedinIcon className="w-5 h-5" />
              </Button>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Button variant="icon">
                <XIcon className="w-5 h-5" />
              </Button>
            </a>
            <a href="mailto:renugasree@example.com">
              <Button variant="icon">
                <Mail className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 Renuga Sree. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
