import React from 'react';
import './style.scss';
import '../../assets/fonts/fontello-88f017ed/css/fontello.css';

const Link = ({ href, iconClass }) => (
  <li className="links__list-item">
    <a href={href} target="_blank">
      <i className={iconClass} />
    </a>
  </li>
);

const LinkContainer = ({ children }) => (
  <ul className="links__list">{children}</ul>
);

const Links = props => {
  const { twitter, github, email, linkedIn, medium } = props.data;
  return (
    <div className="links">
      <LinkContainer>
        <Link
          href={`https://www.twitter.com/${twitter}`}
          iconClass="icon-twitter"
        />
        <Link
          href={`https://www.github.com/${github}`}
          iconClass="icon-github-circled"
        />
        <Link href={`mailto:${email}`} iconClass="icon-mail-alt" />
      </LinkContainer>
      <LinkContainer>
        <Link
          href={`https://www.linkedin.com/in/${linkedIn}/`}
          iconClass="icon-linkedin"
        />
        <Link href={`https://medium.com/@${medium}/`} iconClass="icon-medium" />
      </LinkContainer>
      <LinkContainer>
        <Link href="/rss.xml" iconClass="icon-rss" />
      </LinkContainer>
    </div>
  );
};

export default Links;
