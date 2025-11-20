import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer-bg blade-top-padding blade-bottom-padding">
      <div className="w-container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex flex-col items-start gap-6">
            <Image
              src="/logo_light.svg"
              alt="Clarovate"
              width={220}
              height={60}
              className="w-auto h-14"
            />
            <span className="text-xs text-white text-opacity-70">
              © 2025 Clarovate. All Rights Reserved.
            </span>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4 text-white">
            <div className="flex items-center gap-4">
              <Link
                href="https://www.linkedin.com/company/clarovate/about/?viewAsMember=true"
                target="_blank"
                aria-label="Clarovate on LinkedIn"
                className="hover:opacity-80 transition-opacity"
              >
                <Linkedin
                  className="h-7 w-7 text-fire-50"
                  strokeWidth={1.3}
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="mailto:contact@clarovate.com"
                aria-label="Email Clarovate"
                className="hover:opacity-80 transition-opacity"
              >
                <Mail
                  className="h-8 w-8 text-fire-50"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </Link>
            </div>
            <span className="text-xs text-white text-opacity-80">
              Pipeline partner for cybersecurity marketers
            </span>
            <div className="flex items-center gap-4 text-xs text-white text-opacity-80">
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/cookies-settings" className="hover:text-white">
                Cookies Settings
              </Link>
              <Link href="/terms-of-service" className="hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
