"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[433],{80433:(B,b,l)=>{l.r(b),l.d(b,{ion_datetime_button:()=>x});var h=l(15861),r=l(15960),f=l(50512),u=l(52400),D=l(4459),P=l(5169),d=l(74343);const x=class{constructor(s){var o=this;(0,r.r)(this,s),this.datetimeEl=null,this.overlayEl=null,this.getParsedDateValues=e=>null==e?[]:Array.isArray(e)?e:[e],this.setDateTimeText=()=>{const{datetimeEl:e,datetimePresentation:i}=this;if(!e)return;const{value:n,locale:t,hourCycle:a,preferWheel:c,multiple:w,titleSelectedDatesFormatter:g}=e,p=this.getParsedDateValues(n),_=(0,d.q)(p.length>0?p:[(0,d.t)()]);if(!_)return;const m=_[0],v=(0,d.J)(t,a);switch(this.dateText=this.timeText=void 0,i){case"date-time":case"time-date":const T=(0,d.T)(t,m),E=(0,d.K)(t,m,v);c?this.dateText=`${T} ${E}`:(this.dateText=T,this.timeText=E);break;case"date":if(w&&1!==p.length){let y=`${p.length} days`;if(void 0!==g)try{y=g(p)}catch(O){(0,u.a)("Exception in provided `titleSelectedDatesFormatter`: ",O)}this.dateText=y}else this.dateText=(0,d.T)(t,m);break;case"time":this.timeText=(0,d.K)(t,m,v);break;case"month-year":this.dateText=(0,d.G)(t,m);break;case"month":this.dateText=(0,d.S)(t,m,{month:"long"});break;case"year":this.dateText=(0,d.S)(t,m,{year:"numeric"})}},this.waitForDatetimeChanges=(0,h.Z)(function*(){const{datetimeEl:e}=o;return e?new Promise(i=>{(0,f.a)(e,"ionRender",i,{once:!0})}):Promise.resolve()}),this.handleDateClick=function(){var e=(0,h.Z)(function*(i){const{datetimeEl:n,datetimePresentation:t}=o;if(!n)return;let a=!1;switch(t){case"date-time":case"time-date":const c="date"!==n.presentation;!n.preferWheel&&c&&(n.presentation="date",a=!0)}o.selectedButton="date",o.presentOverlay(i,a,o.dateTargetEl)});return function(i){return e.apply(this,arguments)}}(),this.handleTimeClick=e=>{const{datetimeEl:i,datetimePresentation:n}=this;if(!i)return;let t=!1;switch(n){case"date-time":case"time-date":"time"!==i.presentation&&(i.presentation="time",t=!0)}this.selectedButton="time",this.presentOverlay(e,t,this.timeTargetEl)},this.presentOverlay=function(){var e=(0,h.Z)(function*(i,n,t){const{overlayEl:a}=o;a&&("ION-POPOVER"===a.tagName?(n&&(yield o.waitForDatetimeChanges()),a.present(Object.assign(Object.assign({},i),{detail:{ionShadowTarget:t}}))):a.present())});return function(i,n,t){return e.apply(this,arguments)}}(),this.datetimePresentation="date-time",this.dateText=void 0,this.timeText=void 0,this.datetimeActive=!1,this.selectedButton=void 0,this.color="primary",this.disabled=!1,this.datetime=void 0}componentWillLoad(){var s=this;return(0,h.Z)(function*(){const{datetime:o}=s;if(!o)return void(0,u.a)("An ID associated with an ion-datetime instance is required for ion-datetime-button to function properly.",s.el);const e=s.datetimeEl=document.getElementById(o);if(!e)return void(0,u.a)(`No ion-datetime instance found for ID '${o}'.`,s.el);if("ION-DATETIME"!==e.tagName)return void(0,u.a)(`Expected an ion-datetime instance for ID '${o}' but received '${e.tagName.toLowerCase()}' instead.`,e);new IntersectionObserver(t=>{const a=t[0];s.datetimeActive=a.isIntersecting},{threshold:.01}).observe(e);const n=s.overlayEl=e.closest("ion-modal, ion-popover");n&&n.classList.add("ion-datetime-button-overlay"),(0,f.c)(e,()=>{const t=s.datetimePresentation=e.presentation||"date-time";switch(s.setDateTimeText(),(0,f.a)(e,"ionValueChange",s.setDateTimeText),t){case"date-time":case"date":case"month-year":case"month":case"year":s.selectedButton="date";break;case"time-date":case"time":s.selectedButton="time"}})})()}render(){const{color:s,dateText:o,timeText:e,selectedButton:i,datetimeActive:n,disabled:t}=this,a=(0,P.b)(this);return(0,r.h)(r.H,{class:(0,D.c)(s,{[a]:!0,[`${i}-active`]:n,"datetime-button-disabled":t})},o&&(0,r.h)("button",{class:"ion-activatable",id:"date-button","aria-expanded":n?"true":"false",onClick:this.handleDateClick,disabled:t,part:"native",ref:c=>this.dateTargetEl=c},(0,r.h)("slot",{name:"date-target"},o),"md"===a&&(0,r.h)("ion-ripple-effect",null)),e&&(0,r.h)("button",{class:"ion-activatable",id:"time-button","aria-expanded":n?"true":"false",onClick:this.handleTimeClick,disabled:t,part:"native",ref:c=>this.timeTargetEl=c},(0,r.h)("slot",{name:"time-target"},e),"md"===a&&(0,r.h)("ion-ripple-effect",null)))}get el(){return(0,r.f)(this)}};x.style={ios:":host{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host button{border-radius:8px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:0px;margin-bottom:0px;position:relative;-webkit-transition:150ms color ease-in-out;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:1rem;cursor:pointer;overflow:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}",md:":host{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host button{border-radius:8px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:0px;margin-bottom:0px;position:relative;-webkit-transition:150ms color ease-in-out;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:1rem;cursor:pointer;overflow:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}"}}}]);