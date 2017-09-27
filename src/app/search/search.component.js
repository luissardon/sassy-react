import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import qs from 'query-string';

import './search.component.scss';

class SearchComponent extends Component {

  state = {
    searchQuery: ''
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  componentWillMount() {
    this.setState({
      searchQuery: qs.parse( this.context.router.history.location.search ).q
    });
  }

  render() {
    return (
      <div className="Search">
        <h2 className="Search-title">Search</h2>
        <hr />
        <div className="Search-container">
          <div className="container">
            <div className="row">
              <div className="col my-auto">
                {
                  this.state.searchQuery
                    ?
                      <p className="my-0 text-left">Results for <strong>{ this.state.searchQuery }</strong>:</p>
                    :
                      null
                }
              </div>
              <div className="col col-auto">
                <Link className="btn btn-link" to="/">{ '< Home' }</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchComponent;
