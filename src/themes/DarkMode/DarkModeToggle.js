import React from 'react';

import './DarkModeToggle.scss';
import useDarkMode from 'use-dark-mode';

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className="dark-mode-toggle">
      <input
        className="icon glasses"
        type="checkbox"
        checked={darkMode.value}
        onChange={darkMode.toggle}
        id="dm-toggle"
      />
    </div>
  );
};

export default DarkModeToggle;
