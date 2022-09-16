import React, { useEffect } from 'react';
import { useState } from 'react';
import Dashboard from '../../DashBoard/Dashboard';
import RunnerChart from '../RunnerChart/RunnerChart';






const VerifiedRunner = () => {

    const [runner, setRunner] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        fetch('https://ejozeebackend.herokuapp.com/admin/errandRunnerTrue')
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw response;
            })
            .then (data => {
                setRunner(data);
            })

            .catch(error => {
                console.error("Error Fetching data:", error);
                setError(error)
            })

            .finally(() => {
                setLoading(false)
            })
            
    }, [])

    if (loading) return "Loading......";
    if (error) return "Error Fetching Data!"
    


    return (
        <Dashboard>
            {{runner} && <RunnerChart />}
            {/* {runner} */}
        </Dashboard>
    )
}


export default VerifiedRunner;