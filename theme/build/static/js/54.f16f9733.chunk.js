(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{192:function(e,t,a){},222:function(e,t,a){"use strict";a.r(t);var r=a(2),c=a.n(r),n=a(7),s=a(19),o=a(20),i=a(22),l=a(21),p=a(23),m=a(47),d=a(1),u=a.n(d),f=a(153),b=a(45),h=a(146),_=a(17),g=(a(192),a(161),a(160)),y=a.n(g),v=a(8),E=a.n(v),k=(a(170),a(10)),N=a.n(k),x=a(9),C=a(6),w=a.n(C),O=a(29),j=a(26),A=a(16),D=(a(176),a(197),Object(d.lazy)(function(){return a.e(13).then(a.bind(null,198))})),P=Object(d.lazy)(function(){return a.e(6).then(a.bind(null,194))}),R=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).componentDidUpdate=function(){var e=Object(n.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t.currencyValue[0].INR==a.state.inrValue){e.next=4;break}return e.next=4,a.setState({inrValue:t.currencyValue[0].INR});case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(0),e.next=10,a.setState({inrValue:70});case 10:case"end":return e.stop()}},e,null,[[0,6]])}));return function(t){return e.apply(this,arguments)}}(),a.CalcOfferPrice=function(e,t,r,c,n,s){return a.offerExist(n,s)&&t<=parseInt(r)&&t>=parseInt(c)?parseFloat(e):null},a.offerExist=function(e,t){if(void 0!==e&&null!==e&&""!==e&&void 0!==t&&null!==t&&""!==t){var a=new Date,r=a.getMonth()+1,c=a.getDate(),n=a.getFullYear()+"-"+r+"-"+c,s=e.split("-"),o=t.split("-"),i=n.split("-"),l=s[1]+","+s[2]+","+s[0],p=o[1]+","+o[2]+","+o[0],m=i[1]+","+i[2]+","+i[0];l=l.toString(),p=p.toString(),m=m.toString();var d=Date.parse(l),u=Date.parse(p),f=Date.parse(m);return f>=d&&u>=f}return!1},a.state={open:!1,stock:"InStock",quantity:1,image:"",inrValue:70,price:0},a.deadEnd=a.deadEnd.bind(Object(m.a)(Object(m.a)(a))),a.finalCost=a.finalCost.bind(Object(m.a)(Object(m.a)(a))),a.createCart=a.createCart.bind(Object(m.a)(Object(m.a)(a))),a.checkImageExist=a.checkImageExist.bind(Object(m.a)(Object(m.a)(a))),a.validate=a.validate.bind(Object(m.a)(Object(m.a)(a))),a.goToExpressCheckout=a.goToExpressCheckout.bind(Object(m.a)(Object(m.a)(a))),a.event_ask_for_price=a.event_ask_for_price.bind(Object(m.a)(Object(m.a)(a))),a.chatBtn=a.chatBtn.bind(Object(m.a)(Object(m.a)(a))),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"goToExpressCheckout",value:function(){var e=Object(n.a)(c.a.mark(function e(t,a,r,n){var s;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:s=this.state.price,"INR"!=r&&""!=r&&void 0!==r||(s=parseFloat(s)/70),s=s.toFixed(),y.a.trackCustom("AddToCart",{content_ids:[t],content_type:"product",value:this.state.price,currency:"USD"}),this.props.history.push({pathname:"/check_out.html",state:{totalprice:this.state.price,currency:this.props.symbol,product_seller:n,product_currency:r,prod_id:t,qty:a}});case 5:case"end":return e.stop()}},e,this)}));return function(t,a,r,c){return e.apply(this,arguments)}}()},{key:"onClickHandle",value:function(e){this.setState({image:e})}},{key:"checkImageExist",value:function(e){try{this.props.checkImage(e.target.id)}catch(t){console.log("error: ",t)}}},{key:"componentDidMount",value:function(e){var t={em:"support@beldara.com"},a={autoConfig:!0,debug:!1};y.a.init("432219770935494",t,a),y.a.init("2231476330510319",t,a);var r=E()("#toast_message").detach();E()(r).insertAfter(".breadcrumb-section")}},{key:"validate",value:function(e,t,a,r,c,n,s,o){Object(x.k)("Product",e,t,"click",N.a.get("sellerid"),Object(x.r)("mhinpbnb")),E()("#btn_"+t).css("opacity","0.6"),this.createCart(t,a,r,c,n,s,o)}},{key:"event_ask_for_price",value:function(e,t){Object(x.k)("Product",e,t,"click",N.a.get("sellerid"),Object(x.r)("mhinpbnb"))}},{key:"createCart",value:function(e,t,a,r,c,n,s){w.a.post("https://api.beldara.com/common/create_cart_test.php",{security_token:"",plateform_type:"",productid:e,qty:t,amount:a,currency:r,visitorid:Object(x.r)("mhinpbnb"),sellerid:N.a.get("sellerid"),country_to:Object(x.r)("countryid"),pincode:Object(x.r)("pincode")},{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){window.location.href="/cart.html"}).catch(function(e){var t=e.response;return Promise.reject(t)})}},{key:"finalCost",value:function(){var e=Object(n.a)(c.a.mark(function e(t,a){var r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=0,r=(r=t*a).toFixed(2),e.next=5,this.setState({price:r});case 5:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"deadEnd",value:function(e){}},{key:"chatBtn",value:function(e){var t={sellerid:e.sellerid,chatWithSupplier:!0,company:e.company,item:e};A.a.dispatch(Object(j.A)(t))}},{key:"render",value:function(){var e=this.props,t=e.product,a=(e.symbol,e.translate);return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"product-box bg-light "},this.offerExist(t.offer_from_date,t.offer_to_date)&&null!==t.offer_percent&&"0"!==t.offer_percent?u.a.createElement("div",{className:"badge badge-danger text-wrap my-1 p-3",style:{width:"6rem",zIndex:"1",position:"absolute",webkitTransform:"rotate(-45deg)",left:"-11px"}},t.offer_percent," % Offer"):"",u.a.createElement("div",{className:"d-flex img-wrapper justify-content-center"},u.a.createElement("div",{className:"front d-flex imgWrapper"},u.a.createElement("a",{className:"d-flex align-items-center justify-content-center",href:"".concat("","/product/").concat(t.url,".html")},1==t.brand_promo&&u.a.createElement("span",{className:"bpp_badge badge badge-warning"}," BPP "),u.a.createElement("img",{"data-sizes":"auto",src:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==","data-src":t.variants?this.state.image?this.state.image:t.variants[0].images:"".concat(b.c,"/product_images_thumb/")+t.img,alt:"".concat(t.name," beldara.com"),className:"img-fluid prodImg lazyload ",id:t.id,onError:this.checkImageExist})))),u.a.createElement("div",{className:"product_info"},u.a.createElement("div",null,u.a.createElement(f.a,{to:"".concat("","/product/").concat(encodeURIComponent(t.url),".html")},u.a.createElement("div",{className:"text-truncate font-weight-bolder text-dark"},t.name)),t.company&&u.a.createElement("div",{className:"text-truncate font-weight-lighter"},u.a.createElement("small",null,t.company)),this.offerExist(t.offer_from_date,t.offer_to_date)?u.a.createElement("div",null,u.a.createElement("span",{className:"d-flex"},u.a.createElement("del",{className:"mr-1"},u.a.createElement(D,{productCost:this.deadEnd,finalCost:this.finalCost,symbol:t.currency,start_price:t.start_price,end_price:"",price_in:t.price_in,price_us:t.price_us,mrp_price:t.offer_mrp_price,price_offer:this.CalcOfferPrice(t.mrp_price,t.offer_min_qty,t.offer_stock,t.offer_min_qty,t.offer_from_date,t.offer_to_date),country_code:Object(x.r)("country_code")})),u.a.createElement(D,{productCost:this.deadEnd,finalCost:this.finalCost,symbol:t.currency,start_price:t.offer_price,end_price:"",price_in:t.price_in,price_us:t.price_us,mrp_price:t.offer_mrp_price,price_offer:this.CalcOfferPrice(t.offer_price,t.offer_min_qty,t.offer_stock,t.offer_min_qty,t.offer_from_date,t.offer_to_date),country_code:Object(x.r)("country_code")})),t.qty?u.a.createElement("div",{className:"small"},"".concat(a("MOQ")," : ").concat(t.offer_min_qty," - ").concat(t.unit)):""):this.offerExist(t.offer_from_date,t.offer_to_date)?"":u.a.createElement("div",null,t.start_price&&null===this.CalcOfferPrice(t.offer_price,t.qty,t.offer_stock,t.offer_min_qty,t.offer_from_date,t.offer_to_date)?u.a.createElement(P,{currencyValue:this.props.currencyValue,productCost:this.deadEnd,finalCost:this.finalCost,minqty:t.qty,symbol:t.currency,start_price:t.start_price,end_price:t.end_price,price_us:t.price_us,price_in:t.price_in,country_code:Object(x.r)("country_code")}):u.a.createElement("b",null,"Ask For Price"),t.qty?u.a.createElement("div",{className:"small"},"".concat(a("MOQ")," : ").concat(t.qty," - ").concat(t.unit)):""))),u.a.createElement("div",{className:"row mb-2 mx-0"},t.start_price&&parseFloat(t.start_price)>parseFloat(0)&&!this.offerExist(t.offer_from_date,t.offer_to_date)?u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{id:"btn_".concat(t.id),className:" col-6 col-md-6 col-sm-6 text-left py-2 px-1 buy1"},u.a.createElement("div",{className:"mouse_pointer btn btn_Pro  btn-orange",id:t.id,onClick:this.validate.bind(this,"buyBtn",t.id,t.qty,parseFloat(t.start_price)*parseInt(t.qty),this.props.symbol,t.start_price,t.currency,t.sellerid)},"Buy Now")),u.a.createElement("div",{className:"col-6  text-center col-md-6 col-sm-6 py-2 px-1"},u.a.createElement("div",{id:"div_".concat(t.id)},u.a.createElement(f.a,{onClick:this.event_ask_for_price.bind(this,"go_to_auction",t.id),id:"go_to_auction",className:"btn btn_Pro btn-orange",clickevent:"go_to_auction",to:{pathname:"/product/".concat(t.url,".html"),state:{product:t,askAuctionInit:!1}}}," e-Auction ")))):this.offerExist(t.offer_from_date,t.offer_to_date)&&t.offer_stock>0?u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{id:"btn_".concat(t.id),className:" col-6 col-md-6 col-sm-6 text-left py-2 px-1 buy2"},u.a.createElement("div",{className:"mouse_pointer btn btn_Pro  btn-orange",id:t.id,onClick:this.validate.bind(this,"buyBtn",t.id,t.offer_min_qty,parseInt(this.state.price)*parseInt(t.offer_min_qty),this.props.symbol,t.start_price,t.currency,t.sellerid)},"Buy Now")),u.a.createElement("div",{className:"col-6  text-center col-md-6 col-sm-6 py-2 px-1"},t.sellerid!=N.a.get("log_id")?u.a.createElement("div",{className:"mouse_pointer btn btn_Pro  btn-orange",onClick:this.chatBtn.bind(this,t)},"Chat Now"):"")):u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{id:"btn_".concat(t.id),className:"col-7 text-left col-md-7 col-sm-7 py-2 px-1"},u.a.createElement("div",{className:"text-left"},u.a.createElement(f.a,{onClick:this.event_ask_for_price.bind(this,"ask_for_price",t.id),id:"ask_for_price",className:"btn btn_Pro btn-orange",clickevent:"Ask_for_price",to:{pathname:"/post-requirement.html",state:t}}," Contact Supplier "))),u.a.createElement("div",{className:"col-5 text-center col-md-5 col-sm-5 py-2 px-1"},u.a.createElement("div",{id:"div_".concat(t.id)},u.a.createElement(f.a,{onClick:this.event_ask_for_price.bind(this,"go_to_auction",t.id),id:"go_to_auction",className:"btn btn_Pro btn-orange",clickevent:"go_to_auction",to:{pathname:"/product/".concat(t.url,".html"),state:{product:t,askAuctionInit:!1}}}," e-Auction ")))))))}}]),t}(d.Component);t.default=Object(h.a)(Object(_.withTranslate)(Object(O.connect)(function(e){return{symbol:e.data.symbol,currencyValue:e.currencyValue.currencyValue,user:e.user,hole_data:e}})(R)))},286:function(e,t,a){},378:function(e,t,a){"use strict";var r=a(2),c=a.n(r),n=a(7),s=a(19),o=a(20),i=a(22),l=a(21),p=a(23),m=a(1),d=a.n(m),u=a(48),f=a(9),b=a(8),h=a.n(b),_=(a(286),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).componentDidMount=Object(n.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a.state.type>0)){e.next=5;break}return e.next=3,Object(f.l)(a.state.type).then(function(){var e=Object(n.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({categoryData:t.result,isCategoryReceived:1,totalcat:t.message});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 3:e.next=7;break;case 5:return e.next=7,a.setState({isCategoryReceived:1});case 7:return e.next=9,a.setState({catid:a.props.type.catid,parentid:a.props.type.parentid});case 9:parseInt(a.state.catid)>0&&(h()("#"+a.state.catid).addClass("cat_label_selected"),h()(".accordion").find("#"+a.state.catid).addClass("cat_label_selected"));case 10:case"end":return e.stop()}},e)})),a.state={type:a.props.type.type,pageUrl:a.props.type.pageUrl,catid:0,totalcat:1,isCategoryReceived:0,categoryData:[],parentid:0},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return d.a.createElement("div",null,d.a.createElement("a",{href:"".concat(this.state.pageUrl,".html"),className:"showAllCat mouse_pointer"},"Show All "),d.a.createElement("div",{className:"h5 border-bottom mt-2"},"Top Category"),1==this.state.isCategoryReceived?this.state.categoryData.length>0?d.a.createElement("ul",null,this.state.categoryData.map(function(t,a){return d.a.createElement("li",{key:a,className:"catList"},d.a.createElement("a",{id:t.cat_id,"parent-id":t.parent_id,href:"".concat(e.state.pageUrl,"/").concat(t.name.replace(new RegExp("&","g"),"and").replace(new RegExp(",","g"),"-").replace(new RegExp(" ","g"),"-").toLowerCase(),"-on-beldara-").concat(t.cat_id,"-").concat(t.parent_id,".html")},t.name.charAt(0).toUpperCase()+t.name.slice(1)))})):"":d.a.createElement(u.a,null))}}]),t}(m.Component));t.a=_},792:function(e,t,a){"use strict";a.r(t);var r=a(11),c=a(2),n=a.n(c),s=a(7),o=a(19),i=a(20),l=a(22),p=a(21),m=a(23),d=a(1),u=a.n(d),f=a(9),b=a(222),h=a(17),_=a(8),g=a.n(_),y=a(48),v=a(266),E=a.n(v),k=a(213),N=a.n(k),x=a(10),C=a.n(x),w=a(6),O=a.n(w),j=a(152),A=a(378);var D="",P="",R=function(e){function t(){var e;Object(o.a)(this,t),(e=Object(l.a)(this,Object(p.a)(t).call(this))).handlePageClick=function(t){if(e.state.pageNo!=t.selected){var a=t.selected;window.location.href=window.location.pathname+"?page="+a}},e.changeArrow=function(e){"down"==e.id?(g()(".catLabelBtn").find("i").removeClass("fa-chevron-down").addClass("fa-chevron-up"),g()(".catLabelBtn").attr("id","up")):(g()(".catLabelBtn").find("i").removeClass("fa-chevron-up").addClass("fa-chevron-down"),g()(".catLabelBtn").attr("id","down"))},e.componentDidMount=Object(s.a)(n.a.mark(function t(){var a,r,c,o,i,l;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=window.location.pathname,r=a.split("bpp/"),"","",0,!r[1]){t.next=13;break}if(l=r[1].replace(".html","").split("-"),i=l.length,o=l[i-1],!(c=l[i-2])){t.next=13;break}return t.next=13,e.setState({catid:c,parentid:o});case 13:if(""!=P){t.next=26;break}return t.next=16,Object(f.j)(e.state.pageNo,e.state.parentid,e.state.catid).then(function(){var t=Object(s.a)(n.a.mark(function t(a){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({productName:a.result,isProductReceived:1,totalBpp:a.message,pageCount:Math.ceil(parseInt(a.message)/20)});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}());case 16:return t.prev=16,t.next=19,O.a.post("https://api.beldara.com/common/static_seo.php",{security_token:"",plateform_type:"",langCode:"en",pageid:"43"},{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){e.setState({catTitle:t.data.result.title,metaDesc:t.data.result.desc1,metaKeyword:t.data.result.keyword})}).catch(function(e){var t=e.response;return Promise.reject(t)});case 19:t.next=24;break;case 21:t.prev=21,t.t0=t.catch(16),console.log("\ud83d\ude31 Axios request failed: ".concat(t.t0));case 24:t.next=29;break;case 26:return t.next=28,Object(f.i)(P,e.state.pageNo,e.state.parentid,e.state.catid).then(function(){var t=Object(s.a)(n.a.mark(function t(a){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({productName:a.result,isProductReceived:1,totalBpp:a.message,pageCount:Math.ceil(parseInt(a.message)/20)});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}());case 28:try{O.a.post("https://api.beldara.com/common/cat_detail.php",{catid:e.state.catid,parentid:e.state.parentid,sellerid:C.a.get("sellerid"),security_token:"",plateform_type:""},{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){e.setState({catBanner:t.data.result.bimg,catName:t.data.result.name,catDesc:t.data.result.desc1,catTitle:t.data.result.cat_title,metaDesc:t.data.result.metaDescrip,metaKeyword:t.data.result.imgKeyword})}).catch(function(e){var t=e.response;return Promise.reject(t)})}catch(p){console.log("\ud83d\ude31 Axios request failed: ".concat(p))}case 29:case"end":return t.stop()}},t,null,[[16,21]])})),e.checkImage=function(e){var t;t=e,g()("#"+t).closest(".col-grid-box").addClass("d-none")};var a=window.location.search,r=new URLSearchParams(a);if(-1==window.location.pathname.indexOf("/bpp/"));else try{D=window.location.pathname.split("/bpp/")[1].split(".html")[0].split("/"),P=window.location.pathname.split("/").pop().replace(".html","")}catch(c){}return e.state={productName:"",pageUrl:"/bpp",isProductReceived:0,catBanner:"",catName:"",catDesc:"",catTitle:"",metaDesc:"",metaKeyword:"",pageNo:parseInt(r.get("page"))>0?parseInt(r.get("page")):0,pageCount:1,totalBpp:1,type:2,catid:0,parentid:0},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.translate;return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"breadcrumb-section py-1"},u.a.createElement(j.Helmet,null,u.a.createElement("title",null,"".concat(this.state.catTitle," product on beldara.com"),"   "),u.a.createElement("meta",{name:"description",content:"".concat(this.state.metaDesc," product on beldara.com")}),u.a.createElement("meta",{name:"keyword",content:"".concat(this.state.metaKeyword," product on beldara.com")})),u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-12"},u.a.createElement("div",{className:"page-title"},u.a.createElement("nav",{"aria-label":"breadcrumb",className:"theme-breadcrumb"},u.a.createElement("ol",{className:"breadcrumb"},u.a.createElement("li",{className:"breadcrumb-item small"},u.a.createElement(E.a,{to:"".concat("")},t("Home"))),D[0]?u.a.createElement("li",{className:"breadcrumb-item small","aria-current":"page"},D[1]?u.a.createElement(E.a,{to:"".concat("","/bpp/").concat(D[0],".html"),target:"_blank"},D[0].toUpperCase().split("ON-BELDARA")[0].replace(new RegExp("-","g")," ")):D[0].toUpperCase().split("ON-BELDARA")[0].replace(new RegExp("-","g")," ")):"",D[1]?u.a.createElement("li",{className:"breadcrumb-item small","aria-current":"page"},D[2]?u.a.createElement(E.a,{to:"".concat("","/bpp/").concat(D[0],"/").concat(D[1],".html"),target:"_blank"},D[1].toUpperCase().split("ON-BELDARA")[0].replace(new RegExp("-","g")," ")):D[1].toUpperCase().split("ON-BELDARA")[0].replace(new RegExp("-","g")," ")):"",D[2]?u.a.createElement("li",{className:"breadcrumb-item small","aria-current":"page"},D[2].toUpperCase().split("ON-BELDARA")[0].replace(new RegExp("-","g")," ")):""))))))),u.a.createElement("section",{className:"section-b-space"},u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-12 product-related"},u.a.createElement("h4",null,t("BRAND PRODUCTS")))),u.a.createElement("div",{className:"row search-product"},u.a.createElement("div",{className:"col-md-3 d-none d-md-block d-sm-none"},console.log("desktop"),u.a.createElement(A.a,{type:this.state})),u.a.createElement("div",{className:"col-md-9 col-sm-12 col-12"},u.a.createElement("div",{className:"row"},1==this.state.isProductReceived?null!=this.state.productName&&""!=this.state.productName?u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"col-md-6 col-sm-12 my-2 d-block d-md-none d-sm-block text-right"},u.a.createElement("div",{className:"accordion",id:"categoryList"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-header",id:"catLabel"},u.a.createElement("h2",{className:"mb-0"},u.a.createElement("button",{id:"down",className:"btn btn-link catLabelBtn",onClick:function(t){return e.changeArrow(t)},type:"button","data-toggle":"collapse","data-target":"#categorylistLabel","aria-expanded":"true","aria-controls":"categorylistLabel"},"Top Categories ",u.a.createElement("i",{className:"ml-2 fa fa-chevron-down"})))),u.a.createElement("div",{id:"categorylistLabel",className:"collapse","aria-labelledby":"headingOne","data-parent":"#categoryList"},u.a.createElement("div",{className:"card-body text-left"},console.log("mobile"),u.a.createElement(A.a,{type:this.state})))))),this.state.productName.slice(0,20).map(function(t,a){return t?u.a.createElement("div",Object(r.a)({key:a,className:"col-6 col-lg-3 col-xl-3 col-md-4 col-xs-6 col-sm-6 col-grid-box px-0 px-sm-0 px-md-1"},"key",a),u.a.createElement(b.default,{product:t,checkImage:e.checkImage})):""}),"  "):u.a.createElement("div",{className:"col-sm-12 text-center section-b-space mt-5 no-found"},u.a.createElement("img",{src:"".concat("","/assets/images/empty-search.jpg"),className:"img-fluid mb-4"}),u.a.createElement("h3",null,t("Sorry! Couldnt find the product you were looking For!!!"),"    "),u.a.createElement("p",null,t("Please check if you have misspelt something or try searching with other words"),"."),u.a.createElement(E.a,{to:"".concat("","/"),className:"btn btn-solid"},t("Continue shopping"))):u.a.createElement(y.a,null)))),u.a.createElement("div",{className:"row justify-content-md-center"},u.a.createElement(N.a,{initialPage:this.state.pageNo,previousLabel:"previous",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:this.state.pageCount,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:this.handlePageClick,containerClassName:"pagination my-5",subContainerClassName:"pages pagination",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",pageClassName:"page-item",activeClassName:"active"})))))}}]),t}(d.Component);t.default=Object(h.withTranslate)(R)}}]);
//# sourceMappingURL=54.f16f9733.chunk.js.map