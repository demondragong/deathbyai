import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const HeaderContainer = styled.header(() => css({
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem',
}));

const BrandingContainer = styled.div(() => css({
    alignItems: 'center',
    display: 'flex',
}));

const Logo = styled.div(() => css({
    display: 'block',
}));

const Title = styled.h1(() => css({
    fontSize: '2.75rem',
    fontWeight: 'lighter',
    margin: 0,
}));

const Header = () => (
    <HeaderContainer>
        <Link href="/" passHref>
            <a rel="noreferrer noopener" css={{
                borderBottom: 0,
            }}>
                <BrandingContainer>
                        <Logo>
                            <img src="https://pbs.twimg.com/profile_images/1623710585794822144/ZoDcdI4U_400x400.jpg" height="120px" alt="Logo of death by AI, a typical poorly-AI-generated hand with a dozen fingers coming out of the ground in a zombie-like fashion" />
                        </Logo>
                        <Title>Death by AI</Title>
                </BrandingContainer>
            </a>
        </Link>
    </HeaderContainer>
);

export default Header;