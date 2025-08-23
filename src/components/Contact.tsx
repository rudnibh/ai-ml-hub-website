"use client";
import React, { useState, useRef } from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import { Mail, Linkedin, Instagram } from "lucide-react";

// Font Awesome icons simulation (since we can't import FontAwesome in this environment)
const WhatsAppIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687"/>
  </svg>
);

const DiscordIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03"/>
  </svg>
);

const TwitterIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
  </svg>
);

// Floating Dock Component
const FloatingDock = ({ items, className = "" }) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={`mx-auto flex h-16 items-end gap-4 rounded-2xl bg-gray-900/60 backdrop-blur-md border border-purple-900/30 px-4 pb-3 shadow-lg shadow-purple-500/10 ${className}`}
    >
      {items.map((item, i) => (
        <DockIcon key={i} mouseX={mouseX} {...item} />
      ))}
    </motion.div>
  );
};

// Dock Icon Component
const DockIcon = ({ mouseX, title, icon, href }) => {
  const ref = useRef(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.a
      ref={ref}
      style={{ width }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex aspect-square w-10 items-center justify-center rounded-full bg-gray-800/80 backdrop-blur-sm border border-purple-900/20 shadow-lg hover:bg-gray-700/80 transition-colors group"
      title={title}
    >
      <motion.div
        style={{ 
          width: useTransform(width, (w) => w * 0.6),
          height: useTransform(width, (w) => w * 0.6)
        }}
        className="flex items-center justify-center"
      >
        {icon}
      </motion.div>
      
      {/* Tooltip */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        {title}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </motion.a>
  );
};

export default function Contact() {
  const socialLinks = [
    {
      title: "Email Us",
      icon: <Mail className="h-full w-full text-purple-400" />,
      href: "mailto:jiit.aiml@gmail.com",
    },
    {
      title: "Our LinkedIn",
      icon: <Linkedin className="h-full w-full text-blue-400" />,
      href: "https://www.linkedin.com/company/ai-ml-hub-of-jiit",
    },
    {
      title: "Our Twitter",
      icon: <TwitterIcon className="h-full w-full text-sky-400" />,
      href: "#",
    },
    {
      title: "Our Instagram",
      icon: <Instagram className="h-full w-full text-pink-400" />,
      href: "https://www.instagram.com/aiml.jiit",
    },
    {
      title: "Our WhatsApp",
      icon: <WhatsAppIcon className="h-full w-full text-green-400" />,
      href: "https://chat.whatsapp.com/B6LyQMpACJB7n8bOqBG9OR",
    },
    {
      title: "Join Discord",
      icon: <DiscordIcon className="h-full w-full text-indigo-400" />,
      href: "#",
    },
  ];

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join our community and stay updated with the latest in AI and Machine Learning
            </p>
          </motion.div>

          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-purple-900/20 p-8 shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300"
          >
            {/* Email Section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-center justify-center mb-12"
            >
              <div className="flex items-center mb-4">
                <Mail className="h-8 w-8 text-purple-400 mr-3" />
                <h3 className="text-2xl font-semibold text-white">Get in Touch</h3>
              </div>
              <a
                href="mailto:jiit.aiml@gmail.com"
                className="text-lg text-purple-400 hover:text-purple-300 transition-colors font-medium hover:underline"
              >
                jiit.aiml@gmail.com
              </a>
            </motion.div>

            {/* Floating Dock */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col items-center"
            >
              <h4 className="text-lg font-medium text-gray-300 mb-8">Follow us on social media</h4>
              <div className="flex justify-center w-full">
                <FloatingDock items={socialLinks} />
              </div>
            </motion.div>


          </motion.div>
        </div>
      </div>
    </section>
  );
}