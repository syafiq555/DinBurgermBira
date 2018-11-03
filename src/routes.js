import React, { Fragment } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import SaleList from './containers/SaleList'
import SaleForm from './containers/SaleForm'
import NotFound from './components/NotFound'
import ViewSale from './containers/ViewSale/ViewSale'

const Routes = () => {
  return (
    <Router>
      <Fragment>
        <nav className="navbar navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            Burger
          </Link>
          <ul className="navbar-nav d-flex flex-row justify-content-end">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item ml-3">
              <Link className="nav-link" to="/new_form">
                Sale Form
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={SaleList} />
          <Route path="/new_form" component={SaleForm} />
          <Route path="/view_sale" component={ViewSale} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Fragment>
    </Router>
  )
}

export default Routes
