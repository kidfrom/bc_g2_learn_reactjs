/*! For license information please see 5.467f583c.chunk.js.LICENSE.txt */
(this.webpackJsonpts_cv=this.webpackJsonpts_cv||[]).push([[5],{26:function(e,t,a){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return r}))},27:function(e,t,a){"use strict";function r(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}a.d(t,"a",(function(){return r}))},28:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=n.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)a.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},29:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a(26);var r=a(0),n=a.n(r),o=n.a.createContext({});o.Consumer,o.Provider;function i(e,t){var a=Object(r.useContext)(o);return e||a[t]||t}},31:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a(26),n=a(27),o=a(28),i=a.n(o),c=/-(.)/g;var s=a(0),l=a.n(s),u=a(29),f=function(e){return e[0].toUpperCase()+(t=e,t.replace(c,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function d(e,t){var a=void 0===t?{}:t,o=a.displayName,c=void 0===o?f(e):o,s=a.Component,d=a.defaultProps,m=l.a.forwardRef((function(t,a){var o=t.className,c=t.bsPrefix,f=t.as,d=void 0===f?s||"div":f,m=Object(n.a)(t,["className","bsPrefix","as"]),b=Object(u.a)(c,e);return l.a.createElement(d,Object(r.a)({ref:a,className:i()(o,b)},m))}));return m.defaultProps=d,m.displayName=c,m}},34:function(e,t,a){"use strict";var r=a(26),n=a(27),o=a(28),i=a.n(o),c=a(0),s=a.n(c),l=a(29),u=["xl","lg","md","sm","xs"],f=s.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,c=e.as,f=void 0===c?"div":c,d=Object(n.a)(e,["bsPrefix","className","as"]),m=Object(l.a)(a,"col"),b=[],p=[];return u.forEach((function(e){var t,a,r,n=d[e];if(delete d[e],"object"===typeof n&&null!=n){var o=n.span;t=void 0===o||o,a=n.offset,r=n.order}else t=n;var i="xs"!==e?"-"+e:"";t&&b.push(!0===t?""+m+i:""+m+i+"-"+t),null!=r&&p.push("order"+i+"-"+r),null!=a&&p.push("offset"+i+"-"+a)})),b.length||b.push(m),s.a.createElement(f,Object(r.a)({},d,{ref:t,className:i.a.apply(void 0,[o].concat(b,p))}))}));f.displayName="Col",t.a=f},35:function(e,t,a){"use strict";var r=a(26),n=a(27),o=a(28),i=a.n(o),c=a(0),s=a.n(c),l=a(29),u=s.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.fluid,c=e.as,u=void 0===c?"div":c,f=e.className,d=Object(n.a)(e,["bsPrefix","fluid","as","className"]),m=Object(l.a)(a,"container"),b="string"===typeof o?"-"+o:"-fluid";return s.a.createElement(u,Object(r.a)({ref:t},d,{className:i()(f,o?""+m+b:m)}))}));u.displayName="Container",u.defaultProps={fluid:!1},t.a=u},37:function(e,t,a){"use strict";var r=a(0),n=a.n(r).a.createContext(null);n.displayName="CardContext",t.a=n},42:function(e,t,a){"use strict";var r=a(26),n=a(27),o=a(28),i=a.n(o),c=a(0),s=a.n(c),l=a(29),u=a(31),f=function(e){return s.a.forwardRef((function(t,a){return s.a.createElement("div",Object(r.a)({},t,{ref:a,className:i()(t.className,e)}))}))},d=a(37),m=s.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,c=e.variant,u=e.as,f=void 0===u?"img":u,d=Object(n.a)(e,["bsPrefix","className","variant","as"]),m=Object(l.a)(a,"card-img");return s.a.createElement(f,Object(r.a)({ref:t,className:i()(c?m+"-"+c:m,o)},d))}));m.displayName="CardImg",m.defaultProps={variant:null};var b=m,p=f("h5"),v=f("h6"),h=Object(u.a)("card-body"),y=Object(u.a)("card-title",{Component:p}),x=Object(u.a)("card-subtitle",{Component:v}),j=Object(u.a)("card-link",{Component:"a"}),O=Object(u.a)("card-text",{Component:"p"}),g=Object(u.a)("card-header"),N=Object(u.a)("card-footer"),P=Object(u.a)("card-img-overlay"),E=s.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,u=e.bg,f=e.text,m=e.border,b=e.body,p=e.children,v=e.as,y=void 0===v?"div":v,x=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),j=Object(l.a)(a,"card"),O=Object(c.useMemo)((function(){return{cardHeaderBsPrefix:j+"-header"}}),[j]);return s.a.createElement(d.a.Provider,{value:O},s.a.createElement(y,Object(r.a)({ref:t},x,{className:i()(o,j,u&&"bg-"+u,f&&"text-"+f,m&&"border-"+m)}),b?s.a.createElement(h,null,p):p))}));E.displayName="Card",E.defaultProps={body:!1},E.Img=b,E.Title=y,E.Subtitle=x,E.Body=h,E.Link=j,E.Text=O,E.Header=g,E.Footer=N,E.ImgOverlay=P;t.a=E},56:function(e,t,a){"use strict";a.r(t),a.d(t,"Values",(function(){return u}));var r=a(0),n=a.n(r),o=a(35),i=a(42),c=a(34),s=[{Title:"Documentation",Subtitle:"Learn from the mistakes.",Text:"I wanted to have my own @jason.com email without paying premium. I dediced to built the mail server with Zimbra. After a month, I use the notes that I wrote to maintain the mail server.",TextHref:"Day 24th of coding",href:"https://github.com/kidfrom/docs/blob/master/EMAIL.md"},{Title:"Minimum Viable Product",Subtitle:"Focus on testing the MVP, everything else can wait.",Text:"I tried to create an algorithm to generate a Puzzle in 30ms. It took 4 days to create and test the idea. But after the idea works on paper, it only took 1 hour to refactor the code.",TextHref:"Day 103th of coding",href:"https://github.com/kidfrom/sudoku_js/blob/master/dump/white_paper.MD"}],l=function(){return n.a.createElement(n.a.Fragment,null,s.map((function(e,t){return n.a.createElement(c.a,{sm:6,key:e.Text+t,className:"my-3"},n.a.createElement(i.a,null,n.a.createElement(i.a.Body,null,n.a.createElement(i.a.Title,null,e.Title),n.a.createElement(i.a.Subtitle,null,e.Subtitle),n.a.createElement(i.a.Text,null,e.Text),n.a.createElement("a",{href:e.href},e.TextHref))))})))},u=function(){return n.a.createElement(o.a,{className:"my-3"},n.a.createElement("div",{className:"d-flex flex-wrap"},n.a.createElement(l,null)))};t.default=u}}]);
//# sourceMappingURL=5.467f583c.chunk.js.map