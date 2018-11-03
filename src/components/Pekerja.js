import React from 'react'

const Pekerja = props => {
  const { handleAddWorker, handlePekerjaChange, pekerja } = props
  return (
    <table className="table mt-2 table-responsive">
      <caption className="pt-0">
        <h5 className="pl-3">
          <button
            className="border border-primary p-1 rounded bg-primary"
            onClick={e => handleAddWorker(e)}
          >
            <i className="fas fa-user-plus text-white" />
          </button>
        </h5>
      </caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>IN</th>
          <th>OUT</th>
          <th />
          <th>MAKAN</th>
        </tr>
      </thead>
      <tbody>
        {pekerja.map(worker => (
          <tr key={worker.position}>
            <td>
              <input
                type="text"
                name="name"
                value={worker.name}
                onChange={e => handlePekerjaChange(e, worker.position)}
              />
            </td>
            <td>
              <input
                type="text"
                name="in"
                value={worker.in}
                onChange={e => handlePekerjaChange(e, worker.position)}
              />
            </td>
            <td>
              <input
                type="text"
                name="out"
                value={worker.out}
                onChange={e => handlePekerjaChange(e, worker.position)}
              />
            </td>
            <td>
              <input
                type="text"
                name="note"
                value={worker.note}
                onChange={e => handlePekerjaChange(e, worker.position)}
              />
            </td>
            <td>
              <input
                type="text"
                name="makan"
                value={worker.makan}
                onChange={e => handlePekerjaChange(e, worker.position)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Pekerja
