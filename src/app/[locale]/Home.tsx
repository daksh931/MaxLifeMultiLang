"use client"
import { useTranslations } from "next-intl";
export default function Home() {
    const t = useTranslations("HomePage");
    return (
      <div className="flex w-full items-center justify-center">
        <div className="text-3xl font-bold mt-20">{t("title")}</div>
        {/* <div className="text-3xl font-bold mt-20">Hello w</div> */}
      </div>
    );
  }