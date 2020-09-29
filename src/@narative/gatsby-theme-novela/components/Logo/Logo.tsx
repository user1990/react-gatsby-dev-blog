import React from "react";
import styled from "@emotion/styled";

import mediaqueries from "@styles/media";

export default ({ children }) => <LogoContainer>Dev Vibes</LogoContainer>;

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
