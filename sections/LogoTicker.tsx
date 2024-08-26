'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: '-50%',
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop',
            }}
          >
            <Image
              src="/logo-acme.png"
              alt="Acme Logo"
              className="logo-ticker-image"
              width={238}
              height={52}
            />
            <Image
              src="/logo-quantum.png"
              alt="Quantum Logo"
              className="logo-ticker-image"
              width={238}
              height={52}
            />
            <Image
              src="/logo-echo.png"
              alt="Echo Logo"
              className="logo-ticker-image"
              width={238}
              height={52}
            />
            <Image
              src="/logo-celestial.png"
              alt="Celestial Logo"
              className="logo-ticker-image"
              width={238}
              height={52}
            />
            <Image
              src="/logo-pulse.png"
              alt="Pulse Logo"
              className="logo-ticker-image"
              width={238}
              height={52}
            />
            <Image
              src="/logo-apex.png"
              alt="Apex Logo"
              className="logo-ticker-image"
              width={238}
              height={52}
            />

            {/* Second set of logos for animation */}
            <Image
              src="/logo-acme.png"
              alt="Acme Logo"
              className="logo-ticker-image"
              width={238}
              height={52}
            />
            <Image
              src="/logo-quantum.png"
              alt="Quantum Logo"
              className="logo-ticker-image"
              width={238}
              height={52}
            />
            <Image
              src="/logo-echo.png"
              alt="Echo Logo"
              className="logo-ticker-image"
              width={238}
              height={52}
            />
            <Image
              src="/logo-celestial.png"
              alt="Celestial Logo"
              className="logo-ticker-image"
              width={238}
              height={52}
            />
            <Image
              src="/logo-pulse.png"
              alt="Pulse Logo"
              className="logo-ticker-image"
              width={238}
              height={52}
            />
            <Image
              src="/logo-apex.png"
              alt="Apex Logo"
              className="logo-ticker-image"
              width={238}
              height={52}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
