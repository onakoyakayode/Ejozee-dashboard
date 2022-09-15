import React from 'react';
import Dashboard from '../../DashBoard/Dashboard';
// import RunnerChart from '../RunnerChart/RunnerChart';
import { useState, useEffect } from 'react';






const UnverifiedRunner = () => {


    const [unverifedRunner, setUnverifiedRUnner] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        fetch('https://ejozeebackend.herokuapp.com/admin/errandRunnerFalse')
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw response;
            })
                .then (data => {
                    setUnverifiedRUnner(data);
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
            {/* <RunnerChart /> */}
            {unverifedRunner}
        </Dashboard>
    )
}


export default UnverifiedRunner;