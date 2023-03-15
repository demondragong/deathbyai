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
          width="24"
          height="24"
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

const FormContainer = styled.div(() =>
  css({
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    margin: "auto",
  })
);

const NewsletterForm = () => (
  <FormContainer>
    <div id="mc_embed_signup">
      <form
        action="https://deathbyai.us17.list-manage.com/subscribe/post?u=5b58f50a0d8534f45ffb9264c&id=1ab3a446f6&f_id=00b354e0f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_self"
      >
        <div
          id="mc_embed_signup_scroll"
          style={{ display: "flex", gap: "0.6rem" }}
        >
          <div className="mc-field-group">
            <label htmlFor="mce-EMAIL" style={{ display: "none" }}>
              Email Address
            </label>
            <input
              type="email"
              defaultValue=""
              name="EMAIL"
              className="required email"
              id="mce-EMAIL"
              placeholder="Email Address"
              required
              style={{ padding: "0.25rem", fontSize: "1rem" }}
            />
            <span id="mce-EMAIL-HELPERTEXT" className="helper_text" />
          </div>
          <div id="mce-responses" className="clear foot">
            <div
              className="response"
              id="mce-error-response"
              style={{ display: "none" }}
            />
            <div
              className="response"
              id="mce-success-response"
              style={{ display: "none" }}
            />
          </div>
          {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_5b58f50a0d8534f45ffb9264c_1ab3a446f6"
              tabIndex={-1}
              defaultValue=""
            />
          </div>
          <div className="optionalParent">
            <div className="clear foot">
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
                style={{ padding: "0.25rem 0.75rem", fontSize: "1rem" }}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  </FormContainer>
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
            <a href="https://killedbygoogle.com/">Killed by Google</a> focusing on things that AI is threatening.</p>
          <p>
            If you want to add something to the list{" "}
            <a
              href="https://forms.gle/qBgg4LoZjKkKxj268"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              please fill this form
            </a>
            .
          </p>
        </div>
        <p>
          Subscribe to get a monthly update with the new victims of AI.
          Unsubscribe anytime.
        </p>
        <NewsletterForm />
        <CopyNotice>
          <a
            href="https://github.com/demondragong/deathbyai/blob/main/LICENSE"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            &copy; 2023 Cody Ogden
          </a>
          &nbsp;-&nbsp;
          <a href="https://twitter.com/gaeldemondragon">
            Gaël
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
