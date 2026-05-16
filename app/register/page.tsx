"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "../login/neon.css"; // Reuse the same purple theme css

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("[ ERROR: ALL_FIELDS_REQUIRED ]");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        setError(`[ ERROR: ${errorData.message.toUpperCase()} ]`);
        setIsLoading(false);
        return;
      }

      // Success
      setIsLoading(false);
      setIsSuccess(true);
      
      // 2 Seconds kalichu Login page poga
      setTimeout(() => {
        router.push("/login");
      }, 2000);

    } catch (err) {
      setError("[ ERROR: SYSTEM_FAILURE ]");
      setIsLoading(false);
    }
  };

  return (
    <div className="cyber-body w-full">
      <div className="cyber-grid">
        <div className="grid-line grid-h-1"></div>
        <div className="grid-line grid-v-1"></div>
        <div className="grid-line grid-h-2"></div>
        <div className="grid-line grid-v-2"></div>
        <div className="grid-line grid-h-3"></div>
        <div className="cyber-glitch glitch-1"></div>
        <div className="cyber-glitch glitch-2"></div>
      </div>

      <div className="login-container">
        <div className="cyber-terminal">
          <div className="terminal-header">
            <div className="terminal-buttons">
              <div className="term-btn btn-red"></div>
              <div className="term-btn btn-yellow"></div>
              <div className="term-btn btn-green"></div>
            </div>
            <div className="terminal-title">NEW_USER_REGISTRATION.exe</div>
          </div>
          
          <div className="cyber-content">
            
            {!isSuccess ? (
              <>
                <div className="neon-header">
                  <div className="cyber-logo">
                    <div className="logo-frame">
                      <div className="logo-core">
                        {/* Custom Core SVG for Registration */}
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                          <circle cx="20" cy="15" r="7" stroke="currentColor" strokeWidth="2"/>
                          <path d="M10 32c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M25 15h10M30 10v10" stroke="#c084fc" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <div className="logo-scanner"></div>
                    </div>
                    <div className="neon-glow"></div>
                  </div>
                  <h1 className="cyber-title">
                    <span className="title-glitch" data-text="INIT_PROFILE">INIT_PROFILE</span>
                  </h1>
                  <p className="access-text">[ ESTABLISH_IDENTITY ]</p>
                </div>
                
                <form className="neon-form" onSubmit={handleSubmit} noValidate>
                  
                  {/* Name Field */}
                  <div className={`cyber-field ${error ? 'error' : ''}`}>
                    <div className="field-frame">
                      <div className="field-border"></div>
                      <input 
                        type="text" 
                        id="name" 
                        required 
                        placeholder=" "
                        onChange={(e) => setName(e.target.value)}
                      />
                      <label htmlFor="name">&gt; USER_DESIGNATION</label>
                      <div className="cyber-scanner"><div className="scan-line"></div></div>
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className={`cyber-field ${error ? 'error' : ''}`}>
                    <div className="field-frame">
                      <div className="field-border"></div>
                      <input 
                        type="email" 
                        id="email" 
                        required 
                        placeholder=" "
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label htmlFor="email">&gt; COMM_LINK (EMAIL)</label>
                      <div className="cyber-scanner"><div className="scan-line"></div></div>
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className={`cyber-field ${error ? 'error' : ''}`}>
                    <div className="field-frame">
                      <div className="field-border"></div>
                      <input 
                        type={showPassword ? "text" : "password"} 
                        id="password" 
                        required 
                        placeholder=" "
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label htmlFor="password">&gt; ENCRYPTION_KEY</label>
                      
                      <button 
                        type="button" 
                        className={`cyber-toggle ${showPassword ? 'toggle-active' : ''}`}
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <div className="toggle-frame">
                          {!showPassword ? (
                            <svg className="eye-scan" width="18" height="18" viewBox="0 0 18 18" fill="none">
                              <path d="M9 3c-4 0-7 3-8 6 1 3 4 6 8 6s7-3 8-6c-1-3-4-6-8-6zm0 10a4 4 0 110-8 4 4 0 010 8zm0-6a2 2 0 100 4 2 2 0 000-4z" fill="currentColor"/>
                            </svg>
                          ) : (
                            <svg className="eye-blocked" width="18" height="18" viewBox="0 0 18 18" fill="none">
                              <path d="M3 3l12 12M7 7a3 3 0 003 3m3-3C13 7 10 4 9 4c-1 0-3 1-4 2M9 14c4 0 7-3 8-6-1-1-2-2-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </div>
                      </button>
                      <div className="cyber-scanner"><div className="scan-line"></div></div>
                    </div>
                    {error && <span className="cyber-error show">{error}</span>}
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className={`neon-button ${isLoading ? 'loading' : ''}`} disabled={isLoading}>
                    <div className="btn-matrix"></div>
                    <span className="btn-text">[ WRITE_TO_DATABASE ]</span>
                    <div className="btn-loader">
                      <div className="matrix-loader">
                        <div className="matrix-bar"></div>
                        <div className="matrix-bar"></div>
                        <div className="matrix-bar"></div>
                        <div className="matrix-bar"></div>
                      </div>
                    </div>
                    <div className="btn-glow"></div>
                  </button>
                </form>

                <div className="cyber-divider">
                  <div className="divider-grid"></div>
                  <span className="divider-text">[ EXISTING_PROTOCOL ]</span>
                  <div className="divider-grid"></div>
                </div>

                <div className="matrix-signup">
                  <span className="signup-prefix">[ ALREADY_IN_SYSTEM? ] </span>
                  <Link href="/login" className="matrix-link">EXECUTE_LOGIN</Link>
                </div>
              </>
            ) : (
              
              <div className="cyber-success show">
                <div className="success-matrix">
                  <div className="matrix-rings">
                    <div className="success-ring ring-1"></div>
                    <div className="success-ring ring-2"></div>
                    <div className="success-ring ring-3"></div>
                  </div>
                  <div className="success-core">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M10 16l6 6 12-12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h3 className="success-title">[ IDENTITY_VERIFIED ]</h3>
                <p className="success-desc">Redirecting to login sequence...</p>
              </div>
              
            )}
          </div>
        </div>
      </div>
    </div>
  );
}