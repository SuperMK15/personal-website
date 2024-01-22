import React from 'react';
import { motion } from 'framer-motion';

const GearComponent = () => {
  return (
    <div style={{ position: 'relative', width: '300px', height: '300px' }}>
      {/* Big Gear */}
      <motion.img
        src="/gear.png"
        alt="big-gear"
        style={{
          position: 'absolute',
          width: '350px',
          height: '350px',
          top: '25px',
          left: '-250px',
        }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 7, ease: 'linear' }}
      />

      {/* Small Gear 1 */}
      <motion.img
        src="/gear.png"
        alt="small-gear-1"
        style={{
          position: 'absolute',
          width: '150px',
          height: '150px',
          top: '-75px',
          left: '25px',
        }}
        animate={{ rotate: 720 }}
        transition={{ repeat: Infinity, duration: 7, ease: 'linear' }}
      />

      {/* Small Gear 2 */}
      <motion.img
        src="/gear.png"
        alt="small-gear-2"
        style={{
          position: 'absolute',
          width: '100px',
          height: '100px',
          top: '150px',
          left: '110px',
        }}
        animate={{ rotate: 1080 }}
        transition={{ repeat: Infinity, duration: 7, ease: 'linear' }}
      />
    </div>
  );
};

export default GearComponent;
