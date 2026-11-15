import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Services } from "@/components/Services";
import { DetailWork } from "@/components/DetailWork";
import { Testimonials } from "@/components/Testimonials";
import { ContactHours } from "@/components/ContactHours";
import { Footer } from "@/components/Footer";
import { HOME_DESCRIPTION, HOME_TITLE } from "@/lib/seo/config";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({ title: HOME_TITLE, description: HOME_DESCRIPTION, path: "/" });

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Story />
        <Services />
        <DetailWork />
        <Testimonials />
        <ContactHours />
      </main>
      <Footer />
    </div>
  );
}
