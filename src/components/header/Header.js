import React from 'react'
import { Row, Col } from 'antd';
import { FaAccessibleIcon, FaBeer, FaHamburger, FaMailchimp, FaSearch } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive'
import './Header.css'



const MyPageHeader = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 992px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
    var headerDivStyle;
    if(isMobile){
        headerDivStyle = {
            height: '120px'
        }
    }
    else{
        headerDivStyle = {
            height:'80px'
        }
    }
    return <div className="headerStyle" style={headerDivStyle}>
        {isTablet &&
        <div>
            <Row>
                <Col span={2}><FaAccessibleIcon size='28px' /></Col>

                <Col  span={1}>
                    <FaBeer size="28px" />
                </Col>
                    <div style={{ width: '4px' }} />
                <Col  span={5}>
                    <h2>CheMondis</h2>
                </Col>
                <Col span={!isMobile?15:24} style={isMobile?{paddingTop:'8px'}:null}>
                    <Row>
                        <Col span={22}>
                            <div className="inputDiv" style={{ borderRadius: '4px 0px 0px 4px' }}>
                                <input type="text" placeholder="Type product name, substance, CAS or supplier" />
                            </div>
                        </Col>
                        <Col span={2}>
                            <div className="inputDiv" style={{ backgroundColor: 'green', border: '1px green', textAlign: 'center', paddingTop: '10px' }}>
                                <FaSearch style={{ color: 'white' }} />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            
            </ div>
        }
        {
            !isTablet &&
            <Row>
                <Col span={12} style={{ backgroundColor: '' }}>
                    <Row>
                        <Col lg={8} span={6}>
                            <Row>
                                <Col><FaBeer size="28px" /></Col>
                                <div style={{ width: '4px' }} />
                                <Col><h2>CheMondis</h2></Col>

                            </Row>
                        </Col>
                        <Col lg={16} span={18}>
                            <Row>
                                <Col span={22}>
                                    <div className="inputDiv" style={{ borderRadius: '4px 0px 0px 4px' }}>
                                        <input type="text" placeholder="Type product name, substance, CAS or supplier" />
                                    </div>
                                </Col>
                                <Col span={2}>
                                    <div className="inputDiv" style={{ backgroundColor: 'green', border: '1px green', textAlign: 'center', paddingTop: '10px' }}>
                                        <FaSearch style={{ color: 'white' }} />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col span={12} style={{ backgroundColor: '' }}>
                    <Row justify="end">
                        {/* <Col span={6}> */}
                        <div className='basicButton'>
                            <h3>Buyers</h3>
                        </div>
                        {/* </Col> */}
                        {/* <Col span={6}> */}
                        <div className='basicButton'>
                            <h3>Suppliers</h3>
                        </div>
                        {/* </Col> */}
                        <div style={{ width: '20px' }}></div>
                        {/* <Col span={6}> */}
                        <div className="borderedButton" style={{ border: '1px grey', borderStyle: 'solid', backgroundColor: 'white', width: '72px' }}>
                            <h3>Login</h3>
                        </div>
                        {/* </Col> */}
                        <div style={{ width: '20px' }}></div>
                        {/* <Col span={6}> */}
                        <div className="borderedButton">
                            <h3 style={{ color: 'white' }}>Register</h3>
                        </div>
                        {/* </Col> */}
                    </Row>
                </Col>
            </Row>
        }
    </div>;
}

export default MyPageHeader;