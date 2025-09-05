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
          <div className="p-4 bg-[#0033a0] text-white font-bold">
            Latest Updates
          </div>
          <div ref={twitterRef} className="min-h-[350px] relative">
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
