import React from 'react'

const Barang = props => {
  const { barang, change } = props
  return (
    <table className="table mt-2">
      <thead>
        <tr>
          <th>BARANG</th>
          <th>RM</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(barang).map(key => (
          <tr key={key}>
            <td>{key}</td>
            <td>
              <input
                type="text"
                className="form-control form-control-sm"
                value={barang[key]}
                name={key}
                onChange={change}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Barang
