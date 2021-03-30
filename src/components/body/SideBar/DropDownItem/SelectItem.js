import React, { useState } from 'react';
import { Radio, Input, Row, Col } from 'antd';

function SelectItem(props) {
    var [value, setValue] = useState(null);
    var { items } = props;
    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
    };

    function onChange(e) {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return <div style={{ maxHeight: '300px', width: '100%', overflow: 'scroll', backgroundColor: 'white' }}>
        {Object.keys(items).map(function (item) {
            return <div style={{paddingBottom:'8px'}}>
                <Row>
                    <Col span={20}>
                        <Radio.Group onChange={onChange} value={value}>
                            <Radio style={radioStyle} value={item}>
                                {item}
                            </Radio>
                        </Radio.Group>
                    </Col>
                    <Col>
                        <p style={{color:'grey'}}>{items[item]}</p>
                    </Col>
                </Row>
            </div>
        })}
    </div>
}

export default SelectItem;