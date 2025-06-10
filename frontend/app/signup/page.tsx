"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { supabase } from "../../lib/supa";
import AuthLayout from "../auth-layout";

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [err, setErr] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({ email, password: pwd });
    if (error) return setErr(error.message);
    // success ⇒ redirect to dashboard
    router.push("/dashboard");
  }

  return (
    <AuthLayout>
      <h2 className="mb-6 text-2xl font-semibold text-center">Create account</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="input" type="email" required placeholder="Email"
          value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="input" type="password" required placeholder="Password"
          value={pwd} onChange={e=>setPwd(e.target.value)} />
        {err && <p className="text-sm text-red-600">{err}</p>}
        <button className="btn-primary w-full">Sign up</button>
      </form>

      <p className="mt-4 text-center text-sm">
        Already have an account? <a href="/login" className="link">Log in</a>
      </p>
    </AuthLayout>
  );
}
