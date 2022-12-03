import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-4">
      <p className="text-gray-600">
        تم التطوير بواسطة &nbsp;
        <a
          target="_blank"
          href="https://shehata.io"
          className="text-green-900 font-bold dark:text-yellow-700 hover:text-green-600 dark:hover:text-yellow-200"
        >
          اسلام شحاته
        </a>
      </p>
      <p className="text-gray-500">
        بالاعتماد على مكتبة
        &nbsp;
        <a
          target="_blank"
          className="dark:hover:text-white"
          href="https://github.com/linuxscout/Arrand-arabic-random-text"
        >
          arrand.
        </a>
      </p>
      <p>
        <Link className="text-gray-500 hover:text-black dark:hover:text-white" href="/privacy">
          سياسة الخصوصية
        </Link>
      </p>
    </footer>
  );
}
