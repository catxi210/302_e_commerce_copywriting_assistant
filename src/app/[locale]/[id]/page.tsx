// "use server";
import Details from "@/components/page/details";
import { detectLocale } from "@/lib/utils";
import type { Metadata, ResolvingMetadata } from "next";
import { headers } from "next/headers";

const languages = [
  { locale: "zh", url: "/zh" },
  { locale: "en", url: "/en" },
  { locale: "ja", url: "/ja" },
  { locale: "de", url: "/de" },
  { locale: "fr", url: "/fr" },
  { locale: "ko", url: "/ko" },
];

type Props = {
  params: { locale: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const headers_ = headers();
  const hostname = headers_.get("host");

  const previousImages = (await parent).openGraph?.images || [];

  const info = {
    zh: {
      title: "AI 电商文案助手",
      description: "告别电商文案难题，快速上架提升排名",
      image: "/ecom_zh.jpg",
    },
    en: {
      title: "AI E-Commerce Writing Assistant",
      description: "Say goodbye to e-commerce copywriting problems and quickly put them on shelves to improve rankings",
      image: "/ecom_en.jpg",
    },
    ja: {
      title: "AI eコマースライティングアシスタント",
      description:
        "eコマースのコピーライティングの問題に別れを告げ、すぐに棚に並べてランキングを向上させましょう",
      image: "/ecom_ja.jpg",
    },
  };

  let locale = detectLocale(
    (searchParams && (searchParams.lang as string)) || params.locale || "en"
  ) as keyof typeof info;

  if (!(locale in info)) {
    locale = "en";
  }

  return {
    title: info[locale as keyof typeof info].title,
    description: info[locale as keyof typeof info].description,
    metadataBase: new URL(
      (hostname as string).includes("localhost")
        ? "http://localhost:3000"
        : `https://${hostname}`
    ),
    alternates: {
      canonical: `/${locale}`,
      languages: languages
        .filter((item) => item.locale !== locale)
        .map((item) => ({
          [item.locale]: `${item.url}`,
        }))
        .reduce((acc, curr) => Object.assign(acc, curr), {}),
    },
    openGraph: {
      url: `/${locale}`,
      images: [info[locale as keyof typeof info].image, ...previousImages],
    },
    twitter: {
      site: `/${locale}`,
      images: [info[locale as keyof typeof info].image, ...previousImages],
    },
  };
}
export default async function Page({ params }: { params: { id: string } }) {
  return <Details params={params} />;
}
