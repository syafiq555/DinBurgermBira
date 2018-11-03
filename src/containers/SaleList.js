import React, { Component } from 'react'
import db from '../database/firebase'
import { loading } from './SaleForm'
import ViewSale from './ViewSale/ViewSale'
class SaleList extends Component {
  state = {
    sales: [],
    isLoading: true,
    viewDetail: false
  }

  componentDidMount() {
    const { history } = this.props
    db.ref('sales')
      .limitToLast(10)
      .on('value', snapshot => {
        snapshot.val()
          ? this.mapSnapShotToState(snapshot.val())
          : history.push('/new_form')
      })
  }

  mapSnapShotToState(snapshot) {
    let snapShotSales = []
    const key = Object.keys(snapshot)

    key.forEach(key => {
      snapShotSales.push(snapshot[key])
    })

    snapShotSales.forEach((sale, i) => (sale.key = key[i]))

    this.setState({ sales: snapShotSales }, () =>
      this.setState({ isLoading: false })
    )
  }

  render() {
    const { isLoading, sales, viewDetail } = this.state
    return (
      <React.Fragment>
        {isLoading ? (
          <div
            className="d-flex flex-column justify-content-center"
            style={{ height: '100vh', backgroundColor: '#5C476F' }}
          >
            <img className="img-fluid" src={loading} alt="Loading..." />
          </div>
        ) : (
          <React.Fragment>
            <div className="container mt-3">
              <div className="row">
                {sales.map(sale => (
                  <React.Fragment key={sale.key}>
                    <Modal _key={sale.key} sale={sale} />
                    <div
                      className="col-sm-12 mt-2"
                      data-toggle="modal"
                      data-target={`#${sale.key}`}
                    >
                      <ViewSale sale={sale} viewDetail={viewDetail} />
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    )
  }
}

const Modal = props => {
  const { sale, _key } = props
  return (
    <React.Fragment>
      <div
        className="modal fade"
        id={_key}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                {sale.id}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Total <b>RM {sale.total}</b>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SaleList
