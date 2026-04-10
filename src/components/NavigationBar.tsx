import {
  ClockIcon,
  MapPinIcon,
  MenuIcon,
  XIcon,
  type LucideIcon,
} from "lucide-react";
import React, { useState } from "react";
import type { IconType } from "react-icons";
import { FaGoogle, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import slugify from "slugify";
import { cn } from "../utils";
import logo from "../assets/logo.png";

type Icon = IconType | LucideIcon;
export default function NavigationBar() {
  const businessInfo: { icon: Icon; text: string }[] = [
    {
      icon: MapPinIcon,
      text: "White Rock, Abbotsford.",
    },
    {
      icon: ClockIcon,
      text: "Office Hours 09:00 am to 08:00 pm.",
    },
  ];
  const socials: { icon: Icon; link: string }[] = [
    { icon: FaFacebook, link: "https://www.facebook.com/" },
    { icon: FaTwitter, link: "https://www.twitter.com/" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/" },
    { icon: FaGoogle, link: "https://www.google.com/" },
  ];

  const navigationLinks = ["Home", "Services", "About Us", "Contact"];
  const getLink = (link: string) =>
    "#" + slugify(link, { lower: true, strict: true }).toLowerCase();

  const [activeLink, setActiveLink] = useState(function () {
    const currentHash = window.location.hash;
    return currentHash ? currentHash : getLink(navigationLinks[0]);
  });
  const isActiveLink = (linkHash: string) => activeLink === linkHash;
  const handleLinkClick = (linkHash: string) => setActiveLink(linkHash);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <React.Fragment>
      {/* Topbar */}
      <div className="w-full bg-deap-teal hidden md:block">
        <div className="w-full max-w-7xl mx-auto p-3 flex items-center justify-between">
          {/* Business Information */}
          <div className="flex items-center justify-start gap-6">
            {businessInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2"
              >
                <div className="p-2 bg-forest-green/80 rounded-full">
                  <info.icon className="size-4 text-white" />
                </div>
                <span className="font-primary text-white text-sm lg:text-lg">
                  {info.text}
                </span>
              </div>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center justify-end gap-2">
            <span className="text-lg hidden lg:block font-primary text-white">
              Visit our social pages
            </span>
            {socials.map((social, index) => (
              <a key={index} href={social.link}>
                <button className="bg-forest-green/80 p-2 rounded-full">
                  <social.icon className="size-4 text-white" />
                </button>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="w-full border-b">
        <div className="flex items-center justify-between max-w-7xl mx-auto w-full p-6">
          {/* Logo */}
          <div className="flex items-center justify-start">
            <img src={logo} alt="WhiteRock Logo" />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center justify-end gap-6">
            {navigationLinks.map((link, index) => {
              const linkHash = getLink(link);
              return (
                <a
                  className={cn(
                    "font-primary",
                    isActiveLink(linkHash) &&
                      "text-soft-aqua font-medium underline underline-offset-2",
                  )}
                  href={linkHash}
                  onClick={() => handleLinkClick(linkHash)}
                  key={index}
                >
                  {link}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              className="cursor-pointer p-2 hover:bg-soft-gray rounded-sm focus:bg-soft-gray"
              onClick={() => setMobileMenuOpen(true)}
            >
              <MenuIcon className="size-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn("fixed inset-0 bg-white", !mobileMenuOpen && "hidden")}
      >
        {/* Mobile Menu Header */}
        <div className="w-full p-6 flex items-center justify-between">
          <img src={logo} alt="WhiteRock Logo" />

          <button
            onClick={() => setMobileMenuOpen(false)}
            className="cursor-pointer p-2 hover:bg-soft-gray focus:bg-soft-gray rounded-sm"
          >
            <XIcon className="size-6" />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="w-full px-6 flex flex-col gap-4">
          {navigationLinks.map((link, index) => {
            const linkHash = getLink(link);
            return (
              <a
                key={index}
                onClick={() => handleLinkClick(linkHash)}
                href={linkHash}
                className={cn(
                  "border-b p-3",
                  isActiveLink(linkHash) &&
                    "bg-soft-aqua/10 border-soft-aqua border-b-2",
                )}
              >
                <div
                  className={cn(
                    "font-primary text-lg",
                    isActiveLink(linkHash) && "text-soft-aqua font-medium",
                  )}
                >
                  {link}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}
