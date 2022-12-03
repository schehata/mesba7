import Link from "next/link";

export default function Header() {
  return (
    <header className="mb-8">
      <nav className="bg-primary">
        <div className="container mx-auto flex flex-row py-3 px-6">
          <Link href="/" className="text-white brand text-2xl">
            <span>مِصباح</span>
          </Link>
          <span className="flex flex-1 grow" />
          <p className="text-gray-400 text-lg font-almarai">
            مولد النصوص العربية
          </p>
        </div>
      </nav>
    </header>
  );
}
