import React, {useEffect} from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase'
import { useNavigate } from 'react-router-dom'
import {
    selectUserName,
    selectUserPhoto,
    setUserLogin,
    setSignOut
} from '../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'

function Header() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user){
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                navigate('/')
            }
        })
    }, [])

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            let user = result.user
            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }))
            navigate('/')
        })
    }
    const signOut = () => {
        auth.signOut()
        .then(() => {
            dispatch(setSignOut());
            navigate('/login')
        })
    }

    return (
        <Nav>
            <Logo src="/images/logo1.png" />
            {!userName ? (
                    <LoginContainer>
                        <Login onClick={signIn}>Login</Login>
                    </LoginContainer>    
                ):
                <>
                    <NavMenu>
                        <a href='/'>
                            <img src="/images/home-icon.svg" alt="" />
                            <span>HOME</span>
                        </a>
                        <a href=''>
                            <img src="/images/search-icon.svg" alt="" />
                            <span>SEARCH</span>
                        </a>
                        <a href=''>
                            <img src="/images/original-icon.svg" alt="" />
                            <span>ORIGINALS</span>
                        </a>
                        <a href=''>
                            <img src="/images/watchlist-icon.svg" alt="" />
                            <span>WATCHLIST</span>
                        </a>
                        <a href=''>
                            <img src="/images/movie-icon.svg" alt="" />
                            <span>MOVIES</span>
                        </a>
                        <a href=''>
                            <img src="/images/series-icon.svg" alt="" />
                            <span>SERIES</span>
                        </a>
                    </NavMenu>
                    <UserImg onClick={signOut} src={userPhoto} alt={userName}/>
                </>
            } 
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 80px;
    background: #062623;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`
const Logo = styled.img`
     width: 140px;
     height: 75px;
     padding-top: 5px;
 `
const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        text-decoration: none;

        img {
            height: 30px;
        }

        span {
            color: white;
            font-size: 20px;
            letter-spacing: 1.42px;
            position: relative;

            &:after{
                content: "";
                height: 1px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
        @media (max-width: 768px) {
            display: none;
        }
    }
    
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`
const Login = styled.div`
    font-size: 30px;
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 5px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: #062623;
    transition: all 0.2s ease 0s;
    cursor: pointer;
    opacity: .9;

    &:hover {
        background-color: #f9f9f9;
        color: black;
        border-color: transparent;
        opacity: 1;
    }
`
const LoginContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    
`