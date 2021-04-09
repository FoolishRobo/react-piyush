
import { Collapse, Divider } from 'antd';
import { FaChevronDown } from 'react-icons/fa';
import React from 'react';
import { Row, Col } from 'antd';
import './Feedback.css'


const { Panel } = Collapse;

function Feedback(props) {
    return (
        <div className="feedback">
            <Collapse ghost={true}>
                <Panel style={{padding:'0px'}}
                    header=
                    {<Row justify='space-between'>
                        <Col>
                            <b style={{color:'green', fontSize:'15px'}}>Have not found what you are looking for?</b>
                            <p>Let us help you find the desired product.</p>
                        </Col>
                        <Col>
                            <FaChevronDown className='dropDownIcon' />
                        </Col>
                    </Row>} 
                    key="1"
                    showArrow={false}
                >
                    <Divider style={{color:'rgb(180,180,180)', padding:'0px', marginTop:'0px'}} />
                    <p>ahwuidbciurh cifuewhiu fiu aefiuewaiu iua fiuewihf iehwif eiuw few UWU EWPHO FPEHWUAHFUI EHWAIHFIUEABIFBEIUABWBF ABFIUEHHWIUAHF EUIHWAFIEBGIAOHNEWQCUNHEUIWQC FIUHEWIQUN</p>
                </Panel>
            </Collapse>
        </div>
    );
}

export default Feedback;