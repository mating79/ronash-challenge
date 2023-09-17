import { Link as ReactRouterLink } from 'react-router-dom';

const RouterLink = ({ children, url = '', ...rest }) => {
  if (isOutboundLink(url) || rest.download) {
    return (
      <a href={url} {...rest} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <ReactRouterLink to={url} {...rest}>
      {children}
    </ReactRouterLink>
  );
};

function isOutboundLink(url) {
  return /^(?:[a-z][a-z\d+.-]*:|\/\/)/.test(url);
}

export default RouterLink;
