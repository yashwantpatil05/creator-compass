// app/auth-layout.tsx
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-screen items-center justify-center bg-gradient-to-br from-indigo-50 to-white">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md">
        {children}
      </div>
    </main>
  );
}
