import "./globals.css";
import Header from "./Header";
import { Aref_Ruqaa, Almarai, Amiri } from "@next/font/google";
export { reportWebVitals } from 'next-axiom'


const arefRuqaa = Aref_Ruqaa({
  weight: '400',
  variable: '--font-aref-ruqaa',
  subsets: ["arabic"]
})
const almarai = Almarai({
  weight: '400',
  variable: '--font-almarai',
  subsets: ["arabic"]
})

const amiri = Amiri({
  weight: '400',
  variable: '--font-amiri',
  subsets: ["arabic"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="ar" dir="rtl" className={[arefRuqaa.variable, amiri.variable, almarai.variable].join(" ")}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <section>
          <Header />

          {children}
        </section>
      </body>
    </html>
  );
}
