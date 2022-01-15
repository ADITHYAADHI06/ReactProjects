import React from 'react'

const Products = (props) => {
    return (
        <div className="container my-3">
            <div className="row rounded border py-2 border-secondary d-flex justify-content-between align-items-center">
                <div className="col-5">
                    <h3>{props.products.name} <span class="badge fs-5 p-1 bg-secondary">₹ {props.products.price}</span></h3>

                </div>
                <div className="col-3">
                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button type="button" className="btn btn-danger" onClick={()=>{
                            props.decreQuantity(props.index);
                        }}>-</button>
                        <button type="button" className="btn btn-warning">{props.products.quantity}</button>
                        <button type="button" className="btn btn-success" onClick={()=>{
                            props.increQuantity(props.index);
                        }}>+</button>
                    </div>
                </div>
                <div className="col-2">
                 {props.products.quantity*props.products.price}
                </div>
                <div className="col-2">
                <button type="button" className="btn btn-danger" onClick={()=>{
                            props.Remove(props.index);
                        }}>Remove</button>
                </div>

            </div>
        </div>
    )
}

export default Products
