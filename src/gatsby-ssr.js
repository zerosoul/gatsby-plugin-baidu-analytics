import React from "react";
exports.onRenderBody = (
  { setHeadComponents, setPostBodyComponents },
  { siteId = "", head = false }
) => {
  if (process.env.NODE_ENV === `production` && siteId) {
    const BAIDU_ANALYTICS_SCRIPT = (
      <script
        key={`gatsby-plugin-baidu-analytics-script`}
        dangerouslySetInnerHTML={{
          __html: `
                  var _hmt = _hmt || [];
                  (function() {
                      var hm = document.createElement("script");
                      hm.src = "//hm.baidu.com/hm.js?${siteId}";
                      var s = document.getElementsByTagName("script")[0]; 
                      s.parentNode.insertBefore(hm, s);
                  })();
              `
        }}
      />
    );
    const setComponents = head ? setHeadComponents : setPostBodyComponents;
    setComponents([BAIDU_ANALYTICS_SCRIPT]);
    console.log("baidu tongji added!");
  }
  // return null;
};
