import React, {useContext} from 'react';
import {ShoppingCart} from '@material-ui/icons';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {Badge} from '@material-ui/core';
import image from "./Logo.png";
import SubHead from './SubHead';
import {CartContext} from './../Games/contexts/CartContext';
import {CartTwoContext} from './../Categories/contexts/CartContext';
import "./TopHead.css";


const TopHead = (props) => {

    const {itemCount} = useContext(CartContext);
    const {itemTwoCount} = useContext(CartTwoContext);
    return (
        <React.Fragment>

            <Nav className="justify-content-center"
                style={
                    {backgroundColor: "#161c2d"}
                }
                activeKey="/home">

                <Navbar.Brand href="/">
                    <img src={image}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"/>
                </Navbar.Brand>

                <Nav.Item style={
                    {marginTop: "15px"}
                }>
                    <Nav.Link href="/"
                        style={
                            {color: "yellow"}
                    }>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item style={
                    {marginTop: "15px"}
                }>
                    <Nav.Link href="./games"
                        style={
                            {color: "yellow"}
                    }>
                        <i class="fas fa-gamepad"
                            style={
                                {marginRight: "3px"}
                        }></i>Games</Nav.Link>
                </Nav.Item>
                <Nav.Item style={
                    {marginTop: "15px"}
                }>
                    <Nav.Link href="./category"
                        style={
                            {color: "yellow"}
                    }>
                        <i style={{marginRight:"3px"}} class="fas fa-dice-six"></i>Category</Nav.Link>
                </Nav.Item>

                <Nav.Item style={
                    {marginTop: "15px"}
                }>
                    <Nav.Link href='./cart' eventKey="link-2"
                        style={
                            {color: "yellow"}
                    }>
                        <Badge color="primary"
                            badgeContent={itemCount} ><Badge badgeContent={itemTwoCount}><ShoppingCart/>{""}</Badge></Badge>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <SubHead/>
        </React.Fragment>
    );
}

export default TopHead;
