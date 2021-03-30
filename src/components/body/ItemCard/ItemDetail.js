
import React from 'react';
import '../ItemCard/ItemCard.css';

function ItemDetail(props) {
    var {title, value} = props;
    return (
        <div className='itemDetailInnerDiv'>
            <h5 className='itemDetailInnerDivTitle'>{title}</h5>
            <h4>{value}</h4>
        </div>
    );
}

export default ItemDetail;