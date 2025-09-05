"use client";
import React, { useEffect, useRef, useState } from "react";

export default function TwitterFeed({ inWelcomeSection = false }) {
  const twitterRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLocalDev, setIsLocalDev] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
      setIsLocalDev(true);
      setTimeout(() => {
        setIsError(true);
      }, 1000);
      return;
    }

    const loadTwitterWidgets = () => {
      if (window.twttr?.widgets) {
        window.twttr.widgets.load(twitterRef.current)
          .then(() => {
            setIsLoaded(true);
          })
          .catch((error) => {
            console.error("Error loading Twitter widgets:", error);
            setIsError(true);
          });
      } else {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.charset = "utf-8";
        
        script.onload = () => {
          if (window.twttr?.widgets) {
            window.twttr.widgets.load(twitterRef.current)
              .then(() => {
                setIsLoaded(true);
              })
              .catch((error) => {
                console.error("Error loading Twitter widgets:", error);
                setIsError(true);
              });
          }
        };
        
        script.onerror = () => {
          console.error("Failed to load Twitter widgets script");
          setIsError(true);
        };
        
        document.head.appendChild(script);
      }
    };

    loadTwitterWidgets();

    const timeoutId = setTimeout(() => {
      if (!isLoaded) {
        setIsError(true);
      }
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isLoaded]);

  if (inWelcomeSection) {
    return (
      <div className="w-full h-full">
        <div className="bg-white rounded-2xl shadow-xl border-t-4 border-[#0033a0] h-full w-full overflow-hidden">
          <div className="p-3 bg-[#0033a0] text-white font-bold text-sm text-center">
            Latest Updates
          </div>
          <div className="min-h-[350px] relative p-4">
            <div ref={twitterRef} className="w-full h-full">
              {!isLocalDev && (
                <a
                  className="twitter-timeline"
                  data-height="350"
                  data-theme="light"
                  data-chrome="noheader nofooter noborders transparent"
                  href="https://twitter.com/pappu_k_yadav?ref_src=twsrc%5Etfw"
                >
                  Tweets by pappu_k_yadav
                </a>
              )}
            </div>
            
            {(isError || isLocalDev) && (
              <div className="absolute inset-4 flex flex-col items-center justify-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                <div className="text-center p-6">
                  <div className="mb-4">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011 1v8a1 1 0 01-1 1M7 4H6a1 1 0 00-1 1v8a1 1 0 001 1h1m0-10h10m-5 3v4m0 0l-2-2m2 2l2-2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Twitter Feed</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Live tweets from @pappu_k_yadav will appear here when deployed.
                  </p>
                  <p className="text-xs text-gray-500 mb-4">
                    (Twitter widgets are disabled during local development)
                  </p>
                  <a 
                    href="https://twitter.com/pappu_k_yadav" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#0033a0] hover:bg-[#002080] transition-colors"
                  >
                    View on Twitter
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0033a0] mb-10 text-center">
          Latest Updates
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl border-t-4 border-[#0033a0] p-6">
            {/* Twitter Timeline Widget */}
            <div ref={twitterRef} className="min-h-[400px] relative">
              {/* Only show the Twitter embed if not in local dev mode */}
              {!isLocalDev && (
                <a
                  className="twitter-timeline"
                  data-height="400"
                  data-theme="light"
                  data-chrome="noheader nofooter noborders transparent"
                  href="https://twitter.com/pappu_k_yadav?ref_src=twsrc%5Etfw"
                >
                  Tweets by pappu_k_yadav
                </a>
              )}
              
              {/* Fallback message for local development or errors */}
              {(isError || isLocalDev) && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white p-4">
                  <p className="text-gray-700 mb-4 text-center">
                    Twitter feed will appear here when deployed. 
                    <br />
                    <span className="text-sm text-gray-500">
                      (Twitter API may be rate-limited during local development)
                    </span>
                  </p>
                  <a 
                    href="https://twitter.com/pappu_k_yadav" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#0033a0] hover:text-[#ffc72c] transition-colors font-medium"
                  >
                    View @pappu_k_yadav on Twitter
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
