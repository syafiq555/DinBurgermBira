import React from 'react'

const TotalOrder = props => {
  const { totalOrder, order, discount } = props
  return (
    <div className="row no-gutters mt-2">
      <div className="col-10 offset-2 justify-content-end">
        <div className="input-group input-group-sm">
          <div className="input-group-prepend">
            <span className="input-group-text">RM</span>
          </div>
          <input
            type="text"
            name="totalOrder"
            readOnly
            value={
              totalOrder(order ? order : 0, discount ? discount : 0) !== 'NaN'
                ? totalOrder(order, discount)
                : 0
            }
            className="form-control form-control-sm"
          />
        </div>
      </div>
    </div>
  )
}

export default TotalOrder
