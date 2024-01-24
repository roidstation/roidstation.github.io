"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6903],{96903:(E,v,r)=>{r.r(v),r.d(v,{ViewInscriptionPage:()=>I});var u,m=r(15861),p=r(96814),a=r(60095),Z=r(14391),o=r(93800),d=r(35768),h=r(20553),q=r(54481),T=r(54931),C=r(29569),z=r(84525),_=r(68890),L=r(46711),Y=r(20766),t=r(19212),A=r(98065),O=r(50167),k=r(58344);class w{constructor(n,e,s,c,l,f){this.walletService=n,this.chainService=e,this.modalCtrl=s,this.router=c,this.builder=l,this.protocolService=f,this.hash="",(0,z.a)({checkmark:_.d29,closeOutline:_.fID,close:_.xvD}),this.transferForm=this.builder.group({basic:this.builder.group({destination:["",[a.kI.required,a.kI.minLength(45),a.kI.maxLength(45),a.kI.pattern("^[a-zA-Z0-9]*$")]]})})}ngOnInit(){var n=this;return(0,m.Z)(function*(){yield n.walletService.getAccount(),yield(0,T.qo)(h.N.api.endpoint)("query")({inscription:[{where:{transaction:{hash:{_eq:n.hash}}}},{id:!0,current_owner:!0}]})})()}submit(){var n=this;return(0,m.Z)(function*(){if(!n.transferForm.valid)return void n.transferForm.markAllAsTouched();n.modalCtrl.dismiss();const e=new Map([["h",n.hash],["dst",n.transferForm.value.basic.destination]]),s=n.protocolService.buildURN(h.N.chain.chainId,"transfer",e);(yield n.modalCtrl.create({keyboardClose:!0,backdropDismiss:!1,component:Y.l,componentProps:{urn:s,metadata:null,data:null,routerLink:["/app/inscription",n.hash],resultCTA:"View inscription",metaprotocol:"inscription",metaprotocolAction:"transfer"}})).present()})()}cancel(){this.modalCtrl.dismiss()}}(u=w).\u0275fac=function(n){return new(n||u)(t.Y36(A.X),t.Y36(O.l),t.Y36(o.IN),t.Y36(Z.F0),t.Y36(a.qu),t.Y36(k.C))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-transfer-inscription-modal"]],inputs:{hash:"hash"},standalone:!0,features:[t.jDz],decls:23,vars:4,consts:[["mode","md",1,"main-content"],[1,"form",3,"formGroup","ngSubmit"],[1,"p-3"],[1,"text-center"],["size-md","8","offset-md","2","size","12"],["formGroupName","basic"],[1,"mt-4"],["label","Destination address","labelPlacement","stacked","fill","outline","placeholder","cosmos1xxxxxx","formControlName","destination","errorText","Please enter a Cosmos Hub Address",3,"counter","minlength","maxlength"],[1,"action"],["color","success","type","submit"],["color","primary","fill","clear",3,"click"]],template:function(n,e){1&n&&(t.TgZ(0,"ion-content",0)(1,"form",1),t.NdJ("ngSubmit",function(){return e.submit()}),t.TgZ(2,"ion-grid",2)(3,"ion-row")(4,"ion-col",3)(5,"h2"),t._uU(6,"Transfer inscription"),t.qZA()()(),t.TgZ(7,"ion-row")(8,"ion-col")(9,"p"),t._uU(10," Transfers are final and can't be cancelled "),t.qZA()()(),t.TgZ(11,"ion-row")(12,"ion-col",4)(13,"div",5)(14,"div",6),t._UZ(15,"ion-input",7),t.qZA()()()(),t.TgZ(16,"ion-row")(17,"ion-col")(18,"div",8)(19,"ion-button",9),t._uU(20,"Transfer now"),t.qZA(),t.TgZ(21,"ion-button",10),t.NdJ("click",function(){return e.cancel()}),t._uU(22,"Cancel"),t.qZA()()()()()()()),2&n&&(t.xp6(1),t.Q6J("formGroup",e.transferForm),t.xp6(14),t.Q6J("counter",!0)("minlength",45)("maxlength",45))},dependencies:[o.Pc,o.YG,o.wI,o.W2,o.jY,o.pK,o.Nd,o.j9,a.UX,a._Y,a.JJ,a.JL,a.wO,a.nD,a.sg,a.u,a.x0,p.ez,a.u5,L.U5],styles:["ion-content[_ngcontent-%COMP%]{--background: hsla(0, 0%, 100%, .05) !important;background-color:#ffffff0d!important;-webkit-backdrop-filter:blur(50px);backdrop-filter:blur(50px);height:100%;border-radius:10px;padding:20px;transition:all .2s ease-in-out}.confirmation[_ngcontent-%COMP%]{background-color:#0003;border-radius:10px;border:1px solid var(--color-yellow)}.action[_ngcontent-%COMP%]{position:fixed;bottom:20px;width:100%;text-align:center}"]});var g,b=r(6593),S=r(85219);function J(i,n){if(1&i&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.hij("#",e.inscription.id-1,"")}}function M(i,n){1&i&&(t.TgZ(0,"div",11),t._UZ(1,"ion-progress-bar",12),t.TgZ(2,"p"),t._uU(3," Loading inscription... "),t.qZA()())}function N(i,n){if(1&i&&(t.TgZ(0,"ion-button",40),t._uU(1," Open in viewer "),t._UZ(2,"ion-icon",41),t.qZA()),2&i){const e=t.oxw(2);t.MGl("href","inscription/",e.inscription.transaction.hash,"")}}function V(i,n){1&i&&(t.TgZ(0,"ion-label"),t._uU(1,"You"),t.qZA())}function Q(i,n){if(1&i&&(t.TgZ(0,"ion-label"),t._uU(1),t.ALo(2,"async"),t.ALo(3,"shortenAddress"),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Oqu(t.lcZ(2,1,t.lcZ(3,3,e.inscription.creator)))}}function $(i,n){1&i&&(t.TgZ(0,"ion-label"),t._uU(1,"You"),t.qZA())}function D(i,n){if(1&i&&(t.TgZ(0,"ion-label"),t._uU(1),t.ALo(2,"async"),t.ALo(3,"shortenAddress"),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Oqu(t.lcZ(2,1,t.lcZ(3,3,e.inscription.current_owner)))}}function j(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"ion-row",42)(1,"ion-col",43)(2,"div",44)(3,"span",24),t._uU(4,"You own this inscription"),t.qZA()(),t.TgZ(5,"div",45)(6,"ion-button",46),t.NdJ("click",function(){t.CHM(e);const c=t.oxw(2);return t.KtG(c.transfer())}),t._uU(7,"Transfer"),t.qZA()()()()}}function F(i,n){1&i&&(t.TgZ(0,"tr")(1,"th",47),t._uU(2,"Date "),t._UZ(3,"p-sortIcon",48),t.qZA(),t.TgZ(4,"th",49),t._uU(5,"Block "),t._UZ(6,"p-sortIcon",50),t.qZA(),t.TgZ(7,"th",51),t._uU(8,"Action "),t._UZ(9,"p-sortIcon",52),t.qZA(),t.TgZ(10,"th",53),t._uU(11,"Sender "),t._UZ(12,"p-sortIcon",54),t.qZA(),t.TgZ(13,"th",55),t._uU(14,"Receiver "),t._UZ(15,"p-sortIcon",56),t.qZA(),t.TgZ(16,"th"),t._uU(17,"\xa0"),t.qZA()())}function G(i,n){if(1&i&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.ALo(3,"date"),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.ALo(6,"number"),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.ALo(11,"async"),t.ALo(12,"shortenAddress"),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.ALo(15,"async"),t.ALo(16,"shortenAddress"),t.qZA(),t.TgZ(17,"td")(18,"a",30),t._uU(19,"View on Mintscan"),t.qZA()()()),2&i){const e=n.$implicit,s=t.oxw(2);t.xp6(2),t.hij(" ",t.lcZ(3,7,e.date_created)," "),t.xp6(3),t.hij(" ",t.lcZ(6,9,e.height)," "),t.xp6(3),t.hij(" ",e.action," "),t.xp6(2),t.hij(" ",t.lcZ(11,11,t.lcZ(12,13,e.sender))," "),t.xp6(4),t.hij(" ",t.lcZ(15,15,t.lcZ(16,17,e.receiver))," "),t.xp6(4),t.hYB("href","",s.explorerTxUrl,"",e.transaction.hash,"",t.LSH)}}function H(i,n){1&i&&(t.TgZ(0,"tr")(1,"td",57),t._uU(2,"No history yet"),t.qZA()())}const y=i=>["/app/wallet",i],U=()=>({section:"inscriptions"}),R=()=>({"min-width":"40rem"});function X(i,n){if(1&i&&(t.TgZ(0,"div",13)(1,"ion-grid")(2,"ion-row")(3,"ion-col",14)(4,"div",15),t._UZ(5,"app-generic-preview",16),t.qZA(),t.TgZ(6,"div",17),t.YNc(7,N,3,1,"ion-button",18),t.qZA()(),t.TgZ(8,"ion-col",19)(9,"ion-grid")(10,"ion-row")(11,"ion-col")(12,"h1",20),t._uU(13),t.qZA(),t.TgZ(14,"p",21),t._uU(15),t.qZA()()(),t.TgZ(16,"ion-row",22)(17,"ion-col")(18,"div",23)(19,"span",24),t._uU(20,"Created by"),t.qZA(),t.TgZ(21,"a",25)(22,"ion-chip")(23,"ion-avatar"),t._UZ(24,"img",26),t.qZA(),t.YNc(25,V,2,0,"ion-label",5)(26,Q,4,5,"ion-label",5),t.qZA()()()(),t.TgZ(27,"ion-col")(28,"div",23)(29,"span",24),t._uU(30,"Owned by"),t.qZA(),t.TgZ(31,"a",25)(32,"ion-chip")(33,"ion-avatar"),t._UZ(34,"img",26),t.qZA(),t.YNc(35,$,2,0,"ion-label",5)(36,D,4,5,"ion-label",5),t.qZA()()()()(),t.YNc(37,j,8,0,"ion-row",27),t.TgZ(38,"ion-row",28)(39,"ion-col")(40,"div",23)(41,"span",24),t._uU(42,"Created on"),t.qZA(),t.TgZ(43,"span",29),t._uU(44),t.ALo(45,"date"),t.ALo(46,"date"),t.qZA(),t.TgZ(47,"span",29),t._uU(48),t.ALo(49,"number"),t.qZA()()()(),t.TgZ(50,"ion-row",28)(51,"ion-col")(52,"div",23)(53,"span",24),t._uU(54,"Transaction"),t.qZA(),t.TgZ(55,"span",29)(56,"a",30),t._uU(57),t.qZA()()()()()()()()(),t.TgZ(58,"ion-grid",31)(59,"ion-row")(60,"ion-col",32),t._uU(61," History "),t.qZA()(),t.TgZ(62,"ion-row",33)(63,"ion-col",34)(64,"p-table",35,36),t.YNc(66,F,18,0,"ng-template",37)(67,G,20,19,"ng-template",38)(68,H,3,0,"ng-template",39),t.qZA()()()()()),2&i){const e=t.oxw();t.xp6(5),t.Q6J("mime",e.inscription.mime)("contentPath",e.inscription.content_path)("isExplicit",e.inscription.is_explicit),t.xp6(2),t.Q6J("ngIf",!e.inscription.is_explicit),t.xp6(6),t.Oqu(e.inscription.name),t.xp6(2),t.Oqu(e.inscription.description||"No description provided"),t.xp6(6),t.Q6J("routerLink",t.VKq(36,y,e.inscription.creator))("queryParams",t.DdM(38,U)),t.xp6(4),t.Q6J("ngIf",e.inscription.creator==e.currentAddress),t.xp6(1),t.Q6J("ngIf",e.inscription.creator!=e.currentAddress),t.xp6(5),t.Q6J("routerLink",t.VKq(39,y,e.inscription.current_owner))("queryParams",t.DdM(41,U)),t.xp6(4),t.Q6J("ngIf",e.inscription.current_owner==e.currentAddress),t.xp6(1),t.Q6J("ngIf",e.inscription.current_owner!=e.currentAddress),t.xp6(1),t.Q6J("ngIf",e.walletConnected&&e.inscription.current_owner==e.currentAddress),t.xp6(7),t.AsE("",t.xi3(45,27,e.inscription.date_created,"longDate")," ",t.xi3(46,30,e.inscription.date_created,"shortTime"),""),t.xp6(4),t.hij("Block ",t.xi3(49,33,e.inscription.height,"1.0-0"),""),t.xp6(8),t.hYB("href","",e.explorerTxUrl,"",e.inscription.transaction.hash,"",t.LSH),t.xp6(1),t.Oqu(e.inscription.transaction.hash),t.xp6(7),t.Q6J("value",e.inscriptionHistory)("tableStyle",t.DdM(42,R))("paginator",!0)("rows",100)("showCurrentPageReport",!0)("sortOrder",-1)}}class I{constructor(n,e,s,c,l){this.activatedRoute=n,this.walletService=e,this.modalCtrl=s,this.titleService=c,this.meta=l,this.isLoading=!1,this.explorerTxUrl=h.N.api.explorer,this.walletConnected=!1,this.currentAddress=""}ngOnInit(){var n=this;return(0,m.Z)(function*(){n.isLoading=!0,n.walletConnected=yield n.walletService.isConnected(),n.walletConnected&&(n.currentAddress=(yield n.walletService.getAccount()).address);const e=(0,T.qo)(h.N.api.endpoint),s=yield e("query")({inscription:[{where:{transaction:{hash:{_eq:n.activatedRoute.snapshot.params.txhash}}}},{id:!0,height:!0,transaction:{hash:!0},creator:!0,current_owner:!0,content_path:!0,content_size_bytes:!0,is_explicit:!0,date_created:!0,__alias:{name:{metadata:[{path:"$.metadata.name"},!0]},description:{metadata:[{path:"$.metadata.description"},!0]},mime:{metadata:[{path:"$.metadata.mime"},!0]}}}]});n.inscription=s.inscription[0];const{name:c,description:l,content_path:f,id:x,transaction:P}=n.inscription;n.titleService.setTitle(`${c} Inscription #${x} on Asteroid Protocol`),n.meta.updateTag({property:"og:url",content:`https://asteroidprotocol.io/app/inscription/${P.hash}`}),n.meta.updateTag({property:"og:title",content:`${c} Inscription #${x} on Asteroid Protocol`}),n.meta.updateTag({property:"og:image",content:f}),n.meta.updateTag({property:"og:description",content:l}),n.meta.updateTag({name:"description",content:l}),n.meta.updateTag({property:"twitter:url",content:`https://asteroidprotocol.io/app/inscription/${P.hash}`}),n.meta.updateTag({property:"twitter:title",content:`${c} Inscription #${x} on Asteroid Protocol`}),n.meta.updateTag({property:"twitter:image",content:f}),n.meta.updateTag({property:"twitter:description",content:l}),n.meta.updateTag({property:"twitter:card",content:"summary"});const B=yield e("query")({inscription_history:[{where:{inscription:{id:{_eq:n.inscription.id}}},order_by:[{height:"desc"}]},{id:!0,height:!0,transaction:{hash:!0},sender:!0,receiver:!0,action:!0,date_created:!0}]});n.inscriptionHistory=B.inscription_history,n.isLoading=!1})()}transfer(){var n=this;return(0,m.Z)(function*(){(yield n.modalCtrl.create({keyboardClose:!0,backdropDismiss:!0,component:w,componentProps:{hash:n.inscription.transaction.hash}})).present()})()}}(g=I).\u0275fac=function(n){return new(n||g)(t.Y36(Z.gz),t.Y36(A.X),t.Y36(o.IN),t.Y36(b.Dx),t.Y36(b.h_))},g.\u0275cmp=t.Xpm({type:g,selectors:[["app-view-inscription"]],standalone:!0,features:[t.jDz],decls:18,vars:3,consts:[["fullscreen","true"],["size","12","offset","0","size-md","12","offset-md","0","size-md","10","offset-md","1","size-xl","8","offset-xl","2"],[1,"no-shadow"],["slot","start"],["defaultHref","/app/inscriptions"],[4,"ngIf"],["size","12","offset","0","size-md","12","offset-md","0","size-md","10","offset-md","1","size-xl","8","offset-xl","2",1,"main-content"],[1,"p-4"],["class","loading",4,"ngIf"],["class","aligned",4,"ngIf"],[2,"height","100px"],[1,"loading"],["type","indeterminate"],[1,"aligned"],["size-lg","6","size-xs","12"],[1,"text-center"],[3,"mime","contentPath","isExplicit"],[1,"text-center","p-2"],["color","primary","fill","clear","target","_blank",3,"href",4,"ngIf"],["size-lg","6","size-sm","8","size-xs","12"],[1,"mt-0"],[1,"note"],[1,"break","pt-3"],[1,"meta"],[1,"label"],[3,"routerLink","queryParams"],["alt","Unknown avatar","src","../../assets/avatar.svg"],["class","is-owner mt-4",4,"ngIf"],[1,"pt-3"],[1,"value"],["target","_blank",3,"href"],[1,"history"],["size","6",1,"header"],[1,"break"],["size","12"],["currentPageReportTemplate","Showing {first} to {last} of {totalRecords} records","styleClass","token-list","sortField","date_created",3,"value","tableStyle","paginator","rows","showCurrentPageReport","sortOrder"],["data",""],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],["color","primary","fill","clear","target","_blank",3,"href"],["name","open-outline",1,"ps-2"],[1,"is-owner","mt-4"],["size","12",1,"ps-3","pt-0"],[1,"meta","pt-4"],[1,"mt-2","mb-3"],["color","primary","fill","outline",3,"click"],["pSortableColumn","date_created"],["field","date_created"],["pSortableColumn","height","pFrozenColumn",""],["field","height"],["pSortableColumn","action"],["field","action"],["pSortableColumn","sender"],["field","sender"],["pSortableColumn","receiver"],["field","receiver"],["colspan","4"]],template:function(n,e){1&n&&(t.TgZ(0,"ion-content",0)(1,"ion-grid")(2,"ion-row")(3,"ion-col",1)(4,"ion-header",2)(5,"ion-toolbar")(6,"ion-buttons",3),t._UZ(7,"ion-menu-button")(8,"ion-back-button",4),t.qZA(),t.TgZ(9,"ion-title"),t._uU(10," Inscription "),t.YNc(11,J,2,1,"span",5),t.qZA()()()()(),t.TgZ(12,"ion-row")(13,"ion-col",6)(14,"div",7),t.YNc(15,M,4,0,"div",8),t.qZA(),t.YNc(16,X,69,43,"div",9),t._UZ(17,"div",10),t.qZA()()()()),2&n&&(t.xp6(11),t.Q6J("ngIf",!e.isLoading),t.xp6(4),t.Q6J("ngIf",e.isLoading),t.xp6(1),t.Q6J("ngIf",!e.isLoading))},dependencies:[o.Pc,o.BJ,o.YG,o.Sm,o.hM,o.wI,o.W2,o.jY,o.Gu,o.gu,o.Q$,o.fG,o.X7,o.Nd,o.wd,o.sr,o.oU,o.Fo,p.ez,p.O5,p.Ov,p.JJ,p.uU,a.u5,q.x,Z.rH,C.g,d.U$,d.iA,S.jx,d.lQ,d.on,d.fz],styles:["h1[_ngcontent-%COMP%]{font-size:36px}.meta[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:14px;color:#ddd;font-weight:600;display:block}.meta[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:14px;color:#fff;font-weight:400;display:block}.meta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--color-teal)}.is-owner[_ngcontent-%COMP%]{text-align:left;background-color:#0000001a}"]})}}]);