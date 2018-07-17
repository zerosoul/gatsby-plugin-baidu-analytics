import React from "react";
exports.onRenderBody = (
  { setHeadComponents, setPostBodyComponents },
  { siteid, head }
) => {
  if (process.env.NODE_ENV === `production`) {
    const BAIDU_ANALYTICS_SCRIPT = (
      <script
        key={`gatsby-plugin-baidu-analytics-script`}
        dangerouslySetInnerHTML={{
          __html: `
                  var _hmt = _hmt || [];
                  (function() {
                      var hm = document.createElement("script");
                      hm.src = "//hm.baidu.com/hm.js?${siteid}";
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
