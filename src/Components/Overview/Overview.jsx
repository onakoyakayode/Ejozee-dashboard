import React from 'react';
import PieChart from '../Charts/PieChart/PieChart';
import Dashboard from '../DashBoard/Dashboard';
import TableChart from '../Table/TableChart';

import './Overview.css'



const Overview = () => {
    return (
        <Dashboard className='overview-container'>
            <div className='overview-chart'>
                <div className='overview-chart-box'></div>
                <PieChart />
            </div>
            <TableChart />
        </Dashboard>
    )
}


export default Overview;