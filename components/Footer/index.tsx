import { FC } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

// Import Styled Components
import { FooterContainer, FlexWrap } from "./Footer.atoms";
import Link from "next/link";

import ConservationStatuses from "../../assets/conservation-statuses.svg";

const SocialLink: FC<{ url: string; imgSrc: string; altText: string }> = ({
  url,
  imgSrc,
  altText,
}) => {
  const style = {
    border: "none",
  };

  return (
    <Link href={url} passHref>
      <a
        css={{
          border: "none",
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          css={{
            width: "24px",
            height: "24px",
          }}
          width="24px"
          height="24px"
          src={imgSrc}
          alt={altText}
        />
      </a>
    </Link>
  );
};

const CopyNotice = styled.div(() =>
  css({
    fontSize: "0.75em",
    margin: "30px 0 20px 0",
    textAlign: "center",
  })
);

const Title = styled.div(() =>
  css({
    color: "#fafafa",
    fontSize: "2.5em",
    fontWeight: "lighter",
  })
);

const FooterTitle = styled.div(() =>
  css({
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    paddingBottom: "20px",
  })
);

const SocialWrapper = styled.div(() =>
  css({
    display: "flex",
    justifyContent: "center",
    padding: "15px 0",

    ["a"]: {
      display: "block",
      margin: "0 10px",
    },
  })
);

const Footer = () => (
  <>
    <FooterContainer>
      <FlexWrap>
        <FooterTitle>
          <ConservationStatuses />
        </FooterTitle>
        <div>
          <p>
            Death by AI is a RIP-off of{" "}
            <a href="https://killedbygoogle.com/">Killed by Google</a>, an
            open-source list of discontinued Google products and services. Go
            check their page! It's literally the same.
          </p>
          <p>Except this page focuses on things that AI is threatening.</p>
          <p>
            If you know someone or something that is at risk because of AI
            please let us know{" "}
            <a href="https://forms.gle/qBgg4LoZjKkKxj268" target="_blank" rel="noopener noreferrer">here</a>.
          </p>
        </div>
        <CopyNotice>
                    <a href="https://github.com/demondragong/deathbyai/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">
                        &copy; 2022 Cody Ogden
          </a>
          &nbsp;-&nbsp;
          <a href="https://gaël.com/" target="_blank" rel="noopener noreferrer">
                        Gaël.com
          </a>
                </CopyNotice>
        <SocialWrapper>
          <SocialLink
            url="https://github.com/demondragong/deathbyai"
            altText="GitHub"
            imgSrc="https://static.killedbygoogle.com/com/github.svg"
          />
        </SocialWrapper>
      </FlexWrap>
    </FooterContainer>
  </>
);
export default Footer;
