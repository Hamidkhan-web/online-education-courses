import React from 'react';
import background from '../../images/1226a68e8f3a8ade9104cb9a3a5ef8bc.gif';
import logo from '../../images/logo.png';



const Header = (props) => {
    return (

        <div className='container-fluid bg-color'>
            <div className= "row d-flex flex-row justify-content-start">
                <img className='mt-1'  height='80' src={logo} alt=""/>
                </div>
            <div style={{height:'400px'}} className="container">
                <div className="row d-flex flex-row justify-content-between align-items-center">
                    <div className="col-md-7">
                        <h1 className='text-center text-color display-4 font-weight-bold'>Online Education Course </h1>
                        <br/>
                        <h2 className='text-center text-color font-weight-bold'>Course Uploaded: {props.length}</h2>
                    </div>
                    <div className="col-md-5">
                        <img className='mt-1' height='400' src={background} alt=""/>
                    </div>
                   
                </div>
            </div>
            
        </div>
    );
};
export default Header;