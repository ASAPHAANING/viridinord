webpackJsonp([0x93712ef0c6fe],{111:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return e.raw=t,e}t.__esModule=!0;var o=a(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 3.5rem;\n  margin-bottom: 3.5rem;\n"],["\n  display: flex;\n  flex-direction: column;\n  margin-top: 3.5rem;\n  margin-bottom: 3.5rem;\n"]),l=a(["\n  position: relative;\n  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);\n  margin-bottom: 0.75rem;\n"],["\n  position: relative;\n  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);\n  margin-bottom: 0.75rem;\n"]),i=a(["\n  position: absolute;\n  font-size: 7rem;\n  transform: translate(-50%, -50%);\n  opacity: 0.08;\n  user-select: none;\n  z-index: -1;\n"],["\n  position: absolute;\n  font-size: 7rem;\n  transform: translate(-50%, -50%);\n  opacity: 0.08;\n  user-select: none;\n  z-index: -1;\n"]),u=a(["\n  grid-column: -1 / 1;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n"],["\n  grid-column: -1 / 1;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n"]),d=n(1),m=r(d),f=n(7),c=r(f),s=n(24),g=r(s),p=n(102),x=r(p),b=n(38),h=r(b),E=c.default.article(o),_=c.default.h2(l),w=c.default.span(i),v=c.default.p(u),y=function(e){var t=e.title,n=e.date,r=e.excerpt,a=e.slug,o=e.timeToRead,l=e.category,i=t.charAt(0);return m.default.createElement(E,null,m.default.createElement(_,null,m.default.createElement(w,null,i),m.default.createElement(g.default,{to:a},t)),m.default.createElement(h.default,null,n," — ",o," Min Read — In"," ",m.default.createElement(g.default,{to:"/categories/"+(0,x.default)(l)},l)),m.default.createElement(v,null,r))};t.default=y,e.exports=t.default},61:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return e.raw=t,e}t.__esModule=!0;var o=a(["\n  font-size: ",";\n  text-transform: uppercase;\n  font-weight: bold;\n  text-align: center;\n  color: ",";\n  position: relative;\n  padding-bottom: 1rem;\n  margin-bottom: 4rem;\n\n  &:after {\n    content: '';\n    height: 1px;\n    width: 50px;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    margin-left: -25px;\n    background: ",";\n  }\n"],["\n  font-size: ",";\n  text-transform: uppercase;\n  font-weight: bold;\n  text-align: center;\n  color: ",";\n  position: relative;\n  padding-bottom: 1rem;\n  margin-bottom: 4rem;\n\n  &:after {\n    content: '';\n    height: 1px;\n    width: 50px;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    margin-left: -25px;\n    background: ",";\n  }\n"]),l=n(1),i=r(l),u=n(7),d=r(u),m=d.default.div(o,function(e){return e.theme.fontSmall},function(e){return e.theme.dark},function(e){return e.theme.ultraLight}),f=function(e){return i.default.createElement(m,null,e.children)};t.default=f,e.exports=t.default},38:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return e.raw=t,e}t.__esModule=!0;var o=a(["\n  font-size: ",";\n  color: ",";\n  ",";\n  ",";\n  ",";\n"],["\n  font-size: ",";\n  color: ",";\n  ",";\n  ",";\n  ",";\n"]),l=n(1),i=r(l),u=n(7),d=r(u),m=d.default.div(o,function(e){return e.theme.fontSmall},function(e){return e.theme.light},function(e){return e.sectionTitle&&"margin-top: -3rem"},function(e){return e.sectionTitle&&"margin-bottom: 4rem"},function(e){return e.sectionTitle&&"text-align: center"}),f=function(e){return i.default.createElement(m,{sectionTitle:e.sectionTitle},e.children)};t.default=f,e.exports=t.default},292:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return e.raw=t,e}t.__esModule=!0,t.postQuery=void 0;var o=a(["\n  grid-column: 2;\n  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);\n  border-radius: 1rem;\n  padding: 2rem 4rem;\n  background-color: ",";\n  z-index: 9000;\n  margin-top: -3rem;\n  @media "," {\n    padding: 3rem 3rem;\n  }\n  @media "," {\n    padding: 2rem 1.5rem;\n  }\n"],["\n  grid-column: 2;\n  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);\n  border-radius: 1rem;\n  padding: 2rem 4rem;\n  background-color: ",";\n  z-index: 9000;\n  margin-top: -3rem;\n  @media "," {\n    padding: 3rem 3rem;\n  }\n  @media "," {\n    padding: 2rem 1.5rem;\n  }\n"]),l=n(1),i=r(l),u=n(57),d=r(u),m=n(24),f=r(m),c=n(7),s=r(c),g=n(62),p=r(g),x=n(81),b=r(x),h=n(38),E=r(h),_=n(111),w=r(_),v=n(61),y=r(v),T=n(39),z=n(32),M=r(z),k=s.default.div(o,function(e){return e.theme.bg},T.media.tablet,T.media.phone),R=function(e){var t=e.pathContext.category,n=e.data.allMarkdownRemark,r=n.edges,a=n.totalCount,o=a+" post"+(1===a?"":"s")+' tagged with "'+t+'"';return i.default.createElement(p.default,null,i.default.createElement(d.default,{title:t+" | "+M.default.siteTitle}),i.default.createElement(b.default,null,i.default.createElement(f.default,{to:"/"},M.default.siteTitle)),i.default.createElement(k,null,i.default.createElement(y.default,null,"Category – ",t),i.default.createElement(E.default,{sectionTitle:!0},o," (See ",i.default.createElement(f.default,{to:"/categories"},"all categories"),")"),r.map(function(e){return i.default.createElement(w.default,{title:e.node.frontmatter.title,date:e.node.frontmatter.date,excerpt:e.node.excerpt,timeToRead:e.node.timeToRead,slug:e.node.fields.slug,category:e.node.frontmatter.category,key:e.node.fields.slug})})))};t.default=R;t.postQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-category-js-2d3dbe99661fb97732c8.js.map