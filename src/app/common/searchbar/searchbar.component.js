import React, { Component } from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';

import './searchbar.component.scss';

class SearchbarComponent extends Component {

  state = {
    value: ''
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  handleChange = ( e ) => {
    this.setState( { value: e.target.value } );
  }

  handleSubmit = ( e ) => {
    e.preventDefault();

    const search = qs.stringify( { q: this.state.value } );
    const pathname = '/s';
    
    const {
      router: {
        history
      }
    } = this.context;

    history.push( { pathname, search } );
  }

  render() {
    return (
      <div className="Searchbar py-3 py-sm-2 bg-light">
        <div className="container">
          <form onSubmit={ this.handleSubmit }>
            <div className="row justify-content-sm-center">
              <div className="col col-md-8">
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control"
                    value={ this.state.value }
                    onChange={ this.handleChange }
                  />
                  <span className="input-group-btn">
                    <input className="btn btn-primary" type="submit" value="Search"/>
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchbarComponent;
