(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{151:function(e,t,a){"use strict";var r=a(19),n=a(20),c=a(22),o=a(21),i=a(23),s=a(1),l=a.n(s),m=a(153),u=a(17),p=a(152),d=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.parent,r=e.translate,n=e.metaTitle,c=e.metaDesc,o=e.metaKeyword;return l.a.createElement("div",{className:"breadcrumb-section py-1"},l.a.createElement(p.Helmet,null,l.a.createElement("title",null,n),l.a.createElement("meta",{name:"description",content:c}),l.a.createElement("meta",{name:"keyword",content:o})),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"page-title"},l.a.createElement("h2",null,r(t)))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("nav",{"aria-label":"breadcrumb",className:"theme-breadcrumb"},l.a.createElement("ol",{className:"breadcrumb"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(m.a,{to:"".concat("")},r("Home"))),a?l.a.createElement("li",{className:"breadcrumb-item","aria-current":"page"},r(a)):"",l.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},r(t))))))))}}]),t}(s.Component);t.a=Object(u.withTranslate)(d)},182:function(e,t,a){"use strict";a.d(t,"a",function(){return o});a(33);var r=a(2),n=a.n(r),c=a(7),o=function(){var e=Object(c.a)(n.a.mark(function e(t,a,r,c,o){var i;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=0,i="USD"==o&&"INR"==a?parseFloat(t)/parseFloat(r):"INR"==o&&"USD"==a?Math.round(parseFloat(t)*parseFloat(r)):parseFloat(t),console.log(t,a,r,c,o,i,177),e.abrupt("return",i.toFixed(2));case 4:case"end":return e.stop()}},e)}));return function(t,a,r,n,c){return e.apply(this,arguments)}}()},192:function(e,t,a){},222:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a.n(r),c=a(7),o=a(19),i=a(20),s=a(22),l=a(21),m=a(23),u=a(47),p=a(1),d=a.n(p),f=a(153),b=a(45),h=a(146),_=a(17),g=(a(192),a(162),a(160)),y=a.n(g),v=a(8),E=a.n(v),k=(a(170),a(10)),N=a.n(k),C=a(9),O=a(6),j=a.n(O),x=a(29),w=a(26),P=a(16),A=(a(178),a(197),Object(p.lazy)(function(){return a.e(14).then(a.bind(null,198))})),I=Object(p.lazy)(function(){return a.e(7).then(a.bind(null,194))}),S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).componentDidUpdate=function(){var e=Object(c.a)(n.a.mark(function e(t){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t.currencyValue[0].INR==a.state.inrValue){e.next=4;break}return e.next=4,a.setState({inrValue:t.currencyValue[0].INR});case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(0),e.next=10,a.setState({inrValue:70});case 10:case"end":return e.stop()}},e,null,[[0,6]])}));return function(t){return e.apply(this,arguments)}}(),a.CalcOfferPrice=function(e,t,r,n,c,o){return a.offerExist(c,o)&&t<=parseInt(r)&&t>=parseInt(n)?parseFloat(e):null},a.offerExist=function(e,t){if(void 0!==e&&null!==e&&""!==e&&void 0!==t&&null!==t&&""!==t){var a=new Date,r=a.getMonth()+1,n=a.getDate(),c=a.getFullYear()+"-"+r+"-"+n,o=e.split("-"),i=t.split("-"),s=c.split("-"),l=o[1]+","+o[2]+","+o[0],m=i[1]+","+i[2]+","+i[0],u=s[1]+","+s[2]+","+s[0];l=l.toString(),m=m.toString(),u=u.toString();var p=Date.parse(l),d=Date.parse(m),f=Date.parse(u);return f>=p&&d>=f}return!1},a.state={open:!1,stock:"InStock",quantity:1,image:"",inrValue:70,price:0},a.deadEnd=a.deadEnd.bind(Object(u.a)(Object(u.a)(a))),a.finalCost=a.finalCost.bind(Object(u.a)(Object(u.a)(a))),a.createCart=a.createCart.bind(Object(u.a)(Object(u.a)(a))),a.checkImageExist=a.checkImageExist.bind(Object(u.a)(Object(u.a)(a))),a.validate=a.validate.bind(Object(u.a)(Object(u.a)(a))),a.goToExpressCheckout=a.goToExpressCheckout.bind(Object(u.a)(Object(u.a)(a))),a.event_ask_for_price=a.event_ask_for_price.bind(Object(u.a)(Object(u.a)(a))),a.chatBtn=a.chatBtn.bind(Object(u.a)(Object(u.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"goToExpressCheckout",value:function(){var e=Object(c.a)(n.a.mark(function e(t,a,r,c){var o;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o=this.state.price,"INR"!=r&&""!=r&&void 0!==r||(o=parseFloat(o)/70),o=o.toFixed(),y.a.trackCustom("AddToCart",{content_ids:[t],content_type:"product",value:this.state.price,currency:"USD"}),this.props.history.push({pathname:"/check_out.html",state:{totalprice:this.state.price,currency:this.props.symbol,product_seller:c,product_currency:r,prod_id:t,qty:a}});case 5:case"end":return e.stop()}},e,this)}));return function(t,a,r,n){return e.apply(this,arguments)}}()},{key:"onClickHandle",value:function(e){this.setState({image:e})}},{key:"checkImageExist",value:function(e){try{this.props.checkImage(e.target.id)}catch(t){console.log("error: ",t)}}},{key:"componentDidMount",value:function(e){var t={em:"support@beldara.com"},a={autoConfig:!0,debug:!1};y.a.init("432219770935494",t,a),y.a.init("2231476330510319",t,a);var r=E()("#toast_message").detach();E()(r).insertAfter(".breadcrumb-section")}},{key:"validate",value:function(e,t,a,r,n,c,o,i){Object(C.l)("Product",e,t,"click",N.a.get("sellerid"),Object(C.s)("mhinpbnb")),E()("#btn_"+t).css("opacity","0.6"),this.createCart(t,a,r,n,c,o,i)}},{key:"event_ask_for_price",value:function(e,t){Object(C.l)("Product",e,t,"click",N.a.get("sellerid"),Object(C.s)("mhinpbnb"))}},{key:"createCart",value:function(e,t,a,r,n,c,o){j.a.post("https://api.beldara.com/common/add_to_create_cart.php",{security_token:"",plateform_type:"",productid:e,qty:t,amount:a,currency:r,visitorid:Object(C.s)("mhinpbnb"),sellerid:N.a.get("sellerid"),country_to:Object(C.s)("countryid"),pincode:Object(C.s)("pincode")},{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){window.location.href="/cart.html"}).catch(function(e){var t=e.response;return Promise.reject(t)})}},{key:"finalCost",value:function(){var e=Object(c.a)(n.a.mark(function e(t,a){var r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=0,r=(r=t*a).toFixed(2),e.next=5,this.setState({price:r});case 5:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"deadEnd",value:function(e){}},{key:"chatBtn",value:function(e){var t={sellerid:e.sellerid,chatWithSupplier:!0,company:e.company,item:e};P.a.dispatch(Object(w.A)(t))}},{key:"render",value:function(){var e=this.props,t=e.product,a=(e.symbol,e.translate);return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"product-box bg-light "},this.offerExist(t.offer_from_date,t.offer_to_date)&&null!==t.offer_percent&&"0"!==t.offer_percent?d.a.createElement("div",{className:"badge badge-danger text-wrap my-1 p-3",style:{width:"6rem",zIndex:"1",position:"absolute",webkitTransform:"rotate(-45deg)",left:"-11px"}},t.offer_percent," % Offer"):"",d.a.createElement("div",{className:"d-flex img-wrapper justify-content-center"},d.a.createElement("div",{className:"front d-flex imgWrapper"},d.a.createElement("a",{className:"d-flex align-items-center justify-content-center",href:"".concat("","/product/").concat(t.url,".html")},1==t.brand_promo&&d.a.createElement("span",{className:"bpp_badge badge badge-warning"}," BPP "),d.a.createElement("img",{"data-sizes":"auto",src:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==","data-src":t.variants?this.state.image?this.state.image:t.variants[0].images:"".concat(b.c,"/product_images_thumb/")+t.img,alt:"".concat(t.name," beldara.com"),className:"img-fluid prodImg lazyload ",id:t.id,onError:this.checkImageExist})))),d.a.createElement("div",{className:"product_info"},d.a.createElement("div",null,d.a.createElement(f.a,{to:"".concat("","/product/").concat(encodeURIComponent(t.url),".html")},d.a.createElement("div",{className:"text-truncate font-weight-bolder text-dark"},t.name)),t.company&&d.a.createElement("div",{className:"text-truncate font-weight-lighter"},d.a.createElement("small",null,t.company)),this.offerExist(t.offer_from_date,t.offer_to_date)?d.a.createElement("div",null,d.a.createElement("span",{className:"d-flex"},d.a.createElement("del",{className:"mr-1"},d.a.createElement(A,{productCost:this.deadEnd,finalCost:this.finalCost,symbol:t.currency,start_price:t.start_price,end_price:"",price_in:t.price_in,price_us:t.price_us,mrp_price:t.offer_mrp_price,price_offer:this.CalcOfferPrice(t.mrp_price,t.offer_min_qty,t.offer_stock,t.offer_min_qty,t.offer_from_date,t.offer_to_date),country_code:Object(C.s)("country_code")})),d.a.createElement(A,{productCost:this.deadEnd,finalCost:this.finalCost,symbol:t.currency,start_price:t.offer_price,end_price:"",price_in:t.price_in,price_us:t.price_us,mrp_price:t.offer_mrp_price,price_offer:this.CalcOfferPrice(t.offer_price,t.offer_min_qty,t.offer_stock,t.offer_min_qty,t.offer_from_date,t.offer_to_date),country_code:Object(C.s)("country_code")})),t.qty?d.a.createElement("div",{className:"small"},"".concat(a("MOQ")," : ").concat(t.offer_min_qty," - ").concat(t.unit)):""):this.offerExist(t.offer_from_date,t.offer_to_date)?"":d.a.createElement("div",null,t.start_price&&null===this.CalcOfferPrice(t.offer_price,t.qty,t.offer_stock,t.offer_min_qty,t.offer_from_date,t.offer_to_date)?d.a.createElement(I,{currencyValue:this.props.currencyValue,productCost:this.deadEnd,finalCost:this.finalCost,minqty:t.qty,symbol:t.currency,start_price:t.start_price,end_price:t.end_price,price_us:t.price_us,price_in:t.price_in,country_code:Object(C.s)("country_code")}):d.a.createElement("b",null,"Ask For Price"),t.qty?d.a.createElement("div",{className:"small"},"".concat(a("MOQ")," : ").concat(t.qty," - ").concat(t.unit)):""))),d.a.createElement("div",{className:"row mb-2 mx-0"},t.start_price&&parseFloat(t.start_price)>parseFloat(0)&&!this.offerExist(t.offer_from_date,t.offer_to_date)?d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{id:"btn_".concat(t.id),className:" col-12 col-md-12 col-sm-12 text-center py-2 px-1 buy1"},d.a.createElement("div",{className:"mouse_pointer btn btn_Pro  btn-orange",id:t.id,onClick:this.validate.bind(this,"buyBtn",t.id,t.qty,parseFloat(t.start_price)*parseInt(t.qty),this.props.symbol,t.start_price,t.currency,t.sellerid)},"Buy Now"))):this.offerExist(t.offer_from_date,t.offer_to_date)&&t.offer_stock>0?d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{id:"btn_".concat(t.id),className:" col-6 col-md-6 col-sm-6 text-left py-2 px-1 buy2"},d.a.createElement("div",{className:"mouse_pointer btn btn_Pro  btn-orange",id:t.id,onClick:this.validate.bind(this,"buyBtn",t.id,t.offer_min_qty,parseInt(this.state.price)*parseInt(t.offer_min_qty),this.props.symbol,t.start_price,t.currency,t.sellerid)},"Buy Now")),d.a.createElement("div",{className:"col-6  text-center col-md-6 col-sm-6 py-2 px-1"},t.sellerid!=N.a.get("log_id")?d.a.createElement("div",{className:"mouse_pointer btn btn_Pro  btn-orange",onClick:this.chatBtn.bind(this,t)},"Chat Now"):"")):d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{id:"btn_".concat(t.id),className:"col-12 text-center col-md-12 col-sm-12 py-2 px-1"},d.a.createElement("div",{className:"text-center"},d.a.createElement(f.a,{onClick:this.event_ask_for_price.bind(this,"ask_for_price",t.id),id:"ask_for_price",className:"btn btn_Pro btn-orange",clickevent:"Ask_for_price",to:{pathname:"/post-requirement.html",state:t}}," Contact Supplier ")))))))}}]),t}(p.Component);t.default=Object(h.a)(Object(_.withTranslate)(Object(x.connect)(function(e){return{symbol:e.data.symbol,currencyValue:e.currencyValue.currencyValue,user:e.user,hole_data:e}})(S)))},828:function(e,t,a){"use strict";a.r(t);var r=a(19),n=a(20),c=a(22),o=a(21),i=a(23),s=a(1),l=a.n(s),m=(a(219),a(151)),u=a(29),p=a(153),d=a(213),f=a.n(d),b=a(8),h=a.n(b),_=a(26),g=(a(182),a(222)),y=a(17),v=a(48);var E=function(e){function t(e){var a;Object(r.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).handlePageClick=function(e){if(console.log("handlePageClick",a.state.pageNo,e.selected),a.state.pageNo!=e.selected){var t=e.selected;window.location.href=window.location.pathname+"?q="+a.state.query+"&page="+t}},a.checkImage=function(e){var t;t=e,h()("#"+t).parent().closest(".col-grid-box").addClass("d-none")};var n=window.location.search,i=new URLSearchParams(n);return a.state={limit:50,hasMoreItems:!0,products:[],pageCount:0,isPageLoaded:0,query:i.get("q"),pageNo:parseInt(i.get("page"))>0?parseInt(i.get("page")):0,offset:1,totalProduct:1,totalCount:0},a}return Object(i.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState(function(e,t){return{offset:e.pageNo*t.perPage}},function(){e.props.getSearchResults(e.state.offset,e.props.perPage).then(function(t){0==e.state.isPageLoaded&&t[0][0]&&e.setState({isPageLoaded:1,products:t[0][0],totalCount:t[0][1],pageCount:Math.ceil(parseInt(t[0][1])/parseInt(e.props.perPage))},function(){})})})}},{key:"render",value:function(){var e=this,t=this.props,a=t.symbol,r=t.translate;return l.a.createElement("div",{className:"col-12 p-0"},l.a.createElement("div",{className:"product-wrapper-grid"},l.a.createElement("div",{className:"container-fluid p-0"},this.state.isPageLoaded<=0?l.a.createElement(v.a,null):this.state.totalCount>0&&this.state.products?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row"},this.state.products.slice(0,this.state.limit).map(function(t,r){return l.a.createElement("div",{className:"".concat(3===e.props.colSize?"col-6 col-xl-3 col-md-6 col-xs-6 col-grid-box px-0 px-sm-0 px-md-1":"col-lg-"+e.props.colSize+"col-sm-6 col-xs-6 px-0 px-sm-0 px-md-1 col-grid-box"),key:r},l.a.createElement(g.default,{product:t,symbol:a,checkImage:e.checkImage,key:r}))})),l.a.createElement("div",{className:"mouse_pointer row justify-content-md-center small"},l.a.createElement(f.a,{initialPage:this.state.pageNo,previousLabel:"previous",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:this.state.pageCount,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:this.handlePageClick,containerClassName:"pagination my-5",subContainerClassName:"pages pagination",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",pageClassName:"page-item",activeClassName:"active"}))):l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12 text-center section-b-space mt-5 no-found"},l.a.createElement("img",{src:"".concat("","/assets/images/empty-search.jpg"),className:"img-fluid mb-4"}),l.a.createElement("h3",null,r("Sorry! Couldnt find the product you were looking For!!!"),"    "),l.a.createElement("p",null,r("Please check if you have misspelt something or try searching with other words"),"."),l.a.createElement(p.a,{to:"".concat("","/"),className:"btn btn-solid"},r("Continue shopping")))))))}}]),t}(s.Component),k=Object(y.withTranslate)(Object(u.connect)(function(e){return{perPage:"51",symbol:e.data.symbol,hole_data:e}},{getSearchResults:_.H})(E)),N=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={layoutColumns:3,query:""},a}return Object(i.a)(t,e),Object(n.a)(t,[{key:"LayoutViewClicked",value:function(e){this.setState({layoutColumns:e})}},{key:"componentDidMount",value:function(){window.scrollTo(1,0)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{title:"Search results",metaTitle:"Search for what you looking for... | beldara.com",metaDesc:"Searching"}),l.a.createElement("section",{className:"section-b-space py-0"},l.a.createElement("div",{className:"collection-wrapper"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"collection-content col"},l.a.createElement("div",{className:"page-main-content"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"collection-product-wrapper product-filter-content"},l.a.createElement("div",{className:"product-wrapper-grid"},l.a.createElement("div",{className:"container-fluid p-0"},l.a.createElement("div",{className:"row "},l.a.createElement(k,{colSize:this.state.layoutColumns})))))))))))))))}}]),t}(s.Component);t.default=N}}]);
//# sourceMappingURL=61.6b0f55e6.chunk.js.map