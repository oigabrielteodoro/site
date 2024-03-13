import Head from "next/head";

import { DefaultLayout, Faq } from "@/layouts";
import {
  Introduction,
  OurCustomers,
  OurPartners,
  OurStory,
  Testimonials,
  WhyWeAre,
} from "@/features/home";
import { Grid } from "@/ui";
import { SEO } from "@/lib";

export default function Home() {
  return (
    <>
      <SEO
        title="Explow | Design e tecnologia"
        description="Nós somos o braço que sua empresa precisa para decolar no digital hoje"
      />
      <DefaultLayout color="transparent" css={{ marginTop: "0" }}>
        <Introduction />
        <OurStory />
        <OurPartners />
        <WhyWeAre />
        <OurCustomers />
        <Testimonials />
        <Grid as="section">
          <Faq />
        </Grid>
      </DefaultLayout>
    </>
  );
}
