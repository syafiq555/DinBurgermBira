import React from 'react'

const Remarks = props => {
  const { remarks, change } = props
  return (
    <div>
      <div className="remarks text-left pl-2">
        <h6>Remarks: </h6>
        <textarea className="form-control" value={remarks} onChange={change} />
      </div>
    </div>
  )
}

export default Remarks
