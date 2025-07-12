"use client";
import { routing, localeNames } from "@/i18n/routing";
import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import { useTranslations } from "next-intl";

export default function LanguageSelect() {
  const t = useTranslations("LanguageSelect");
  const locale = useLocale();

  return (
    <div className='flex items-center space-x-0 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400'>
      <Globe className='h-5 w-5' />
      <LocaleSwitcherSelect defaultValue={locale} label={t("selectLocale")}>
        {routing.locales.map((cur) => (
          <option key={cur} value={cur}>
            {localeNames[cur]}
          </option>
        ))}
      </LocaleSwitcherSelect>
    </div>
  );
}