export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/10 pt-12 px-6">
      <div className="max-w-[1126px] mx-auto flex flex-col items-center text-center">
        
        {/* Social & Email */}
        <div className="flex flex-col sm:flex-row items-center gap-8 mb-10">
          
          {/* LinkedIn - Made more visible */}
          <a
            href="https://www.linkedin.com/in/oluwatobi-adekeye"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-text-primary hover:text-accent transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="28" 
              height="28" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.64.32-2.24.9l-.08.08v-1.62h-2.5v9.2h2.5v-5.12c0-.7.57-1.27 1.27-1.27s1.27.57 1.27 1.27v5.12h2.5zM6.88 8.56a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM8.25 19.5v-9.2H5.75v9.2h2.5z"/>
            </svg>
            <span className="font-medium text-lg group-hover:underline">
              LinkedIn
            </span>
          </a>

          {/* Email */}
          <a
            href="mailto:adekeye.gp.oluwatobi@gmail.com"
            className="flex items-center gap-3 text-text-primary hover:text-accent transition-colors font-mono"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            <span>adekeye.gp.oluwatobi@gmail.com</span>
          </a>
        </div>


      </div>
    </footer>
  );
}