(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return u});n(50);var a=n(0),r=n.n(a),o=n(143),i={Butterscotch:"#c67941",Charcoal:"#1b0227",Cream:"#c9bb53",Rust:"#df6b2b"},l=function(e){return{backgroundColor:i[e]||e,transformOrigin:"50%",padding:"0.25rem",margin:"0.25rem 0.25rem 0.25rem 9rem",listStyle:"none"}};t.default=function(e){var t=e.data,n=t.sexe.sexe,a=t.taille.taille,i=t.degriffe.degriffe,u=t.couleur.couleur,c=t.race.race;return r.a.createElement("div",null,r.a.createElement(o.Link,{to:"/"},"With pictures")," ",r.a.createElement(o.Link,{to:"/black/"},"Only black cats"),r.a.createElement("h2",null,"By sex"),r.a.createElement("ul",null,n.map(function(e){var t=e.fieldValue,n=e.totalCount;return r.a.createElement("li",{key:t},r.a.createElement(o.Link,{to:"/by/sexe/"+t+"/"},n," ",t))})),r.a.createElement("h2",null,"By taille"),r.a.createElement("ul",null,a.map(function(e){var t=e.fieldValue,n=e.totalCount;return r.a.createElement("li",{key:t},r.a.createElement(o.Link,{to:"/by/taille/"+t+"/"},n," ",t))})),r.a.createElement("h2",null,"Declawd?"),r.a.createElement("ul",null,i.map(function(e){var t=e.fieldValue,n=e.totalCount;return r.a.createElement("li",{key:t},r.a.createElement(o.Link,{to:"/by/degriffe/"+t+"/"},n," ",t))})),r.a.createElement("h2",null,"By color"),r.a.createElement("ul",null,u.map(function(e){var t=e.fieldValue,n=e.totalCount;return r.a.createElement("li",{key:t,style:l(t)},r.a.createElement(o.Link,{to:"/by/couleur/"+t+"/"},r.a.createElement("span",{style:{marginLeft:"-9rem"}},n," ",t)))})),r.a.createElement("h2",null,"By race"),r.a.createElement("ul",null,c.map(function(e){var t=e.fieldValue,n=e.totalCount;return r.a.createElement("li",{key:t},r.a.createElement(o.Link,{to:"/by/race/"+t+"/"},n," ",t))})))};var u="3811062105"},142:function(e,t,n){"use strict";var a=n(35);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(145)),o=a(n(146)),i=a(n(7)),l=a(n(48)),u=a(n(49)),c=a(n(4)),s=a(n(0)),d=n(14),f=n(143);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/find-putzi/"+e)}var m={activeClassName:c.default.string,activeStyle:c.default.object},h=function(e){function t(t){var n;n=e.call(this)||this,(0,u.default)((0,l.default)((0,l.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,l.default)((0,l.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,l=t.onClick,u=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),m=t.replace,h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=p(n);return s.default.createElement(d.Link,(0,o.default)({to:v,state:c,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){u&&u(e),___loader.hovering((0,f.parsePath)(n).pathname)},onClick:function(t){return l&&l(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),y(n,{state:c,replace:m})),!0}},h))},t}(s.default.Component);h.propTypes=(0,o.default)({},m,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var v=h;t.default=v;var y=function(e,t){window.___navigate(p(e),t)};t.navigate=y;var g=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=g;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),g(e)}},143:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(142),u=n.n(l);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var c=n(144),s=n.n(c);n.d(t,"PageRenderer",function(){return s.a});var d=n(34);n.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},144:function(e,t,n){var a;e.exports=(a=n(147))&&a.default||a},145:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},146:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},147:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(51),u=n(2),c=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c}}]);
//# sourceMappingURL=component---src-pages-by-js-c25c85225c0d33cf9012.js.map