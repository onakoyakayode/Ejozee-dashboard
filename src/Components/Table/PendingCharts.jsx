import React, { useMemo, useState, useEffect }from 'react';
import { useTable } from 'react-table';
import './TableChart.css'
import TableColumn from './TableColumn/TableColumn';
// import Table from './TableApi/TableApi';
// import PendingErrands from '../Errands/Pending-Errands/PendingErrands';
// import CompletedErrands from '../Errands/Completed-Errands/CompletedErrands';
// import VerifiedRunner from '../Runners/VerifiedRunners/VerifiedRunners';
// import UnverifiedRunners from '../Runners/UnverifiedRunners/UnverifiedRunners';
// import Dashboard from '../DashBoard/Dashboard';
// import PendingErrands from '../Errands/Pending-Errands/PendingErrands';

import close from "../../icon/x-lg.svg"
import { useCallback } from 'react';



const TableChart = () => {


    const [pendingChart, setPendingChart] = useState([])


    const fetchData = useCallback(() => {
        // fetch("https://jsonplaceholder.typicode.com/users/1")
        fetch("https://ejozeebackend.herokuapp.com/admin/errandSenderFalse")
        .then(res => res.json())
        .then(data =>setPendingChart(data))
    }, [pendingChart])

    useEffect(() => {        
        fetchData();
            
    }, [fetchData]);

    

    const [open, setOpen] = useState(false)
    const columns = useMemo(() => TableColumn, [])
    const data = useMemo(() => pendingChart, [pendingChart]);
    const DataArray = []
    DataArray.push(data)
    const tableInstance =  useTable({
        columns,
        data: DataArray,
    })

    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        rows, 
        prepareRow, 
    } = tableInstance





    // function handleClick() {
    //     setOpen(!open)
    // }




    return (
        <>
         
        <table {...getTableProps()}>
            <thead>
                { headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {
                        headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>
                                {column.render('Header')}
                            </th>
                        ))
                    }
                    
                </tr>
                ))}
                
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}> 
                            {row.cells.map(cell => {
                                return  (
                                <td {...cell.getCellProps({onClick: () => {setOpen(true)}})}>
                                    {cell.render('Cell')}
                                </td>
                                )
                            })}
                           
                        </tr>
                    )
                })}
                
            </tbody>
        </table>
        {open}

        {/* {   
        datas.map((data) => (
             open && <div className='modal-content'>
                <h1 className='modal-title'>Errand 001</h1>
                <img src={close} onClick={handleClick}  alt="close-tab" className='close-img' />
                <form className='pending-form' key={data.id}>
                    <div className='pending-date'>
                        <label htmlFor='pending-date'>Date</label>
                        <input type='text' name='pending-date' value={data.date}  />
                    </div>
                    <div className='pending-fullname'>
                        <div className='pending-firstname'>
                            <label htmlFor='pending-firstname'>First Name</label>
                            <input type="text" name='pending-firstname' value={data.firstName} />
                        </div>
                        <div className='pending-lastname'>
                            <label htmlFor='pending-lastname'>Last Name</label>
                            <input type="text" name='pending-lastname' value={data.lastName} />
                        </div>
                    </div>
                    <div className='pending-mail-subject'>
                        <div className='pending-email'>
                            <label htmlFor='pending-email'>Email</label>
                            <input type="text" name='pending-email' value={data.email} />
                        </div>
                        <div className='pending-subject'>
                            <label htmlFor='pending-subject'>Subject</label>
                            <input type="text" name='pending-subject' value={data.subject} />
                        </div>
                    </div>
                    <div className='pending-loaction'>
                        <label htmlFor='pending-location'>Location</label>
                        <input type="text" name='pending-location' value="location" />
                    </div>
                    <div className='pending-errand-details'>
                        <label htmlFor='pending-errand-details'>Errand Details</label>
                        <textarea className='pending-errand-details-textarea' type='text' rows="5" cols="30" name='pending-errand-details'></textarea>
                    </div>
                    <button className='pending-submit-button'>Complete!</button>
                </form>
            </div>             
        ))} */}
        </>
    )
}

export default TableChart;