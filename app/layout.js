"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import MenuSetting from "@/components/MenuSetting";
import Categories from "@/components/Categories";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} container bg-[#F7F8FA]`}>
        <div className=" main-container">
          <div className="hidden lg:block">
            <Sidebar />
          </div>
          <div className="dua-container">
            <Categories />
            <div className="duas">{children}</div>
          </div>
          <div className="hidden xl:block">
            <MenuSetting />
          </div>
        </div>
      </body>
    </html>
  );
}
