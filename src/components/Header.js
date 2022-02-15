import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false)
    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt=""/>
            </a>
            <Menu>
                <MenuItem href="#">Model S</MenuItem>
                <MenuItem href="#">Model 3</MenuItem>
                <MenuItem href="#">Model X</MenuItem>
                <MenuItem href="#">Model Y</MenuItem>
                <MenuItem href="#">Solar Roof</MenuItem>
                <MenuItem href="#">Solar Panels</MenuItem>
            </Menu>
            <RightMenu>
                <MenuItem href="#">Shop</MenuItem>
                <MenuItem href="#">Account</MenuItem>
                <CustomMenu onClick={ () => setBurgerStatus(true) }/>
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={ () => setBurgerStatus(false) } />
                </CloseWrapper>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-In</a></li>
                <li><a href="#">Test Drive</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Semi</a></li>
                <li><a href="#">Charging</a></li>
                <li><a href="#">Powerwall</a></li>
                <li><a href="#">Commercial Energy</a></li>
                <li><a href="#">Utilities</a></li>
                <li><a href="#">Find Us</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Investor Relations</a></li>
            </BurgerNav>

        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
`

const MenuItem = styled.a`
    font-weight: 600;
    padding: 0 10px;

    @media(max-width: 1200px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
    margin: 0 10px;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom:0;
    right: 0;
    background: #fff;
    width: 300px;
    z-index: 10;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0);' : 'translateX(100%);'}
    transition: transform 0.2s ease-in-out;
    li {
        padding 10px 20px;

        a {
            font-weight: 600; 
        }
    }
`
const CloseWrapper = styled.div`
    display: flex; 
    justify-content: flex-end;
    padding-top: 10px;
    padding-bottom: 30px;
`
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`