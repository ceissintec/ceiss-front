import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/*
PageShell is a HOC that wraps up the child component with some nice animation properties if the route matches.
*/
const PageShell = Page => {
  return props => (
    <div className="page">
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName={
          props.match.path === '/lightning-talks' ? 'SlideIn' : 'SlideOut'
        }>
        <Page {...props} />
      </ReactCSSTransitionGroup>
    </div>
  );
};

export default PageShell;
