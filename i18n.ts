import { getRequestConfig, GetRequestConfigParams, RequestConfig } from "next-intl/server";

const locales = ["en", "ar"];
const defaultLocale = "en"; // ✅ Fallback locale

export default getRequestConfig(async ({ locale }: GetRequestConfigParams): Promise<RequestConfig> => {
  const selectedLocale = locale && locales.includes(locale) ? locale : defaultLocale; // ✅ Use fallback if undefined

  return {
    locale: selectedLocale, // ✅ Ensure locale is always defined
    messages: (await import(`./messages/${selectedLocale}.json`)).default, // ✅ Load correct messages
  };
});
