import React, { useMemo }from 'react';
import { useTable } from 'react-table';
import './TableChart.css'
import TableColumn from './TableColumn/TableColumn';
import TableApi from './TableApi/TableApi';



const TableChart = () => {
    const columns = useMemo(() => TableColumn, [])
    const data = useMemo(() => TableApi, [])

    const tableInstance =  useTable({
        columns,
        data
    })

    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        rows, 
        prepareRow, 
    } = tableInstance


    return (
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
                                <td {...cell.getCellProps()}>
                                    {cell.render('Cell')}
                                </td>
                                )
                            })}
                           
                        </tr>
                    )
                })}
                
            </tbody>
        </table>
    )
}

export default TableChart;