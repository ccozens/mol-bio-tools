import React, { useState, useEffect } from 'react';

export const Redirect = () => {
  const [count, setCount] = useState(10); // Set initial count to 10 seconds
  const [redirect, setRedirect] = useState(true); // Set redirect to true [redirect is true by default]
  const timerRef = React.useRef(null); // Ref to store the timer reference

  const newUrl = 'https://courageous-otter.netlify.app/';

  useEffect(() => {
    if (count === 0) {
      // Redirect to newUrl when count reaches 0
      window.location.href = newUrl;
    }
  }, [count, redirect]);

  useEffect(() => {
    // Start the countdown timer
    timerRef.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
    return () => {
      // Clean up the timer on component unmount or when redirect is cancelled
      clearInterval(timerRef.current);
    };
  }, []);

  const handleCancel = () => {
    // Cancel the redirect and stop the timer
    setRedirect(false);
    clearInterval(timerRef.current);
  };

  const handleRedirect = () => {
    // Redirect to newUrl and stop the timer
    clearInterval();
    window.location.href = newUrl;;
    };

  return (
      <div className="container px-4 py-6 scroll-mt-20 mx-auto text-2xl bg-black text-orange-200 my-5 text-center">
      <p>
        This page is deprecated and no longer maintained.</p> 
        <p> You will be redirected to the new version in <span className="font-bold">{count}</span> seconds, unless you either cancel or head straight there.
      </p>
      <div className="flex justify-around">
      <button className="w-1/3 border border-orange-200 bg-orange-200/20"onClick={handleCancel}>Cancel redirect</button>
      <button className="w-1/3 border border-orange-200 bg-orange-200/20"onClick={handleRedirect}>Take me straight there</button>
      </div>
    </div>
  );
};
