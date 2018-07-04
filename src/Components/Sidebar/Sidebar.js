import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import Styles from './SidebarStyles';

import data from '../../data.json';

class Sidebar extends Component {
  renderItems = () => {
    let items = data.items;

    let asdasd = Object.keys(items).map(item => {
      let linkable = items[item].linkable;

      // If navHidden, don't display
      if (items[item].navHidden) return;

      // Has children, loop over children and nest
      if (items[item].children) {
        if (!linkable) {
          return (
            <li key={items[item].id}>
              <h4 style={Styles.notLinkable}>{items[item].name}</h4>
              <ul>
                {items[item].children.map(itemKey => {
                  items[itemKey].navHidden = true;

                  return (
                    <li key={items[itemKey].route}>
                      <Link to={`/${items[itemKey].route.toLowerCase()}`} style={Styles.subLevel}>
                        <h5>{items[itemKey].name}</h5>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        }

        return (
          <li key={items[item].id}>
            <Link to={`/${items[item].route.toLowerCase()}`}>
              <h4>{items[item].name}</h4>
            </Link>

            <ul>
              {items[item].children.map(itemKey => {
                items[itemKey].navHidden = true;

                return (
                  <li key={items[itemKey].route}>
                    <Link to={`/${items[itemKey].route.toLowerCase()}`} style={Styles.subLevel}>
                      <h5>{items[itemKey].name}</h5>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </li>
        )
      }

      // Display link
      return (
        <li key={items[item].id}>
          <Link to={`/${items[item].route.toLowerCase()}`}>{items[item].name}</Link>
        </li>
      )
    });

    return asdasd;
  };

  render() {
    return (
      <aside id="sidebar" style={Styles.main}>
        {this.renderItems()}
      </aside>
    )
  }
}

export default Sidebar;
