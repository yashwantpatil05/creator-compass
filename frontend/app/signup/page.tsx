"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import AuthLayout from "../auth-layout";

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: replace with Supabase sign-up later
    router.push("/dashboard");
  }

  return (
    <AuthLayout>
      <h2 className="mb-6 text-2xl font-semibold text-center">Create account</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded border px-3 py-2"
        />
        <input
          type="password"
          required
          placeholder="Password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          className="w-full rounded border px-3 py-2"
        />
        <button
          type="submit"
          className="w-full rounded bg-indigo-600 py-2 text-white hover:bg-indigo-700"
        >
          Sign up
        </button>
      </form>

      <p className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <a className="text-indigo-600 underline" href="/login">
          Log in
        </a>
      </p>
    </AuthLayout>
  );
}
