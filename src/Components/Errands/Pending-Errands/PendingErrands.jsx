import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// import TableChart from '../../Table/TableChart';
import './PendingErrands.css'
import close from '../../../../src/icon/x-lg.svg'
import Dashboard from '../../DashBoard/Dashboard';



// const PendingErrands = ({setOpen, tableData})

const PendingErrands = () => {
    const [open, setOpen]= useState(true)
    const [pendingErrands, setPendingErrands] = useState(null)
    const [ loading, setLoading] = useState(true)
    const [ error, setError] = useState(null)


    useEffect(() => {
        fetch("https://ejozeebackend.herokuapp.com/admin/errandSenderFalse")
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw response;
            })

            .then(data => {
                setPendingErrands(data);
            })
            .catch(error => {
                console.error("Error fetching data:" , error);
                setError(error);
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if (loading) return "Loading...";
    if (error) return "Error fetching data!"

    const handleClick = () => {
        setOpen(false)
    }
    
    return (
        <Dashboard>
            
            {{pendingErrands}} 
           
           {open && <div className='modal-content'>
                <h1 className='modal-title'>Errand 001</h1>
                <img src={close} onClick={handleClick}  alt="close-tab" className='close-img' />
                <form className='pending-form' key="{data.id}">
                    <div className='pending-date'>
                        <label htmlFor='pending-date'>Date</label>
                        <input type='text' name='pending-date' value="date"  />
                    </div>
                    <div className='pending-fullname'>
                        <div className='pending-firstname'>
                            <label htmlFor='pending-firstname'>First Name</label>
                            <input type="text" name='pending-firstname' value="firstName" />
                        </div>
                        <div className='pending-lastname'>
                            <label htmlFor='pending-lastname'>Last Name</label>
                            <input type="text" name='pending-lastname' value="lastName" />
                        </div>
                    </div>
                    <div className='pending-mail-subject'>
                        <div className='pending-email'>
                            <label htmlFor='pending-email'>Email</label>
                            <input type="text" name='pending-email' value="email" />
                        </div>
                        <div className='pending-subject'>
                            <label htmlFor='pending-subject'>Subject</label>
                            <input type="text" name='pending-subject' value="subject" />
                        </div>
                    </div>
                    <div className='pending-loaction'>
                        <label htmlFor='pending-location'>Location</label>
                        <input type="text" name='pending-location' value="location" />
                    </div>
                    <div className='pending-errand-details'>
                        <label htmlFor='pending-errand-details'>Errand Details</label>
                        <textarea className='pending-errand-details-textarea' type='text' name='pending-errand-details' value="" />
                    </div>
                    <button className='pending-submit-button'>Complete!</button>
                </form>
            </div>            } 
        </Dashboard>
    )

  
}



export default PendingErrands;



// {
//                 tableData.map((data) => (
//                     <div className='modal-content'>
//                         <h1 className='modal-title'>Errand 001</h1>
//                         <img src={close} onClick={handleClick}  alt="close-tab" className='close-img' />
//                         <form className='pending-form' key={data.id}>
//                             <div className='pending-date'>
//                                 <label htmlFor='pending-date'>Date</label>
//                                 <input type='text' name='pending-date' value={data.date}  />
//                             </div>
//                             <div className='pending-fullname'>
//                                 <div className='pending-firstname'>
//                                     <label htmlFor='pending-firstname'>First Name</label>
//                                     <input type="text" name='pending-firstname' value={data.firstName} />
//                                 </div>
//                                 <div className='pending-lastname'>
//                                     <label htmlFor='pending-lastname'>Last Name</label>
//                                     <input type="text" name='pending-lastname' value={data.lastName} />
//                                 </div>
//                             </div>
//                             <div className='pending-mail-subject'>
//                                 <div className='pending-email'>
//                                     <label htmlFor='pending-email'>Email</label>
//                                     <input type="text" name='pending-email' value={data.email} />
//                                 </div>
//                                 <div className='pending-subject'>
//                                     <label htmlFor='pending-subject'>Subject</label>
//                                     <input type="text" name='pending-subject' value={data.subject} />
//                                 </div>
//                             </div>
//                             <div className='pending-loaction'>
//                                 <label htmlFor='pending-location'>Location</label>
//                                 <input type="text" name='pending-location' value={data.location} />
//                             </div>
//                             <div className='pending-errand-details'>
//                                 <label htmlFor='pending-errand-details'>Errand Details</label>
//                                 <textarea className='pending-errand-details-textarea' type='text' name='pending-errand-details' value="" />
//                             </div>
//                             <button className='pending-submit-button'>Complete!</button>
//                         </form>
//                     </div>
//                 ))
//             }