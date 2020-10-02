import React from "react";
import styled from "@emotion/styled";

import mediaqueries from "@styles/media";
import { useColorMode } from "theme-ui";

import WhiteLogo from "../../../../assets/dev-icon.inline.svg";
import VibesLogo from "../../../../assets/vibes.inline.svg";

const LogoContainer = styled.div`
  font-size: 4rem;
  .Logo__Mobile {
    display: none;
  }

  ${mediaqueries.tablet`
    .Logo__Desktop {
      display: none;
    }

    .Logo__Mobile{
      display: block;
    }
  `}
`;

const DarkLogo = styled.span`
  color: #fff;
`;

const VibesLabel = styled.span`
  color: #000;
`;

export default ({ children }) => {
  const [colorMode] = useColorMode();

  const logoIcon =
    colorMode === "dark" ? (
      <DarkLogo> {"</>"} DEV_VIBES</DarkLogo>
    ) : (
      <VibesLabel>
        <WhiteLogo height={70} width={70} /> VIBES
      </VibesLabel>
    );

  return <LogoContainer>{logoIcon}</LogoContainer>;
};
