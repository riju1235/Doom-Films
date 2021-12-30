import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src='/images/newdoom-logo.png' alt='' />
                <SignUp>GET ALL IN HERE</SignUp>
                <Description>
                    Get Premier Access to Raya and the Last Dragon for an additional fee with a Doom Films subscription. 
                    As of 01/01/22, the price of Doom Films and The Doom+ Bundle will increase by $1.
                </Description>
                <CTALogotwo src='/images/cta-logo-two.png' alt='' />
            </CTA>
        </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    height:93vh;
    display: flex;
    align-items: top;
    justify-content: center;

    &:before {
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        opacity: 0.9;
        background-image: url("/images/login-background.jpg");
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        z-index: -1;
    } 
`
const CTA = styled.div`
    max-width: 1050px;
    padding: 80px 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;   
`
const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 1000px;
    min-height: 1px;
    display: block;
    width: 100%;
`
const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 30px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 28px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 2.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &: hover {
        background: #0483ee;
    }
`
const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 15px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
    text-align:center;
`
const CTALogotwo = styled.img`
    max-width: 1000px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
`