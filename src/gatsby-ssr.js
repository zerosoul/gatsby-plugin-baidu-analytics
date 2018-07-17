exports.onRenderBody = (
  { setHeadComponents, setPostBodyComponents },
  { pluginOptions: { siteid, head } }
) => {
  if (process.env.NODE_ENV == `production`) {
    const BAIDU_ANALYTICS_SCRIPT = () => (
      <script
        key={`gatsby-plugin-baidu-analytics-script`}
        dangerouslySetInnerHTML={{
          __html: `
              <script>
                  var _hmt = _hmt || [];
                  (function() {
                      var hm = document.createElement("script");
                      hm.src = "https://hm.baidu.com/hm.js?${siteid}";
                      var s = document.getElementsByTagName("script")[0]; 
                      s.parentNode.insertBefore(hm, s);
                  })();
              </script>
              `
        }}
      />
    );
    const setComponents = head ? setHeadComponents : setPostBodyComponents;
    setComponents([BAIDU_ANALYTICS_SCRIPT]);
  }
};
