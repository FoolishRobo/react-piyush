import React from 'react';
import { Row, Col } from 'antd';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function NavArrows(props) {
    var {nextPage, prevPage, onPageChange, page, numbers} = props;
    return (
        <Row justify='end'>
        <Col>
            <div className='navIconDiv' onClick={prevPage}>
                <FaChevronLeft />
            </div>
        </Col>
        <div style={{ width: '8px' }} />
        <Col>
            <div className='navIconDiv' style={{ padding: '8px', width: 'auto' }}>
                <Row>
                    <select value={page} onChange={onPageChange} >
                        {numbers.map((number) => {
                            return <option value={number}>{number}</option>;
                        })}
                    </select>
                </Row>
            </div>
        </Col>
        <div style={{ width: '8px' }} />
        <Col>
            <div className='navIconDiv' style={{ border: 'none' }}>
                <p>of {numbers[numbers.length - 1]}</p>
            </div>
        </Col>
        <div style={{ width: '8px' }} />
        <Col>
            <div className='navIconDiv' onClick={nextPage}>
                <FaChevronRight />
            </div>
        </Col>
    </Row>
    );
}

export default NavArrows;