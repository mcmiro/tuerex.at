import React, { useEffect, useState } from "react";

const Reviews = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined" && (window as any).elfsight) {
      (window as any).elfsight.render();
    }
  }, []);

  if (!isClient) return null;

  return (
    <div className="elfsight-app-08a94da7-7180-49da-a6cd-d29d8429c600"></div>
  );
};

export default Reviews;
