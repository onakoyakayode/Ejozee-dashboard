import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2';




ChartJS.register(ArcElement, Tooltip, Legend);


const PieChart = () => {

    const data = {
        labels: ["Pending Tasks", "Completed Tasks",],
        datasets: [{
            label: " ",
            data: [20, 80],
            backgroundColor: [
                'hsla(378, 100%, 85%, 1)',
                'hsla(203, 57%, 35%, 1)',
            ], 
            borderColor: "#FFF",
            borderWidth: 3,
            textContent: ["80%", "20%"],
        }]
    }

    return (
        <div>
            <Pie data={data} />
        </div>

    )
}


export default PieChart;