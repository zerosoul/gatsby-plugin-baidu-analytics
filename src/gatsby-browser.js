exports.onRouteUpdate = ({ location = {} }) => {
  // Don't track while developing.
  if (process.env.NODE_ENV === `production` && typeof _hmt === `function`) {
    window._hmt.push([
      "_trackPageview",
      `${location.pathname}${location.search}${location.hash}`
    ]);
  }
};
