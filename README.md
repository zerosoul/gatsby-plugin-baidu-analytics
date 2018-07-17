# gatsby-plugin-baidu-analytics
Baidu analytics for gatsby site

## install

`npm install --save gatsby-plugin-baidu-analytics`

## how to use in gatsby


```javascript
// ./gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-baidu-analytics`,
    options: {
	  // baidu analytics siteid
      siteid: "YOUR_BAIDU_ANALYTICS_SITE_ID",
      // 配置统计脚本插入位置，默认值为 false, 表示插入到 body 中, 为 true 时插入脚本到 head 中
      head: false,
    },
  },
];
```