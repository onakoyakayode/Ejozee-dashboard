import React from 'react';
import PieChart from '../Charts/PieChart/PieChart';
import Dashboard from '../DashBoard/Dashboard';
import PendingChart from '../Table/PendingCharts'

import './Overview.css'



const Overview = () => {
    return (
        <Dashboard className='overview-container'>
            <div className='overview-chart'>
                <div className='overview-chart-box'></div>
                <PieChart />
            </div>
            <PendingChart />
        </Dashboard>
    )
}


export default Overview;