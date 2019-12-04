import React, { Component } from "react";
import Loading from "./Loading";
import Panel from './Panel';

import classnames from "classnames";
import data from './data';


class Dashboard extends Component {
  state = {
    loading: false
  };

  render() {
    const dashboardClasses = classnames("dashboard");

    if (this.state.loading) {
      return <Loading />;
    }

    return <main className={dashboardClasses} >
      {data.map( ({id, label, value}) => {
        return (
        <Panel
        id={id}
        label={label}
        value={value}
         />)
      })}
       </main>;
  }
}

export default Dashboard;