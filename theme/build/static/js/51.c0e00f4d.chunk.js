(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{316:function(e,t,a){"use strict";var n=a(251),r=a(19),c=a(20),o=a(22),s=a(21),l=a(23),i=a(1),u=a.n(i),m=a(153),d=a(164),p=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={},a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.categories;return u.a.createElement("ul",{className:d.isMobile?"":"widthClass"},Object.entries(e.name).splice(0,10).map(function(t){var a=Object(n.a)(t,2),r=a[0],c=a[1];return u.a.createElement("li",{key:r,className:"text-break custom_text text-capitalize custom_li"},u.a.createElement(m.a,{to:"".concat("","/cat/").concat(e.url.toLowerCase(),"/").concat(c.url.toLowerCase(),".html"),target:"_blank"},r))}))}}]),t}(i.Component);t.a=p},317:function(e,t,a){"use strict";var n=a(251),r=a(19),c=a(20),o=a(22),s=a(21),l=a(23),i=a(1),u=a.n(i),m=a(153),d=a(164),p=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={},a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.categories;return u.a.createElement("ul",{className:d.isMobile?"":"widthClass mx-2"},Object.entries(e.name).splice(11,10).map(function(t){var a=Object(n.a)(t,2),r=a[0],c=a[1];return u.a.createElement("li",{key:r,className:"text-break custom_text text-capitalize custom_li"},u.a.createElement(m.a,{to:"".concat("","/cat/").concat(e.url.toLowerCase(),"/").concat(c.url.toLowerCase(),".html"),target:"_blank"},r))}))}}]),t}(i.Component);t.a=p},363:function(e,t,a){},365:function(e,t,a){},367:function(e,t,a){},487:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a(19),c=a(20),o=a(22),s=a(21),l=a(23),i=a(47),u=a(1),m=a.n(u),d=a(153),p=a(17),h=a(16),g=a(29),b=a(4),f=a(26),v=a(9),y=a(156),E=a.n(y),w=a(157),O=a.n(w),N=(a(363),a(365),a(6)),j=a.n(N),k=(a(10),a(0),a(152)),S=a(164),x=a(251),C=a(8),_=a.n(C),I=(a(315),a(316)),A=a(317),L=(a(367),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).onMouseOut=function(e){var t=e.toElement||e.relatedTarget;try{if(console.log(t,t.parentNode),_()(t.parentNode).hasClass("addnewnavbar"))return!1;_()("#main_categories").addClass("d-none")}catch(a){console.error(a)}},a.onMouseOver=function(e){e.toElement||e.relatedTarget;try{_()("#main_categories").removeClass("d-none")}catch(t){console.error(t)}},a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return m.a.createElement("div",{id:"root_category"},m.a.createElement("h4",{id:"main_cat_to_hover",className:"main_cat_to_hover hoverclass"},"Categories"," ",m.a.createElement("i",{className:"arrow",style:{fontSize:"15px",margin:"3px 2px"}})),m.a.createElement("h6",{style:{opacity:"0"},className:"hoverclass"}),m.a.createElement("span",{className:"hoverclass",id:"main_categories"},Object.entries(this.props.categories).slice(0,12).map(function(e,t){var a=Object(x.a)(e,2),n=a[0],r=a[1];return void 0!==r.url||null!==r.url?m.a.createElement(m.a.Fragment,null,"0"==t?m.a.createElement("span",{className:"h5 ".concat(t," mx-1 has-submenu text-capitalize text-center"),style:{paddingTop:"8px"}},"TOP CATEGORIES"):"",m.a.createElement("li",{key:n,className:"submenu"},m.a.createElement("a",{href:"".concat("","/cat/").concat(r.url.toLowerCase(),".html"),target:"_blank"},n,m.a.createElement("i",{className:"arrow-down float-right mt-2"})),m.a.createElement("ul",{className:"mega-menu clothing-menu"},m.a.createElement("li",null,m.a.createElement("div",{className:"row m-0"},m.a.createElement("div",{className:"link-section"},m.a.createElement("h5",{className:"text-center"},m.a.createElement(d.a,{to:"".concat("","/cat/").concat(r.url.toLowerCase(0),".html"),target:"_blank",className:"subheadcat"},n)),""!=Object.keys(r.name)?m.a.createElement("li",{className:S.isMobile?"":"d-flex"},m.a.createElement(I.a,{categories:r}),m.a.createElement(A.a,{categories:r})):""))))),"4"==t?m.a.createElement(m.a.Fragment,null,m.a.createElement("span",{className:"h5 mx-1 has-submenu text-capitalize text-center",style:{paddingTop:"8px"}},"OTHER CATEGORIES")):""):""})))}}]),t}(u.Component)),R=Object(g.connect)(function(e){return e.categories})(L);var q,M,T;window.location.hostname.split(".beldara.com")[0];function P(e){return e}function z(e,t){var a=t.query,n=E.a?E()(e.name,a):"",r=O.a?O()(e.name,n):"";return m.a.createElement("span",null,r.map(function(t,a){var n=t.highlight?"react-autosuggest__suggestion-match":null;e.type;return m.a.createElement("span",{className:"".concat(n),key:a},t.text)}),1==e.type?m.a.createElement(m.a.Fragment,null,m.a.createElement("h6",null,"In Seller")):"")}var B=Object(b.a)(function(){return a.e(4).then(a.t.bind(null,175,7)).then(function(e){return e.default})}),D=Object(b.a)(function(){return a.e(21).then(a.bind(null,811)).then(function(e){return e.default})}),F=Object(u.lazy)(function(){return Promise.all([a.e(2),a.e(5),a.e(48),a.e(101)]).then(a.bind(null,819))}),U=Object(u.lazy)(function(){return a.e(111).then(a.bind(null,812))}),W=function(e){function t(e){var a;Object(r.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).onChange=function(e,t){var n=t.newValue;t.method;"string"==typeof n?(a.setState({value:n}),e.button):"object"==typeof n&&(a.setState({value:n.name}),0===e.button&&(0==n.type?window.location.href="/search?q="+n.name.split(" ").join("+"):1==n.type&&"null"!=n.url&&""!=n.url&&(window.location.href=n.url)))},a.onSuggestionsFetchRequested=function(e){var t={term:e.value};t=JSON.stringify(t);var n=new FormData;n.append("data",t),j.a.post("https://api.beldara.com/common/search_universal_new.php",n,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){var t=e.data.result.map(function(e){return{name:"".concat(e.name),type:"".concat(e.type),url:"".concat(e.url)}});a.setState({suggestions:t})}).catch(function(e){var t=e.response;return Promise.reject(t)})},a.onSuggestionsClearRequested=function(){a.setState({suggestions:[]})},a.handleScroll=function(){(window.pageXOffset||document.documentElement.scrollTop||document.body.scrollTop||0)>=300?window.innerWidth<576?document.getElementById("sticky").classList.remove("fixed"):document.getElementById("sticky").classList.add("fixed"):document.getElementById("sticky").classList.remove("fixed")},a.openNav=function(e){e.preventDefault();var t=document.getElementById("mySidenav");t&&t.classList.add("open-side")},a.state={isLoading:!1,query:"",data:[],filteredData:[],value:"",suggestions:[],languages:[],changeCountry:""},a.textInput=m.a.createRef(),a.openSearch=a.openSearch.bind(Object(i.a)(Object(i.a)(a))),a.changeCountryCode=a.changeCountryCode.bind(Object(i.a)(Object(i.a)(a)));var n,c=window.location.search,l=new URLSearchParams(c);a.textInput=null,a.setTextInputRef=function(e){a.textInput=e},a.focusTextInput=function(){console.log(a.textInput,84),a.textInput&&a.textInput.focus()},l.get("mbo")?(n=l.get("mbo"),Object(v.A)("internal","1",1)):l.get("mb")&&(n=l.get("mb"),Object(v.A)("internal","0",1)),n&&(n=n.split("-")[0],Object(v.r)("mhinpbn")!=n&&(Object(v.A)("mhinpbn",n,365),h.a.dispatch(Object(f.K)(n)))),q=l.get("utm_campaign")?l.get("utm_campaign"):l.get("campaign"),M=l.get("utm_target")?l.get("utm_target"):l.get("target"),void 0!==(T=l.get("utm_source")?l.get("utm_source"):l.get("source"))&&""!=T&&null!==T&&"null"!=T&&Object(v.A)("source",T,30),void 0!==q&&""!=q&&null!==q&&"null"!=q&&Object(v.A)("cname",q,30),void 0!==M&&""!=M&&null!==M&&"null"!=M&&Object(v.A)("target",M,30);var u=l.get("country");return u&&("us"==u.toLowerCase()||"usa"==u.toLowerCase()?(Object(v.A)("country_name","United States of America","365"),Object(v.A)("country_code","US","365"),Object(v.A)("countryid","1","365"),Object(v.A)("currency","USD","365"),h.a.dispatch(Object(f.e)("USD"))):"in"==u.toLowerCase()&&(Object(v.A)("country_name","INDIA","365"),Object(v.A)("country_code","IN","365"),Object(v.A)("countryid","91","365"),Object(v.A)("currency","INR","365"),h.a.dispatch(Object(f.e)("INR")))),a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){h.a.dispatch(Object(f.s)()),h.a.dispatch(Object(f.A)(!1)),this.focusTextInput()}},{key:"componentWillMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"changeLanguage",value:function(e){h.a.dispatch(p.IntlActions.setLocale(e))}},{key:"openSearch",value:function(){document.getElementById("search-overlay").style.display="block",this.focusTextInput(),document.getElementById("search_query").focus()}},{key:"closeSearch",value:function(){document.getElementById("search-overlay").style.display="none"}},{key:"changeCountryCode",value:function(e){this.setState({changeCountry:e})}},{key:"render",value:function(){var e,t=this.state,a=t.value,r=t.suggestions,c=this.props.translate,o=(e={borderRadius:"4px",color:"#ffffff",letterSpacing:"0.05em",border:"2px solid #ff9944"},Object(n.a)(e,"borderRadius","0.3rem"),Object(n.a)(e,"backgroundImage","linear-gradient(30deg, #ff9944 50%, transparent 50%)"),Object(n.a)(e,"backgroundSize","540px"),Object(n.a)(e,"backgroundRepeat","no-repeat"),Object(n.a)(e,"backgroundPosition","0"),Object(n.a)(e,"transition","background 300ms ease-in-out"),Object(n.a)(e,"fontSize","9px"),Object(n.a)(e,"lineHeight","20px"),Object(n.a)(e,"textTransform","uppercase"),Object(n.a)(e,"fontWeight","700"),Object(n.a)(e,"padding","0.200rem .27rem"),e),s={placeholder:c("What are you looking for")+"...",value:a,onChange:this.onChange,name:"q",ref:this.setTextInputRef,id:"search_query"};return m.a.createElement("div",null,m.a.createElement(k.Helmet,{script:[{type:"application/ld+json",innerHTML:'window.yourObject = {"@context": "https://schema.org","@type": "WebSite","url": "https://www.beldara.com/","potentialAction": {"@type": "SearchAction","target": "https://beldara.com/search?q={search_term_string}","query-input": "required name=search_term_string"}};'}]}),m.a.createElement(k.Helmet,{script:[{type:"application/ld+json",innerHTML:'{ "@context": "https://schema.org","@type": "Organization","name": "Beldara","legalName" : "Beldara.com","url": "https://beldara.com/","logo": "https://img.beldara.com/assets/images/beldaraLogo.png","foundingDate": "2014","founders": [{"@type": "Person","name": "Pradeep Khandekar"},{"@type": "Person","name": ""} ],"address": {"@type": "PostalAddress","streetAddress": "5014-5015-5016,1 Aerocity, Andheri - Kurla Rd Safed Pool Shivaji Nagar, Jarimari","addressLocality": "Saki Naka","addressRegion": "Mumbai","postalCode": "400072","addressCountry": "India"},"contactPoint": {"@type": "ContactPoint","contactType": "customer support","telephone": "[+91 9667682100]","Mobile": "[+1 (913) 289-0433]","email": "support@beldara.com"},"sameAs": [ "https://www.facebook.com/beldara/","https://www.instagram.com/beldaraonline/","https://in.linkedin.com/company/beldara","https://in.pinterest.com/beldaraecom/","https://twitter.com/Beldara_India"]};'}]}),m.a.createElement("header",{id:"sticky",className:"sticky"},m.a.createElement("div",{className:"mobile-fix-option"}),m.a.createElement(u.Suspense,{fallback:""},F?m.a.createElement(F,{languageMaster:this.props.languageMaster,changeCountryCode:this.changeCountryCode,user:this.props.user}):""),m.a.createElement("div",{className:"container"},!this.props.user.user||"http://localhost:3000/"!=window.location.href&&"http://localhost:3000"!=window.location.href&&"https://uat.beldara.com/"!=window.location.href&&"http://uat.beldara.com"!=window.location.href&&"https://beldara.com/"!=window.location.href&&"http://beldara.com"!=window.location.href||S.isMobile?"":"seller"!=this.props.user.user.user_type&&"both"!=this.props.user.user.user_type||"0"!=this.props.user.user.package_id&&"null"!=this.props.user.user.package_id?"":m.a.createElement("div",{className:"row text-center"},m.a.createElement("div",{className:"col-lg-12"},m.a.createElement("span",null,"Sell more online! Now become a paid member & get connected with potential buyers.",m.a.createElement("a",{href:"/membership.html"}," Upgrade now ")))),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-sm-12"},m.a.createElement("div",{className:"main-menu border-section border-top-0"},m.a.createElement("div",{className:"menu-left"},m.a.createElement("div",{className:S.isMobile?"navbar":"addnewnavbar"},m.a.createElement("a",{href:"#",onClick:this.openNav,className:"text-dark"},m.a.createElement("div",{className:"bar-style"}," ",m.a.createElement("i",{className:"fa fa-bars sidebar-bar","aria-hidden":"true"}))),m.a.createElement(u.Suspense,{fallback:""},U?m.a.createElement(U,{changeCountry:this.state.changeCountry,user:this.props.user}):"")),m.a.createElement("div",{className:"brand-logo layout2-logo ".concat(S.isMobile?"ml-2":"")},m.a.createElement(D,{logo:this.props.logoName})),S.isMobile?"":m.a.createElement("div",{className:"addnewnavbar"},m.a.createElement("a",{href:"#",className:"text-dark"},m.a.createElement("div",{className:"bar-style"}," ",m.a.createElement(R,null))))),m.a.createElement("div",null,m.a.createElement("form",{className:"form_search",action:"search",role:"form"},B?m.a.createElement(B,{suggestions:r,onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,getSuggestionValue:P,renderSuggestion:z,inputProps:s,className:"form_search x1"}):"",m.a.createElement("button",{type:"submit",className:"btn-search"},m.a.createElement("i",{className:"fa fa-search"})))),m.a.createElement("div",{className:"menu-right pull-right"},m.a.createElement("div",null,m.a.createElement("div",{className:"icon-nav"},m.a.createElement("ul",null,m.a.createElement("li",{className:"onhover-div mobile-search"},m.a.createElement("div",null,m.a.createElement("img",{src:"".concat("","/assets/images/icon/search.png"),onClick:this.openSearch,className:"img-fluid",alt:"Search-beldara.com"}),m.a.createElement("i",{className:"fa fa-search",onClick:this.openSearch}))),S.isMobile?m.a.createElement("li",{className:"onhover-div post-req pl-0 mr-4"},m.a.createElement("div",null,m.a.createElement(d.a,{to:"".concat("","/post-requirement.html"),className:"btn",style:o},m.a.createElement("i",{className:"fa fa-paper-plane"})," ",c("Post Requirement")," "),m.a.createElement("i",{className:"fa fa-search ml-2",style:{fontSize:"16px"},onClick:this.openSearch}))):m.a.createElement("li",{className:"onhover-div post-req"},m.a.createElement("div",null,m.a.createElement(d.a,{to:"".concat("","/post-requirement.html"),className:"btn btn-solid"},m.a.createElement("i",{className:"fa fa-paper-plane"})," ",c("Post Requirement")," ")))))))))),this.props.user.user&&("http://localhost:3000/"==window.location.href||"http://localhost:3000"==window.location.href||"https://uat.beldara.com/"==window.location.href||"http://uat.beldara.com"==window.location.href||"https://beldara.com/"==window.location.href||"http://beldara.com"==window.location.href)&&S.isMobile?"seller"!=this.props.user.user.user_type&&"both"!=this.props.user.user.user_type||"0"!=this.props.user.user.package_id&&"null"!=this.props.user.user.package_id?"":m.a.createElement("div",{className:"row text-center"},m.a.createElement("div",{className:"col-lg-12"},m.a.createElement("span",null,"Sell more online! Now become a paid member & get connected with potential buyers.",m.a.createElement("a",{href:"/membership.html"}," Upgrade now")))):"")),m.a.createElement("div",{id:"search-overlay",className:"search-overlay"},m.a.createElement("div",null,m.a.createElement("span",{className:"closebtn mr-1",onClick:this.closeSearch,title:"Close Overlay"},"\xd7"),m.a.createElement("div",{className:"overlay-content"},m.a.createElement("div",{className:"container"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-xl-12"},m.a.createElement("form",{action:"search",role:"form"},m.a.createElement("div",{className:"form-group w-100"},B?m.a.createElement(B,{suggestions:r,onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,getSuggestionValue:P,renderSuggestion:z,inputProps:s,className:"form-control x2",id:"exampleInputPassword1",type:"search",placeholder:"What are you looking for..."}):""),m.a.createElement("button",{type:"submit",className:"btn btn-primary"},m.a.createElement("i",{className:"fa fa-search"}))))))))))}}]),t}(u.Component);t.default=Object(p.withTranslate)(Object(g.connect)(function(e){return{languageMaster:e.languageMaster.languageMaster,user:e.user,cartList:e.cartLength.cartLength.count}})(W))}}]);
//# sourceMappingURL=51.c0e00f4d.chunk.js.map