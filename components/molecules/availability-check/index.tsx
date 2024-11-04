import React from 'react';

const AvailabilityCheck = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="relative flex h-3 w-3">
        <span
          className={`bg-green-400 animate-ping absolute inline-flex h-full w-full rounded-full opacity-75`}
        ></span>
        <span
          className={`bg-green-400 relative inline-flex rounded-full h-3 w-3`}
        ></span>
      </span>
      <p className={`text-green-400 text-sm`}>1 Team jetzt Verfügbar</p>
    </div>
  );
};

export default AvailabilityCheck;
