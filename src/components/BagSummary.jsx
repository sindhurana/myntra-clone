import React from 'react'

export default function BagSummary({ finalItems }) {

    let totalItem = finalItems.length;
    let totalMRP = 0
    let totalDiscount = 0;
    let finalPayment = 0;
    let Convenience_Fee = 99;


    finalItems.forEach((item) => {
        totalMRP += item.original_price;
        totalDiscount += item.original_price - item.current_price
    })

    finalPayment = totalMRP - totalDiscount + Convenience_Fee



    return <>
        <div className="bag-details-container">
            <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
            <div className="price-item">
                <span className="price-item-tag">Total MRP</span>
                <span className="price-item-value">₹{totalMRP}</span>
            </div>
            <div className="price-item">
                <span className="price-item-tag">Discount on MRP</span>
                <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
            </div>
            <div className="price-item">
                <span className="price-item-tag">Convenience Fee</span>
                <span className="price-item-value">{Convenience_Fee}</span>
            </div>
            <hr />
            <div className="price-footer">
                <span className="price-item-tag">Total Amount</span>
                <span className="price-item-value">₹{finalPayment}</span>
            </div>
        </div>
        <button className="btn-place-order">
            <div className="css-xjhrni">PLACE ORDER</div>
        </button>
    </>


}
