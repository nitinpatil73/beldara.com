(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{596:function(e,t,a){"use strict";a.r(t);var n=a(11),c=a(2),r=a.n(c),o=a(7),s=a(19),i=a(20),u=a(22),l=a(21),d=a(23),p=a(1),m=a.n(p),f=a(29),h=a(153),b=(a(26),a(16),a(48)),g=(a(161),a(6)),v=a.n(g),y=a(0),w=(a(391),a(10)),j=a.n(w),O=a(9),k=Object(p.lazy)(function(){return Promise.all([a.e(57),a.e(85)]).then(a.bind(null,736))});var E=function(e){function t(e){var a,c;Object(s.a)(this,t);var i=window.location.search,d=new URLSearchParams(i);return(c=Object(u.a)(this,Object(l.a)(t).call(this,e))).getProductData=Object(o.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:v.a.post("".concat(y.d,"/common/get_prod_by_offer.php"),{plateform_type:"",security_token:"",sellerid:j.a.get("log_id"),currency:Object(O.r)("currency"),country_code:Object(O.r)("country_code"),country_to:Object(O.r)("countryid"),offset:c.state.page},{headers:{"content-type":"multipart/form-data"}}).then(function(){var e=Object(o.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t,48),1!=t.data.statusId){e.next=6;break}return e.next=4,c.setState({products:t.data.result,loaded:!0});case 4:e.next=6;break;case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){console.log(e,56)});case 1:case"end":return e.stop()}},e)})),c.state=(a={limit:100,hasMoreItems:!0,products:[],activePage:15,isFetching:0},Object(n.a)(a,"products",[]),Object(n.a)(a,"loaded",!1),Object(n.a)(a,"offset",1),Object(n.a)(a,"totalCount",0),Object(n.a)(a,"page",parseInt(d.get("page"))>0?parseInt(d.get("page")):0),a),c}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.getProductData();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(o.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:window.scrollTo(1,0);case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillReceiveProps",value:function(){var e=Object(o.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.getProductData();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"checkImage",value:function(e){}},{key:"render",value:function(){var e=this,t=this.state,a=t.products;t.addToCart,t.symbol,t.addToWishlist,t.addToCompare,t.totalCount;return m.a.createElement("div",null,m.a.createElement("div",{className:"product-wrapper-grid"},m.a.createElement("div",{className:""},this.state.loaded?this.state.products&&this.state.products.length>0?m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"row"},a.map(function(t,a){return t&&t.name&&m.a.createElement("div",{className:"col-6 col-lg-3 col-xl-3 col-md-4 col-xs-6 col-sm-6 col-grid-box px-1",key:a},m.a.createElement(k,{product:t,symbol:e.props.data.symbol,checkImage:e.checkImage}))}))):m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-sm-12 text-center section-b-space mt-5 no-found"},m.a.createElement("img",{src:"".concat("","/assets/images/empty-search.jpg"),className:"img-fluid mb-4"}),m.a.createElement("h3",null,"No offer found "),m.a.createElement(h.a,{to:"".concat("","/"),className:"btn btn-solid"},"continue shopping"))):m.a.createElement("div",{className:"",id:"loader-gif"},m.a.createElement(b.a,null)))))}}]),t}(p.Component);t.default=Object(f.connect)(function(e){return e})(E)}}]);
//# sourceMappingURL=123.3f315826.chunk.js.map