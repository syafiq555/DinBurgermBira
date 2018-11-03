import React from 'react'

const ViewSale = props => {
  const { key, total } = props.sale
  const { viewDetail } = props
  return key ? (
    !viewDetail ? (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{key}</h5>
          <p className="card-text">RM {total}</p>
        </div>
      </div>
    ) : (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{key}</h5>
          <p className="card-text">RM {total}</p>
          <p className="card-text">RM {total}</p>
          <p className="card-text">RM {total}</p>
          <p className="card-text">RM {total}</p>
        </div>
      </div>
    )
  ) : (
    <h1>Something went wrong</h1>
  )
}

export default ViewSale
