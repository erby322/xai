(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[333],{82450:function(e,s,a){Promise.resolve().then(a.bind(a,57983))},57983:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return em}});var l=a(57437);a(31600);var r=a(44522);a(20703);var t=a(2265),o=a(9641),n=a(29681),i=a(82014),d=a(57754),c=a(23610),u=a(6123),m=a(27723),p=(0,a(14873).tv)({slots:{base:"inline-flex items-center justify-between h-fit rounded-large gap-2",pre:"bg-transparent text-inherit font-mono font-normal inline-block whitespace-nowrap",content:"flex flex-col",symbol:"select-none",copyButton:["group","relative","z-10","text-large","text-inherit","data-[hover=true]:bg-transparent"],copyIcon:["absolute text-inherit opacity-100 scale-100 group-data-[copied=true]:opacity-0 group-data-[copied=true]:scale-50"],checkIcon:["absolute text-inherit opacity-0 scale-50 group-data-[copied=true]:opacity-100 group-data-[copied=true]:scale-100"]},variants:{variant:{flat:"",solid:"",bordered:"border-medium bg-transparent",shadow:""},color:{default:{},primary:{},secondary:{},success:{},warning:{},danger:{}},size:{sm:{base:"px-1.5 py-0.5 text-tiny rounded-small"},md:{base:"px-3 py-1.5 text-small rounded-medium"},lg:{base:"px-4 py-2 text-medium rounded-large"}},radius:{none:{base:"rounded-none"},sm:{base:"rounded-small"},md:{base:"rounded-medium"},lg:{base:"rounded-large"}},fullWidth:{true:{base:"w-full"}},disableAnimation:{true:{},false:{copyIcon:"transition-transform-opacity",checkIcon:"transition-transform-opacity"}}},defaultVariants:{color:"default",variant:"flat",size:"md",fullWidth:!1},compoundVariants:[{variant:["solid","shadow"],color:"default",class:{copyButton:"data-[focus-visible]:outline-default-foreground"}},{variant:["solid","shadow"],color:"primary",class:{copyButton:"data-[focus-visible]:outline-primary-foreground"}},{variant:["solid","shadow"],color:"secondary",class:{copyButton:"data-[focus-visible]:outline-secondary-foreground"}},{variant:["solid","shadow"],color:"success",class:{copyButton:"data-[focus-visible]:outline-success-foreground"}},{variant:["solid","shadow"],color:"warning",class:{copyButton:"data-[focus-visible]:outline-warning-foreground"}},{variant:["solid","shadow"],color:"danger",class:{copyButton:"data-[focus-visible]:outline-danger-foreground"}},{variant:"flat",color:"default",class:{base:m.J.flat.default}},{variant:"flat",color:"primary",class:{base:m.J.flat.primary}},{variant:"flat",color:"secondary",class:{base:m.J.flat.secondary}},{variant:"flat",color:"success",class:{base:m.J.flat.success}},{variant:"flat",color:"warning",class:{base:m.J.flat.warning}},{variant:"flat",color:"danger",class:{base:m.J.flat.danger}},{variant:"solid",color:"default",class:{base:m.J.solid.default}},{variant:"solid",color:"primary",class:{base:m.J.solid.primary}},{variant:"solid",color:"secondary",class:{base:m.J.solid.secondary}},{variant:"solid",color:"success",class:{base:m.J.solid.success}},{variant:"solid",color:"warning",class:{base:m.J.solid.warning}},{variant:"solid",color:"danger",class:{base:m.J.solid.danger}},{variant:"shadow",color:"default",class:{base:m.J.shadow.default}},{variant:"shadow",color:"primary",class:{base:m.J.shadow.primary}},{variant:"shadow",color:"secondary",class:{base:m.J.shadow.secondary}},{variant:"shadow",color:"success",class:{base:m.J.shadow.success}},{variant:"shadow",color:"warning",class:{base:m.J.shadow.warning}},{variant:"shadow",color:"danger",class:{base:m.J.shadow.danger}},{variant:"bordered",color:"default",class:{base:m.J.bordered.default}},{variant:"bordered",color:"primary",class:{base:m.J.bordered.primary}},{variant:"bordered",color:"secondary",class:{base:m.J.bordered.secondary}},{variant:"bordered",color:"success",class:{base:m.J.bordered.success}},{variant:"bordered",color:"warning",class:{base:m.J.bordered.warning}},{variant:"bordered",color:"danger",class:{base:m.J.bordered.danger}}]}),f=a(42255),x=a(84449),h=a(72874),b=a(58263),g=a(15032),v=a(5142),w=a(34808),y=a(25615),j=a(80986);let N={},k=0,C=!1,P=null,S=null;var F=a(3614),A=a(38549),E=a(53700),B=a(68849),J=a(83683),M=a(42669),O=a(39112),T=a(79328),D=a(21915),H=a(7878),z=a(10071),I=a(3248),_=a(54887),W=a(5031);let L=t.createContext(null);function R(e){let{children:s}=e,a=(0,t.useContext)(L),[l,r]=(0,t.useState)(0),o=(0,t.useMemo)(()=>({parent:a,modalCount:l,addModal(){r(e=>e+1),a&&a.addModal()},removeModal(){r(e=>e-1),a&&a.removeModal()}}),[a,l]);return t.createElement(L.Provider,{value:o},s)}function V(e){let s;let{modalProviderProps:a}={modalProviderProps:{"aria-hidden":!!(s=(0,t.useContext)(L))&&s.modalCount>0||null}};return t.createElement("div",{"data-overlay-container":!0,...e,...a})}function K(e){return t.createElement(R,null,t.createElement(V,e))}function X(e){let s=(0,W.Av)(),{portalContainer:a=s?null:document.body,...l}=e;if(t.useEffect(()=>{if(null==a?void 0:a.closest("[data-overlay-container]"))throw Error("An OverlayContainer must not be inside another container. Please change the portalContainer prop.")},[a]),!a)return null;let r=t.createElement(K,l);return _.createPortal(r,a)}var $=a(59836),U=a(62612),Z=a(5500),G=a(28745),Y=a(48829),Q=a(97574),q=(0,x.Gp)((e,s)=>{let a;let{Component:r,children:o,content:n,isOpen:i,portalContainer:d,placement:c,disableAnimation:u,motionProps:m,getTriggerProps:p,getTooltipProps:b,getTooltipContentProps:y}=function(e){var s,a;let l=(0,f.w)(),[r,o]=(0,x.oe)(e,D.v.variantKeys),{ref:n,as:i,isOpen:d,content:c,children:u,defaultOpen:m,onOpenChange:p,isDisabled:b,trigger:y,shouldFlip:_=!0,containerPadding:W=12,placement:L="top",delay:R=0,closeDelay:V=500,showArrow:K=!1,offset:X=7,crossOffset:$=0,isDismissable:U,shouldCloseOnBlur:Z=!0,portalContainer:G,isKeyboardDismissDisabled:Y=!1,updatePositionDeps:Q=[],shouldCloseOnInteractOutside:q,className:ee,onClose:es,motionProps:ea,classNames:el,...er}=r,et=null!=(a=null!=(s=null==e?void 0:e.disableAnimation)?s:null==l?void 0:l.disableAnimation)&&a,eo=function(e={}){let{delay:s=1500,closeDelay:a=500}=e,{isOpen:l,open:r,close:o}=(0,j.d)(e),n=(0,t.useMemo)(()=>`${++k}`,[]),i=(0,t.useRef)(),d=()=>{N[n]=m},c=()=>{for(let e in N)e!==n&&(N[e](!0),delete N[e])},u=()=>{clearTimeout(i.current),i.current=null,c(),d(),C=!0,r(),P&&(clearTimeout(P),P=null),S&&(clearTimeout(S),S=null)},m=e=>{e||a<=0?(clearTimeout(i.current),i.current=null,o()):i.current||(i.current=setTimeout(()=>{i.current=null,o()},a)),P&&(clearTimeout(P),P=null),C&&(S&&clearTimeout(S),S=setTimeout(()=>{delete N[n],S=null,C=!1},Math.max(500,a)))},p=()=>{c(),d(),l||P||C?l||u():P=setTimeout(()=>{P=null,C=!0,u()},s)};return(0,t.useEffect)(()=>()=>{clearTimeout(i.current),N[n]&&delete N[n]},[n]),{isOpen:l,open:e=>{e||!(s>0)||i.current?u():p()},close:m}}({delay:R,closeDelay:V,isDisabled:b,defaultOpen:m,isOpen:d,onOpenChange:e=>{null==p||p(e),e||null==es||es()}}),en=(0,t.useRef)(null),ei=(0,t.useRef)(null),ed=(0,t.useId)(),ec=eo.isOpen&&!b;(0,t.useImperativeHandle)(n,()=>(0,h.fg)(ei));let{triggerProps:eu,tooltipProps:em}=function(e,s,a){let{isDisabled:l,trigger:r}=e,o=(0,B.Me)(),n=(0,t.useRef)(!1),i=(0,t.useRef)(!1),d=()=>{(n.current||i.current)&&s.open(i.current)},c=e=>{n.current||i.current||s.close(e)};(0,t.useEffect)(()=>{let e=e=>{a&&a.current&&"Escape"===e.key&&(e.stopPropagation(),s.close(!0))};if(s.isOpen)return document.addEventListener("keydown",e,!0),()=>{document.removeEventListener("keydown",e,!0)}},[a,s]);let u=()=>{i.current=!1,n.current=!1,c(!0)},{hoverProps:m}=(0,E.X)({isDisabled:l,onHoverStart:()=>{"focus"!==r&&("pointer"===(0,A.Jz)()?n.current=!0:n.current=!1,d())},onHoverEnd:()=>{"focus"!==r&&(i.current=!1,n.current=!1,c())}}),{focusableProps:p}=(0,J.k)({isDisabled:l,onFocus:()=>{(0,A.E)()&&(i.current=!0,d())},onBlur:()=>{i.current=!1,n.current=!1,c(!0)}},a);return{triggerProps:{"aria-describedby":s.isOpen?o:void 0,...(0,F.d)(p,m,{onPointerDown:u,onKeyDown:u})},tooltipProps:{id:o}}}({isDisabled:b,trigger:y},eo,en),{tooltipProps:ep}=function(e,s){let a=(0,M.z)(e,{labelable:!0}),{hoverProps:l}=(0,E.X)({onHoverStart:()=>null==s?void 0:s.open(!0),onHoverEnd:()=>null==s?void 0:s.close()});return{tooltipProps:(0,F.d)(a,l,{role:"tooltip"})}}({isOpen:ec,...(0,F.d)(r,em)},eo),{overlayProps:ef,placement:ex,updatePosition:eh}=(0,O.t)({isOpen:ec,targetRef:en,placement:(0,z.Yx)(L),overlayRef:ei,offset:K?X+3:X,crossOffset:$,shouldFlip:_,containerPadding:W});(0,I.G)(()=>{Q.length&&eh()},Q);let{overlayProps:eb}=(0,T.I)({isOpen:ec,onClose:eo.close,isDismissable:U,shouldCloseOnBlur:Z,isKeyboardDismissDisabled:Y,shouldCloseOnInteractOutside:q},ei),eg=(0,t.useMemo)(()=>{var s,a,l;return(0,D.v)({...o,disableAnimation:et,radius:null!=(s=null==e?void 0:e.radius)?s:"md",size:null!=(a=null==e?void 0:e.size)?a:"md",shadow:null!=(l=null==e?void 0:e.shadow)?l:"sm"})},[(0,g.Xx)(o),et,null==e?void 0:e.radius,null==e?void 0:e.size,null==e?void 0:e.shadow]),ev=(0,t.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...(0,F.d)(eu,e),ref:(0,H.l)(s,en),"aria-describedby":ec?ed:void 0}},[eu,ec,ed,eo]),ew=(0,t.useCallback)(()=>({ref:ei,"data-slot":"base","data-open":(0,w.PB)(ec),"data-arrow":(0,w.PB)(K),"data-disabled":(0,w.PB)(b),"data-placement":(0,z.sK)(ex,L),...(0,F.d)(ep,eb,er),style:(0,F.d)(ef.style,er.style,r.style),className:eg.base({class:null==el?void 0:el.base}),id:ed}),[eg,ec,K,b,ex,L,ep,eb,er,ef,r,ed]),ey=(0,t.useCallback)(()=>({"data-slot":"content","data-open":(0,w.PB)(ec),"data-arrow":(0,w.PB)(K),"data-disabled":(0,w.PB)(b),"data-placement":(0,z.sK)(ex,L),className:eg.content({class:(0,v.W)(null==el?void 0:el.content,ee)})}),[eg,ec,K,b,ex,L,el]);return{Component:i||"div",content:c,children:u,isOpen:ec,triggerRef:en,showArrow:K,portalContainer:G,placement:L,disableAnimation:et,isDisabled:b,motionProps:ea,getTooltipContentProps:ey,getTriggerProps:ev,getTooltipProps:ew}}({...e,ref:s});try{let e=t.Children.count(o);if(1!==e)throw Error();a=(0,t.isValidElement)(o)?(0,t.cloneElement)(o,p(o.props,o.ref)):(0,l.jsx)("p",{...p(),children:o})}catch(e){a=(0,l.jsx)("span",{}),(0,Q.Z)("Tooltip must have only one child node. Please, check your code.")}let{ref:_,id:W,style:L,...R}=b(),V=(0,l.jsx)("div",{ref:_,id:W,style:L,children:(0,l.jsx)($.X,{features:U.H,children:(0,l.jsx)(Z.m.div,{animate:"enter",exit:"exit",initial:"exit",variants:Y.y7.scaleSpring,...(0,F.d)(m,R),style:{...(0,z.VS)(c)},children:(0,l.jsx)(r,{...y(),children:n})})})});return(0,l.jsxs)(l.Fragment,{children:[a,u&&i?(0,l.jsx)(X,{portalContainer:d,children:(0,l.jsx)("div",{ref:_,id:W,style:L,...R,children:(0,l.jsx)(r,{...y(),children:n})})}):(0,l.jsx)(G.M,{children:i?(0,l.jsx)(X,{portalContainer:d,children:V}):null})]})});q.displayName="NextUI.Tooltip";var ee=e=>(0,l.jsxs)("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",role:"presentation",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",viewBox:"0 0 24 24",width:"1em",...e,children:[(0,l.jsx)("path",{d:"M16 17.1c0 3.5-1.4 4.9-4.9 4.9H6.9C3.4 22 2 20.6 2 17.1v-4.2C2 9.4 3.4 8 6.9 8h4.2c3.5 0 4.9 1.4 4.9 4.9Z"}),(0,l.jsx)("path",{d:"M8 8V6.9C8 3.4 9.4 2 12.9 2h4.2C20.6 2 22 3.4 22 6.9v4.2c0 3.5-1.4 4.9-4.9 4.9H16"}),(0,l.jsx)("path",{d:"M16 12.9C16 9.4 14.6 8 11.1 8"})]}),es=e=>(0,l.jsx)("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",role:"presentation",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",width:"1em",...e,children:(0,l.jsx)("polyline",{points:"20 6 9 17 4 12"})}),ea=a(80208),el=(0,x.Gp)((e,s)=>{let{Component:a,domRef:r,preRef:o,children:n,slots:i,classNames:d,copied:c,copyIcon:u=(0,l.jsx)(ee,{}),checkIcon:m=(0,l.jsx)(es,{}),symbolBefore:j,disableCopy:N,disableTooltip:k,hideSymbol:C,hideCopyButton:P,tooltipProps:S,isMultiLine:F,onCopy:A,getSnippetProps:E,getCopyButtonProps:B}=function(e){var s,a,l,r;let o=(0,f.w)(),[n,i]=(0,x.oe)(e,p.variantKeys),{ref:d,as:c,children:u,symbol:m="$",classNames:j,timeout:N,copyIcon:k,checkIcon:C,codeString:P,disableCopy:S=!1,disableTooltip:F=!1,hideCopyButton:A=!1,autoFocus:E=!1,hideSymbol:B=!1,onCopy:J,tooltipProps:M={},copyButtonProps:O={},className:T,...D}=n,H=c||"div",z="string"==typeof H,I=null!=(a=null!=(s=null==e?void 0:e.disableAnimation)?s:null==o?void 0:o.disableAnimation)&&a,_={offset:15,delay:1e3,content:"Copy to clipboard",color:null!=(r=null==e?void 0:e.color)?r:null==(l=p.defaultVariants)?void 0:l.color,isDisabled:n.disableCopy,...M},W=(0,h.gy)(d),L=(0,t.useRef)(null),{copy:R,copied:V}=function({timeout:e=2e3}={}){let[s,a]=(0,t.useState)(null),[l,r]=(0,t.useState)(!1),[o,n]=(0,t.useState)(null),i=(0,t.useCallback)(()=>{o&&clearTimeout(o)},[o]),d=(0,t.useCallback)(s=>{i(),n(setTimeout(()=>r(!1),e)),r(s)},[i,e]);return{copy:(0,t.useCallback)(e=>{"clipboard"in navigator?navigator.clipboard.writeText(e).then(()=>d(!0)).catch(e=>a(e)):a(Error("useClipboard: navigator.clipboard is not supported"))},[d]),reset:(0,t.useCallback)(()=>{r(!1),a(null),i()},[i]),error:s,copied:l}}({timeout:N}),K=u&&Array.isArray(u),{isFocusVisible:X,isFocused:$,focusProps:U}=(0,y.F)({autoFocus:E}),Z=(0,t.useMemo)(()=>p({...i,disableAnimation:I}),[(0,g.Xx)(i),I]),G=(0,t.useMemo)(()=>{if(!m||"string"!=typeof m)return m;let e=m.trim();return e?"".concat(e," "):""},[m]),Y=(0,v.W)(null==j?void 0:j.base,T),Q=(0,t.useCallback)(()=>({className:Z.base({class:Y}),...(0,b.z)(D,{enabled:z})}),[Z,Y,K,D]),q=(0,t.useCallback)(()=>{var e;if(S)return;let s="";"string"==typeof u?s=u:Array.isArray(u)&&u.forEach(e=>{var a,l;let r="string"==typeof e?e:null==(l=null==(a=null==e?void 0:e.props)?void 0:a.children)?void 0:l.toString();r&&(s+=r+"\n")});let a=P||s||(null==(e=L.current)?void 0:e.textContent)||"";R(a),null==J||J(a)},[R,P,S,J,u]),ee={"aria-label":"string"==typeof _.content?_.content:"Copy to clipboard",size:"sm",variant:"light",isDisabled:S,onPress:q,isIconOnly:!0,...O},es=(0,t.useCallback)(()=>({...ee,"data-copied":(0,w.PB)(V),className:Z.copyButton({class:(0,v.W)(null==j?void 0:j.copyButton)})}),[Z,X,$,S,null==j?void 0:j.copyButton,ee,U]);return{Component:H,as:c,domRef:W,preRef:L,children:u,slots:Z,classNames:j,copied:V,onCopy:q,copyIcon:k,checkIcon:C,symbolBefore:G,isMultiLine:K,isFocusVisible:X,hideCopyButton:A,disableCopy:S,disableTooltip:F,hideSymbol:B,tooltipProps:_,getSnippetProps:Q,getCopyButtonProps:es}}({...e,ref:s}),J=(0,t.useCallback)(e=>{let{children:s}=e;return(0,l.jsx)(q,{...S,isDisabled:c||S.isDisabled,children:s})},[(0,g.Xx)(S)]),M=(0,t.useMemo)(()=>{if(P)return null;let e=m&&(0,t.cloneElement)(m,{className:i.checkIcon()}),s=u&&(0,t.cloneElement)(u,{className:i.copyIcon()}),a=(0,l.jsxs)(ea.A,{...B(),children:[e,s]});return k?a:(0,l.jsx)(J,{children:a})},[i,null==d?void 0:d.copyButton,c,m,u,A,J,N,k,P]),O=(0,t.useMemo)(()=>F&&n&&Array.isArray(n)?(0,l.jsx)("div",{className:i.content({class:null==d?void 0:d.content}),children:n.map((e,s)=>(0,l.jsxs)("pre",{className:i.pre({class:null==d?void 0:d.pre}),children:[!C&&(0,l.jsx)("span",{className:i.symbol({class:null==d?void 0:d.symbol}),children:j}),e]},"".concat(s,"-").concat(e)))}):(0,l.jsxs)("pre",{ref:o,className:i.pre({class:null==d?void 0:d.pre}),children:[!C&&(0,l.jsx)("span",{className:i.symbol({class:null==d?void 0:d.symbol}),children:j}),n]}),[n,C,F,j,null==d?void 0:d.pre,i]);return(0,l.jsxs)(a,{ref:r,...E(),children:[O,M]})});el.displayName="NextUI.Snippet";var er=a(35400),et=a(12315),eo=a(62329),en=a(78279),ei=a(56288),ed=a(2227);function ec(e){let{agent:s,address:a}=e,[r,o]=(0,t.useState)([{text:"Hey, ".concat(s.name," this side. How can I help you?"),time:s.creation,agent:!0}]),[n,i]=(0,t.useState)(""),[d,c]=(0,t.useState)(!1),u=(0,t.useRef)(),[m,p]=(0,t.useState)(!0),[f,x]=(0,t.useState)(0),[h,b]=(0,t.useState)(!1);(0,t.useEffect)(()=>{let e=["video/mp4","video/webm","video/ogg"];fetch(s.image.replace("cf-ipfs.com","ipfs.io")).then(e=>e.headers.get("content-type")).then(s=>{b(e.includes(s))})},[]);let g=e=>{let{msg:a}=e;return(0,l.jsxs)("div",{className:"flex items-end gap-4 max-w-[500px]",children:[h?(0,l.jsx)("video",{src:s.image.replace("cf-ipfs.com","ipfs.io"),className:"h-14 w-14 flex-shrink-0 max-md:h-12 max-md:w-12 rounded-full"}):(0,l.jsx)("img",{src:s.image.replace("cf-ipfs.com","ipfs.io"),className:"h-14 w-14 flex-shrink-0 max-md:h-12 max-md:w-12 rounded-full"}),(0,l.jsxs)("div",{className:"p-2 border-[#46F542] border-medium border-opacity-20 rounded-lg",children:[(0,l.jsx)("p",{className:"text-[#46F542]",children:s.name}),(0,l.jsx)("p",{className:"text-white",children:a.text}),(0,l.jsxs)("p",{className:"w-full text-[#46F542] text-right",children:[(0,en.Sy)(a.time)," ago"]})]})]})},v=e=>{let{msg:s}=e;return(0,l.jsxs)("div",{className:"flex items-end gap-4 ml-auto max-w-[500px]",children:[(0,l.jsxs)("div",{className:"border-[#46F542] border-medium border-opacity-20 p-2 rounded-lg",children:[(0,l.jsx)("p",{className:"text-[#46F542]",children:s.name.slice(0,4)+"..."+s.name.slice(-4)}),(0,l.jsx)("p",{className:"text-white text-right",children:s.text}),(0,l.jsxs)("p",{className:"w-full text-[#46F542] text-right",children:[(0,en.Sy)(s.time)," ago"]})]}),(0,l.jsx)("img",{src:"https://api.dicebear.com/9.x/identicon/svg?seed="+s.name,className:"h-14 w-14 flex-shrink-0 max-md:h-12 max-md:w-12 rounded-full"})]})};function w(e){n.length<=1||(c(!0),fetch(ed.c+"/api/ask_agent?address="+s.address+"&ask="+n,{headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(s=>{o(e=e.concat([{text:s.reply,time:Date.now()/1e3-2,agent:!0}])),c(!1),u.current.scrollTop=u.current.scrollHeight}))}return(0,l.jsxs)("div",{className:"flex-grow p-4 flex flex-col gap-4",children:[(0,l.jsxs)("div",{className:"border-medium border-[#46F542] flex-shrink-0 border-opacity-20 p-4 py-3 rounded-xl bg-opacity-10 flex items-center max-md:justify-start gap-8 overflow-x-auto scrollbar-hide",children:[(0,l.jsxs)("div",{className:"flex gap-4 items-center flex-shrink-0",children:[h?(0,l.jsx)("video",{src:s.image.replace("cf-ipfs.com","ipfs.io"),className:"h-16 w-16 max-md:h-12 max-md:w-12 rounded-full"}):(0,l.jsx)("img",{src:s.image.replace("cf-ipfs.com","ipfs.io"),className:"h-16 w-16 max-md:h-12 max-md:w-12 rounded-full"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"text-2xl font-bold whitespace-nowrap w-fit max-md:text-xl text-white",children:s.name}),(0,l.jsxs)("p",{className:"text-[#46F542] font-semibold",children:["$",s.symbol.replace("$","").toUpperCase()]})]})]}),(0,l.jsxs)("div",{className:"flex gap-4 flex-shrink-0",children:[(0,l.jsxs)("div",{className:"flex flex-col items-center p-3 py-1 border-medium border-[#46F542] rounded-lg",children:[(0,l.jsx)("p",{className:"text-xs text-white opacity-50",children:"MKT CAP"}),(0,l.jsxs)("p",{className:"text-md text-white",children:["$",(0,en.fQ)(s.market_cap)]})]}),(0,l.jsxs)("div",{className:"flex flex-col items-center p-3 py-1 border-medium border-[#46F542] rounded-lg",children:[(0,l.jsx)("p",{className:"text-xs text-white opacity-50",children:"Age"}),(0,l.jsx)("p",{className:"text-md text-white",children:(0,en.Sy)(s.creation)})]}),(0,l.jsxs)("div",{className:"flex flex-col items-center p-3 py-1 border-medium border-[#46F542] rounded-lg",children:[(0,l.jsx)("p",{className:"text-xs text-white opacity-50",children:"CA"}),(0,l.jsx)(el,{codeString:s.address,hideSymbol:!0,classNames:{base:"p-0 bg-transparent text-white",copyButton:"h-[20px]"},children:s.address.slice(0,4)+"..."+s.address.slice(-4)})]})]}),(0,l.jsx)("div",{className:"flex-grow flex items-center gap-4 flex-shrink-0 justify-end",children:(0,l.jsxs)("div",{className:"flex gap-4",children:[s.website?(0,l.jsx)(er.O,{href:s.website,target:"_blank",children:(0,l.jsx)("img",{src:"/assets/web.svg",className:"h-8 w-8"})}):"",s.telegram?(0,l.jsx)(er.O,{href:s.telegram,target:"_blank",children:(0,l.jsx)("img",{src:"/assets/telegram.svg",className:"h-8 w-8"})}):"",s.twitter?(0,l.jsx)(er.O,{href:s.twitter,target:"_blank",children:(0,l.jsx)("img",{src:"/assets/twitter.svg",className:"h-7 w-7"})}):"",s.description?(0,l.jsx)(er.O,{href:"https://pump.fun/coin/"+s.address,target:"_blank",children:(0,l.jsx)("img",{src:"https://pump.fun/_next/image?url=%2Flogo.png&w=64&q=75",className:"h-8 h-8"})}):""]})})]}),(0,l.jsxs)("div",{className:"flex flex-grow gap-4 overflow-hidden",children:[(0,l.jsxs)("div",{className:"border-medium border-[#46F542] border-opacity-20 p-4 py-3 rounded-xl flex items-center flex-grow mb-2 flex-col overflow-hidden",children:[(0,l.jsxs)("div",{className:"flex-grow flex-col flex p-8 w-full px-0 overflow-y-scroll gap-4 scrollbar-hide",ref:u,children:[r.map(e=>e.agent?(0,l.jsx)(g,{msg:e}):(0,l.jsx)(v,{msg:e})),d?(0,l.jsx)(et.c,{color:"default"}):""]}),(0,l.jsxs)("div",{className:"w-full flex gap-4",children:[(0,l.jsx)(eo.Y,{isDisabled:d,value:n,onValueChange:i,placeholder:"Type a message...",size:"lg",radius:"sm",variant:"bordered",classNames:{inputWrapper:"!border-[#46F542]",input:"text-white font-medium placeholder:text-white"},onKeyDown:e=>{if("Enter"==e.key){if(!a){ei.toast.info("Please connect your wallet.");return}let e=r.concat([{text:n,time:Date.now()/1e3-2,name:a.toString()}]);o(e),w(e),i("")}}}),(0,l.jsx)(ea.A,{onClick:()=>{if(!a){ei.toast.info("Please connect your wallet.");return}let e=r.concat([{text:n,time:Date.now()/1e3-2,name:a.toString()}]);o(e),w(e),i("")},isDisabled:d,isIconOnly:!0,variant:"bordered",size:"lg",radius:"sm",children:(0,l.jsx)("img",{src:"/assets/arrow-right.svg"})})]})]}),(0,l.jsxs)("div",{className:"border-medium border-[#46F542] border-opacity-20 p-4 py-3 rounded-xl h-fit gap-4 flex flex-col max-lg:hidden",children:[(0,l.jsxs)("div",{className:"w-full flex",children:[(0,l.jsx)(ea.A,{onPress:()=>p(!0),size:"lg",radius:"sm",className:"rounded-r-none flex-grow font-bold "+(m?"bg-[#46F542]":"bg-[#46F542] bg-opacity-10 font-medium text-white"),children:"Buy"}),(0,l.jsx)(ea.A,{onPress:()=>p(!1),size:"lg",radius:"sm",className:"rounded-l-none flex-grow font-bold "+(m?"bg-[#F31260] bg-opacity-10 font-medium text-white":"bg-[#F31260] text-white"),children:"Sell"})]}),(0,l.jsx)(eo.Y,{value:f,onValueChange:x,type:"number",size:"lg",endContent:(0,l.jsxs)("div",{className:"flex gap-2 items-center justify-end",children:[m?"":"%",m?(0,l.jsx)("img",{className:m?"w-6":"w-6 rounded-full",src:"https://cryptologos.cc/logos/solana-sol-logo.svg?v=035"}):h?(0,l.jsx)("video",{className:m?"w-6":"w-6 rounded-full",src:s.image.replace("cf-ipfs.com","ipfs.io")}):(0,l.jsx)("img",{className:m?"w-6":"w-6 rounded-full",src:s.image.replace("cf-ipfs.com","ipfs.io")})]}),variant:"bordered",radius:"sm",classNames:{inputWrapper:m?"!border-[#46F542]":"!border-[#F31260]",input:"max-md:text-[16px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"},placeholder:"0.0"}),m?(0,l.jsxs)("div",{className:"flex w-full flex-col gap-4",children:[(0,l.jsx)("div",{className:"flex gap-2",children:[.1,.5,1].map(e=>(0,l.jsxs)(ea.A,{onClick:()=>x(e),radius:"sm",className:"font-bold flex-grow",variant:"bordered",children:[e," SOL"]}))}),(0,l.jsx)("div",{className:"flex gap-2",children:[2,5,10].map(e=>(0,l.jsxs)(ea.A,{onClick:()=>x(e),radius:"sm",className:"font-bold flex-grow",variant:"bordered",children:[e," SOL"]}))})]}):(0,l.jsx)("div",{className:"flex w-full flex-col gap-4",children:(0,l.jsx)("div",{className:"flex gap-2",children:["25%","50%","100%"].map(e=>(0,l.jsx)(ea.A,{onClick:()=>x(parseInt(e.replace("%"))),radius:"sm",className:"font-bold flex-grow border-[#F31260]",variant:"bordered",children:e}))})}),(0,l.jsxs)(ea.A,{isDisabled:!a,onClick:()=>ei.toast.info("Coming soon"),className:"mt-10 font-bold "+(m?"bg-[#46F542] text-black":"bg-[#F31260] text-white"),radius:"sm",children:[m?"Buy":"Sell"," Tokens"]})]})]})]})}var eu=a(33440);function em(e){let{agent:s}=e,[a,m]=(0,t.useState)(0),[p,f]=(0,t.useState)("Agent"),[x,h]=(0,t.useState)(""),b=i.Q.Mainnet,g=(0,t.useMemo)(()=>[new d.O,new c.e,new u.X],[b]);return(0,l.jsx)(o.U,{endpoint:"https://wallet.okx.com/fullnode/sol/discover/rpc",children:(0,l.jsx)(n.n,{wallets:g,autoConnect:!0,children:(0,l.jsxs)("main",{className:"dark absolute w-full h-full bg-black overflow-hidden",children:[(0,l.jsx)("div",{className:"!bg-[url(https://res.cloudinary.com/dvwrpep92/image/upload/v1732456007/Frame_37161_jeooci.png)] absolute w-full h-full bg-cover bg-center"}),(0,l.jsxs)("div",{className:"flex gap-2 absolute h-full w-full max-md:flex-col max-md:overflow-y-scroll scrollbar-hide",children:[(0,l.jsx)(eu.Z,{address:x,setAddress:h,mode:p,setMode:f,hideHeader:a,setHideHeader:m}),(0,l.jsx)(r.Z,{agent:s,address:x,setAddress:h,mode:p,setMode:f,hideHeader:a,setHideHeader:m}),(0,l.jsx)(ec,{address:x,agent:s})]})]})})})}}},function(e){e.O(0,[814,288,998,837,971,69,744],function(){return e(e.s=82450)}),_N_E=e.O()}]);