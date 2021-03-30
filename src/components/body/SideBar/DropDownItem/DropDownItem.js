
import { Row } from 'antd';
import React from 'react';
import { FaChevronDown} from 'react-icons/fa';
import './DropDownItem.css'
import { Collapse } from 'antd';
import SelectItem from './SelectItem';
import SearchBar from '../SearchBar/SearchBar';

const { Panel } = Collapse;
function callback(key) {
    // console.log(key);
}


function DropDownItem(props) {
    var {keys, value} = props;
    return (
        <div className='dropDownItemDiv'>
            <Collapse onChange={callback} ghost={true}>
                <Panel
                    header={<Row justify='space-between'>
                        <h4>{keys}</h4>
                        <FaChevronDown className='icon' />
                    </Row>} key="1"
                    showArrow={false}
                >
                <SearchBar/>
                <div style={{height:'12px'}} />
                <SelectItem items={value}/>
                </Panel>
            </Collapse>
        </div>
    );
}

export default DropDownItem;