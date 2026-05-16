"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "./neon.css"; // Namma css file link pandrom

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("[ ERROR: FIELDS_REQUIRED ]");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // NextAuth Backend Call
      const res = await signIn("credentials", { email, password, redirect: false });
      
      if (res?.error) {
        setError("[ ERROR: ACCESS_DENIED ]");
        setIsLoading(false);
        return;
      }

      // Success aagiducha? Loading stop panni success animation kaatuvom
      setIsLoading(false);
      setIsSuccess(true);
      
      // 2 Seconds kalichu home page poga
      setTimeout(() => {
        router.push("/");
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
            <div className="terminal-title">NEURAL_INTERFACE.exe</div>
          </div>
          
          <div className="cyber-content">
            
            {/* Login Form (Success aana hide aagidum) */}
            {!isSuccess ? (
              <>
                <div className="neon-header">
                  <div className="cyber-logo">
                    <div className="logo-frame">
                      <div className="logo-core">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                          <path d="M20 4L36 12v16L20 36L4 28V12L20 4z" stroke="currentColor" strokeWidth="2" fill="none"/>
                          <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M14 14l12 12M26 14l-12 12" stroke="currentColor" strokeWidth="1"/>
                        </svg>
                      </div>
                      <div className="logo-scanner"></div>
                    </div>
                    <div className="neon-glow"></div>
                  </div>
                  <h1 className="cyber-title">
                    <span className="title-glitch" data-text="CYPHER_NET">CYPHER_NET</span>
                  </h1>
                  <p className="access-text">[ SECURE_TERMINAL_ACCESS ]</p>
                </div>
                
                <form className="neon-form" onSubmit={handleSubmit} noValidate>
                  
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
                      <label htmlFor="email">&gt; EMAIL_ADDRESS</label>
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
                      <label htmlFor="password">&gt; ACCESS_CODE</label>
                      
                      <button 
                        type="button" 
                        className={`cyber-toggle ${showPassword ? 'toggle-active' : ''}`}
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <div className="toggle-frame">
                          {/* Eye Open SVG */}
                          {!showPassword ? (
                            <svg className="eye-scan" width="18" height="18" viewBox="0 0 18 18" fill="none">
                              <path d="M9 3c-4 0-7 3-8 6 1 3 4 6 8 6s7-3 8-6c-1-3-4-6-8-6zm0 10a4 4 0 110-8 4 4 0 010 8zm0-6a2 2 0 100 4 2 2 0 000-4z" fill="currentColor"/>
                            </svg>
                          ) : (
                            /* Eye Closed SVG */
                            <svg className="eye-blocked" width="18" height="18" viewBox="0 0 18 18" fill="none">
                              <path d="M3 3l12 12M7 7a3 3 0 003 3m3-3C13 7 10 4 9 4c-1 0-3 1-4 2M9 14c4 0 7-3 8-6-1-1-2-2-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </div>
                      </button>
                      <div className="cyber-scanner"><div className="scan-line"></div></div>
                    </div>
                    {/* Error Message */}
                    {error && <span className="cyber-error show">{error}</span>}
                  </div>

                  {/* Options */}
                  <div className="cyber-options">
                    <label className="neon-checkbox">
                      <input type="checkbox" id="remember" />
                      <span className="checkbox-matrix">
                        <div className="matrix-frame"></div>
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4l2.5 2.5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span className="checkbox-text">MAINTAIN_SESSION</span>
                    </label>
                    <Link href="#" className="cyber-link">RECOVER_ACCESS</Link>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className={`neon-button ${isLoading ? 'loading' : ''}`} disabled={isLoading}>
                    <div className="btn-matrix"></div>
                    <span className="btn-text">[ INITIALIZE_CONNECTION ]</span>
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
                  <span className="divider-text">[ ALT_PROTOCOLS ]</span>
                  <div className="divider-grid"></div>
                </div>

                <div className="matrix-signup">
                  <span className="signup-prefix">[ NEW_USER_DETECTED ] </span>
                  <Link href="/register" className="matrix-link">CREATE_PROFILE</Link>
                </div>
              </>
            ) : (
              
              /* Success Animation Matrix (Login aanathum ithu varum) */
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
                <h3 className="success-title">[ CONNECTION_ESTABLISHED ]</h3>
                <p className="success-desc">Accessing neural interface...</p>
              </div>
              
            )}
          </div>
        </div>
      </div>
    </div>
  );
}