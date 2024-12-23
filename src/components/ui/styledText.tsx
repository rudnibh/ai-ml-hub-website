import React from 'react';

const StyledText = ({ children, variant = 'default' }) => {
  const getStyles = () => {
    switch (variant) {
      case 'highlight':
        return 'relative inline-block after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[0.4em] after:bg-yellow-400/30 after:-z-10 after:rounded-sm hover:after:bg-yellow-400/50 after:transition-colors';
      case 'underline':
        return 'relative inline-block after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-purple-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-bottom-left';
      case 'emphasis':
        return 'relative inline-block after:content-[""] after:absolute after:left-0 after:bottom-1 after:w-full after:h-[2px] after:bg-red-500 after:scale-x-100';
      default:
        return '';
    }
  };

  return (
    <span className={getStyles()}>
      {children}
    </span>
  );
};

