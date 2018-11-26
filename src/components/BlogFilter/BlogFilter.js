import React from 'react';
import { Link } from 'react-router-dom';
import './blog-filter.scss'

class BlogFilter extends React.Component {
  onTextChange = (e) => {
    // this.props.setTextFilter(e.target.value);
  }
  onSortChange = (e) => {
    // const filter = e.target.value;
    // if (filter === "date") {
    //   this.props.sortByDate();
    // } else if (filter === 'amount') {
    //   this.props.sortByAmount();
    // }
  }
  render() {
    return (
      <div className="filter-spacing">
        <div className="content-container ">
          <div className="blog-filter-box">
            <div className="input-group">
              <div className="input-group__item">
                <input
                  className="text-input"
                  type="text"
                  placeholder="Search posts" />
              </div>
              <div className="input-group__item">
                <select
                  className="select">
                  <option value="asc">Title Asc</option>
                  <option value="dsc">Title dsc</option>
                </select>
              </div>
            </div>
            <div>
              <Link to="/create">Add Expense</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogFilter;