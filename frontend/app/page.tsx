export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold">Creator Compass</h1>
        <p className="mt-4 text-gray-600">
          🚧 Product under construction – please{" "}
          <a href="/login" className="text-blue-600 underline">
            log in
          </a>{" "}
          to preview.
        </p>
      </div>
    </main>
  );
}
