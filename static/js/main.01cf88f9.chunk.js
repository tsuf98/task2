(this.webpackJsonppublic=this.webpackJsonppublic||[]).push([[0],{172:function(e,t,a){e.exports=a(338)},177:function(e,t,a){},178:function(e,t,a){},338:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),i=a.n(l),c=(a(177),a(178),a(179),a(50)),o=a(40),m=a(38),s=a(34),u=a(35),d=a(36),p=a(37),f=a(39),h=a(345),E=a(339),y=a(153),v=a.n(y),C="ADD_COMPANY",b="REMOVE_COMPANY",g="STAR_COMPANY",w="UNSTAR_COMPANY",O="ADD_TO_COMPARATION",N="REMOVE_FROM_COMPARATION",k="REMOVE_ALL_FROM_COMPARATION";var A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={error:"",query:""},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"search",value:function(){var e=this;this.setState({error:""});var t="https://company-stream.clearbit.com/v2/companies/find?domain=".concat(this.state.query);v.a.get(t,{headers:{Authorization:"Bearer ".concat("sk_ea03da303b89777721f6effa553353bd")}}).then((function(t){e.props.addCompany(t.data),e.clear()})).catch((function(t){return e.setState({error:"We couldn't find this domain... Try another one!"})}))}},{key:"inputHandle",value:function(e){this.setState({query:e.target.value})}},{key:"clear",value:function(){this.setState({query:"",error:""})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"control"},r.a.createElement(h.a,{className:"control-input",type:"text",placeholder:"search for domain",onChange:this.inputHandle.bind(this),onKeyUp:function(t){13===t.keyCode&&e.search()},value:this.state.query}),r.a.createElement(E.a,{color:"teal",onClick:this.search.bind(this)},"Add"),this.state.query&&r.a.createElement(E.a,{basic:!0,inverted:!0,color:"teal",onClick:this.clear.bind(this)},"clear search"),r.a.createElement("p",{className:"err"},this.state.error))}}]),t}(n.Component),j=Object(m.b)(null,(function(e){return{addCompany:function(t){return e(function(e){return{type:C,company:e}}(t))}}}))(A),B=a(44),R=Object(m.b)((function(e){return{compareBetween:e.compareBetween}}),(function(e){return{removeCompany:function(t){return e(function(e){return{type:b,id:e}}(t))},starCompany:function(t){return e(function(e){return{type:g,id:e}}(t))},unStarCompany:function(t){return e(function(e){return{type:w,id:e}}(t))},addToComparation:function(t){return e(function(e){return{type:O,id:e}}(t))},removeFromComparation:function(t){return e(function(e){return{type:N,id:e}}(t))}}}))((function(e){var t=e.company,a=e.isStarred,n=e.removeCompany,l=e.isCompared,i=e.compareBetween;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"right floated meta pointer"},r.a.createElement(B.a,{name:"delete",onClick:n.bind(void 0,t.id)})),t.logo&&r.a.createElement("img",{alt:"logo",className:"left floated mini ui image",src:t.logo}),r.a.createElement("div",{className:"header"},t.name||t.domain),r.a.createElement("div",{className:"meta"},t.type)),r.a.createElement("div",{className:"extra content"},r.a.createElement("div",{className:"flex"},r.a.createElement("i",{className:"star icon "+(a?"gold":"grey"),onClick:function(t){e.isStarred?e.unStarCompany(t):e.starCompany(t)}.bind(void 0,t.id)}),r.a.createElement(c.b,{to:"/company/"+t.id},"More Info"),r.a.createElement(E.a,{color:l?"green":null,onClick:function(t){e.isCompared?e.removeFromComparation(t):e.addToComparation(t)}.bind(void 0,t.id),disabled:i.length>5&&!l},"Compare"))))})),M=a(346),S=function(e){var t=e.list;return r.a.createElement("div",{className:"spacy"},r.a.createElement(M.a,{striped:!0,definition:!0,celled:!0},r.a.createElement(M.a.Header,{fullWidth:!0},r.a.createElement(M.a.Row,{textAlign:"center"},r.a.createElement(M.a.HeaderCell,null),t.map((function(e){return r.a.createElement(M.a.HeaderCell,{key:e.id,width:"2"},r.a.createElement("h1",{className:"ui sub header"},e.logo&&r.a.createElement("img",{src:e.logo,alt:"logo",className:"ui minileft spaced image"})," ",e.name||e.domain))})))),r.a.createElement(M.a.Body,null,r.a.createElement(M.a.Row,null,r.a.createElement(M.a.Cell,{width:"1"},"Type"),t.map((function(e){return r.a.createElement(M.a.Cell,{key:e.id},e.type||"n/a")}))),r.a.createElement(M.a.Row,null,r.a.createElement(M.a.Cell,null,"Industry"),t.map((function(e){return r.a.createElement(M.a.Cell,{key:e.id,disabled:!e.category.industry},e.category.industry||"n/a")}))),r.a.createElement(M.a.Row,null,r.a.createElement(M.a.Cell,null,"Annual Revenue"),t.map((function(e){return r.a.createElement(M.a.Cell,{key:e.id,positive:-1!==["$10B+","$1B-$10B"].indexOf(e.metrics.estimatedAnnualRevenue),disabled:!e.metrics.estimatedAnnualRevenue},e.metrics.estimatedAnnualRevenue||"n/a")}))),r.a.createElement(M.a.Row,null,r.a.createElement(M.a.Cell,null,"Market Cap"),t.map((function(e){return r.a.createElement(M.a.Cell,{key:e.id,disabled:!e.metrics.marketCap},e.metrics.marketCap||"n/a")}))),r.a.createElement(M.a.Row,null,r.a.createElement(M.a.Cell,null,"Money Raised"),t.map((function(e){return r.a.createElement(M.a.Cell,{key:e.id,disabled:!e.metrics.raised},e.metrics.raised||"n/a")}))),r.a.createElement(M.a.Row,null,r.a.createElement(M.a.Cell,null,"Number of Employees"),t.map((function(e){return r.a.createElement(M.a.Cell,{key:e.id,disabled:!e.metrics.employees},e.metrics.employees||"n/a")}))))))},P=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={showComperation:!1,cancel:!1},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"toggleCompare",value:function(){this.setState((function(e){return{showComperation:!e.showComperation}}))}},{key:"cancel",value:function(){var e=this;this.setState({cancel:!0}),window.setTimeout((function(){return e.props.clearAll()}),800)}},{key:"render",value:function(){return r.a.createElement("div",{className:"compare",style:{maxHeight:this.state.showComperation?"100vh":window.innerWidth/window.innerHeight>1?"10vw":"10vh",overflowY:this.state.showComperation?"auto":"hidden",bottom:this.state.cancel?"-100vh":"0"}}," ",!this.state.showComperation&&r.a.createElement(r.a.Fragment,null," ",r.a.createElement(E.a,{className:"ui right floated",onClick:this.props.clearAll}," Clear ")," ",r.a.createElement(E.a,{className:"ui right floated",color:"blue",disabled:1===this.props.list.length,onClick:this.toggleCompare.bind(this)}," Compare "),window.innerWidth>640?r.a.createElement("div",{className:"ui horizontal list"}," ",this.props.list.map((function(e){return r.a.createElement("div",{className:"item",key:e.id}," ",e.logo&&r.a.createElement("img",{src:e.logo,alt:"logo",className:"ui mini image"})," ",r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"ui sub header"}," ",e.name||e.domain," ")," ")," ")}))," "):r.a.createElement("h5",{className:"higher"},this.props.list.length," selected")),r.a.createElement("div",{className:"charts",style:{opacity:this.state.showComperation?"1":"0"}},r.a.createElement(E.a,{className:"ui right floated",onClick:this.cancel.bind(this)}," ",r.a.createElement(B.a,{name:"delete"})," close "),r.a.createElement("br",null),r.a.createElement(S,{list:this.props.list})," ",r.a.createElement("div",null)))}}]),t}(n.Component),x=Object(m.b)((function(e){return{starredCompanies:e.starredCompanies,companies:e.companies,compareBetween:e.compareBetween}}),(function(e){return{clearAll:function(){return e({type:k})}}}))((function(e){function t(t){return-1!==e.compareBetween.indexOf(t)}var a=e.starredCompanies,n=e.companies,l=e.compareBetween,i=e.clearAll;return r.a.createElement("div",{className:"home"},r.a.createElement(j,null),0===n.length&&r.a.createElement("div",{className:"dotted"}),r.a.createElement("div",{className:"ui cards"},n.filter((function(e){return-1!==a.indexOf(e.id)})).map((function(e,a){return r.a.createElement(R,{key:e.id+a,company:e,isStarred:!0,isCompared:t(e.id)})})),n.filter((function(e){return-1===a.indexOf(e.id)})).map((function(e,a){return r.a.createElement(R,{key:e.id+a,company:e,isStarred:!1,isCompared:t(e.id)})}))),l.length>0&&r.a.createElement(P,{list:l.map((function(e){return n.find((function(t){return t.id===e}))})),clearAll:i}))})),T=a(33),_=a(105),D=a(161),V=a.n(D),H=a(25),I=a(75);function L(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function U(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?L(a,!0).forEach((function(t){Object(H.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var W={companies:[],starredCompanies:[],compareBetween:[]},q=function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case O:return U({},a,{compareBetween:e=e=[].concat(Object(I.a)(a.compareBetween),[n.id])});case N:return e=a.compareBetween.filter((function(e){return e!==n.id})),U({},a,{compareBetween:e});case k:return U({},a,{compareBetween:[]});case C:return a.companies.find((function(e){return e.id===n.company.id}))?U({},a):U({},a,{companies:[].concat(Object(I.a)(a.companies),[n.company])});case b:return e=a.compareBetween.filter((function(e){return e!==n.id})),{companies:a.companies.filter((function(e){return e.id!==n.id})),starredCompanies:t=a.starredCompanies.filter((function(e){return e!==n.id})),compareBetween:e};case g:return U({},a,{starredCompanies:t=[].concat(Object(I.a)(a.starredCompanies),[n.id])});case w:return t=a.starredCompanies.filter((function(e){return e!==n.id})),U({},a,{starredCompanies:t});default:return U({},a)}},F={key:"root",storage:V.a},Y=Object(_.a)(F,q),z=Object(T.c)(Y),$=Object(_.b)(z),J=a(347),G=a(162),K=a.n(G),Z=function(e){return r.a.createElement("div",{style:{height:"30vh",width:"100%",marginTop:"20px",marginBottom:"5px"}},r.a.createElement(K.a,{bootstrapURLKeys:{key:"AIzaSyAPcNVUJ0rU27aiB6ZPXsk8m-SfPGBUiUo"},defaultCenter:{lat:e.lat,lng:e.lng},defaultZoom:15}))},X=function(e){var t=e.match.params,a=z.getState().companies.find((function(e){return e.id===t.id}));return r.a.createElement("div",{className:"ui raised very padded text segment black w80"},r.a.createElement("h1",{className:"ui header"},a.logo&&r.a.createElement("img",{alt:"logo",className:"ui small image",src:a.logo}),r.a.createElement("div",{className:"content"},a.name||a.domain,r.a.createElement("div",{className:"sub header"},a.domain))),r.a.createElement("p",null,a.description),a.category.industry&&r.a.createElement("p",{className:"meta"},r.a.createElement("i",{className:"suitcase icon"})," ",a.category.industry),r.a.createElement(J.a.Group,{size:window.innerWidth<768?"small":null},a.metrics.marketCap&&r.a.createElement(J.a,null,r.a.createElement(J.a.Value,null,Math.round(a.metrics.marketCap/1e6)+"M"),r.a.createElement(J.a.Label,null,r.a.createElement(B.a,{name:"money bill alternate outline"}),"Market Cap")),a.metrics.estimatedAnnualRevenue&&r.a.createElement(J.a,null,r.a.createElement(J.a.Value,null,a.metrics.estimatedAnnualRevenue),r.a.createElement(J.a.Label,null,"Annual Revenue")),a.metrics.employees&&r.a.createElement(J.a,null,r.a.createElement(J.a.Value,null,a.metrics.employees),r.a.createElement(J.a.Label,null,r.a.createElement(B.a,{name:"users"}),"Employees")),a.metrics.raised&&r.a.createElement(J.a,null,r.a.createElement(J.a.Value,null,a.metrics.raised),r.a.createElement(J.a.Label,null,r.a.createElement(B.a,{name:"usd"}),"Money raised"))),r.a.createElement(Z,{lat:a.geo.lat,lng:a.geo.lng}),r.a.createElement("p",{className:"meta"},a.location),r.a.createElement(c.b,{to:"/"},"Back to home page"))};var Q=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c.a,{basename:"/"},r.a.createElement(o.a,{path:"/",exact:!0},r.a.createElement(x,null)),r.a.createElement(o.a,{path:"/company/:id",component:X})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ee=a(163);i.a.render(r.a.createElement(m.a,{store:z},r.a.createElement(ee.a,{loading:null,persistor:$},r.a.createElement(Q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[172,1,2]]]);
//# sourceMappingURL=main.01cf88f9.chunk.js.map