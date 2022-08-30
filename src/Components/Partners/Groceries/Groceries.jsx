import React from 'react';
import './Groceries.css';
import Dashboard from '../../DashBoard/Dashboard';
import image from '../../../Images/grocery1.jpg'
import image2 from '../../../Images/grocery2.jpg'
import image3 from '../../../Images/grocery3.jpg'
import image4 from '../../../Images/grocery4.jpg'
import image5 from '../../../Images/grocery5.jpg'





const Groceries = () => {


    

    return (
        <Dashboard>
            <div className='grocery-container'>
                <div className="grocery-client">
                    <div className="client-img">
                        <img src={image} className="client" alt='client' />
                    </div>
                    <div className="client-details">
                        <h3 className='store-name'>Super Shoppy</h3>
                        <h5 className='store-address'><i className="bi bi-geo-alt">Aminu crescent Wuse II, Abuja</i></h5>
                        <h5 className='store-num'><i className="bi bi-telephone">09184745633, 08023455673</i></h5>
                
                    </div>
                </div> 
                <div className="grocery-client">
                    <div className="client-img">
                        <img src={image2} className="client" alt='client' />
                    </div>
                    <div className="client-details">
                        <h3 className='store-name'>Super Shoppy</h3>
                        <h5 className='store-address'><i className="bi bi-geo-alt">Aminu crescent Wuse II, Abuja</i></h5>
                        <h5 className='store-num'><i className="bi bi-telephone">09184745633, 08023455673</i></h5>
                
                    </div>
                </div>
                <div className="grocery-client">
                    <div className="client-img">
                        <img src={image3} className="client" alt='client' />
                    </div>
                    <div className="client-details">
                        <h3 className='store-name'>Super Shoppy</h3>
                        <h5 className='store-address'><i className="bi bi-geo-alt">Aminu crescent Wuse II, Abuja</i></h5>
                        <h5 className='store-num'><i className="bi bi-telephone">09184745633, 08023455673</i></h5>
                
                    </div>
                </div>
                <div className="grocery-client">
                    <div className="client-img">
                        <img src={image4} className="client" alt='client' />
                    </div>
                    <div className="client-details">
                        <h3 className='store-name'>Super Shoppy</h3>
                        <h5 className='store-address'><i className="bi bi-geo-alt">Aminu crescent Wuse II, Abuja</i></h5>
                        <h5 className='store-num'><i className="bi bi-telephone">09184745633, 08023455673</i></h5>
                
                    </div>
                </div>
                <div className="grocery-client">
                    <div className="client-img">
                        <img src={image5} className="client" alt='client' />
                    </div>
                    <div className="client-details">
                        <h3 className='store-name'>Super Shoppy</h3>
                        <h5 className='store-address'><i className="bi bi-geo-alt">Aminu crescent Wuse II, Abuja</i></h5>
                        <h5 className='store-num'><i className="bi bi-telephone">09184745633, 08023455673</i></h5>
                
                    </div>
                </div>
                <div className="grocery-client">
                    <div className="client-img">
                        <img src={image2} className="client" alt='client' />
                    </div>
                    <div className="client-details">
                        <h3 className='store-name'>Super Shoppy</h3>
                        <h5 className='store-address'><i className="bi bi-geo-alt">Aminu crescent Wuse II, Abuja</i></h5>
                        <h5 className='store-num'><i className="bi bi-telephone">09184745633, 08023455673</i></h5>
                
                    </div>
                </div>
                <div className="grocery-client">
                    <div className="client-img">
                        <img src={image3} className="client" alt='client' />
                    </div>
                    <div className="client-details">
                        <h3 className='store-name'>Super Shoppy</h3>
                        <h5 className='store-address'><i className="bi bi-geo-alt">Aminu crescent Wuse II, Abuja</i></h5>
                        <h5 className='store-num'><i className="bi bi-telephone">09184745633, 08023455673</i></h5>
                
                    </div>
                </div>              
            </div>
        </Dashboard>
    )
}


export default Groceries;