import React, { useState, useEffect } from 'react'
import { Row, Col, Divider } from 'antd';
import '../body/Body.css'
import { useMediaQuery } from 'react-responsive'
import getData from '../../db/db'
import ItemCard from './ItemCard/ItemCard';
import SideBar from './SideBar/SideBar';
import NavArrows from './NavArrows';
import Feedback from './ItemCard/Feedback/Feedback';
import Footer from '../footer/Footer';


const Body = () => {
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const numbers = Array.from(Array(51).keys());

    const isTablet = useMediaQuery({ query: '(max-width: 992px)' })

    useEffect(() => {
        setData([]);
        setTimeout(function () {
            setData(getData());
        }, 500);
    }, [page]);


    var onPageChange = (e) => {
        setPage(
            parseInt(e.target.value, 10)
        );
        console.log("changed page to " + page);
    }

    var nextPage = () => {
        if (page < 50) {
            setPage(
                page + 1
            );
        }
    }

    var prevPage = () => {
        if (page > 1) {
            setPage(
                page - 1
            );
        }
    }

    if (data.length > 0) {
        return <div style={{ backgroundColor: 'rgb(250,250,250)' }}>
            <Row>
                <Col span={isTablet?0:6}>
                    <SideBar />
                </Col>
                <Col span={isTablet?24:18} className='bodyDiv'>
                    {/* Nav arrows */}
                    { isTablet &&
                        <div>
                            <Row justify='space-between'>
                                <Row>
                                <b>45888</b>
                                    <div style={{ width: '4px' }}></div>
                                    <p>results</p>
                                </Row>
                                <div
                                style={{
                                    paddingTop:'6px',
                                    paddingLeft: '28px',
                                    height:'40px',
                                    width:'100px',
                                    borderRadius: '4px',
                                    border:'1px rgb(150,150,150) solid',
                                    backgroundColor: 'rgb(240, 241, 242)'
                                }}
                                >
                                    <h3>Filter</h3>
                                </div>
                            </Row>
                            <Divider style={{backgroundColor:'grey'}}/>
                            <NavArrows nextPage={nextPage} prevPage={prevPage} onPageChange={onPageChange} page={page} numbers={numbers} />
                        </div>
                    }{
                        !isTablet &&
                        <div>
                        <Row justify='space-between'>
                            <Col span={8}>
                                <Row>
                                    <b>45888</b>
                                    <div style={{ width: '4px' }}></div>
                                    <p>results</p>
                                </Row>
                            </Col>
                            <Col span={8}>
                                <NavArrows nextPage={nextPage} prevPage={prevPage} onPageChange={onPageChange} page={page} numbers={numbers} />
                            </Col>
                        </Row>
                    </div>
                    }
                    <div style={{ height: '20px' }} />
                    {/* item list */}
                    {data.map((d) => {
                        return <div style={{ paddingBottom: '40px' }}><ItemCard data={d} /></div>
                    })}
                    <Row justify='end' >
                    <Col>
                        <NavArrows nextPage={nextPage} prevPage={prevPage} onPageChange={onPageChange} page={page} numbers={numbers} /></Col>
                </Row>
                <Divider style={{backgroundColor:'rgb(150, 150, 150)'}}/>
                <Feedback/>
                </Col>
            </Row>
            <Footer/>
        </div>
    }
    else {
        return <div style={{ height: '100%', width: '100%', paddingLeft: '45%', paddingTop: '15%' }}>
            <div className='loader' />
        </div>
    }
}

export default Body;