import React from 'react'
import './css/stocks.css'

const Stocks = props => {
  const { stocks, change, stockSemalam } = props
  const properties = Object.getOwnPropertyNames(stocks)

  return (
    <div className="row no-gutters pt-3">
      <div className="col-12">
        <table className="table table-sm table-bordered mb-0">
          <tbody>
            <tr className="separated-table">
              <td className="px-0 mx-0 text-center">{stockSemalam.ROB}</td>
              <td className="px-0 mx-0 text-center">{stockSemalam.R}</td>
              <td className="px-0 mx-0 text-center">{stockSemalam.A}</td>
              <td className="px-0 mx-0 text-center">{stockSemalam.D}</td>
              <td className="px-0 mx-0 text-center">{stockSemalam.T}</td>
              <td className="px-0 mx-0 text-center">{stockSemalam.H}</td>
              <td className="px-0 mx-0 text-center">{stockSemalam.S}</td>
              <td className="px-0 mx-0 text-center">{stockSemalam.C}</td>
              <td className="px-0 mx-0 text-center">{stockSemalam.OB}</td>
            </tr>
          </tbody>
        </table>
        <table className="table table-sm table-bordered mb-0">
          <thead>
            <tr className="bg-dark text-white text-center">
              {properties.map((name, i) => (
                <th key={i}>{name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {Object.keys(stocks).map(key => (
                <td className="p-0" key={key}>
                  <input
                    type="number"
                    name={key}
                    className="form-control form-control-sm m-0 p-0 text-center"
                    value={stocks[key]}
                    onChange={e => change(e)}
                  />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Stocks
