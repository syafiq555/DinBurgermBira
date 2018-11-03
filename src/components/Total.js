import React from 'react'

const Total = props => {
  const { calculateTotal } = props
  return (
    <div className="row no-gutters mt-2">
      <div className="col-12">
        <div className="input-group input-group-sm">
          <div className="input-group-prepend">
            <span className="input-group-text bg-success text-white">
              Total
            </span>
            <span className="input-group-text bg-success text-white">RM</span>
          </div>
          <input
            type="text"
            name="total"
            readOnly
            value={calculateTotal !== 'NaN' ? calculateTotal : 0}
            className="form-control form-control-sm bg-success text-white disabled"
          />
        </div>
      </div>
    </div>
  )
}

export default Total
