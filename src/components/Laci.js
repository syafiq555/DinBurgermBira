import React from 'react'

const Laci = props => {
  const { laci, change } = props
  return (
    <div className="row no-gutters mt-2">
      <div className="col-12">
        <div className="input-group input-group-sm">
          <div className="input-group-prepend">
            <span className="input-group-text">Laci</span>
            <span className="input-group-text">RM</span>
          </div>
          <input
            type="text"
            name="laci"
            onChange={change}
            value={laci}
            className="form-control form-control-sm"
          />
        </div>
      </div>
    </div>
  )
}

export default Laci
