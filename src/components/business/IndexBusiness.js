import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      business: []
    };
  }

  fetchData = () => {
    axios.get('http://localhost:3001/api/business')
      .then(response => {
        this.setState({
          business: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  componentDidMount(){
    this.fetchData()
  }

  handleDelete = businessId => {
    axios.delete('http://localhost:3001/api/business/delete/' + businessId)
      .then(res => {
        this.setState(prevState => ({
          business: prevState.business.filter(business => business._id !== businessId),
        }));
      })
      .catch(err => console.log(err))
  };

  tabRow() {
    return this.state.business.map((object, i) =>
       <TableRow obj={object} key={i} onDelete={this.handleDelete}/>
    );
  }

  render() {
    return (
      <div>
        <h3 align="center">Business List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
          <tr>
            <th>Person</th>
            <th>Business</th>
            <th>GST Number</th>
            <th colSpan="2">Action</th>
          </tr>
          </thead>
          <tbody>
            {this.tabRow()}
          </tbody>
        </table>
      </div>
    );
  }
}