import React, { useEffect, useState } from 'react';

const AvailabilityCheck = () => {
  const [status, setStatus] = useState<number>(0);
  const statusMessages = [
    'Verfügbarkeit prüfen',
    'Jetzt verfügbar',
    'Nicht Verfügbar',
  ];

  useEffect(() => {
    const handleStatus = async (): Promise<void> => {
      setTimeout(() => {
        setStatus(1);
      }, 2000);
    };

    handleStatus();
  }, []);
  return (
    <div className="flex gap-2 items-center">
      {status === 0 && (
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
        </span>
      )}
      {status === 1 && (
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
      )}
      {status === 2 && <div className="w-3 h-3 rounded-full bg-red-400"></div>}
      {status === 0 && (
        <p className="text-orange-400 text-sm">{statusMessages[status]}</p>
      )}
      {status === 1 && (
        <p className="text-green-400 text-sm">{statusMessages[status]}</p>
      )}
      {status === 2 && (
        <p className="text-red-400 text-sm">{statusMessages[status]}</p>
      )}
    </div>
  );
};

export default AvailabilityCheck;
