import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

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

          <div className="flex gap-6">
            <a href="https://github.com/RENUGASREE" className="p-3 glass rounded-full hover:bg-blue-500/20 transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 glass rounded-full hover:bg-blue-500/20 transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 glass rounded-full hover:bg-blue-500/20 transition-all">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="mailto:renugasree@example.com" className="p-3 glass rounded-full hover:bg-blue-500/20 transition-all">
              <Mail className="w-5 h-5" />
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
