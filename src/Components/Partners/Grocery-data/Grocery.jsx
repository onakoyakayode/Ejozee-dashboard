import React from 'react';
import '../Groceries/Groceries.css'





const Grocery = ({data}) => {
    console.log(data)
    return (
            <div className="grocery-client">
                <div className="client-img">
                    <img src={data.image} className="client" alt='client' />
                </div>
                <div className="client-details">
                    <h3 className='store-name'>{data.name}</h3>
                    <h5 className='store-address'><i className="bi bi-geo-alt">{data.address}</i></h5>
                    <h5 className='store-num'><i className="bi bi-telephone">{data.phone}</i></h5>
            
                </div>
            </div> 
    )
}


export default Grocery;