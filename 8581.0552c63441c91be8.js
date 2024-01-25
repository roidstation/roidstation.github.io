"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8581],{18581:(N,x,r)=>{r.r(x),r.d(x,{CreateTokenPage:()=>v});var p,k=r(15861),d=r(96814),n=r(60095),o=r(93800),T=r(46711),b=r(81260),y=r(20766),g=r(20553),Z=r(82785),P=r(241),e=r(19212),M=r(41767),U=r(98065);function I(a,i){if(1&a){const t=e.EpF();e.TgZ(0,"div",36)(1,"div",37),e._UZ(2,"img",38),e.TgZ(3,"div",39)(4,"label",40),e._uU(5,"Change file"),e.qZA(),e.TgZ(6,"input",41),e.NdJ("change",function(s){e.CHM(t);const m=e.oxw();return e.KtG(m.onFileSelected(s))}),e.qZA(),e.TgZ(7,"ion-button",42),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.createForm.value.optional.imageUpload="")}),e._uU(8," Remove "),e.qZA()(),e.TgZ(9,"div",43),e._uU(10),e.qZA()()()}if(2&a){const t=e.oxw();e.xp6(2),e.Q6J("src",t.createForm.value.optional.imageUpload,e.LSH),e.xp6(8),e.hij(" ",t.precheckErrorText," ")}}function A(a,i){1&a&&(e.TgZ(0,"div",49),e._uU(1," You must add a logo to your token "),e.qZA())}function E(a,i){if(1&a){const t=e.EpF();e.TgZ(0,"div",44)(1,"p"),e._uU(2,"Logo"),e.qZA(),e.TgZ(3,"p",45),e._uU(4,"Minimum dimensions"),e._UZ(5,"br"),e._uU(6,"250x250"),e.qZA(),e.TgZ(7,"p",45),e._uU(8,"Maximum dimensions"),e._UZ(9,"br"),e._uU(10,"1024x1024"),e.qZA(),e.TgZ(11,"p",45),e._uU(12,"Max file size"),e._UZ(13,"br"),e._uU(14),e.qZA(),e.TgZ(15,"div",39)(16,"label",46),e._uU(17,"Select file"),e.qZA(),e.TgZ(18,"input",47),e.NdJ("change",function(s){e.CHM(t);const m=e.oxw();return e.KtG(m.onFileSelected(s))}),e.qZA()(),e.YNc(19,A,2,0,"div",48),e.TgZ(20,"div",43),e._uU(21),e.qZA()()}if(2&a){const t=e.oxw();e.xp6(14),e.hij("",t.maxFilesSize/1e3,"kb"),e.xp6(5),e.Q6J("ngIf",t.contentRequired),e.xp6(2),e.hij(" ",t.precheckErrorText," ")}}function w(a,i){if(1&a&&(e.TgZ(0,"ion-text",50),e._uU(1),e.ALo(2,"number"),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.hij("To keep minting fair, the mint limit may not exceed 1% of the total supply which is ",e.xi3(2,1,t.maxMintLimit,"1.2-6"),"")}}function O(a,i){if(1&a&&(e._UZ(0,"ion-datetime",54),e.ALo(1,"date"),e.ALo(2,"date")),2&a){const t=e.oxw(2);e.s9C("min",e.xi3(1,3,t.minDate,"yyyy-MM-ddTHH:mm:ss")),e.s9C("value",e.xi3(2,6,t.minDate,"yyyy-MM-ddTHH:mm:ss")),e.Q6J("showDefaultTitle",!0)}}function D(a,i){1&a&&(e.TgZ(0,"div",51),e._UZ(1,"ion-datetime-button",52),e.TgZ(2,"ion-modal",53),e.YNc(3,O,3,9,"ng-template"),e.qZA()()),2&a&&(e.xp6(2),e.Q6J("keepContentsMounted",!0))}function z(a,i){if(1&a&&(e.TgZ(0,"ion-row")(1,"ion-col",55),e._uU(2," \xa0 "),e.qZA(),e.TgZ(3,"ion-col",56)(4,"div",57),e._uU(5),e.qZA()()()),2&a){const t=e.oxw();e.xp6(5),e.hij(" ",t.precheckErrorText," ")}}class v{constructor(i,t,l,s,m,h){this.builder=i,this.datePipe=t,this.protocolService=l,this.walletService=s,this.modalCtrl=m,this.alertController=h,this.precheckErrorText="",this.maxMintLimit=0,this.limitNumeric=0,this.maxFilesSize=g.N.limits.maxFileSize,this.contentRequired=!1,this.maskPredicate=function(){var u=(0,k.Z)(function*(c){return c.getInputElement()});return function(c){return u.apply(this,arguments)}}(),this.minDate=new Date,this.createForm=this.builder.group({basic:this.builder.group({name:["",[n.kI.required,n.kI.minLength(1),n.kI.maxLength(32),n.kI.pattern("^[a-zA-Z0-9-. ]*$")]],ticker:["",[n.kI.required,n.kI.minLength(1),n.kI.maxLength(10),n.kI.pattern("^[a-zA-Z0-9-.]*$")]],maxSupply:[1e6,[n.kI.required,n.kI.pattern("^[0-9. ]*$")]],mintLimit:[1e3,[n.kI.required,n.kI.pattern("^[0-9. ]*$")]],decimals:[6,[n.kI.required,n.kI.min(0),n.kI.max(6)]],launchImmediately:"true",launchDate:this.datePipe.transform(new Date(this.minDate),"yyyy-MM-ddTHH:mm:ss")}),optional:this.builder.group({imageUpload:null})}),this.numberMask=(0,b.f8)({decimalSeparator:".",thousandSeparator:" ",precision:6,min:1,max:1e13}),this.maxDecimalsMask=(0,b.f8)({min:0,max:6})}ngOnInit(){this.minDate=new Date,this.createForm=this.builder.group({basic:this.builder.group({name:["",[n.kI.required,n.kI.minLength(1),n.kI.maxLength(32),n.kI.pattern("^[a-zA-Z0-9-. ]*$")]],ticker:["",[n.kI.required,n.kI.minLength(1),n.kI.maxLength(10),n.kI.pattern("^[a-zA-Z0-9-.]*$")]],maxSupply:[1e6,[n.kI.required,n.kI.pattern("^[0-9. ]*$")]],mintLimit:[1e3,[n.kI.required,n.kI.pattern("^[0-9. ]*$")]],decimals:[6,[n.kI.required,n.kI.min(0),n.kI.max(6)]],launchImmediately:"true",launchDate:this.datePipe.transform(new Date(this.minDate),"yyyy-MM-ddTHH:mm:ss")}),optional:this.builder.group({imageUpload:[null,[n.kI.required]]})})}ionViewDidLeave(){this.createForm.patchValue({basic:{name:"",ticker:""},optional:{imageUpload:null}})}submit(){this.createForm.valid?this.createToken():(this.createForm.markAllAsTouched(),null===this.createForm.value.optional.imageUpload&&(this.contentRequired=!0))}createToken(){var i=this;return(0,k.Z)(function*(){try{const t=encodeURI(i.createForm.value.basic.name.trim()),l=i.createForm.value.basic.ticker.replace(/\s/g,""),s=6,m=i.createForm.value.basic.maxSupply.replace(/\s/g,""),h=i.createForm.value.basic.mintLimit.replace(/\s/g,""),u=new Map([["nam",t],["tic",l],["sup",m],["dec",s],["lim",h],["opn",Math.round((new Date).getTime()/1e3)]]);if("false"===i.createForm.value.basic.launchImmediately){const f=new Date(i.createForm.value.basic.launchDate);u.set("opn",f.getTime()/1e3)}let c=i.createForm.value.optional.imageUpload,_=yield i.walletService.getAccount(),C=null;if(c){const f=c.split(";")[0].split(":")[1];c=c.split(",")[1];const L={parent:{type:"/cosmos.bank.Account",identifier:_.address},metadata:{name:"Token Logo",description:"Token Logo",mime:f}};C=btoa(JSON.stringify(L))}const q=i.protocolService.buildURN(g.N.chain.chainId,"deploy",u);(yield i.modalCtrl.create({keyboardClose:!0,backdropDismiss:!1,component:y.l,componentProps:{urn:q,metadata:C,data:c,routerLink:["/app/token",l],resultCTA:"View token",metaprotocol:"cft20",metaprotocolAction:"deploy"}})).present()}catch{(yield i.modalCtrl.create({keyboardClose:!0,backdropDismiss:!0,component:P.f,cssClass:"wallet-required-modal"})).present()}})()}onFileSelected(i){this.precheckErrorText="",this.contentRequired=!1;const t=i.target.files[0];if(t){const l=new FileReader;l.onload=s=>{const m=s.target.result;if(!m.split(";")[0].split(":")[1].startsWith("image/"))return void(this.precheckErrorText="Only image files are allowed for token logos");if(t.size>g.N.limits.maxFileSize)return void(this.precheckErrorText=`File size exceeds maximum allowed size of ${g.N.limits.maxFileSize/1e3} kb`);const u=new Image;u.src=l.result,u.onload=()=>{const c=u.naturalHeight,_=u.naturalWidth;_==c?_<250||_>1024?this.precheckErrorText="Image must be square and between 250x250 and 1024x1024 pixels":(this.createForm.patchValue({optional:{imageUpload:m}}),this.contentRequired=!1):this.precheckErrorText="Image must be square"}},l.readAsDataURL(t)}}supplyChanged(i){this.maxMintLimit=.01*Z.C.prototype.transform(i.detail.value)}limitChanged(i){this.limitNumeric=Z.C.prototype.transform(i.detail.value)}}(p=v).\u0275fac=function(i){return new(i||p)(e.Y36(n.qu),e.Y36(d.uU),e.Y36(M._),e.Y36(U.X),e.Y36(o.IN),e.Y36(o.Br))},p.\u0275cmp=e.Xpm({type:p,selectors:[["app-create-token"]],standalone:!0,features:[e._Bn([d.uU]),e.jDz],decls:83,vars:20,consts:[["fullscreen","true"],["size","12","offset","0","size-md","12","offset-md","0","size-md","10","offset-md","1","size-xl","8","offset-xl","2"],[1,"no-shadow"],["slot","start"],["size","12","offset","0","size-md","12","offset-md","0","size-md","10","offset-md","1","size-xl","8","offset-xl","2",1,"main-content"],[1,"aligned"],[1,"note"],["href","https://medium.com/@delphilabs/introducing-asteroid-protocol-an-open-source-framework-for-inscriptions-and-tokens-on-cosmos-hub-03df146d48b1","target","_blank"],[1,"form",3,"formGroup","ngSubmit"],["size-xl","5","size-lg","8","size-xs","12"],["class","uploaded text-center",4,"ngIf"],["class","uploader text-center",4,"ngIf"],["size-xl","6","size-lg","8","size-sm","8","size-xs","12"],["formGroupName","basic",1,"section","mt-3","mb-3"],["formGroupName","basic",1,"form-group"],[1,"mt-2","ps-3"],["label","Name (alphanumeric only)","fill","outline","labelPlacement","stacked","placeholder","Name your token","formControlName","name","errorText","Please enter a name",3,"counter","minlength","maxlength"],[1,"mt-3","ps-3"],["label","Ticker","fill","outline","labelPlacement","stacked","placeholder","TOKEN","label","Ticker (1 - 10 characters, alphanumeric only)","formControlName","ticker","oninput","this.value = this.value.toUpperCase()",3,"counter","minlength","maxlength"],["label","Maximum supply","fill","outline","labelPlacement","stacked","placeholder","Maximum supply","formControlName","maxSupply",3,"maskito","maskitoElement","ionInput"],["label","Per transaction mint limit","fill","outline","labelPlacement","stacked","placeholder","Mint limit","formControlName","mintLimit",3,"maskito","maskitoElement","ionInput"],["color","warning",4,"ngIf"],["size-xl","5","size-lg","5","size-xs","12"],["size-xl","6","size-lg","8","size-sm","10","size-xs","12"],[1,"section"],["formGroupName","basic"],["formControlName","launchImmediately",3,"allowEmptySelection","value"],["lines","none"],["labelPlacement","end","justify","start","value","true"],["labelPlacement","end","justify","start","value","false"],["style","width: 300px;",4,"ngIf"],["formGroupName","basic",1,"section"],[4,"ngIf"],["color","primary","fill","solid","type","submit",3,"disabled"],["slot","start","name","checkmark"],[2,"height","100px"],[1,"uploaded","text-center"],[1,"uploader","no-style","text-center"],[1,"rounded",3,"src"],[1,"upload"],["for","input_file_change"],["id","input_file_change","type","file",3,"change"],["color","warning","fill","clear",3,"click"],[1,"section","color-orange","p-2"],[1,"uploader","text-center"],[1,"info"],["for","input_file_select"],["id","input_file_select","type","file",3,"change"],["class","info text-center color-danger",4,"ngIf"],[1,"info","text-center","color-danger"],["color","warning"],[2,"width","300px"],["datetime","datetime"],["formGroupName","basic",3,"keepContentsMounted"],["showDefaultButtons","true","id","datetime","formControlName","launchDate",3,"showDefaultTitle","min","value"],["size-xl","3","size-lg","5","size-xs","12"],["size-xl","9","size-lg","8","size-sm","8","size-xs","12"],[1,"section","color-orange"]],template:function(i,t){1&i&&(e.TgZ(0,"ion-content",0)(1,"ion-grid")(2,"ion-row")(3,"ion-col",1)(4,"ion-header",2)(5,"ion-toolbar")(6,"ion-buttons",3),e._UZ(7,"ion-menu-button"),e.qZA(),e.TgZ(8,"ion-title"),e._uU(9," New token "),e.qZA()()()()(),e.TgZ(10,"ion-row")(11,"ion-col",4)(12,"div",5)(13,"p",6),e._uU(14),e.qZA(),e.TgZ(15,"p",6),e._uU(16," Learn more in the "),e.TgZ(17,"a",7),e._uU(18,"CFT-20 metaprotocol"),e.qZA(),e._uU(19," documentation "),e.qZA(),e.TgZ(20,"form",8),e.NdJ("ngSubmit",function(){return t.submit()}),e.TgZ(21,"ion-grid")(22,"ion-row")(23,"ion-col",9),e.YNc(24,I,11,2,"div",10)(25,E,22,3,"div",11),e.qZA(),e.TgZ(26,"ion-col",12)(27,"div",13)(28,"h2"),e._uU(29,"Token information"),e.qZA(),e.TgZ(30,"p",6),e._uU(31,"Define your CFT-20 token"),e.qZA()(),e.TgZ(32,"div",14)(33,"div",15),e._UZ(34,"ion-input",16),e.qZA(),e.TgZ(35,"div",17),e._UZ(36,"ion-input",18),e.qZA(),e.TgZ(37,"div",17)(38,"ion-input",19),e.NdJ("ionInput",function(s){return t.supplyChanged(s)}),e.qZA()(),e.TgZ(39,"div",17)(40,"ion-input",20),e.NdJ("ionInput",function(s){return t.limitChanged(s)}),e.qZA()(),e.TgZ(41,"div",17),e.YNc(42,w,3,4,"ion-text",21),e.qZA()()()(),e.TgZ(43,"ion-row")(44,"ion-col",22),e._uU(45," \xa0 "),e.qZA(),e.TgZ(46,"ion-col",23)(47,"div",24)(48,"h3"),e._uU(49,"Token launch"),e.qZA(),e.TgZ(50,"p",6),e._uU(51," Set a launch date for your token. Any mints before this date will be ignored and not counted towards an address' balance "),e.qZA()(),e.TgZ(52,"div")(53,"ion-list",25)(54,"ion-radio-group",26)(55,"ion-item",27)(56,"ion-radio",28),e._uU(57," Launch immediately "),e.qZA()(),e.TgZ(58,"ion-item",27)(59,"ion-radio",29),e._uU(60," Launch at a specific date and time "),e.qZA()()()()(),e.YNc(61,D,4,1,"div",30),e.qZA()(),e.TgZ(62,"ion-row")(63,"ion-col",22),e._uU(64," \xa0 "),e.qZA(),e.TgZ(65,"ion-col",23)(66,"div",31)(67,"h3"),e._uU(68,"Mint page"),e.qZA(),e.TgZ(69,"p",6),e._uU(70," We create a dedicated mint page for your token where you can send people"),e._UZ(71,"br"),e._uU(72,"The link will be available after your token is created"),e.qZA()()()(),e.YNc(73,z,6,1,"ion-row",32),e.TgZ(74,"ion-row")(75,"ion-col",22),e._uU(76," \xa0 "),e.qZA(),e.TgZ(77,"ion-col",12)(78,"div",24)(79,"ion-button",33),e._UZ(80,"ion-icon",34),e._uU(81," Create token "),e.qZA()()()()()()(),e._UZ(82,"div",35),e.qZA()()()()),2&i&&(e.xp6(14),e.hij(" The CFT-20 metaprotocol allows you to create, transfer, mint, buy and sell fungible tokens. When used in combination with the inscriptions metaprotocol, you can inscribe a logo for your token on the chain. The maximum size of a logo is currently ",t.maxFilesSize/1e3,"kb. "),e.xp6(6),e.Q6J("formGroup",t.createForm),e.xp6(4),e.Q6J("ngIf",t.createForm.value.optional.imageUpload),e.xp6(1),e.Q6J("ngIf",!t.createForm.value.optional.imageUpload),e.xp6(9),e.Q6J("counter",!0)("minlength",1)("maxlength",32),e.xp6(2),e.Q6J("counter",!0)("minlength",1)("maxlength",10),e.xp6(2),e.Q6J("maskito",t.numberMask)("maskitoElement",t.maskPredicate),e.xp6(2),e.Q6J("maskito",t.numberMask)("maskitoElement",t.maskPredicate),e.xp6(2),e.Q6J("ngIf",t.limitNumeric>t.maxMintLimit),e.xp6(12),e.Q6J("allowEmptySelection",!1)("value",t.createForm.value.basic.launchImmediately),e.xp6(7),e.Q6J("ngIf","false"==t.createForm.value.basic.launchImmediately),e.xp6(12),e.Q6J("ngIf",t.precheckErrorText),e.xp6(6),e.Q6J("disabled",t.limitNumeric>t.maxMintLimit||""!=t.precheckErrorText))},dependencies:[o.Pc,o.YG,o.Sm,o.wI,o.W2,o.x4,o.Mj,o.jY,o.Gu,o.gu,o.pK,o.Ie,o.q_,o.fG,o.B7,o.se,o.Nd,o.yW,o.wd,o.sr,o.ki,o.U5,o.QI,o.j9,d.ez,d.O5,d.JJ,d.uU,n.UX,n._Y,n.JJ,n.JL,n.wO,n.nD,n.sg,n.u,n.x0,T.U5,T.ro],styles:["[_nghost-%COMP%]{--ion-color-step-300: transparent !important}.mw-400[_ngcontent-%COMP%]{max-width:400px}.uploader[_ngcontent-%COMP%]{padding:35px;background:rgba(255,255,255,.05);border:1px dashed rgba(255,255,255,.14);border-radius:30px;margin-bottom:25px}.uploader[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{cursor:pointer;outline:0;-webkit-user-select:none;user-select:none;color:var(--color-teal);font-size:13px;font-weight:600;display:inline-block;height:38px;line-height:32px;padding:0 30px;border:1px solid var(--color-teal);border-top-color:var(--color-teal);border-right-color:var(--color-teal);border-bottom-color:var(--color-teal);border-left-color:var(--color-teal);border-radius:30px;transition:all .3s ease-out 0s}.uploader[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]{display:none}.uploader[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{font-size:12px;color:#fff;padding:0;margin:5px;text-align:left}.uploader[_ngcontent-%COMP%]   .upload[_ngcontent-%COMP%]{margin-top:20px}.section[_ngcontent-%COMP%]{padding-left:15px;font-size:14px}.section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:22px}.section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px}ion-datetime-button[_ngcontent-%COMP%]{--ion-text-color: var(--color-teal) !important}.ion-datetime-button-overlay[_ngcontent-%COMP%]   ion-datetime.datetime-grid[_ngcontent-%COMP%]{background:#232f3d}[_nghost-%COMP%]   .datetime-time[_ngcontent-%COMP%]{color:#ff0!important}button[part=wheel-item][_ngcontent-%COMP%]{color:#ff0!important}ion-datetime[_ngcontent-%COMP%]{--background: rgb(35, 47, 61);--background-rgb: 35, 47, 61;--wheel-highlight-background: rgb(35, 47, 61);--wheel-fade-background-rgb: 35, 47, 61}"]})}}]);