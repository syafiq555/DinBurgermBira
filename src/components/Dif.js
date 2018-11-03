import React from 'react'

const Dif = props => {
  const { value, isNegative } = props
  return (
    <div className="row no-gutters mt-2">
      <div className="col-12">
        <div className="input-group input-group-sm">
          <div className="input-group-prepend">
            <span
              className={`form-control form-control-sm 
              ${!isNegative ? 'bg-info' : 'bg-danger'} 
              text-white disabled`}
            >
              Beza
            </span>
            <span
              className={`form-control form-control-sm 
              ${!isNegative ? 'bg-info' : 'bg-danger'} 
              text-white disabled`}
            >
              RM
            </span>
          </div>
          <input
            type="text"
            name="diff"
            value={value !== 'NaN' ? value : 0}
            readOnly
            className={`form-control form-control-sm ${
              !isNegative ? 'bg-info' : 'bg-danger'
            } text-white disabled`}
          />
        </div>
      </div>
    </div>
  )
}

export default Dif
