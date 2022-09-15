import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Dashboard from '../../DashBoard/Dashboard';
import TableChart from '../../Table/TableChart';
import './CompletedErrands.css'




const CompletedErrands = () => {

    const [completedErrands, setCompletedErrands] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)



    useEffect(() => {
        fetch("https://ejozeebackend.herokuapp.com/admin/errandSenderTrue")

        .then ( response => {
            if (response.ok) {
                return response.json()
            }
            throw response;
        })
        .then ( data => {
            setCompletedErrands(data);
        })
        .catch ( error => {
            console.error("Error fetching data: ", error);
            setError(error);
        })
        .finally (() => {
            setLoading(false);
        });
    }, [])

    if (loading) return "Loading...";
    if (error) return "Error fecthing data!"

    return (
        <Dashboard>
            {{completedErrands} && <TableChart />}
            {/* {completedErrands} */}
        </Dashboard>
    )
}


export default CompletedErrands;