"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2323],{81360:(O,g,o)=>{o.d(g,{u:()=>m});var c,f=o(19212);class m{transform(l,h){return l/Math.pow(10,h)}}(c=m).\u0275fac=function(l){return new(l||c)},c.\u0275pipe=f.Yjl({name:"tokenDecimals",type:c,pure:!0,standalone:!0})},23443:(O,g,o)=>{o.d(g,{N:()=>h});var l,f=o(15861),c=o(54931),m=o(20553),i=o(19212);class h{constructor(){}fetchBaseTokenUSDPrice(){return(0,f.Z)(function*(){return(yield(0,c.qo)(m.N.api.endpoint)("query")({status:[{where:{chain_id:{_eq:m.N.chain.chainId}}},{base_token:!0,base_token_usd:!0}]})).status[0].base_token_usd||0})()}}(l=h).\u0275fac=function(P){return new(P||l)},l.\u0275prov=i.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})},72323:(O,g,o)=>{o.r(g),o.d(g,{ListTokensPage:()=>k});var M,f=o(15861),c=o(96814),m=o(60095),i=o(93800),l=o(54931),h=o(20553),E=o(81360),P=o(14391),T=o(35768),e=o(19212),v=o(23443),Z=o(85219);function A(s,t){1&s&&(e.TgZ(0,"div"),e._UZ(1,"ion-progress-bar",12),e.qZA())}function C(s,t){if(1&s){const n=e.EpF();e.TgZ(0,"div",13)(1,"div")(2,"ion-input",14,15),e.NdJ("input",function(){e.CHM(n);const u=e.MAs(3);e.oxw();const p=e.MAs(15);return e.KtG(p.filterGlobal(u.value,"contains"))}),e._UZ(4,"ion-icon",16),e.qZA()()()}}function U(s,t){1&s&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"\xa0"),e.qZA(),e.TgZ(3,"th",17),e._uU(4,"# "),e._UZ(5,"p-sortIcon",18),e.qZA(),e.TgZ(6,"th",19),e._uU(7,"Name "),e._UZ(8,"p-sortIcon",20),e.qZA(),e.TgZ(9,"th",21),e._uU(10,"Ticker "),e._UZ(11,"p-sortIcon",22),e.qZA(),e.TgZ(12,"th",23),e._uU(13,"Token Price "),e._UZ(14,"p-sortIcon",24),e.qZA(),e.TgZ(15,"th",25),e._uU(16,"Minted "),e._UZ(17,"p-sortIcon",26),e.qZA()())}function D(s,t){if(1&s&&e._UZ(0,"img",32),2&s){const n=e.oxw().$implicit;e.Q6J("src",n.content_path,e.LSH)}}function x(s,t){1&s&&e._UZ(0,"img",33)}const L=s=>["/app/token",s];function I(s,t){if(1&s&&(e.TgZ(0,"tr",27)(1,"td",28)(2,"div",29),e.YNc(3,D,1,1,"img",30)(4,x,1,0,"img",31),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.ALo(13,"tokenDecimals"),e.ALo(14,"number"),e.ALo(15,"tokenDecimals"),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.ALo(18,"number"),e.qZA()()),2&s){const n=t.$implicit,d=e.oxw();e.Q6J("routerLink",e.VKq(21,L,n.ticker)),e.xp6(3),e.Q6J("ngIf",n.content_path),e.xp6(1),e.Q6J("ngIf",!n.content_path),e.xp6(2),e.Oqu(n.id),e.xp6(2),e.Oqu(n.name),e.xp6(2),e.Oqu(n.ticker),e.xp6(2),e.AsE("",e.xi3(13,9,n.last_price_base,n.decimals)," ATOM ($",e.xi3(14,12,d.baseTokenPrice*e.xi3(15,15,n.last_price_base,n.decimals),"1.2-6"),") "),e.xp6(5),e.hij("",e.xi3(18,18,n.circulating_supply/n.max_supply*100,"1.1-4"),"%")}}function y(s,t){1&s&&(e.TgZ(0,"tr")(1,"td",34),e._uU(2,"No tokens found."),e.qZA()())}const b=()=>({"min-width":"40rem"}),R=()=>["name","ticker"];class k{constructor(t,n){this.activatedRoute=t,this.priceService=n,this.isLoading=!0,this.selectedAddress="",this.tokens=null,this.holdings=null,this.offset=0,this.limit=6e3,this.lastFetchCount=0,this.baseTokenPrice=0,this.lastFetchCount=this.limit}ngOnInit(){var t=this;return(0,f.Z)(function*(){t.activatedRoute.params.subscribe(function(){var n=(0,f.Z)(function*(d){t.selectedAddress=d.address,t.isLoading=!0;const u=(0,l.qo)(h.N.api.endpoint);yield Promise.all([t.priceService.fetchBaseTokenUSDPrice().then(p=>t.baseTokenPrice=1),u("query")({token:[{offset:t.offset,limit:t.limit,order_by:[{id:"asc"}],where:{current_owner:{_eq:t.selectedAddress}}},{id:!0,transaction:{hash:!0},current_owner:!0,content_path:!0,name:!0,ticker:!0,max_supply:!0,circulating_supply:!0,decimals:!0,launch_timestamp:!0,last_price_base:!0,volume_24_base:!0,date_created:!0}]}).then(p=>t.tokens=p.token),u("query")({token_holder:[{offset:0,limit:100,where:{address:{_eq:t.selectedAddress}}},{token:{ticker:!0,max_supply:!0,circulating_supply:!0,decimals:!0,transaction:{hash:!0}},amount:!0,date_updated:!0}]}).then(p=>t.holdings=p.token_holder)]),t.isLoading=!1});return function(d){return n.apply(this,arguments)}}())})()}customSort(t){var n,d;"minted"==t.field&&(null===(d=t.data)||void 0===d||d.sort((u,p)=>{let a=parseInt(u.circulating_supply)/parseInt(u.max_supply),r=parseInt(p.circulating_supply)/parseInt(p.max_supply),_=null;return _=null==a&&null!=r?-1:null!=a&&null==r?1:null==a&&null==r?0:a<r?-1:a>r?1:0,t.order*_}));null===(n=t.data)||void 0===n||n.sort((u,p)=>{let a=u[t.field],r=p[t.field],_=null;return _=null==a&&null!=r?-1:null!=a&&null==r?1:null==a&&null==r?0:"string"==typeof a&&"string"==typeof r?a.localeCompare(r):a<r?-1:a>r?1:0,t.order*_})}}(M=k).\u0275fac=function(t){return new(t||M)(e.Y36(P.gz),e.Y36(v.N))},M.\u0275cmp=e.Xpm({type:M,selectors:[["app-list-tokens"]],standalone:!0,features:[e.jDz],decls:20,vars:10,consts:[["fullscreen","true"],["size","12","offset","0","size-md","12","offset-md","0","size-md","10","offset-md","1","size-xl","8","offset-xl","2"],[1,"no-shadow"],["slot","start"],[1,"aligned","main-content"],[4,"ngIf"],["currentPageReportTemplate","Showing {first} to {last} of {totalRecords} tokens","styleClass","token-list",3,"customSort","value","tableStyle","paginator","rows","showCurrentPageReport","globalFilterFields","sortFunction"],["data",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],["type","indeterminate"],[1,"flex","search"],["fill","outline","label","Search","labelPlacement","stacked","placeholder","Name or ticker",3,"input"],["textInput",""],["slot","end","name","search-outline","aria-hidden","true"],["pSortableColumn","id","pFrozenColumn",""],["field","id"],["pSortableColumn","name"],["field","name"],["pSortableColumn","ticker","pFrozenColumn",""],["field","ticker"],["pSortableColumn","last_price_base"],["field","last_price_base"],["pSortableColumn","minted"],["field","minted"],[3,"routerLink"],[1,"token-logo"],[1,"image"],[3,"src",4,"ngIf"],["class","no-logo","src","../../assets/logo/a-white-on-transparent-250.png",4,"ngIf"],[3,"src"],["src","../../assets/logo/a-white-on-transparent-250.png",1,"no-logo"],["colspan","4"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-content",0)(1,"ion-grid")(2,"ion-row")(3,"ion-col",1)(4,"ion-header",2)(5,"ion-toolbar")(6,"ion-buttons",3),e._UZ(7,"ion-menu-button"),e.qZA(),e.TgZ(8,"ion-title"),e._uU(9," CFT-20 Tokens "),e.qZA()()()()(),e.TgZ(10,"ion-row")(11,"ion-col",1)(12,"div",4),e.YNc(13,A,2,0,"div",5),e.TgZ(14,"p-table",6,7),e.NdJ("sortFunction",function(u){return n.customSort(u)}),e.YNc(16,C,5,0,"ng-template",8)(17,U,18,0,"ng-template",9)(18,I,19,23,"ng-template",10)(19,y,3,0,"ng-template",11),e.qZA()()()()()()),2&t&&(e.xp6(13),e.Q6J("ngIf",n.isLoading),e.xp6(1),e.Q6J("customSort",!0)("value",n.tokens)("tableStyle",e.DdM(8,b))("paginator",!0)("rows",50)("showCurrentPageReport",!0)("globalFilterFields",e.DdM(9,R)))},dependencies:[i.Pc,i.Sm,i.wI,i.W2,i.jY,i.Gu,i.gu,i.pK,i.fG,i.X7,i.Nd,i.wd,i.sr,i.j9,i.YI,c.ez,c.O5,c.JJ,m.u5,E.u,P.rH,T.U$,T.iA,Z.jx,T.lQ,T.on,T.fz],styles:[".list[_ngcontent-%COMP%]{text-align:left}@media only screen and (max-width: 900px){.list[_ngcontent-%COMP%]{text-align:center}}.filter[_ngcontent-%COMP%]{margin-top:-15px;color:#888}.token-holdings-list[_ngcontent-%COMP%]{margin-left:0;max-width:600px;margin-bottom:50px}.token-holdings-list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{padding:5px;cursor:pointer;border-bottom:1px solid rgba(119,119,119,.2)}.token-holdings-list[_ngcontent-%COMP%]   .item.interactable[_ngcontent-%COMP%]{color:#ccc}.token-holdings-list[_ngcontent-%COMP%]   .item.interactable[_ngcontent-%COMP%]:hover{color:#57aaa7}.token-holdings-list[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{text-align:right}"]})}}]);