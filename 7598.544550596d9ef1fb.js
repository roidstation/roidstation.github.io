"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7598],{23443:(M,k,a)=>{a.d(k,{N:()=>m});var l,u=a(15861),p=a(54931),h=a(20553),r=a(19212);class m{constructor(){}fetchBaseTokenUSDPrice(){return(0,u.Z)(function*(){return(yield(0,p.qo)(h.N.api.endpoint)("query")({status:[{where:{chain_id:{_eq:h.N.chain.chainId}}},{base_token:!0,base_token_usd:!0}]})).status[0].base_token_usd||0})()}}(l=m).\u0275fac=function(b){return new(b||l)},l.\u0275prov=r.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})},77598:(M,k,a)=>{a.r(k),a.d(k,{TradeTokenPage:()=>P});var T,u=a(15861),p=a(96814),h=a(60095),r=a(93800),l=a(20553),m=a(54931),v=a(54481),b=a(81360),x=a(20766),C=a(35116),f=a(35768),y=a(22280),Z=a(241),e=a(19212),D=a(14391),E=a(41767),w=a(98065),L=a(23443),I=a(85219);function S(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"ion-content",12),e._UZ(1,"br")(2,"br")(3,"br")(4,"br")(5,"br"),e.TgZ(6,"h2",13),e._uU(7),e.qZA(),e._UZ(8,"br")(9,"br")(10,"br")(11,"br")(12,"br")(13,"br")(14,"br"),e.TgZ(15,"ion-button",14),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.listingalreadycanceledorfilled=!1)}),e._uU(16,"Okay"),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(7),e.Oqu(t.listingalreadycanceledorfilled)}}function q(n,o){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Oqu(t.token.ticker)}}function R(n,o){1&n&&(e.TgZ(0,"div",15),e._UZ(1,"ion-progress-bar",16),e.TgZ(2,"p"),e._uU(3," Loading market... "),e.qZA()())}function N(n,o){if(1&n&&(e.TgZ(0,"tr")(1,"th",32),e._uU(2,"Listing # "),e._UZ(3,"p-sortIcon",33),e.qZA(),e.TgZ(4,"th",34),e._uU(5,"ATOM per Token "),e._UZ(6,"p-sortIcon",35),e.qZA(),e.TgZ(7,"th",36),e._uU(8),e._UZ(9,"p-sortIcon",37),e.qZA(),e.TgZ(10,"th",38),e._uU(11,"Total ATOM "),e._UZ(12,"p-sortIcon",39),e.qZA(),e.TgZ(13,"th",40),e._uU(14,"Seller"),e._UZ(15,"p-sortIcon",41),e.qZA(),e.TgZ(16,"th",42),e._uU(17,"Listed Date"),e._UZ(18,"p-sortIcon",43),e.qZA(),e.TgZ(19,"th"),e._uU(20,"Transaction"),e.qZA(),e.TgZ(21,"th"),e._uU(22,"\xa0"),e.qZA(),e.TgZ(23,"th"),e._uU(24,"\xa0"),e.qZA()()),2&n){const t=e.oxw(3);e.xp6(8),e.hij("",t.token.ticker," Tokens ")}}function W(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"ion-button",51),e.NdJ("click",function(){e.CHM(t);const s=e.oxw().$implicit,c=e.oxw(3);return e.KtG(c.buy(s.id))}),e._uU(1,"Buy"),e.qZA()}}function K(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"ion-button",52),e.NdJ("click",function(){e.CHM(t);const s=e.oxw().$implicit,c=e.oxw(3);return e.KtG(c.cancel(s.id))}),e._uU(1,"Cancel"),e.qZA()}}function B(n,o){1&n&&(e.TgZ(0,"ion-text",53),e._uU(1,"Warning:"),e._UZ(2,"br"),e._uU(3,"Recent listing"),e.qZA())}function z(n,o){if(1&n&&(e.TgZ(0,"tr",44)(1,"td",45),e._uU(2),e.qZA(),e.TgZ(3,"td",46),e._uU(4),e.ALo(5,"number"),e.ALo(6,"tokenDecimals"),e.ALo(7,"number"),e.ALo(8,"tokenDecimals"),e.qZA(),e.TgZ(9,"td",46),e._uU(10),e.ALo(11,"number"),e.ALo(12,"tokenDecimals"),e.qZA(),e.TgZ(13,"td",46),e._uU(14),e.ALo(15,"number"),e.ALo(16,"tokenDecimals"),e.ALo(17,"number"),e.ALo(18,"tokenDecimals"),e.qZA(),e.TgZ(19,"td",46)(20,"a",25),e._uU(21),e.ALo(22,"async"),e.ALo(23,"shortenAddress"),e.qZA()(),e.TgZ(24,"td",46),e._uU(25),e.ALo(26,"date"),e.qZA(),e.TgZ(27,"td",46)(28,"a",25),e._uU(29,"Link"),e.qZA()(),e.TgZ(30,"td",47),e.YNc(31,W,2,0,"ion-button",48)(32,K,2,0,"ion-button",49),e.qZA(),e.TgZ(33,"td",46),e.YNc(34,B,4,0,"ion-text",50),e.qZA()()),2&n){const t=o.$implicit,i=e.oxw(3);e.xp6(2),e.Oqu(t.id),e.xp6(2),e.AsE("",e.xi3(5,13,e.xi3(6,16,t.ppt,6),"1.6-6")," ($",e.xi3(7,19,e.xi3(8,22,t.ppt*i.baseTokenUSD,6),"1.6-6"),")"),e.xp6(6),e.Oqu(e.xi3(11,25,e.xi3(12,28,t.amount,i.token.decimals),"1.6-6")),e.xp6(4),e.AsE("",e.xi3(15,31,e.xi3(16,34,t.total,6),"1.6-6")," ($",e.xi3(17,37,e.xi3(18,40,t.total*i.baseTokenUSD,6),"1.6-6"),")"),e.xp6(6),e.Q6J("href","/app/wallet/"+t.seller_address,e.LSH),e.xp6(1),e.Oqu(e.lcZ(22,43,e.lcZ(23,45,t.seller_address))),e.xp6(4),e.Oqu(e.xi3(26,47,t.date_created,"yyyy-MM-dd HH:mm:ss")),e.xp6(3),e.MGl("href","https://www.mintscan.io/cosmos/tx/",t.transaction.hash,"",e.LSH),e.xp6(3),e.Q6J("ngIf",t.seller_address!=i.walletAddress),e.xp6(1),e.Q6J("ngIf",t.seller_address==i.walletAddress),e.xp6(2),e.Q6J("ngIf",i.recent(t.date_created))}}function J(n,o){1&n&&(e.TgZ(0,"tr")(1,"td",54),e._uU(2,"No listings found"),e.qZA()())}const F=()=>["name","ticker"];function Y(n,o){if(1&n&&(e.TgZ(0,"p-table",27,28),e.YNc(2,N,25,1,"ng-template",29)(3,z,35,50,"ng-template",30)(4,J,3,0,"ng-template",31),e.qZA()),2&n){const t=e.oxw(2);e.Q6J("value",t.positions)("paginator",!0)("rows",100)("showCurrentPageReport",!0)("globalFilterFields",e.DdM(6,F))("defaultSortOrder",1)}}function Q(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",17)(1,"ion-grid")(2,"ion-row")(3,"ion-col",18)(4,"div",19)(5,"span",20),e._uU(6," ATOM / USD "),e.qZA(),e.TgZ(7,"span",21),e._uU(8),e.ALo(9,"number"),e.qZA()()(),e.TgZ(10,"ion-col",18)(11,"div",19)(12,"span",20),e._uU(13),e.qZA(),e.TgZ(14,"span",21),e._uU(15),e.ALo(16,"tokenDecimals"),e.ALo(17,"number"),e.ALo(18,"tokenDecimals"),e.qZA()()(),e.TgZ(19,"ion-col",18)(20,"div",19)(21,"span",20),e._uU(22," 24H Volume "),e.qZA(),e.TgZ(23,"span",21),e._uU(24),e.ALo(25,"number"),e.ALo(26,"tokenDecimals"),e.ALo(27,"number"),e.ALo(28,"tokenDecimals"),e.qZA()()()(),e.TgZ(29,"ion-row")(30,"ion-col",22)(31,"ion-button",23),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.listSale())}),e._uU(32),e.qZA()()()(),e.TgZ(33,"h1"),e._uU(34,"This marketplace is deprecated, and has risks of "),e.TgZ(35,"a",24),e._uU(36,"double buys"),e.qZA(),e._uU(37,". Use it to handle old listings, but use "),e.TgZ(38,"a",25),e._uU(39,"the new marketplace protocol"),e.qZA(),e._uU(40," for future listings."),e.qZA(),e.YNc(41,Y,5,7,"p-table",26),e.qZA()}if(2&n){const t=e.oxw();e.xp6(8),e.hij(" $",e.xi3(9,9,t.baseTokenUSD,"1.2-6")," "),e.xp6(5),e.hij(" ",t.token.ticker," / ATOM "),e.xp6(2),e.AsE(" ",e.xi3(16,12,t.token.last_price_base,t.token.decimals)," ATOM ($",e.xi3(17,15,t.baseTokenUSD*e.xi3(18,18,t.token.last_price_base,t.token.decimals),"1.2-6"),") "),e.xp6(9),e.AsE(" ",e.xi3(25,21,e.xi3(26,24,t.token.volume_24_base,6),"1.2-6")," ATOM ($",e.xi3(27,27,t.baseTokenUSD*e.xi3(28,30,t.token.volume_24_base,6),"1.2-6"),") "),e.xp6(8),e.hij("Sell ",t.token.ticker," tokens"),e.xp6(6),e.Q6J("href","/app/market/"+t.token.ticker,e.LSH),e.xp6(3),e.Q6J("ngIf","buy"==t.selectedSection)}}class P{constructor(o,t,i,s,c,_){this.activatedRoute=o,this.protocolService=t,this.modalCtrl=i,this.alertController=s,this.walletService=c,this.priceService=_,this.isLoading=!1,this.explorerTxUrl=l.N.api.explorer,this.tokenIsLaunched=!1,this.baseTokenUSD=0,this.walletAddress="",this.selectedSection="buy",this.listingalreadycanceledorfilled=!1,this.tokenLaunchDate=new Date}sectionChanged(o){this.selectedSection=o.detail.value}ngOnInit(){var o=this;return(0,u.Z)(function*(){o.isLoading=!0,(yield o.walletService.isConnected())&&(o.walletAddress=(yield o.walletService.getAccount()).address);const i=(0,m.qo)(l.N.api.endpoint),s=yield i("query")({token:[{where:{ticker:{_eq:o.activatedRoute.snapshot.params.quote.toUpperCase()}}},{id:!0,height:!0,transaction:{hash:!0},creator:!0,current_owner:!0,name:!0,ticker:!0,decimals:!0,max_supply:!0,per_mint_limit:!0,launch_timestamp:!0,content_path:!0,content_size_bytes:!0,circulating_supply:!0,last_price_base:!0,volume_24_base:!0,date_created:!0}]});o.token=s.token[0];const c=function(){var d=(0,u.Z)(function*(){const A=yield i("query")({token_open_position:[{where:{_and:[{token_id:{_eq:o.token.id}},{seller_address:{}},{is_cancelled:{_eq:!1}},{is_filled:{_eq:!1}}]}},{id:!0,token:{ticker:!0},seller_address:!0,ppt:!0,amount:!0,total:!0,is_cancelled:!1,is_filled:!1,date_created:!0,transaction:{hash:!0}}]});o.positions=A.token_open_position.map(g=>({...g,date_created:g.date_created+"Z"}))});return function(){return d.apply(this,arguments)}}();yield c(),setInterval(c,5e3);const _=(0,m.w0)(l.N.api.wss);_("subscription")({status:[{where:{chain_id:{_eq:l.N.chain.chainId}}},{base_token:!0,base_token_usd:!0}]}).on(({status:d})=>{o.baseTokenUSD=d[0].base_token_usd}),_("subscription")({token:[{where:{ticker:{_eq:o.activatedRoute.snapshot.params.quote.toUpperCase()}}},{id:!0,name:!0,ticker:!0,decimals:!0,content_path:!0,last_price_base:!0,volume_24_base:!0}]}).on(({token:d})=>{o.token=d[0]}),o.isLoading=!1})()}buy(o){var t=this;return(0,u.Z)(function*(){var i,s;const _=yield(0,m.qo)(l.N.api.endpoint)("query")({token_open_position:[{where:{id:{_eq:o}}},{id:!0,token:{ticker:!0},seller_address:!0,ppt:!0,amount:!0,total:!0,is_cancelled:!0,is_filled:!0}]}),d=null==_||null===(i=_.token_open_position)||void 0===i||null===(i=i[0])||void 0===i?void 0:i.is_cancelled,A=null==_||null===(s=_.token_open_position)||void 0===s||null===(s=s[0])||void 0===s?void 0:s.is_filled;if(d||A)return void(t.listingalreadycanceledorfilled="This listing has already been "+(d?"cancelled":"filled")+". Aborting transaction.");if(!t.walletService.hasWallet())return void(yield t.modalCtrl.create({keyboardClose:!0,backdropDismiss:!0,component:Z.f,cssClass:"wallet-required-modal"})).present();const g=_.token_open_position[0].total,H={typeUrl:"/cosmos.bank.v1beta1.MsgSend",value:C.MsgSend.encode({fromAddress:(yield t.walletService.getAccount()).address,toAddress:_.token_open_position[0].seller_address,amount:[{denom:"uatom",amount:g.toString()}]}).finish()},$={"@type":"/cosmos.bank.v1beta1.MsgSend",from_address:(yield t.walletService.getAccount()).address,to_address:_.token_open_position[0].seller_address,amount:[{denom:"uatom",amount:g.toString()}]};let U=l.N.fees.protocol.cft20.buy.amount;if("dynamic-percent"==l.N.fees.protocol.cft20.buy.type){const O=parseFloat(l.N.fees.protocol.cft20.buy.amount);U=(parseInt(g.toString())*O).toString()}const j=new Map([["tic",t.token.ticker],["ord",o]]),G=t.protocolService.buildURN(l.N.chain.chainId,"buy",j);(yield t.modalCtrl.create({keyboardClose:!0,backdropDismiss:!1,component:x.l,componentProps:{urn:G,metadata:null,data:null,routerLink:["/app/wallet/token",t.token.ticker],resultCTA:"View transaction",metaprotocol:"cft20",metaprotocolAction:"buy",messages:[H],messagesJSON:[$],overrideFee:U}})).present()})()}cancel(o){var t=this;return(0,u.Z)(function*(){if(!t.walletService.hasWallet())return void(yield t.modalCtrl.create({keyboardClose:!0,backdropDismiss:!0,component:Z.f,cssClass:"wallet-required-modal"})).present();const i=new Map([["tic",t.token.ticker],["ord",o]]),s=t.protocolService.buildURN(l.N.chain.chainId,"delist",i);(yield t.modalCtrl.create({keyboardClose:!0,backdropDismiss:!1,component:x.l,componentProps:{urn:s,metadata:null,data:null,routerLink:["/app/wallet/token",t.token.ticker],resultCTA:"View transaction",metaprotocol:"cft20",metaprotocolAction:"delist"}})).present()})()}recent(o){return new Date(o)>new Date((new Date).getTime()-72e3)}listSale(){var o=this;return(0,u.Z)(function*(){(yield o.modalCtrl.create({keyboardClose:!0,backdropDismiss:!0,component:y.t,componentProps:{ticker:o.token.ticker}})).present()})()}}(T=P).\u0275fac=function(o){return new(o||T)(e.Y36(D.gz),e.Y36(E._),e.Y36(r.IN),e.Y36(r.Br),e.Y36(w.X),e.Y36(L.N))},T.\u0275cmp=e.Xpm({type:T,selectors:[["app-trade-token"]],standalone:!0,features:[e.jDz],decls:19,vars:4,consts:[["fullscreen","true"],[3,"isOpen"],["style","padding:50px"],["size","12","offset","0","size-md","12","offset-md","0","size-md","10","offset-md","1","size-xl","10","offset-xl","1"],[1,"no-shadow"],["slot","start"],["defaultHref","/app/markets/v1"],[4,"ngIf"],["size","12","offset","0","size-md","12","offset-md","0","size-md","10","offset-md","1","size-xl","10","offset-xl","1",1,"main-content"],["class","loading p-4",4,"ngIf"],["class","aligned",4,"ngIf"],[2,"height","100px"],[2,"padding","50px","--background","hsla(0, 0%, 100%, .05) !important","background-color","hsla(0, 0%, 100%, .05) !important","backdrop-filter","blur(50px) !important"],[2,"margin","0px 40px 0 40px"],["color","primary",2,"display","block","margin","auto","width","150px","height","60px","font-size","23px",3,"click"],[1,"loading","p-4"],["type","indeterminate"],[1,"aligned"],["size","12","size-lg","4"],[1,"token-stats"],[1,"key"],[1,"value","ms-3"],["size","12",1,"text-end"],["color","primary","fill","outline",3,"click"],["href","https://medium.com/@asteroidprotocol/asteroid-market-double-buy-solution-1a1312216f37"],[3,"href"],["currentPageReportTemplate","Showing {first} to {last} of {totalRecords} listings","styleClass","token-list","sortField","ppt",3,"value","paginator","rows","showCurrentPageReport","globalFilterFields","defaultSortOrder",4,"ngIf"],["currentPageReportTemplate","Showing {first} to {last} of {totalRecords} listings","styleClass","token-list","sortField","ppt",3,"value","paginator","rows","showCurrentPageReport","globalFilterFields","defaultSortOrder"],["data",""],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],["pSortableColumn","id","pFrozenColumn",""],["field","id"],["pSortableColumn","ppt"],["field","ppt"],["pSortableColumn","amount"],["field","amount"],["pSortableColumn","total"],["field","total"],["pSortableColumn","seller_address"],["field","seller_address"],["pSortableColumn","date_created"],["field","date_created"],[1,"no-click"],["pFrozenColumn",""],[1,"mono"],[1,"text-end"],["fill","outline","color","success",3,"click",4,"ngIf"],["fill","outline","color","warning",3,"click",4,"ngIf"],["color","warning",4,"ngIf"],["fill","outline","color","success",3,"click"],["fill","outline","color","warning",3,"click"],["color","warning"],["colspan","4"]],template:function(o,t){1&o&&(e.TgZ(0,"ion-content",0)(1,"ion-modal",1),e.YNc(2,S,17,1,"ng-template",2),e.qZA(),e.TgZ(3,"ion-grid")(4,"ion-row")(5,"ion-col",3)(6,"ion-header",4)(7,"ion-toolbar")(8,"ion-buttons",5),e._UZ(9,"ion-menu-button")(10,"ion-back-button",6),e.qZA(),e.TgZ(11,"ion-title"),e.YNc(12,q,2,1,"span",7),e._uU(13," / ATOM Market "),e.qZA()()()()(),e.TgZ(14,"ion-row")(15,"ion-col",8),e.YNc(16,R,4,0,"div",9)(17,Q,42,33,"div",10),e._UZ(18,"div",11),e.qZA()()()()),2&o&&(e.xp6(1),e.Q6J("isOpen",t.listingalreadycanceledorfilled),e.xp6(11),e.Q6J("ngIf",!t.isLoading),e.xp6(4),e.Q6J("ngIf",t.isLoading),e.xp6(1),e.Q6J("ngIf",!t.isLoading))},dependencies:[r.Pc,r.YG,r.Sm,r.wI,r.W2,r.jY,r.Gu,r.fG,r.X7,r.Nd,r.yW,r.wd,r.sr,r.ki,r.oU,p.ez,p.O5,p.Ov,p.JJ,p.uU,h.u5,v.x,b.u,f.U$,f.iA,I.jx,f.lQ,f.on,f.fz],styles:["h1[_ngcontent-%COMP%]{font-size:36px}.meta[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:14px;color:#ddd;font-weight:600;display:block}.meta[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:14px;color:#fff;font-weight:400;display:block}.meta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--color-teal)}.token-holdings-list[_ngcontent-%COMP%]{margin-left:0;margin-bottom:50px}.token-holdings-list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{padding:5px;cursor:pointer;border-bottom:1px solid rgba(119,119,119,.2)}.token-holdings-list[_ngcontent-%COMP%]   .item.interactable[_ngcontent-%COMP%]{color:#ccc}.token-holdings-list[_ngcontent-%COMP%]   .item.interactable[_ngcontent-%COMP%]:hover{color:#57aaa7}.token-holdings-list[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{text-align:right}.token-stats[_ngcontent-%COMP%]{background-color:#0003;border-radius:10px;padding:10px}.token-stats[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]{font-weight:600;color:#ffffffe6}.token-stats[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{color:#fff9}"]})}}]);