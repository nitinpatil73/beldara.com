(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{192:function(e,t,a){},741:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a.n(r),c=a(7),i=a(19),o=a(20),s=a(22),l=a(21),d=a(23),f=a(47),u=a(1),p=a.n(u),m=a(45),_=a(146),b=a(17),h=(a(192),a(162),a(160)),y=a.n(h),v=a(8),E=a.n(v),g=(a(170),a(10)),k=a.n(g),O=a(9),x=(a(6),a(29)),j=a(26),C=a(16),w=(a(178),a(197),a(161)),A=Object(u.lazy)(function(){return a.e(14).then(a.bind(null,198))}),N=Object(u.lazy)(function(){return a.e(7).then(a.bind(null,194))}),q=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).componentDidUpdate=function(){var e=Object(c.a)(n.a.mark(function e(t){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t.currencyValue[0].INR==a.state.inrValue){e.next=4;break}return e.next=4,a.setState({inrValue:t.currencyValue[0].INR});case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(0),e.next=10,a.setState({inrValue:70});case 10:case"end":return e.stop()}},e,null,[[0,6]])}));return function(t){return e.apply(this,arguments)}}(),a.CalcOfferPrice=function(e,t,r,n,c,i){return a.offerExist(c,i)&&t<=parseInt(r)&&t>=parseInt(n)?parseFloat(e):null},a.offerExist=function(e,t){if(void 0!==e&&null!==e&&""!==e&&void 0!==t&&null!==t&&""!==t){var a=new Date,r=a.getMonth()+1,n=a.getDate(),c=a.getFullYear()+"-"+r+"-"+n,i=e.split("-"),o=t.split("-"),s=c.split("-"),l=i[1]+","+i[2]+","+i[0],d=o[1]+","+o[2]+","+o[0],f=s[1]+","+s[2]+","+s[0];l=l.toString(),d=d.toString(),f=f.toString();var u=Date.parse(l),p=Date.parse(d),m=Date.parse(f);return m>=u&&p>=m}return!1},a.state={open:!1,stock:"InStock",quantity:1,image:"",inrValue:70,price:0},a.deadEnd=a.deadEnd.bind(Object(f.a)(Object(f.a)(a))),a.finalCost=a.finalCost.bind(Object(f.a)(Object(f.a)(a))),a.createCart=a.createCart.bind(Object(f.a)(Object(f.a)(a))),a.checkImageExist=a.checkImageExist.bind(Object(f.a)(Object(f.a)(a))),a.validate=a.validate.bind(Object(f.a)(Object(f.a)(a))),a.goToExpressCheckout=a.goToExpressCheckout.bind(Object(f.a)(Object(f.a)(a))),a.event_ask_for_price=a.event_ask_for_price.bind(Object(f.a)(Object(f.a)(a))),a.chatBtn=a.chatBtn.bind(Object(f.a)(Object(f.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"goToExpressCheckout",value:function(){var e=Object(c.a)(n.a.mark(function e(t,a,r,c){var i;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:i=this.state.price,"INR"!=r&&""!=r&&void 0!==r||(i=parseFloat(i)/70),i=i.toFixed(),y.a.trackCustom("AddToCart",{content_ids:[t],content_type:"product",value:this.state.price,currency:"USD"}),this.props.history.push({pathname:"/check_out.html",state:{totalprice:this.state.price,currency:this.props.symbol,product_seller:c,product_currency:r,prod_id:t,qty:a}});case 5:case"end":return e.stop()}},e,this)}));return function(t,a,r,n){return e.apply(this,arguments)}}()},{key:"onClickHandle",value:function(e){this.setState({image:e})}},{key:"checkImageExist",value:function(e){try{this.props.checkImage(e.target.id)}catch(t){console.log("error: ",t)}}},{key:"componentDidMount",value:function(e){var t={em:"support@beldara.com"},a={autoConfig:!0,debug:!1};y.a.init("432219770935494",t,a),y.a.init("2231476330510319",t,a);var r=E()("#toast_message").detach();E()(r).insertAfter(".breadcrumb-section")}},{key:"validate",value:function(e,t,a,r,n,c,i,o){Object(O.l)("Product",e,t,"click",k.a.get("sellerid"),Object(O.s)("mhinpbnb")),E()("#btn_"+t).css("opacity","0.6"),this.createCart(t,a,r,n,c,i,o)}},{key:"event_ask_for_price",value:function(e,t){w.isAndroid?window.Android.showProductPage(t):window.location="nativeiOSScheme://"+t}},{key:"createCart",value:function(e,t,a,r,n,c,i){w.isAndroid?window.Android.showProductPage(e):window.location="nativeiOSScheme://"+e}},{key:"finalCost",value:function(){var e=Object(c.a)(n.a.mark(function e(t,a){var r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=0,r=(r=t*a).toFixed(2),e.next=5,this.setState({price:r});case 5:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"deadEnd",value:function(e){}},{key:"chatBtn",value:function(e){var t={sellerid:e.sellerid,chatWithSupplier:!0,company:e.company,item:e};C.a.dispatch(Object(j.A)(t))}},{key:"render",value:function(){var e=this.props,t=e.product,a=(e.symbol,e.translate);return p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"product-box bg-light "},this.offerExist(t.offer_from_date,t.offer_to_date)&&null!==t.offer_percent&&"0"!==t.offer_percent?p.a.createElement("div",{className:"badge badge-danger text-wrap my-1 p-3",style:{width:"6rem",zIndex:"1",position:"absolute",webkitTransform:"rotate(-45deg)",left:"-11px"}},t.offer_percent," % Offer"):"",p.a.createElement("div",{className:"d-flex img-wrapper justify-content-center"},p.a.createElement("div",{className:"front d-flex imgWrapper"},1==t.brand_promo&&p.a.createElement("span",{className:"bpp_badge badge badge-warning"}," BPP "),p.a.createElement("div",{onClick:this.event_ask_for_price.bind(this,"image",t.id)},p.a.createElement("img",{"data-sizes":"auto",src:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==","data-src":t.variants?this.state.image?this.state.image:t.variants[0].images:"".concat(m.c,"/product_images_thumb/")+t.img,alt:"".concat(t.name," beldara.com"),className:"img-fluid prodImg lazyload ",id:t.id,onError:this.checkImageExist})))),p.a.createElement("div",{className:"product_info"},p.a.createElement("div",null,p.a.createElement("div",{onClick:this.event_ask_for_price.bind(this,"name",t.id)},p.a.createElement("div",{className:"text-truncate font-weight-bolder text-dark"},t.name)),t.company&&p.a.createElement("div",{className:"text-truncate font-weight-lighter"},p.a.createElement("small",null,t.company)),this.offerExist(t.offer_from_date,t.offer_to_date)?p.a.createElement("div",null,p.a.createElement("span",{className:"d-flex"},p.a.createElement("del",{className:"mr-1"},p.a.createElement(A,{productCost:this.deadEnd,finalCost:this.finalCost,symbol:t.currency,start_price:t.start_price,end_price:"",price_in:t.price_in,price_us:t.price_us,mrp_price:t.offer_mrp_price,price_offer:this.CalcOfferPrice(t.mrp_price,t.offer_min_qty,t.offer_stock,t.offer_min_qty,t.offer_from_date,t.offer_to_date),country_code:Object(O.s)("country_code")})),p.a.createElement(A,{productCost:this.deadEnd,finalCost:this.finalCost,symbol:t.currency,start_price:t.offer_price,end_price:"",price_in:t.price_in,price_us:t.price_us,mrp_price:t.offer_mrp_price,price_offer:this.CalcOfferPrice(t.offer_price,t.offer_min_qty,t.offer_stock,t.offer_min_qty,t.offer_from_date,t.offer_to_date),country_code:Object(O.s)("country_code")})),t.qty&&null!==t.offer_min_qty&&"0"!==t.offer_min_qty?p.a.createElement("div",{className:"small"},"".concat(a("MOQ")," : ").concat(t.offer_min_qty," - ").concat(t.unit)):""):this.offerExist(t.offer_from_date,t.offer_to_date)?"":p.a.createElement("div",null,t.start_price&&null===this.CalcOfferPrice(t.offer_price,t.qty,t.offer_stock,t.offer_min_qty,t.offer_from_date,t.offer_to_date)?p.a.createElement(N,{currencyValue:this.props.currencyValue,productCost:this.deadEnd,finalCost:this.finalCost,minqty:t.qty,symbol:t.currency,start_price:t.start_price,end_price:t.end_price,price_us:t.price_us,price_in:t.price_in,country_code:Object(O.s)("country_code")}):p.a.createElement("b",null,"Ask For Price"),t.qty&&null!==t.offer_min_qty&&"0"!==t.offer_min_qty?p.a.createElement("div",{className:"small"},"".concat(a("MOQ")," : ").concat(t.qty," - ").concat(t.unit)):""))),p.a.createElement("div",{className:"row mb-2 mx-0"},t.start_price&&parseFloat(t.start_price)>parseFloat(0)&&!this.offerExist(t.offer_from_date,t.offer_to_date)?p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{id:"btn_".concat(t.id),className:" col-12 col-md-12 col-sm-12 text-center py-2 px-1 buy1"},p.a.createElement("div",{className:"mouse_pointer btn btn_Pro  btn-orange",id:t.id,onClick:this.validate.bind(this,"buyBtn",t.id,t.qty,parseFloat(t.start_price)*parseInt(t.qty),this.props.symbol,t.start_price,t.currency,t.sellerid)},"Buy Now"))):this.offerExist(t.offer_from_date,t.offer_to_date)?p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{id:"btn_".concat(t.id),className:" col-12 col-md-12 col-sm-12 text-center py-2 px-1 buy2"},p.a.createElement("div",{className:"mouse_pointer btn btn_Pro  btn-orange",id:t.id,onClick:this.validate.bind(this,"buyBtn",t.id,t.offer_min_qty,parseInt(this.state.price)*parseInt(t.offer_min_qty),this.props.symbol,t.start_price,t.currency,t.sellerid)},"Buy Now")),p.a.createElement("div",{className:"col-6  text-center col-md-6 col-sm-6 py-2 px-1"})):p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{id:"btn_".concat(t.id),className:"col-12 text-center col-md-12 col-sm-12 py-2 px-1"},p.a.createElement("div",{className:"text-center"},p.a.createElement("div",{onClick:this.event_ask_for_price.bind(this,"ask_for_price",t.id),id:"ask_for_price",className:"btn btn_Pro btn-orange",clickevent:"Ask_for_price"}," Contact Supplier ")))))))}}]),t}(u.Component);t.default=Object(_.a)(Object(b.withTranslate)(Object(x.connect)(function(e){return{symbol:e.data.symbol,currencyValue:e.currencyValue.currencyValue,user:e.user,hole_data:e}})(q)))}}]);
//# sourceMappingURL=85.b3bb3692.chunk.js.map