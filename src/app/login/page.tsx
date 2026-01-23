"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { apiPost, apiBaseUrl } from "@/lib/api";
import styles from "./page.module.css";

type LoginResponse = {
  mfa_required: boolean;
  access_token?: string;
  token_type?: string;
  user_id?: number;
  portal?: string;
  profile_id?: number;
  challenge_id?: number;
  method?: string;
};

type MfaVerifyResponse = {
  access_token: string;
  token_type: string;
};

type LoginStep = "login" | "mfa" | "success";

export default function AdminLoginPage() {
  const router = useRouter();
  const [step, setStep] = useState<LoginStep>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [deviceName, setDeviceName] = useState("Lotly Admin Console");
  const [mfaCode, setMfaCode] = useState("");
  const [challengeId, setChallengeId] = useState<number | null>(null);
  const [accessToken, setAccessToken] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const persistSession = (token: string) => {
    sessionStorage.setItem("lotly_admin_access_token", token);
    const isSecure = window.location.protocol === "https:";
    document.cookie = `lotly_admin_access_token=${token}; path=/; samesite=lax${
      isSecure ? "; secure" : ""
    }`;
  };

  const maskedEmail = useMemo(() => {
    if (!email.includes("@")) return email;
    const [user, domain] = email.split("@");
    return `${user.slice(0, 2)}***@${domain}`;
  }, [email]);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await apiPost<LoginResponse>("/lotly-admin/auth/login", {
        email,
        password,
        device_name: deviceName || null,
      });

      if (response.mfa_required) {
        setChallengeId(response.challenge_id ?? null);
        setStep("mfa");
        setIsLoading(false);
        return;
      }

      if (response.access_token) {
        setAccessToken(response.access_token);
        persistSession(response.access_token);
        setStep("success");
        router.push("/");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleMfaVerify = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      if (!challengeId) {
        throw new Error("Missing MFA challenge ID.");
      }
      const response = await apiPost<MfaVerifyResponse>(
        "/lotly-admin/auth/mfa/verify",
        {
          challenge_id: challengeId,
          code: mfaCode,
        },
      );
      setAccessToken(response.access_token);
      persistSession(response.access_token);
      setStep("success");
      router.push("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "MFA verification failed.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.card}>
        <header className={styles.header}>
          <p className={styles.kicker}>Lotly Admin</p>
          <h1>Secure admin access</h1>
          <p className={styles.subtitle}>
            Sign in to manage tenants, platform operations, and compliance across
            the Lotly network.
          </p>
        </header>

        <div className={styles.metaRow}>
          <div>
            <p className={styles.metaLabel}>API</p>
            <p className={styles.metaValue}>{apiBaseUrl}</p>
          </div>
          <div>
            <p className={styles.metaLabel}>Security</p>
            <p className={styles.metaValue}>MFA-ready sessions</p>
          </div>
        </div>

        {step === "login" && (
          <form className={styles.form} onSubmit={handleLogin}>
            <label className={styles.label}>
              Email
              <input
                className={styles.input}
                type="email"
                name="email"
                placeholder="admin@lotly.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </label>
            <label className={styles.label}>
              Password
              <input
                className={styles.input}
                type="password"
                name="password"
                placeholder="••••••••"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </label>
            <label className={styles.label}>
              Device name
              <input
                className={styles.input}
                type="text"
                name="device"
                placeholder="Admin workstation"
                value={deviceName}
                onChange={(event) => setDeviceName(event.target.value)}
              />
            </label>
            {error && <p className={styles.error}>{error}</p>}
            <button className={styles.primaryButton} type="submit" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign in"}
            </button>
          </form>
        )}

        {step === "mfa" && (
          <form className={styles.form} onSubmit={handleMfaVerify}>
            <p className={styles.mfaHint}>
              Enter the 6-digit code for {maskedEmail || "your account"}.
            </p>
            <label className={styles.label}>
              MFA code
              <input
                className={styles.input}
                type="text"
                name="mfa"
                inputMode="numeric"
                autoComplete="one-time-code"
                placeholder="123456"
                value={mfaCode}
                onChange={(event) => setMfaCode(event.target.value)}
                required
              />
            </label>
            {error && <p className={styles.error}>{error}</p>}
            <button className={styles.primaryButton} type="submit" disabled={isLoading}>
              {isLoading ? "Verifying..." : "Verify"}
            </button>
            <button
              className={styles.secondaryButton}
              type="button"
              onClick={() => {
                setStep("login");
                setMfaCode("");
                setError(null);
              }}
            >
              Back to login
            </button>
          </form>
        )}

        {step === "success" && (
          <div className={styles.success}>
            <h2>Login confirmed</h2>
            <p>Access token issued for admin API calls.</p>
            <div className={styles.token}>{accessToken || "Token unavailable"}</div>
            <Link className={styles.primaryButton} href="/">
              Go to dashboard
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
