webpackJsonp([10],{"1Bar":function(e,n){},"1bDj":function(e,n){},"1mEH":function(e,n){},"2Uyi":function(e,n,t){"use strict";n.a=function(){if("micromessenger"==navigator.userAgent.toLowerCase().match(/MicroMessenger/i))return!0;return!1},n.c=function(e,n,t,o){a()(e).length&&wx.config({debug:!1,appId:e.appId,timestamp:e.timestamp,nonceStr:e.nonceStr,signature:e.signature,jsApiList:["chooseWXPay"]});wx.ready(function(){wx.checkJsApi({jsApiList:["chooseWXPay"],success:function(e){0!=e.checkResult.getLocation?n.$api.base.pay(t).then(function(e){var t;0===e.code?(t=e.data,wx.chooseWXPay({timestamp:t.timeStamp,nonceStr:t.nonceStr,package:t.package,signType:t.signType,paySign:t.paySign,success:function(e){o()},fail:function(e){n.$toast("支付失败!")}})):n.$toast("您的支付失败，请联系平台客服!")}):alert("你的微信版本太低，不支持微信JS接口，请升级到最新的微信版本！")}})})},n.d=function e(n,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";var r=!1;var i=location.href.split("#")[0];var c=navigator.userAgent;var s=!!c.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);sessionStorage.getItem("WXPAY_pathname")&&s&&(i=""+sessionStorage.getItem("WXPAY_pathname"));""!=a&&(i=a);n.$api.base.jssdk({url:i}).then(function(n){if(n.data){var a={appId:n.data.appId,timestamp:n.data.timestamp,nonceStr:n.data.nonceStr,signature:n.data.signature};wx.config({debug:!1,appId:a.appId,timestamp:a.timestamp,nonceStr:a.nonceStr,signature:a.signature,jsApiList:["chooseWXPay","onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ"]}),wx.ready(function(){r||t&&t("success")}),wx.error(function(n){r=!0,o>0?e(t,--o,location.href.split("#")[0]):t&&t("exception","微信服务异常，请稍后再试~")})}})},n.b=function(e,n,t,o){var a=160,r=153;window.screen.width<=320&&(a=136,r=130);e.qrcode=new i.a(n,{width:a,height:r,text:t}),s()(e.$refs[n]).then(function(n){e.shrareImg=URL.createObjectURL(function(e){for(var n=e.split(";base64,"),t=n[0].split(":")[1],o=window.atob(n[1]),a=o.length,r=new Uint8Array(a),i=0;i<a;++i)r[i]=o.charCodeAt(i);return new Blob([r],{type:t})}(n.toDataURL()))}),o()};var o=t("ZLEe"),a=t.n(o),r=t("LqYc"),i=t.n(r),c=t("GClJ"),s=t.n(c)},"6Ai+":function(e,n){},"6pIp":function(e,n){},DwUI:function(e,n){},G1El:function(e,n){},G6aK:function(e,n){},GMId:function(e,n){},IHx1:function(e,n){},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});t("95LH");var o=t("3gJ7"),a=t.n(o),r=(t("0Qb3"),t("Kp1G")),i=t.n(r),c=(t("9iS/"),t("lleA")),s=t.n(c),u=(t("W9sS"),t("oG52")),p=t.n(u),d=(t("x4sV"),t("6JvX")),f=t.n(d),m=(t("RY3e"),t("iJDG")),h=t.n(m),l=(t("jiVY"),t("fc2t")),g=t.n(l),b=(t("/tsM"),t("TNkH")),w=t.n(b),S=(t("4TNn"),t("o/tg")),A=t.n(S),T=(t("WIEK"),t("UC01")),I=t.n(T),_=(t("MlU5"),t("mmhA")),P=t.n(_),x=(t("ld/P"),t("blRH")),H=t.n(x),O=(t("0Gug"),t("LniK")),v=t.n(O),y=(t("0EYZ"),t("56J9")),k=t.n(y),R=(t("QoJp"),t("C2KB")),L=t.n(R),C=(t("jZvT"),t("Hpak")),X=t.n(C),U=(t("NatO"),t("oLaO")),j=t.n(U),q=(t("s70c"),t("DiXi")),M=t.n(q),W=(t("7n+v"),t("aycF")),N=t.n(W),E=t("kV13"),G=t("2Uyi"),J={name:"App",created:function(){var e=!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);if(Object(G.a)()&&e){var n=location.href.split("#")[0];"/"==n.substr(n.length-1,1)&&(n+="index"),sessionStorage.setItem("WXPAY_pathname",n)}}},Y={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var D=t("C7Lr")(J,Y,!1,function(e){t("SjPE")},null,null).exports,F=t("p7sN");E.default.use(F.a);var Q=new F.a({mode:"history",base:"/m/",routes:[{path:"/promotion",name:"promotion",meta:{title:"推广数据统计"},component:function(){return t.e(8).then(t.bind(null,"cNMc"))}},{path:"/scan",name:"scan",meta:{title:"二维码页"},component:function(){return t.e(1).then(t.bind(null,"b0mQ"))}},{path:"/merchants",name:"merchants",meta:{title:"入驻资料填写"},component:function(){return t.e(4).then(t.bind(null,"QR0b"))}},{path:"/wecatPaw",name:"wecatPaw",meta:{title:"设置密码"},component:function(){return t.e(5).then(t.bind(null,"DTdQ"))}},{path:"/nearby",name:"nearby",meta:{title:"店铺街"},component:function(){return t.e(7).then(t.bind(null,"tnEp"))}},{path:"/baiduMap",name:"baiduMap",meta:{title:"商家位置"},component:function(){return t.e(6).then(t.bind(null,"A2k9"))}},{path:"/confirmAnOrder",name:"confirmAnOrder",meta:{title:"确认订单"},component:function(){return t.e(3).then(t.bind(null,"VCkE"))}},{path:"/pay",name:"pay",meta:{title:"支付订单"},component:function(){return t.e(2).then(t.bind(null,"r+uo"))}},{path:"/search",name:"search",component:function(){return t.e(0).then(t.bind(null,"YOyO"))}}]}),$={HOST_API:"/mobile",ROOT_PATH:"",LOGO_PATH:"/mobile/index.php?m=user&c=login",header:{Ak:"b53b3a3d6ab90ce0268000151c9bde12",Sk:"b53b3a3d6ab90ce0268000151c9bde12",App:"b2b-2d6d0"}},B=t("rVsN"),K=t.n(B),V=t("84iU"),Z=t.n(V),z=Z.a.create({timeout:3e3,headers:{"Content-Type":"application/x-www-form-urlencoded"}}),ee=[],ne=Z.a.CancelToken,te=function(e){for(var n=ee.length-1;n>=0;n--)if(e){if(ee[n].u===e.url+"&"+e.method)return ee[n].f(),void ee.splice(n,1)}else ee[n].f(),ee.splice(n,1)};Q.beforeEach(function(e,n,t){te(),t()}),z.interceptors.request.use(function(e){for(var n in localStorage.getItem("b2cTokenId")&&(e.headers.Token=localStorage.getItem("b2cTokenId")),$.header)e.headers[n]=$.header[n];return te(e),e.cancelToken=new ne(function(n){ee.push({u:e.url+"&"+e.method,f:n})}),e},function(e){return K.a.error(e)});z.interceptors.response.use(function(e){return 200===e.status?e.data.error?(function(e){switch(e.data.error){case 1:A()(e.data.msg);break;default:A()(e.data.msg)}}(e),K.a.reject(e.data)):e.data.code?(function(e){switch(e.data.code){case 10:A()("登录失效，重新登录");var n=JSON.parse(sessionStorage.getItem("B2CWAP_ONEBUY_goods_id")).goods_id;window.location.href=$.LOGO_PATH+"&back_act="+encodeURIComponent(window.location.origin+"/mobile/index.php?m=goods&id="+n);break;case 1:A()(e.data.msg);break;default:A()(e.data.msg)}}(e),K.a.reject(e.data)):K.a.resolve(e.data):K.a.reject(e.data)},function(e){var n=e.response;if(n)return K.a.reject(n);A()("当前网络状态不佳，请稍后重试~")});var oe=z;function ae(e){var n,t=[];for(n in e)t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.join("&")}var re={base:{getUserInfo:function(e){return oe.post($.HOST_API+"/index.php?m=user&c=info&a=index",ae(e))},map:function(e){return oe.post($.HOST_API+"/index.php?m=store&c=info&a=location",ae(e),{headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","X-Requested-With":"XMLHttpRequest"}})},nearby:function(e){return oe.post($.HOST_API+"/index.php?m=store&ts=0.9831319806548637",ae(e),{headers:{"X-Requested-With":"XMLHttpRequest"}})},collection:function(e){return oe.post($.HOST_API+"/index.php?m=store&a=add_collect",ae(e))},region:function(e){return oe.post($.HOST_API+"/index.php?m=region&c=info&a=children",ae(e),{headers:{"X-Requested-With":"XMLHttpRequest"}})},promotion:function(e){return oe.post($.HOST_API+"/index.php?m=user&c=promotion&a=count",ae(e))},qrcode:function(e){return oe.post($.HOST_API+"/index.php?m=wechat&c=index&a=qrcode",ae(e))},userInfo:function(e){return oe.post($.HOST_API+"/index.php?m=user&c=info",ae(e))},qrcodeSeller:function(e){return oe.post($.HOST_API+"/index.php?m=user&c=promotion&a=qrcodeSeller",ae(e))},jssdk:function(e){return oe.post($.HOST_API+"/index.php?m=wechat&c=api&a=jssdk",ae(e),{headers:{"X-Requested-With":"XMLHttpRequest"}})},pay:function(e){return oe.post($.HOST_API+"/index.php?m=flow&c=order&a=pay",ae(e))},setPasswordForWeChat:function(e){return oe.post($.HOST_API+"/index.php?m=user&c=info&a=setPasswordForWeChat",ae(e),{headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","X-Requested-With":"XMLHttpRequest"}})},getGoodsList:function(e){return oe.post($.HOST_API+"/index.php?m=category&a=Recommend ",ae(e))},addCart:function(e){return oe.post($.HOST_API+"/index.php?m=cart&a=add_to_cart",ae(e))},showCartNum:function(e){return oe.post($.HOST_API+"/index.php?m=category&a=cartNum",ae(e))},search:function(e){return oe.post($.HOST_API+"/index.php?a=search",e,{headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","X-Requested-With":"XMLHttpRequest"}})}},order:{goods:function(e){return oe.post($.HOST_API+"/index.php?m=flow&c=order&a=goods",ae(e))},done:function(e){return oe.post($.HOST_API+"/index.php?m=flow&c=order&a=done",ae(e))},getCouponList:function(e,n,t){return oe.post($.HOST_API+"/index.php?m=flow&a=get_user_couon&total_goods_price="+e+"&cart_value="+n,ae(t))},cartGoodsNumber:function(e){return oe.post($.HOST_API+"/index.php?m=cart&a=cart_goods_number",ae(e))},payTime:function(e){return oe.post($.HOST_API+"/index.php?m=flow&c=order&a=payTime",ae(e))}}};E.default.use(a.a).use(i.a).use(s.a).use(p.a).use(f.a).use(h.a).use(g.a).use(w.a).use(A.a).use(I.a).use(P.a).use(H.a).use(v.a).use(k.a).use(L.a).use(X.a).use(j.a).use(M.a).use(N.a),E.default.prototype.$api=re,E.default.config.productionTip=!1,new E.default({el:"#app",router:Q,components:{App:D},template:"<App/>"})},PJwH:function(e,n){},PhHS:function(e,n){},SjPE:function(e,n){},T7Y5:function(e,n){},bNqa:function(e,n){},cwt9:function(e,n){},"iED/":function(e,n){},jbp7:function(e,n){},lqgb:function(e,n){},mYnd:function(e,n){},sjGw:function(e,n){},tIJk:function(e,n){},vKBy:function(e,n){}},["NHnr"]);