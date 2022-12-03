'use client';

export default function Actions({ generate, onCopy }: { generate: Function, onCopy: Function }) {
    const onGenerate = () => {
        generate();
    }
    const copy = () => {
        onCopy()
      }

  return (
    <div className="flex flex-row gap-3 grow w-full justify-start mt-9">
    <button
      className="rounded bg-gray-100 mt-4 text-xl text-gray-600 py-3 px-6 border dark:bg-gray-800 dark:text-gray-500 dark:border-gray-800 dark:hover:bg-gray-900"
      onClick={copy}
    >نسخ</button>
    <button
      className="rounded border bg-black mt-4 text-xl text-white py-3 px-6 dark:text-gray-500 dark:border-gray-800 dark:hover:bg-gray-900 dark:hover:text-gray-400"
      onClick={onGenerate}
    >توليد نص جديد</button>
  </div>
  );
}
