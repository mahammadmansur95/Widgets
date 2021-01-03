import React, { useEffect, useState } from 'react';

 const Dropdown = ({ options,selected,onSelectedChange }) =>{

    //for hiding dropdown
    const [open,setOpen] = useState(false);

    //to close dropdown when clicked somewhere else
    useEffect(() => {
        document.body.addEventListener('click',() =>{
            // setOpen(false);
        });
    },[]);

    const renderedOptions = options.map((option) =>{

        // filter option list
        if(option.value === selected.value){
            return null;
        }

        return (
            <div 
                key={option.value}
                className="item"
                onClick={()=> onSelectedChange(option)}
            >
                {option.label}
            </div>
        );
    });


    return (
        <div className="ui form">
            <div className="field">
                <label className="label">Select a color</label>
                <div 
                    onClick={() => setOpen(!open)} 
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;