import React from 'react';
import Link from 'gatsby-link';
import Menu from '../Menu';
import Links from '../Links';
import profilePic from '../../pages/photo.jpg';
import './style.scss';

class Sidebar extends React.Component {
  render() {
    const { author, subtitle, menu } = this.props.data.site.siteMetadata;

    /* eslint-disable jsx-a11y/img-redundant-alt */
    const authorBlock = (
      <div>
        <Link to="/">
          <img
            src={profilePic}
            className="sidebar__author-photo"
            width="75"
            height="75"
            alt={author.name}
          />
        </Link>
        <h1 className="sidebar__author-title">
          <Link className="sidebar__author-title-link" to="/">
            {author.name}
          </Link>
        </h1>
        <p className="sidebar__author-subtitle">{subtitle}</p>
      </div>
    );
    /* eslint-enable jsx-a11y/img-redundant-alt */

    return (
      <div className="sidebar">
        <div className="sidebar__inner">
          <div className="sidebar__author">{authorBlock}</div>
          <div>
            <Menu data={menu} />
            <Links data={author} />
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;