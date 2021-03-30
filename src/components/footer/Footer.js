import React from 'react';
import { FaBeer } from 'react-icons/fa';
import { Row, Col, Divider } from 'antd';
import "./Footer.css";

function Footer(props) {
    return (
        <div className='footer'>
            <Row>
                <FaBeer style={{color:'white'}} size='40px'/>
                <div style={{width:'4px'}} />
                <h1 style={{color:'white', fontWeight:'bold'}}>CheMondis</h1>
            </Row>
            <div style={{height:'40px'}} />
            <Row>
                <Col span={2}>
                    <h4 style={{color:'white'}}>Helpcenter</h4>
                </Col>
                <Col span={2}>
                    <h4 style={{color:'white'}}>Buyers</h4>
                </Col>
                <Col span={2}>
                    <h4 style={{color:'white'}}>Suppliers</h4>
                </Col>
                <Col span={2}>
                    <h4 style={{color:'white'}}>About Us</h4>
                </Col>
                <Col span={2}>
                    <h4 style={{color:'white'}}>Jobs</h4>
                </Col>
                <Col span={3}>
                    <h4 style={{color:'white'}}>Cookies Settings</h4>
                </Col>
                <Col span={2} offset={5}>
                    <h4 style={{color:'white'}}>Terms of User</h4>
                </Col>
                <Col span={2}>
                    <h4 style={{color:'white'}}>Privacy Policy</h4>
                </Col>
                <Col span={2}>
                    <h4 style={{color:'white'}}>Imprint</h4>
                </Col>
            </Row>
            <Divider style={{backgroundColor:'white'}} />    
            <Row justify='space-between'>
                <h4 style={{color:'rgb(255,255,255,0.5)'}}>The trusted chemical Marketplace made in Germany</h4>
                <h4 style={{color:'rgb(255,255,255,0.5)'}}>1.16.961-4f35b24</h4>
                <h4 style={{color:'rgb(255,255,255,0.5)'}}>© 2021. CheMondis GmbH. All Rights Reserved</h4>
                
            </Row>    
        </div>
    );
}

export default Footer;