"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8690],{81360:(P,d,i)=>{i.d(d,{u:()=>a});var r,g=i(19212);class a{transform(s,p){return s/Math.pow(10,p)}}(r=a).\u0275fac=function(s){return new(s||r)},r.\u0275pipe=g.Yjl({name:"tokenDecimals",type:r,pure:!0,standalone:!0})},23443:(P,d,i)=>{i.d(d,{N:()=>p});var s,g=i(15861),r=i(54931),a=i(20553),u=i(19212);class p{constructor(){}fetchBaseTokenUSDPrice(){return(0,g.Z)(function*(){return(yield(0,r.qo)(a.N.api.endpoint)("query")({status:[{where:{chain_id:{_eq:a.N.chain.chainId}}},{base_token:!0,base_token_usd:!0}]})).status[0].base_token_usd||0})()}}(s=p).\u0275fac=function(A){return new(A||s)},s.\u0275prov=u.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})},98690:(P,d,i)=>{i.r(d),i.d(d,{WalletPage:()=>C});var h,g=i(15861),r=i(96814),a=i(94583),u=i(54931),s=i(20553),p=i(71255),T=i(10044),A=i(24465),k=i(81360),w=i(14391),U=i(84749),M=i(15075),m=i(35768),L=i(54481),q=i(41342),J=i(29569),t=i(19212);class y{transform(o){return!o||o.includes("...")?"":o}}(h=y).\u0275fac=function(o){return new(o||h)},h.\u0275pipe=t.Yjl({name:"shortenAddressHidden",type:h,pure:!0,standalone:!0});var f,I=i(98065),Q=i(23443),D=i(85219);function W(n,o){1&n&&(t.TgZ(0,"ion-grid")(1,"ion-row")(2,"ion-col")(3,"div",2),t._UZ(4,"ion-progress-bar",3),t.TgZ(5,"p"),t._uU(6," Loading wallet... "),t.qZA()()()()())}function S(n,o){1&n&&(t.TgZ(0,"ion-grid")(1,"ion-row")(2,"ion-col"),t._UZ(3,"app-dashboard"),t.qZA()()())}const v=()=>({path:"../assets/lottie/ghost.json"}),b=()=>["/app/create/token"],O=()=>["/app/markets"];function z(n,o){1&n&&(t.TgZ(0,"ion-col",25)(1,"ion-grid")(2,"ion-row")(3,"ion-col",15)(4,"div",26)(5,"div",27),t._UZ(6,"ng-lottie",28),t.qZA()(),t.TgZ(7,"div",29),t._uU(8," it's a bit empty here... "),t.qZA()()(),t.TgZ(9,"ion-row")(10,"ion-col",30)(11,"ion-button",31)(12,"ion-label"),t._uU(13,"Create a token"),t.qZA()(),t.TgZ(14,"ion-button",32)(15,"ion-label"),t._uU(16,"Buy tokens"),t.qZA()()()()()()),2&n&&(t.xp6(6),t.Q6J("options",t.DdM(3,v)),t.xp6(5),t.Q6J("routerLink",t.DdM(4,b)),t.xp6(3),t.Q6J("routerLink",t.DdM(5,O)))}function E(n,o){1&n&&(t.TgZ(0,"tr")(1,"th"),t._uU(2,"\xa0"),t.qZA(),t.TgZ(3,"th",37),t._uU(4,"Ticker "),t._UZ(5,"p-sortIcon",38),t.qZA(),t.TgZ(6,"th",39),t._uU(7,"Price "),t._UZ(8,"p-sortIcon",40),t.qZA(),t.TgZ(9,"th",41),t._uU(10,"Balance "),t._UZ(11,"p-sortIcon",42),t.qZA()())}function N(n,o){if(1&n&&t._UZ(0,"img",49),2&n){const e=t.oxw().$implicit;t.Q6J("src",e.token.content_path,t.LSH)}}function Y(n,o){1&n&&t._UZ(0,"img",50)}const R=n=>["/app/wallet/token",n];function $(n,o){if(1&n&&(t.TgZ(0,"tr",43)(1,"td",44)(2,"div",45),t.YNc(3,N,1,1,"img",46)(4,Y,1,0,"img",47),t.qZA()(),t.TgZ(5,"td",48),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"tokenDecimals"),t.ALo(10,"number"),t.ALo(11,"tokenDecimals"),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.ALo(14,"number"),t.ALo(15,"tokenDecimals"),t.ALo(16,"number"),t.ALo(17,"tokenDecimals"),t.ALo(18,"tokenDecimals"),t.qZA()()),2&n){const e=o.$implicit,c=t.oxw(4);t.Q6J("routerLink",t.VKq(32,R,e.token.ticker)),t.xp6(3),t.Q6J("ngIf",e.token.content_path),t.xp6(1),t.Q6J("ngIf",!e.token.content_path),t.xp6(2),t.Oqu(e.token.ticker),t.xp6(2),t.AsE("",t.xi3(9,8,e.token.last_price_base,e.token.decimals)," ATOM ($",t.xi3(10,11,c.baseTokenPrice*t.xi3(11,14,e.token.last_price_base,e.token.decimals),"1.2-6"),")"),t.xp6(5),t.AsE("",t.xi3(14,17,t.xi3(15,20,e.amount,e.token.decimals),"1.2-6")," ($",t.xi3(16,23,t.xi3(17,26,e.amount,e.token.decimals)*t.xi3(18,29,c.baseTokenPrice*e.token.last_price_base,e.token.decimals),"1.2-2"),") ")}}const B=()=>({"min-width":"40rem"});function F(n,o){if(1&n&&(t.TgZ(0,"ion-col",15)(1,"p-table",33,34),t.YNc(3,E,12,0,"ng-template",35)(4,$,19,34,"ng-template",36),t.qZA()()),2&n){const e=t.oxw(3);t.xp6(1),t.Q6J("value",e.holdings)("tableStyle",t.DdM(5,B))("paginator",!0)("rows",100)("showCurrentPageReport",!0)}}function K(n,o){if(1&n&&(t.TgZ(0,"ion-row",22),t.YNc(1,z,17,6,"ion-col",23)(2,F,5,6,"ion-col",24),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",0==e.holdings.length),t.xp6(1),t.Q6J("ngIf",e.holdings.length>0)}}const j=()=>["/app/create/inscription"];function H(n,o){1&n&&(t.TgZ(0,"ion-col",25)(1,"ion-grid")(2,"ion-row")(3,"ion-col",15)(4,"div",26)(5,"div",27),t._UZ(6,"ng-lottie",28),t.qZA()(),t.TgZ(7,"div",29),t._uU(8," it's a bit empty here... "),t.qZA()()(),t.TgZ(9,"ion-row")(10,"ion-col",30)(11,"ion-button",31)(12,"ion-label"),t._uU(13,"Create inscription"),t.qZA()()()()()()),2&n&&(t.xp6(6),t.Q6J("options",t.DdM(2,v)),t.xp6(5),t.Q6J("routerLink",t.DdM(3,j)))}const G=n=>["/app/inscription",n];function V(n,o){if(1&n&&(t.TgZ(0,"a",53)(1,"div",54),t._UZ(2,"app-generic-preview",55),t.qZA(),t.TgZ(3,"h4"),t._uU(4),t.qZA(),t.TgZ(5,"div",56)(6,"div",57)(7,"span"),t._uU(8),t.qZA()(),t.TgZ(9,"div",57)(10,"span"),t._uU(11),t.ALo(12,"humanType"),t.ALo(13,"number"),t.qZA()(),t.TgZ(14,"div",57)(15,"span"),t._uU(16),t.ALo(17,"dateAgo"),t.qZA()()()()),2&n){const e=o.$implicit;t.Q6J("routerLink",t.VKq(15,G,e.transaction.hash)),t.xp6(2),t.Q6J("mime",e.mime)("contentPath",e.content_path),t.xp6(2),t.Oqu(e.name),t.xp6(4),t.hij("#",e.id-1,""),t.xp6(3),t.AsE("",t.lcZ(12,8,e.mime)," (",t.xi3(13,10,e.content_size_bytes/1024,"1.0-0")," kb)"),t.xp6(5),t.Oqu(t.lcZ(17,13,e.date_created))}}function X(n,o){if(1&n&&(t.TgZ(0,"ion-col",15),t.YNc(1,V,18,17,"a",52),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.Q6J("ngForOf",e.inscriptions)}}function tt(n,o){if(1&n&&(t.TgZ(0,"ion-row",51),t.YNc(1,H,14,4,"ion-col",23)(2,X,2,1,"ion-col",24),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",0==e.inscriptions.length),t.xp6(1),t.Q6J("ngIf",e.inscriptions.length>0)}}function et(n,o){1&n&&(t.TgZ(0,"ion-col",25)(1,"ion-grid")(2,"ion-row")(3,"ion-col",15)(4,"div",26)(5,"div",27),t._UZ(6,"ng-lottie",28),t.qZA()(),t.TgZ(7,"div",29),t._uU(8," it's a bit empty here... "),t.qZA()()(),t.TgZ(9,"ion-row")(10,"ion-col",30)(11,"ion-button",31)(12,"ion-label"),t._uU(13,"Create a token"),t.qZA()(),t.TgZ(14,"ion-button",32)(15,"ion-label"),t._uU(16,"Buy tokens"),t.qZA()()()()()()),2&n&&(t.xp6(6),t.Q6J("options",t.DdM(3,v)),t.xp6(5),t.Q6J("routerLink",t.DdM(4,b)),t.xp6(3),t.Q6J("routerLink",t.DdM(5,O)))}function nt(n,o){if(1&n&&t._UZ(0,"img",49),2&n){const e=t.oxw().$implicit;t.Q6J("src",e.content_path,t.LSH)}}function ot(n,o){1&n&&t._UZ(0,"img",50)}const it=n=>["/app/token",n];function at(n,o){if(1&n&&(t.TgZ(0,"a",53)(1,"div",54)(2,"div",45),t.YNc(3,nt,1,1,"img",46)(4,ot,1,0,"img",47),t.qZA()(),t.TgZ(5,"h4"),t._uU(6),t.qZA(),t.TgZ(7,"div",56)(8,"div",57)(9,"span"),t._uU(10),t.qZA()(),t.TgZ(11,"div",57)(12,"span"),t._uU(13),t.ALo(14,"humanSupply"),t.ALo(15,"tokenDecimals"),t.qZA()(),t.TgZ(16,"div",57)(17,"span"),t._uU(18),t.ALo(19,"dateAgo"),t.qZA()()()()),2&n){const e=o.$implicit;t.Q6J("routerLink",t.VKq(15,it,e.ticker)),t.xp6(3),t.Q6J("ngIf",e.content_path),t.xp6(1),t.Q6J("ngIf",!e.content_path),t.xp6(2),t.AsE("#",e.id-1," ",e.ticker,""),t.xp6(4),t.Oqu(e.name),t.xp6(3),t.hij("Max Supply: ",t.lcZ(14,8,t.xi3(15,10,e.max_supply,e.decimals)),""),t.xp6(5),t.Oqu(t.lcZ(19,13,e.date_created))}}function rt(n,o){if(1&n&&(t.TgZ(0,"ion-col",15),t.YNc(1,at,20,17,"a",52),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.Q6J("ngForOf",e.tokens)}}function st(n,o){if(1&n&&(t.TgZ(0,"ion-row",51),t.YNc(1,et,17,6,"ion-col",23)(2,rt,2,1,"ion-col",24),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",0==e.tokens.length),t.xp6(1),t.Q6J("ngIf",e.tokens.length>0)}}function ct(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"ion-grid")(1,"ion-row"),t._UZ(2,"ion-col"),t.TgZ(3,"ion-header",4)(4,"ion-toolbar")(5,"ion-buttons",5),t._UZ(6,"ion-menu-button"),t.qZA(),t._UZ(7,"ion-title"),t.qZA()()(),t.TgZ(8,"ion-row")(9,"ion-col",6)(10,"div",7)(11,"ion-grid")(12,"ion-row")(13,"ion-col",8)(14,"div",9)(15,"ion-avatar"),t._UZ(16,"img",10),t.qZA(),t.TgZ(17,"div",11)(18,"ion-label"),t._uU(19),t.ALo(20,"shortenAddressHidden"),t.ALo(21,"async"),t.ALo(22,"shortenAddress"),t.qZA()(),t.TgZ(23,"ion-chip",12),t._UZ(24,"ion-icon",13),t.TgZ(25,"ion-label"),t._uU(26),t.qZA()(),t.TgZ(27,"ion-chip",14),t._UZ(28,"ion-icon",13),t.TgZ(29,"ion-label"),t._uU(30),t.ALo(31,"async"),t.ALo(32,"shortenAddress"),t.qZA()()()()(),t.TgZ(33,"ion-row")(34,"ion-col",15)(35,"ion-segment",16),t.NdJ("ionChange",function(l){t.CHM(e);const x=t.oxw();return t.KtG(x.sectionChanged(l))}),t.TgZ(36,"ion-segment-button",17)(37,"ion-label"),t._uU(38,"Tokens"),t.qZA()(),t.TgZ(39,"ion-segment-button",18)(40,"ion-label"),t._uU(41,"Inscriptions"),t.qZA()(),t.TgZ(42,"ion-segment-button",19)(43,"ion-label"),t._uU(44,"Deployed"),t.qZA()()()()(),t.YNc(45,K,3,2,"ion-row",20)(46,tt,3,2,"ion-row",21)(47,st,3,2,"ion-row",21),t.qZA()()()()()}if(2&n){const e=t.oxw();t.xp6(19),t.Oqu(t.lcZ(20,8,t.lcZ(21,10,t.lcZ(22,12,e.selectedAddress)))),t.xp6(4),t.Q6J("outline",!0),t.xp6(3),t.Oqu(e.selectedAddress),t.xp6(1),t.Q6J("outline",!0),t.xp6(3),t.Oqu(t.lcZ(31,14,t.lcZ(32,16,e.selectedAddress))),t.xp6(15),t.Q6J("ngIf",!e.isLoading&&"tokens"==e.selectedSection),t.xp6(1),t.Q6J("ngIf",!e.isLoading&&"inscriptions"==e.selectedSection),t.xp6(1),t.Q6J("ngIf",!e.isLoading&&"deployed"==e.selectedSection)}}class C{constructor(o,e,c){this.activatedRoute=o,this.walletService=e,this.priceService=c,this.selectedSection="tokens",this.isLoading=!0,this.selectedAddress="",this.tokens=null,this.holdings=null,this.inscriptions=null,this.isWalletConnected=!1,this.baseTokenPrice=0}ngOnInit(){var o=this;return(0,g.Z)(function*(){const e=localStorage.getItem(s.N.storage.connectedWalletKey);if(e){JSON.parse(e);try{const l=yield o.walletService.getAccount();l&&(o.isWalletConnected=!0,o.connectedAccount=l)}catch{localStorage.clear(),o.isWalletConnected=!1,o.selectedAddress=""}}o.activatedRoute.params.subscribe(function(){var c=(0,g.Z)(function*(l){var x;o.selectedAddress=l.address||(null===(x=o.connectedAccount)||void 0===x?void 0:x.address),o.selectedSection=o.activatedRoute.snapshot.queryParams.section||"tokens";try{const Z=(0,u.qo)(s.N.api.endpoint);yield Promise.all([o.priceService.fetchBaseTokenUSDPrice().then(_=>o.baseTokenPrice=_),Z("query")({token:[{offset:0,limit:500,order_by:[{date_created:"desc"}],where:{current_owner:{_eq:o.selectedAddress}}},{id:!0,transaction:{hash:!0},current_owner:!0,content_path:!0,name:!0,ticker:!0,max_supply:!0,decimals:!0,launch_timestamp:!0,last_price_base:!0,date_created:!0}]}).then(_=>{o.tokens=_.token}),Z("query")({token_holder:[{offset:0,limit:500,where:{address:{_eq:o.selectedAddress}}},{token:{ticker:!0,content_path:!0,max_supply:!0,circulating_supply:!0,decimals:!0,last_price_base:!0,transaction:{hash:!0}},amount:!0,date_updated:!0}]}).then(_=>o.holdings=_.token_holder),Z("query")({inscription:[{offset:0,limit:500,order_by:[{date_created:"desc"}],where:{current_owner:{_eq:o.selectedAddress}}},{id:!0,transaction:{hash:!0},current_owner:!0,content_path:!0,content_size_bytes:!0,date_created:!0,__alias:{name:{metadata:[{path:"$.metadata.name"},!0]},description:{metadata:[{path:"$.metadata.description"},!0]},mime:{metadata:[{path:"$.metadata.mime"},!0]}}}]}).then(_=>o.inscriptions=_.inscription)])}catch(Z){console.log(Z)}o.isLoading=!1});return function(l){return c.apply(this,arguments)}}())})()}sectionChanged(o){this.selectedSection=o.detail.value}}(f=C).\u0275fac=function(o){return new(o||f)(t.Y36(w.gz),t.Y36(I.X),t.Y36(Q.N))},f.\u0275cmp=t.Xpm({type:f,selectors:[["app-wallet"]],standalone:!0,features:[t.jDz],decls:4,vars:3,consts:[["fullscreen","true"],[4,"ngIf"],[1,"loading","p-2","mx-auto"],["type","indeterminate"],[1,"no-shadow"],["slot","start"],["size","12","offset","0","size-md","12","offset-md","0","size-md","10","offset-md","1","size-xl","8","offset-xl","2",1,"main-content"],[1,"aligned"],["offset-xl","1","size-xl","10","size","12",1,"text-center"],[1,"avatar","off-page"],["alt","","src","../../assets/logo/a-white-on-transparent-500.png"],[1,"stargaze-name","mb-3"],["color","warning",1,"address",3,"outline"],["name","key-sharp","color","warning"],["color","warning",1,"address-short",3,"outline"],["size","12"],["value","tokens","color","primary",3,"ionChange"],["value","tokens"],["value","inscriptions"],["value","deployed"],["class","p-4",4,"ngIf"],["class","p-4 text-center",4,"ngIf"],[1,"p-4"],["size","12","class","mx-auto mb-4",4,"ngIf"],["size","12",4,"ngIf"],["size","12",1,"mx-auto","mb-4"],[1,"animation-ghost","mx-auto"],[1,"ghost"],[3,"options"],[1,"title","text-center","p-3"],[1,"text-center"],["fill","outline","color","primary",1,"me-2",3,"routerLink"],["fill","outline","color","primary",3,"routerLink"],["currentPageReportTemplate","Showing {first} to {last} of {totalRecords} tokens","styleClass","token-list",3,"value","tableStyle","paginator","rows","showCurrentPageReport"],["data",""],["pTemplate","header"],["pTemplate","body"],["pSortableColumn","token.ticker","pFrozenColumn",""],["field","token.ticker"],["pSortableColumn","token.last_price_base"],["field","token.last_price_base"],["pSortableColumn","amount"],["field","amount"],[3,"routerLink"],[1,"token-logo"],[1,"image"],[3,"src",4,"ngIf"],["class","no-logo","src","../../assets/logo/a-white-on-transparent-250.png",4,"ngIf"],["pFrozenColumn",""],[3,"src"],["src","../../assets/logo/a-white-on-transparent-250.png",1,"no-logo"],[1,"p-4","text-center"],["class","inscription-item main-content",3,"routerLink",4,"ngFor","ngForOf"],[1,"inscription-item","main-content",3,"routerLink"],[1,"content"],[3,"mime","contentPath"],[1,"detail","text-start"],[1,"detail-item"]],template:function(o,e){1&o&&(t.TgZ(0,"ion-content",0),t.YNc(1,W,7,0,"ion-grid",1)(2,S,4,0,"ion-grid",1)(3,ct,48,18,"ion-grid",1),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngIf",e.isLoading),t.xp6(1),t.Q6J("ngIf",!e.selectedAddress&&!e.isLoading),t.xp6(1),t.Q6J("ngIf",e.selectedAddress&&!e.isLoading))},dependencies:[r.ez,r.sg,r.O5,r.Ov,r.JJ,p.R,T.o,A.S,k.u,w.rH,U.DashboardPage,M.kb,m.U$,m.iA,D.jx,m.lQ,m.on,m.fz,L.x,a.W2,a.jY,a.Nd,a.wI,a.Gu,a.sr,a.Sm,a.fG,a.wd,a.X7,a.YG,a.BJ,a.hM,a.gu,a.Q$,a.cJ,a.GO,q.e$,J.g,y],styles:[".list[_ngcontent-%COMP%]{text-align:left}@media only screen and (max-width: 900px){.list[_ngcontent-%COMP%]{text-align:center}}.address[_ngcontent-%COMP%]{display:inline-block}.address-short[_ngcontent-%COMP%]{display:none}@media only screen and (max-width: 500px){.address[_ngcontent-%COMP%]{display:none}.address-short[_ngcontent-%COMP%]{display:inline-block}}.filter[_ngcontent-%COMP%]{margin-top:-15px;color:#888}.content[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img.no-logo[_ngcontent-%COMP%]{max-width:25%;padding-top:30px;opacity:.7}.avatar[_ngcontent-%COMP%]{margin-bottom:50px;text-align:center}.avatar[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{width:200px;height:200px;margin-left:auto;margin-right:auto;margin-bottom:20px;--border-radius: 4px}.off-page[_ngcontent-%COMP%]{margin-top:-100px}.token-holdings-list[_ngcontent-%COMP%]{margin-left:0;margin-bottom:50px}.token-holdings-list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{padding:5px;cursor:pointer;border-bottom:1px solid rgba(119,119,119,.2)}.token-holdings-list[_ngcontent-%COMP%]   .item.interactable[_ngcontent-%COMP%]{color:#ccc}.token-holdings-list[_ngcontent-%COMP%]   .item.interactable[_ngcontent-%COMP%]:hover{color:#57aaa7}.token-holdings-list[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{text-align:right}ion-segment-button[_ngcontent-%COMP%]{text-transform:initial;font-size:16px}@keyframes _ngcontent-%COMP%_moveLeftRight{0%,to{transform:translate(0)}50%{transform:translate(100px)}}.animation-ghost[_ngcontent-%COMP%]{opacity:.3;animation:_ngcontent-%COMP%_moveLeftRight 12s infinite;max-width:50px}.animation-ghost[_ngcontent-%COMP%]   div.ghost[_ngcontent-%COMP%]{margin-left:-100px}div.title[_ngcontent-%COMP%]{opacity:.5}.stargaze-name[_ngcontent-%COMP%]{opacity:.6}"]})}}]);