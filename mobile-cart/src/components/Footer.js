import React from 'react'
import './Footer.css'


const Footer = (props) => {
    return (
        <div>
            <div className="row text-center fixed-bottom">
                <div className="col-3 py-1 bg-danger text-white Btn" onClick={()=>{
                            props.Reset();
                        }} >
                    Reset
                </div>
               <div className="col-6 py-1 bg-dark text-white">
       {props.Totalamount}
               </div>
 <div className="col-3 py-1 bg-primary text-white Btn" >
     Paynow
 </div>
            </div>
        </div>
    )
}

export default Footer
