// app/contact/page.tsx


import { getContactPage } from "@/lib/getContactPage";
import { Metadata } from "next";
import ContactPage from "@/components/contact/ContactPage";

type Props = {
  params: { lang: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = await getContactPage(params.lang);
  return {
    title: page?.seo?.title ?? "ECOPETKIT",
    description: page?.seo?.description ?? "",
    alternates: page?.seo?.canonicalUrl
      ? { canonical: page.seo.canonicalUrl }
      : undefined,
  };
}

export default async function contact({ params }: Props) {
  const page = await getContactPage(params.lang);
  console.log("Data contact =>", page);

  return <ContactPage data={page.contactPage} />;
}
