"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { supabase } from "../../lib/supa";
import AuthLayout from "../auth-layout";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [err, setErr] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password: pwd });
    if (error) return setErr(error.message);
    router.push("/dashboard");
  }

  return (
    <AuthLayout>
      <h2 className="mb-6 text-2xl font-semibold text-center">Log in</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="input" type="email" required placeholder="Email"
          value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="input" type="password" required placeholder="Password"
          value={pwd} onChange={e=>setPwd(e.target.value)} />
        {err && <p className="text-sm text-red-600">{err}</p>}
        <button className="btn-primary w-full">Continue</button>
      </form>

      <p className="mt-4 text-center text-sm">
        No account? <a href="/signup" className="link">Sign up</a>
      </p>
    </AuthLayout>
  );
}
