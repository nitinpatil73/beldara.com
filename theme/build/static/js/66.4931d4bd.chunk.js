(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{151:function(e,t,a){"use strict";var r=a(19),n=a(20),o=a(22),c=a(21),i=a(23),s=a(1),l=a.n(s),u=a(153),m=a(17),p=a(152),d=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.parent,r=e.translate,n=e.metaTitle,o=e.metaDesc,c=e.metaKeyword;return l.a.createElement("div",{className:"breadcrumb-section py-1"},l.a.createElement(p.Helmet,null,l.a.createElement("title",null,n),l.a.createElement("meta",{name:"description",content:o}),l.a.createElement("meta",{name:"keyword",content:c})),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"page-title"},l.a.createElement("h2",null,r(t)))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("nav",{"aria-label":"breadcrumb",className:"theme-breadcrumb"},l.a.createElement("ol",{className:"breadcrumb"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(u.a,{to:"".concat("")},r("Home"))),a?l.a.createElement("li",{className:"breadcrumb-item","aria-current":"page"},r(a)):"",l.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},r(t))))))))}}]),t}(s.Component);t.a=Object(m.withTranslate)(d)},153:function(e,t,a){"use strict";var r=a(1),n=a.n(r),o=a(5),c=a.n(o),i=a(14),s=a.n(i),l=a(46),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e};function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var p=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},d=function(e){function t(){var a,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,o=Array(n),c=0;c<n;c++)o[c]=arguments[c];return a=r=m(this,e.call.apply(e,[this].concat(o))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!p(e)){e.preventDefault();var t=r.context.router.history,a=r.props,n=a.replace,o=a.to;n?t.replace(o):t.push(o)}},m(r,a)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),a=e.innerRef,r=function(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}(e,["replace","to","innerRef"]);s()(this.context.router,"You should not use <Link> outside a <Router>"),s()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,c="string"===typeof t?Object(l.createLocation)(t,null,null,o.location):t,i=o.createHref(c);return n.a.createElement("a",u({},r,{onClick:this.handleClick,href:i,ref:a}))},t}(n.a.Component);d.propTypes={onClick:c.a.func,target:c.a.string,replace:c.a.bool,to:c.a.oneOfType([c.a.string,c.a.object]).isRequired,innerRef:c.a.oneOfType([c.a.string,c.a.func])},d.defaultProps={replace:!1},d.contextTypes={router:c.a.shape({history:c.a.shape({push:c.a.func.isRequired,replace:c.a.func.isRequired,createHref:c.a.func.isRequired}).isRequired}).isRequired},t.a=d},257:function(e,t,a){},801:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a.n(r),o=a(7),c=a(19),i=a(20),s=a(22),l=a(21),u=a(23),m=a(1),p=a.n(m),d=a(0),h=a(151),f=a(6),b=a.n(f),y=a(8),v=a.n(y),g=(a(257),a(146)),E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).componentDidMount=Object(o.a)(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("https://api.beldara.com/common/static_seo.php",{security_token:"",plateform_type:"",langCode:"en",pageid:"44"},{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){a.setState({data:e.data.result})}).catch(function(e){var t=e.response;return Promise.reject(t)});case 2:case"end":return e.stop()}},e)})),a.askToSearch=function(){if(window.innerWidth<1200){v()(".mobile-search").find("div").find(".fa-search").click();var e=setInterval(function(t){v()(".react-autosuggest__input").attr("placeholder","Search product to auction"),clearInterval(e)},1e3),t=setInterval(function(e){v()(".react-autosuggest__input").attr("placeholder","What are you looking for..."),clearInterval(t)},8e3)}else v()("html, body").animate({scrollTop:0},"fast"),v()(".light-box-auction-step").removeClass("d-none"),v()(".form_search").css("box-shadow","0 1px 15px 5px #00aeee"),v()(".react-autosuggest__input").attr("placeholder","Search product to auction").focus()},a.removeSearch=function(){v()(".light-box-auction-step").addClass("d-none"),v()(".form_search").css("box-shadow",""),v()(".react-autosuggest__input").attr("placeholder","What are you looking for...").blur()},a.goToBid=function(){a.props.history.push({pathname:"/auction.html"})},a.state={data:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"d-none light-box-auction-step",onClick:function(){return e.removeSearch()}}),p.a.createElement(h.a,{title:"E-Auction",metaDesc:this.state.data.desc1,metaKeyword:this.state.data.keyword,metaTitle:this.state.data.title}),p.a.createElement("div",{className:"container"},p.a.createElement("div",{className:"row"},p.a.createElement("div",{className:"col-md-12 col-12 text-right"},p.a.createElement("div",{onClick:function(){return e.goToBid()},className:"text text-info mouse_pointer"},p.a.createElement("i",{class:"fa fa-arrow-left"})," Running Bids")),p.a.createElement("div",{className:"col-md-12"},p.a.createElement("img",{onClick:function(){return e.askToSearch()},className:"img-fluid mouse_pointer",src:"".concat(d.u,"/advt_banner/Auction-banner.jpg"),alt:"auction on beldara.com"})),p.a.createElement("div",{className:"col-md-12 col-sm-12 col-12 text-center my-2"},p.a.createElement("div",{onClick:function(){return e.askToSearch()},className:"btn btn-solid mouse_pointer"},"Create E-Auction")),p.a.createElement("div",{className:"col-md-12"},p.a.createElement("div",{className:"h5 mt-2"},"Steps to create Beldara E-Auction"),p.a.createElement("div",{className:"my-2"},"Beldara Auction feature is an aid to buyers who want the product at a certain price and would like to offer it as if a seller can provide that product at that market price."),p.a.createElement("div",{className:"my-2"},"Similarly, Beldara would like to provide a fair opportunity to all the sellers as well who are looking for the buyers to sell their product at or below the baseline price declared by the buyer."),p.a.createElement("div",{className:"my-2"},"It is beneficial for both sellers and buyers. The process increases transparency with a smooth workflow of buyer inquiry. Beldara intended to match sellers with the requirement of buyers."),p.a.createElement("div",{className:"h5 mt-1"},"The steps to create E-Auction as follows:"),p.a.createElement("div",{className:""},p.a.createElement("ol",null,p.a.createElement("li",{className:"my-2"},'1. Search the product for which you would like to bid. A buyer who requires the product sample or wants to buy only a few pieces can directly purchase the product by clicking on "BUY NOW" or "request sample". Show interest in the product by clicking the \u2018E-Auction\u2019 button appearing on the right side of the page.'),p.a.createElement("li",{className:"my-2"},"2. Set your price, unit (quantity) & the auction duration. All these 3 options are very essential in the bidding process & need to be filled correctly to get the precise result."),p.a.createElement("li",{className:"my-2"},"3. Choose any specifications like Product Customization, Logo Customization or International Packing. If you have any additional remarks or specification you can mention that too."),p.a.createElement("li",{className:"my-2"},"4. Adding address is going to help in logistics or shipping cost calculations. The best price offered by Beldara Express which is going to make the work more easy and online."),p.a.createElement("li",{className:"my-2"},"5. Now it's a seller turn to bid & provide the product at the market rate. A buyer can track the seller bidding on the Beldara auction page by clicking on the option 'see details'.")))),p.a.createElement("div",{className:"col-md-12 text-center"},p.a.createElement("div",{onClick:function(){return e.askToSearch()},className:"btn btn-solid mb-2 mouse_pointer"},"Get Started")))))}}]),t}(m.Component);t.default=Object(g.a)(E)}}]);
//# sourceMappingURL=66.4931d4bd.chunk.js.map