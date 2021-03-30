import React from 'react';
import DropDownItem from './DropDownItem/DropDownItem';




function SideBar(props) {
    var data = {
        "INDUSTRY": {
            "Additive Manufacturing": 128,
            "Adhesives & Sealants": 128,
            "Agriculture": 128,
            "Ceramics & Glass": 128,
            "Chemical Manufacturing": 128,
            "Cleaning Products": 128,
            "Construction": 128,
            "Cosmetics & Personal Care": 128,
            "Food & Feed": 128,
            "Lab Material": 128,
            "Chemical": 128,
            "Leather & Textiles": 128,
            "Lubricants": 128,
            "Other Industries": 128,
            "Packagin Materials": 128,
            "Paints & Coatings": 128,
            "Pharma & Life Science": 128,
            "Plastics": 128,
            "Pupl & Paper": 128,
            "Research Chemicals": 128,
            "Rubber": 128,
            "Water Treatment": 128,
        },
        "PRODUCT GROUP": {
            "item1": 128,
            "item2": 128,
            "item3": 128,
            "item4": 128,
            "item5": 128,
            "item6": 128,
            "item7": 128,
            "item8": 128,
        },
        "INCOTERM": {
            "item1": 128,
            "item2": 128,
            "item3": 128,
            "item4": 128,
            "item5": 128,
            "item6": 128,
            "item7": 128,
            "item8": 128,
        },
        "DELIVERY COUNTRIES": {
            "item1": 128,
            "item2": 128,
            "item3": 128,
            "item4": 128,
            "item5": 128,
            "item6": 128,
            "item7": 128,
            "item8": 128,
        },
        "SUPPLIER LOCATIONS": {
            "item1": 128,
            "item2": 128,
            "item3": 128,
            "item4": 128,
            "item5": 128,
            "item6": 128,
            "item7": 128,
            "item8": 128,
        },
        "PACKAGING TYPE": {
            "item1": 128,
            "item2": 128,
            "item3": 128,
            "item4": 128,
            "item5": 128,
            "item6": 128,
            "item7": 128,
            "item8": 128,
        },
        "QUANTITY": {
            "item1": 128,
            "item2": 128,
            "item3": 128,
            "item4": 128,
            "item5": 128,
            "item6": 128,
            "item7": 128,
            "item8": 128,
        }
    };
    return (
        <div style={{ padding: '16px' }}>
            <span style={{ fontSize: '16px' }}>FILTER</span>
            <div style={{ height: '20px' }} />
            {
                Object.keys(data).map(function (key,index) {
                    return <div>
                        {index!==0?<div style={{ height: '16px' }} />:<></>}
                        <DropDownItem keys={key} value={data[key]}/>
                    </div>
                })
            }
        </div>
    );
}

export default SideBar;