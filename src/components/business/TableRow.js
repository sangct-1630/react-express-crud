// TableRow.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TableRow extends Component {

  delete = () => {
    this.props.onDelete(this.props.obj._id)
  }

  render() {
    return (
      <tr>
        <td>
          {this.props.obj.person_name}
        </td>
        <td>
          {this.props.obj.business_name}
        </td>
        <td>
          {this.props.obj.business_gst_number}
        </td>
        <td>
          <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
        </td>
        <td>
          <button onClick={this.delete} className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}

export default TableRow;