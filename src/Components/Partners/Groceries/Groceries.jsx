import React from 'react';
import './Groceries.css';
import Dashboard from '../../DashBoard/Dashboard';
import Grocery from '../Grocery-data/Grocery';
import GroceryData from '../../Partners/Grocery/GroceryData.json'





const Groceries = () => {


    

    return (
        <Dashboard>
            {GroceryData.map((data, index) => <Grocery key={index} data={data}/>)}
        </Dashboard>
    )
}


export default Groceries;