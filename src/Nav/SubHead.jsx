import { Search } from '@material-ui/icons';
import React from 'react';
import { Button, Form, FormControl, Nav } from 'react-bootstrap';
import SearchBar from "./SearchBar";
import ProductsData from "./ProductsData.json";

const SubHead = () => {
    return ( 
        <React.Fragment>
            <Nav className="justify-content-center" style={{backgroundColor:"#ffc107"}} expand="lg">
            <Nav.Item>
            <SearchBar style={{marginRight:"400px"}} placeholder="Search ..." data={ProductsData}/>
            </Nav.Item>       
            </Nav>
        </React.Fragment>
    );
}

export default SubHead;


