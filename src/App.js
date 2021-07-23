import React, { Component } from "react";
import "./App.css";

const Student = {
  fName:"",
  lName:"",
};

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fName: "",
      lName: "",
      items: [],
    };
  }

  updateFirstName(event) {
    this.setState({
      fName: event.target.value,
    });
  }

  updateLastName(event) {
    this.setState({
      lName: event.target.value,
    });
  }

  handleClick() {
    var items = this.state.items;
    const student = Object.create(Student);
    student.fName = this.state.fName;
    student.lName = this.state.lName;

    items.push(student);

    this.setState({
      items: items,
      fName: "",
      lName: "",
    });
  }

  handleItemChanged(i, event) {
    var items = this.state.items;
   
    items[i].fName = event.target.fName;
    items[i].lName = event.target.lName;

    this.setState({items: items,});
  }

  handleItemDeleted(i) {
    var items = this.state.items;

    items.splice(i, 1);

    this.setState({
      items: items,
    });
  }


  renderRows() {
    var context = this;

    return this.state.items.map(function (o, i) {
      return (
        <tr key={"item-" + i}>
           <td className="col-1">
            <input
            className="NoBorder"
              type="number"
              value={i}
              disabled
              onChange={context.handleItemChanged.bind(context, i)}
            />
          </td>
          <td className="col-4">
            <input
              type="text"
              value={o.fName}
              onChange={context.handleItemChanged.bind(context, i)}
            />
          </td>

          <td className="col-4">
            <input
              type="text"
              value={o.lName}
              onChange={context.handleItemChanged.bind(context, i)}
            />
          </td>

          <td className="ta-center">
            <button
              className="btn del-btn"
              onClick={context.handleItemDeleted.bind(context, i)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="col-xl-8 mt-5 mainTable">
        <h1>List of students</h1>
        <table className="table col-12">
          <tr className="bg-green">
            <th className="col-1">#</th>
            <th className="col-4">Firstname</th>
            <th className="col-5">Lastname</th>
            <th className="col-2 ta-center">Action</th>
          </tr>
    
            <tr>
            <th>
                <input className="NoBorder"
                  type="text"
                  disabled
                />
              </th>
              <th>
                <input
                  type="text"
                  placeholder="Firstname"
                  value={this.state.fName}
                  onChange={this.updateFirstName.bind(this)} 
                />
              </th>

              <th>
                <input
                  type="text"
                  placeholder="Lastname"
                  value={this.state.lName}
                  onChange={this.updateLastName.bind(this)} 
                />
              </th>

              <th className="ta-center">
                <button
                type="submit"
                  className="btn add-btn"
                  onClick={this.handleClick.bind(this)}
                >
                  Add item
                </button>
              </th>
            </tr>
          <tbody>{this.renderRows()}</tbody>
        </table>
      </div>
    );
  }
}
