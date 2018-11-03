import React from 'react'

const Niaga = props => {
  const { niaga } = props
  return (
    <div className="row no-gutters mt-2">
      <div className="col-12">
        <div className="input-group input-group-sm">
          <div className="input-group-prepend">
            <span className="input-group-text">Niaga</span>
            <span className="input-group-text">RM</span>
          </div>
          <span readOnly className="form-control form-control-sm disabled">
            {niaga}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Niaga
