import React from 'react'

const Syiling = props => {
  const { syiling, change, syilingDif } = props
  return (
    <div className="row no-gutters mt-3">
      <div className="col-12">
        <div className="input-group input-group-sm">
          <div className="input-group-prepend">
            <span className="input-group-text">Syiling</span>
            <span className="input-group-text">RM</span>
          </div>
          <span
            type="number"
            placeholder="Yesterday"
            name="yesterday"
            readOnly
            className="form-control form-control-sm disabled"
          >
            {syiling.yesterday}
          </span>
          <input
            type="number"
            name="today"
            value={syiling.today}
            onChange={e => change(e)}
            placeholder="Today"
            className="form-control form-control-sm"
          />
          <input
            type="number"
            value={
              syilingDif(syiling.today, syiling.yesterday) !== 'NaN'
                ? syilingDif(syiling.today, syiling.yesterday).toFixed(2)
                : 0
            }
            className="form-control form-control-sm disabled"
            readOnly
          />
        </div>
      </div>
    </div>
  )
}

export default Syiling
