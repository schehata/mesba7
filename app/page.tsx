"use client";

import { useState } from "react";
import Options from "../models/options";
import Actions from "./Actions";
import Footer from "./Footer";
import OptionsContainer from "./Options";

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000";

export default function Home() {
  let [initialViewLoaded, setInitialViewLoaded] = useState(false);
  const [options, setOptions] = useState<Options>({
    category: "random",
    sentences_count: 5,
    vocalized: false,
    repeat: 3,
  });
  const [result, setResult] = useState([]);

  const changeOptions = async (newOptions: Options) => {
    setOptions((prevState) => ({ ...prevState, ...newOptions }));
    generate();
  };

  const copy = () => {
    const all = Array(options.repeat).fill(result);
    navigator.clipboard.writeText(all.join("\n"));
  };

  const generate = async () => {
    let endpoint = "/api/sample";
    if (options.category == "random") {
      endpoint = "/api/random";
    }

    const url = new URL(baseUrl + endpoint);
    for (let [key, value] of Object.entries(options)) {
      url.searchParams.set(key, value);
    }

    try {
      const resp = await fetch(url).then((res) => res.json());
      const txt = resp.join(" ");
      setResult(txt);
    } catch (err) {
      alert(err);
    }
  };

  if (!initialViewLoaded) {
    generate();
    setInitialViewLoaded(true);
  }

  const repeated = Array(options.repeat).fill("");

  return (
    <main className="bg-primary flex flex-col md:flex-row cols-1 md:cols-2 grow w-full container mx-auto px-6 md:gap-6 h-full">
      <section className="w-full md:w-4/6">
        <section className="mt-6 md:mt-0">
          <section>
            <div>
              {repeated.map((_, i) => (
                <p
                  key={i}
                  className="text-gray-700 dark:text-gray-400 text-xl paragraph mb-6"
                >
                  {result}
                </p>
              ))}
            </div>
          </section>
        </section>
      </section>

      <aside className="order-first  flex grow flex-col h-full w-full md:w-2/6 md:block border-gray-100 dark:border-gray-800 border-b-2 md:border-b-0 md:border-l-2 pl-3 md:pl-6">
        <div className="text-gray-600 bg-gray-100 rounded-sm p-3 dark:bg-secondary dark:text-gray-900">
          <h1 className="font-sans text-lg">توليد نصوص عربية عشوائية</h1>
          <p className="paragraph">
            يمكنك استخدام مصباح لانشاء قوالب نصية عشوائية لاستخدامها في
            التصميمات مثلًا.
          </p>
        </div>
        <h4 className="text-gray-500 font-bold text-xl mt-4 mb-3">الاعدادات</h4>
        <OptionsContainer options={options} changeOptions={changeOptions} />
        <Actions generate={generate} onCopy={copy} />
        <span className="flex flex-1 grow" />
        <Footer />
      </aside>
    </main>
  );
}
