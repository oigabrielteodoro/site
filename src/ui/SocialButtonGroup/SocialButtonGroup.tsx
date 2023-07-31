import { ComponentProps } from "react";

import Link from "next/link";
import { InstagramLogo } from "@phosphor-icons/react";

import { IconButton } from "@/ui";
import { LinkedInLogo, MediumLogo } from "@/ui/_icons";

import * as S from "./SocialButtonGroup.styles";

export function SocialButtonGroup(props: ComponentProps<typeof S.Container>) {
  return (
    <S.Container {...props}>
      <IconButton
        as={Link}
        href="https://www.instagram.com/explow.studio/"
        target="_blank"
      >
        <InstagramLogo size={24} />
      </IconButton>
      <IconButton
        as={Link}
        href="https://www.linkedin.com/company/explow-studio/"
        target="_blank"
      >
        <LinkedInLogo size={18} />
      </IconButton>
      <IconButton
        as={Link}
        href="https://medium.com/@explowstudio"
        target="_blank"
      >
        <MediumLogo size={20} />
      </IconButton>
    </S.Container>
  );
}
