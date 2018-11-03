import React from 'react'

const Order = props => {
  const { order, change, discount } = props
  return (
    <div className="row no-gutters mt-2">
      <div className="col-12">
        <div className="input-group input-group-sm">
          <div className="input-group-prepend">
            <span className="input-group-text">Order</span>
            <span className="input-group-text">RM</span>
          </div>
          <input
            type="number"
            placeholder="Order"
            name="order"
            value={order}
            onChange={e => change(e)}
            className="form-control form-control-sm"
          />
          <div className="input-group-prepend">
            <span className="input-group-text">Dis%</span>
          </div>
          <input
            type="number"
            placeholder="Discount"
            name="discount"
            value={discount}
            onChange={e => change(e)}
            className="form-control form-control-sm"
          />
        </div>
      </div>
    </div>
  )
}

export default Order
