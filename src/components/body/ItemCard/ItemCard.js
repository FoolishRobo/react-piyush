import React from 'react';
import { Row } from 'antd';
import '../ItemCard/ItemCard.css'
import ItemDetail from './ItemDetail';

function ItemCard(props) {
    var data = props.data;
    return (
        <div className="elevate itemCard">
            <span className='pHover' style={{fontSize:'16px'}}>{data['name']}</span>
            <h3 style={{color:'rgb(155, 161, 166)'}}>To see the supplier's information login or register</h3>
            <div style={{height:'16px'}} />
            <Row>
                <div className='itemDetailCard' style={{width:'300px'}}>
                    <ItemDetail title='Substance' value={data['substance']} />
                </div>
                <div style={{width:'16px'}} />
                <div className='itemDetailCard' style={{width:'150px'}}>
                <ItemDetail title='Cas' value={data['cas']} />
                </div>
            </Row>
            <div style={{height:'16px'}} />
            <Row>
                <div className='itemDetailCard' style={{width:'142px'}}>
                <ItemDetail title='Purity' value={data['purity']} />
                </div>
                <div style={{width:'16px'}} />
                <div className='itemDetailCard' style={{width:'142px'}}>
                <ItemDetail title='Color' value={data['color']} />
                </div>
                <div style={{width:'16px'}} />
                <div className='itemDetailCard' style={{width:'150px'}}>
                <ItemDetail title='Appearance' value={data['appearance']} />
                </div>
            </Row>
            <Row justify='end'>
                <span className='pHover' style={{fontSize:'12px'}}>View Details</span>
            </Row>
        </div>
    );
}

export default ItemCard;