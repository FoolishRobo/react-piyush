
import { Row, Col } from 'antd';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css'

function SearchBar(props) {
    return (
        <div className="searchBar">
            <Row justify='space-between'>
                <Col span={20}>
                <input placeholder='Search'></input>
                </Col>
                
                <Col span={2}>
                <FaSearch style={{color:'rgb(140, 140, 140)'}} />
                </Col>
                
            </Row>
        </div>
    );
}

export default SearchBar;