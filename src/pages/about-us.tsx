import { Grid } from "@/ui";
import { DefaultLayout, Faq } from "@/layouts";

import {
  Companies,
  Introduction,
  OurCulture,
  OurTeam,
  WhatWeDoForYou,
} from "@/features/about-us";
import { SEO } from "@/lib";

export default function AboutUs() {
  return (
    <>
      <SEO title="Explow | Studio design e tecnologia" />
      <DefaultLayout>
        <Introduction />
        <Companies />
        <OurCulture />
        <OurTeam />
        <WhatWeDoForYou />
        <Grid as="section">
          <Faq />
        </Grid>
      </DefaultLayout>
    </>
  );
}
