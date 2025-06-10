import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-60 bg-indigo-700 text-white">
        <div className="p-6 text-2xl font-bold">🎯 Compass</div>
        <nav className="space-y-2 px-4">
          <Link href="/dashboard" className="block rounded px-3 py-2 hover:bg-indigo-600">
            Overview
          </Link>
          <Link href="/dashboard/posts" className="block rounded px-3 py-2 hover:bg-indigo-600">
            Posts
          </Link>
          <Link href="/dashboard/settings" className="block rounded px-3 py-2 hover:bg-indigo-600">
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-50 p-8">{children}</main>
    </section>
  );
}
