"use client";
import { useAuth } from "../../context/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) router.replace("/login");
  }, [loading, user, router]);

  if (loading) return <p className="p-8">Loading…</p>;
  if (!user) return null;          // Redirecting

  return (
    /* existing sidebar + main wrapper */
    <section className="flex min-h-screen"> …{children}</section>
  );
}
