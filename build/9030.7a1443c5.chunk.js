"use strict";(self.webpackChunkdoctor_appointment_admin=self.webpackChunkdoctor_appointment_admin||[]).push([[9030],{59030:(W,s,_)=>{_.r(s),_.d(s,{UserListPageEE:()=>m});var P=_(92132),a=_(42642),n=_(36624),T=_(21272),C=_(55506),R=_(5409),i=_(28721),U=_(15126),v=_(63299),B=_(67014),t=_(59080),l=_(79275),L=_(14718),d=_(82437),I=_(61535),O=_(5790),A=_(12083),M=_(35223),E=_(74930),o=_(2600),K=_(48940),D=_(41286),h=_(56336),r=_(13426),f=_(84624),g=_(77965),S=_(54257),y=_(71210),N=_(51187),j=_(39404),H=_(58692),F=_(501),V=_(57646),c=_(23120),x=_(44414),G=_(25962),$=_(14664),Y=_(42588),z=_(90325),X=_(62785),Z=_(87443),J=_(41032),Q=_(22957),e=_(93179),u=_(73055),p=_(15747),k=_(85306),w=_(26509),b=_(32058),q=_(81185),__=_(82261),E_=_(62482),t_=_(27551),s_=_(17493),O_=_(1927),M_=_(55151),o_=_(79077),D_=_(67031);const m=()=>((0,n.u)(),(0,P.jsx)(a.e,{}))},36624:(W,s,_)=>{_.d(s,{u:()=>B});var P=_(21272),a=_(55506),n=_(67031),T=_(54894),C=_(17703),R=_(28721);const i="strapi-notification-seat-limit",U="https://cloud.strapi.io/profile/billing",v="https://strapi.io/billing/request-seats",B=()=>{const{formatMessage:t}=(0,T.A)(),{license:l,isError:L,isLoading:d}=(0,R.m)(),I=(0,a.hN)(),{pathname:O}=(0,C.zy)(),{enforcementUserCount:A,permittedSeats:M,licenseLimitStatus:E,isHostedOnStrapiCloud:o}=l??{};P.useEffect(()=>{if(L||d)return;const K=!n(M)&&!window.sessionStorage.getItem(`${i}-${O}`)&&(E==="AT_LIMIT"||E==="OVER_LIMIT");let D;E==="OVER_LIMIT"?D="warning":E==="AT_LIMIT"&&(D="softWarning"),K&&I({type:D,message:t({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:E}),title:t({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:E,enforcementUserCount:A,permittedSeats:M}),link:{url:o?U:v,label:t({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:o})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${i}-${O}`,"true")}})},[I,l,O,t,d,M,E,A,o,L])}}}]);
