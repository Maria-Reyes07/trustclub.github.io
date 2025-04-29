// app/subscribe/page.tsx (or any section)

"use client";

import { useState } from "react";
import "./SubscribePage.css";

export default function SubscribePage() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      if (response.ok) {
        setSubscribed(true);
      } else {
        const errorData = await response.json();
        console.error('API error:', errorData);
        alert('Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error('Request error:', error);
      alert('Something went wrong. Please try again.');
    }
  };
  
  

  return (
    <div className="subscribe-page">
      <div className="subscribe-container">
        {!subscribed ? (
          <>
            <h1 className="subscribe-title">Join the T.R.U.S.T. Mailing List</h1>
            <p className="subscribe-description">
              Get devlogs, behind-the-scenes art, and updates straight to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="subscribe-form">
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="subscribe-input"
              />
              <button type="submit" className="subscribe-button">
                Subscribe
              </button>
            </form>

            <p className="subscribe-footer">No spam. Unsubscribe anytime.</p>
          </>
        ) : (
          <div className="thank-you-message">
            <h1 className="subscribe-title">Thank you for subscribing!</h1>
            <p className="subscribe-description">
              We'll keep you updated on the journey of T.R.U.S.T.
            </p>

             {/* Return Home button */}
            <a href="/" className="return-home-button">Return Home</a>
          </div>
        )}
      </div>
    </div>
  );
}

