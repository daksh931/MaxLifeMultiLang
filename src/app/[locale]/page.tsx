
import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import Home from "./Home";

export async function generateMetadata( {params }: {  params: { locale: string };}) 
{
  const {locale} = await Promise.resolve(params);
  // const locale =  params?.locale || "en";
  const messages: any = await getMessages({ locale });
  const title = messages.NavbarLinks.homeTitle;
  console.log("title",title)
  return {
    title,
  };

}

export default function Page() {
  return <Home />;
}