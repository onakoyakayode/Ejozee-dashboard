import React, { useMemo, useState }from 'react';
import { useTable } from 'react-table';
import './TableChart.css'
import TableColumn from './TableColumn/TableColumn';
import Table from './TableApi/TableApi';
import PendingErrands from '../Errands/Pending-Errands/PendingErrands';
import CompletedErrands from '../Errands/Completed-Errands/CompletedErrands';
import VerifiedRunner from '../Runners/VerifiedRunners/VerifiedRunners';
import UnverifiedRunners from '../Runners/UnverifiedRunners/UnverifiedRunners';
// import Dashboard from '../DashBoard/Dashboard';
// import PendingErrands from '../Errands/Pending-Errands/PendingErrands';



const TableChart = () => {
    const [open, setOpen] = useState(false)
    const columns = useMemo(() => TableColumn, [])
    const data = useMemo(() => Table, []);
    const pendingErrands = useMemo(() => Table, []);
    const completedErrands = useMemo(() => Table, []);
    const VerifiedRunner = useMemo(() => Table, []);
    const unverifedRunner = useMemo(() => Table, []);
    const tableInstance =  useTable({
        columns,
        data,
        pendingErrands,
        completedErrands,
        VerifiedRunner, 
        unverifedRunner
    })

   


    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        rows, 
        prepareRow, 
    } = tableInstance

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
        </>
    )
}

export default TableChart;