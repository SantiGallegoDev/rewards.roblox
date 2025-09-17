import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = (): JSX.Element => {
  const footerLinks = [
    { text: "About Us", href: "#" },
    { text: "Jobs", href: "#" },
    { text: "Blog", href: "#" },
    { text: "Parents", href: "#" },
    { text: "Gift Cards", href: "#" },
    { text: "Help", href: "#" },
    { text: "Terms", href: "#" },
    { text: "Accessibility", href: "#" },
    { text: "Privacy", href: "#" },
    { text: "Your Privacy Choices", href: "#", hasIcon: true },
    { text: "Sitemap", href: "#" },
  ];

  return (
    <footer className="w-full bg-[#121215] py-8">
      <div className="max-w-[1070px] mx-auto px-6">
        <nav className="mb-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {footerLinks.map((link, index) => (
              <div key={index} className="flex items-center">
                <a
                  href={link.href}
                  className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#d5d7dd] text-[15.6px] text-center tracking-[0] leading-[22.4px] whitespace-nowrap hover:text-white transition-colors"
                >
                  {link.text}
                </a>
                {link.hasIcon && (
                  <div className="ml-2 w-[30px] h-3.5 bg-[url(/image.png)] bg-cover bg-[50%_50%]" />
                )}
              </div>
            ))}
          </div>
        </nav>

        <Separator className="bg-[#494d5a] mb-6" />

        <div className="text-center">
          <p className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#d5d7dd] text-[9.8px] tracking-[0] leading-[15px]">
            ©2025 Roblox Corporation. Roblox, the Roblox logo and Powering
            Imagination are among our registered and unregistered trademarks in
            the U.S. and other countries.
          </p>
        </div>
      </div>
    </footer>
  );
};
