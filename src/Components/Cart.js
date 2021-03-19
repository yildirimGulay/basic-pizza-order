import React, { useState } from 'react'
import Select from 'react-select';


const optionsToppings=[
{value: 'extra-cheese', label:'Extra cheese'},
{value: 'onions', label:'Onions'},
{value: 'bacon', label:'Bacon'},
{value: 'basil', label:'Basil'}
];
const optionsSize=[
    {value: '9', label:'Small'},
    {value: '12', label:'Medium'},
    {value: '14', label:'Large'},
    {value: '18', label:'Extra-Large'}
];

export default function Cart(props) {
const [toppings,setToppings]=useState([]);
const [size,setSize]=useState({});

    function  customTheme(theme){
        return{
            ...theme,
            colors:{
                ...theme.colors,
                primary25:'orange',
                primary: 'green',
            },
            
        }
    }
    return (
        <div className="cart">
        <h1> Pizza Order</h1>
        <h4>{props.name}</h4>

        <Select
        onChange={setToppings}
        options={optionsToppings}
        placeholder="Select "
        theme={customTheme}
        isMulti
        autoFocus
        />

        <Select 
        options={optionsSize}
        placeholder="Select Pizza Size"
        theme={customTheme}
        onChange={setSize}
        isSearchable
       
        />
        </div>
    )
}
