import React, { Component } from 'react'
import './SaleForm.css'
import Stocks from '../components/Stocks'
import Syiling from '../components/Syiling'
import Order from '../components/Order'
import TotalOrder from '../components/TotalOrder'
import Niaga from '../components/Niaga'
import Laci from '../components/Laci'
import Total from '../components/Total'
import Dif from '../components/Dif'
import Barang from '../components/barang'
import Pekerja from '../components/Pekerja'
import Remarks from '../components/Remarks'
import db from '../database/firebase'

const totalOrder = (order = 0, dis = 0) =>
  Number.parseFloat(order - dis).toFixed(2)

const syilingDif = (today = 0, yesterday = 0) => today - yesterday

const calculateTotal = (niaga, { yesterday, today }) => {
  const dif = syilingDif(today, yesterday)
  const result = niaga + dif

  return result
}

const calculateNiaga = (laci, barang) => {
  laci = laci ? Number.parseFloat(laci) : 0

  return laci + barang
}

const calculateBarang = barang => {
  let totalPrice = 0.0
  Object.keys(barang).forEach(key =>
    (totalPrice += Number.parseFloat(barang[key])).toString()
  )
  return totalPrice
}

const totalDif = (total, order) => {
  return (Number.parseFloat(total) - Number.parseFloat(order))
    .toFixed(2)
    .toString()
}

export const loading = 'https://media.giphy.com/media/nZQIwSpCXFweQ/giphy.gif'

class SaleForm extends Component {
  state = {
    stocks: {
      ROB: 0,
      R: 0,
      A: 0,
      D: 0,
      T: 0,
      H: 0,
      S: 0,
      C: 0,
      OB: 0
    },
    syiling: {
      yesterday: 0,
      today: 0
    },
    order: {
      order: 0,
      discount: 0
    },
    niaga: 0,
    laci: 0,
    isNegative: true,
    pekerja: [
      {
        position: 1,
        name: '',
        in: '',
        out: '',
        note: '',
        makan: ''
      }
    ],
    stockSemalam: {},
    barang: {
      salad: 0,
      telur: 0,
      tissue: 0,
      plastik: 0,
      sos_tomato: 0,
      minyak_masak: 0,
      sabun: 0,
      k_pasir: 0,
      kertas: 0,
      lada_hitam: 0,
      gas: 0,
      rokok: 0,
      minyak_kereta: 0,
      advance: 0
    },
    remarks: '',
    id: '',
    date_updated: '',
    isLoading: true
  }

  handleStockChange(e) {
    const { value, name } = e.target
    this.setState(prevState => ({
      stocks: {
        ...prevState.stocks,
        [name]: value
      }
    }))
  }

  handleSyilingChange(e) {
    const { name, value } = e.target
    this.setState(prevState => ({
      syiling: {
        ...prevState.syiling,
        [name]: value
      }
    }))
  }

  handleOrderChange(e) {
    const { name, value } = e.target
    this.setState(prevState => ({
      order: {
        ...prevState.order,
        [name]: value
      }
    }))
  }

  handleNiagaChange() {
    setTimeout(() => {
      this.setState({
        niaga: calculateNiaga(
          this.state.laci,
          calculateBarang(this.state.barang)
        )
      })
    }, 500)
  }

  handleBarangChange(e) {
    const { name, value } = e.target
    this.setState(prevState => ({
      barang: {
        ...prevState.barang,
        [name]: value
      }
    }))

    this.handleNiagaChange()
  }

  handleAddWorker(e) {
    e.preventDefault()
    const { pekerja } = this.state
    let { position } = pekerja[pekerja.length - 1]
    let newPekerja = {
      position: position + 1,
      name: '',
      in: '',
      out: '',
      note: '',
      makan: ''
    }
    pekerja.push(newPekerja)
    this.setState(pekerja)
  }

  handlePekerjaChange(e, position) {
    const { name, value } = e.target
    const { pekerja } = this.state
    const p = pekerja.findIndex(worker => {
      return worker.position === position
    })
    pekerja[p][name] = value
    this.setState(pekerja)
  }

  handleSubmit(e) {
    e.preventDefault()
    const d = new Date()
    const date = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
    const { niaga, syiling } = this.state
    const total = calculateTotal(niaga, syiling).toFixed(2)
    this.setState({
      id: date,
      date_updated: d,
      total: total
    })

    setTimeout(() => {
      db.ref('sales')
        .push()
        .set(this.state)
      alert('Data submitted!')
    }, 2000)
  }

  updateSemalam(sale) {
    const key = Object.keys(sale)
    const { stocks } = sale[key]
    const { today } = sale[key].syiling
    this.setState({
      stockSemalam: stocks,
      syiling: { yesterday: today }
    })
    setTimeout(this.setState({ isLoading: false }), 2000)
  }

  componentDidMount() {
    const sale = db.ref('sales').limitToLast(1)
    const { history } = this.props
    sale.once('value', snapshot => {
      snapshot.val() ? this.updateSemalam(snapshot.val()) : history.push('/')
    })
  }

  componentDidCatch(error, errorInfo) {
    alert(`${error}: ${errorInfo}`)
  }

  componentWillUnmount() {
    db.ref('sales').off()
  }

  componentDidUpdate(_, prevState) {
    if (
      this.state.niaga >= this.state.order.order &&
      prevState.isNegative === true
    ) {
      this.setState({ isNegative: false })
    }

    if (
      this.state.niaga < this.state.order.order &&
      prevState.isNegative === false
    ) {
      this.setState({ isNegative: true })
    }
  }

  render() {
    const {
      stocks,
      syiling,
      order: { order, discount },
      niaga,
      laci,
      isNegative,
      barang,
      pekerja,
      remarks,
      isLoading,
      stockSemalam
    } = this.state

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
          <form onSubmit={e => this.handleSubmit(e)}>
            <div className="container pb-5 mb-5 px-2">
              <Stocks
                stocks={stocks}
                stockSemalam={stockSemalam}
                change={e => this.handleStockChange(e)}
              />
              <Syiling
                syiling={syiling}
                syilingDif={syilingDif}
                change={e => this.handleSyilingChange(e)}
              />
              <Order
                order={order}
                discount={discount}
                change={e => this.handleOrderChange(e)}
              />
              <TotalOrder
                totalOrder={totalOrder}
                order={order}
                discount={discount}
              />
              <Laci
                laci={laci}
                change={e => {
                  this.setState(
                    {
                      laci: e.target.value
                    },
                    () => this.handleNiagaChange()
                  )
                }}
              />
              <Niaga niaga={niaga} />
              <Total
                calculateTotal={calculateTotal(niaga, syiling).toFixed(2)}
              />

              <Dif
                value={totalDif(
                  calculateTotal(niaga, syiling),
                  totalOrder(order, discount)
                )}
                isNegative={isNegative}
              />
              <Pekerja
                handleAddWorker={this.handleAddWorker.bind(this)}
                handlePekerjaChange={this.handlePekerjaChange.bind(this)}
                pekerja={pekerja}
              />
              <Barang
                barang={barang}
                change={e => this.handleBarangChange(e)}
              />
              <Remarks
                remarks={remarks}
                change={e => {
                  this.setState({
                    remarks: e.target.value
                  })
                }}
              />
              <button className="btn btn-primary mt-2 ml-2" type="submit">
                Submit
              </button>
            </div>
          </form>
        )}
      </React.Fragment>
    )
  }
}

export default SaleForm
