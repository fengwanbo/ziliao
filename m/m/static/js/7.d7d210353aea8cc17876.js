webpackJsonp([7],{MULo:function(t,e){},tnEp:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{show:!1,regionShow:!1,operateInfo:[{name:"自营",id:1},{name:"旗舰店",id:2},{name:"专卖店",id:3}],goodsInfo:[{name:"水果",id:4},{name:"肉类",id:5},{name:"冻品",id:6},{name:"分类4",id:7},{name:"分类5",id:8},{name:"分类6",id:9},{name:"分类七",id:10}],regionInfo:[{name:"全部",id:11},{name:"金牛",id:12},{name:"青羊",id:13},{name:"锦江",id:14},{name:"武候",id:15},{name:"高新",id:16}],list:[],regionList:[],page:1,sort:"asc",order:"sort",cat_id:0,switchText:"自营",self_run:1,title:""}},mounted:function(){var t=this,e=Date.parse(new Date);this.cat_id=void 0==this.$route.query.id?0:this.$route.query.id,this.title=void 0==this.$route.query.title?"店铺街":this.$route.query.title,void 0==this.$route.query.keywords?(this.type=0,this.keywords=""):(this.type=2,this.keywords=this.$route.query.keywords),this.$api.base.nearby({page:t.page,size:10,sort:t.sort,order:t.order,cat_id:t.cat_id,keywords:t.keywords,type:t.type}).then(function(e){t.list=e.list,t.page+=1}),this.$api.base.region({time:e}).then(function(e){t.regionList=e.data}),window.onscroll=function(){(document.documentElement.scrollTop||document.body.scrollTop)+(document.documentElement.clientHeight||document.body.clientHeight)==(document.documentElement.scrollHeight||document.body.scrollHeight)&&t.$api.base.nearby({page:t.page,size:10,sort:t.sort,order:t.order,cat_id:t.cat_id,keywords:t.keywords,type:t.type}).then(function(e){if(0!=e.list){for(var s=0;s<e.list.length;s++)t.list.push(e.list[s]);t.page+=1}else t.page=t.page})}},methods:{onClickLeft:function(){window.history.length>1?window.history.go(-1):window.location.href="/mobile/index.php"},onClickRight:function(){this.show=!0},cancel:function(){this.show=!1},submitButton:function(){},popupOperate:function(){var t=event.srcElement?event.srcElement:event.target;$(t).attr("data-id");$(t).hasClass("selectionA")?$(t).removeClass("selectionA"):$(t).addClass("selectionA").siblings().removeClass("selectionA")},popupGoods:function(){var t=event.srcElement?event.srcElement:event.target;$(t).attr("data-id");$(t).hasClass("selectionA")?$(t).removeClass("selectionA"):$(t).addClass("selectionA").siblings().removeClass("selectionA")},popupRegion:function(){var t=event.srcElement?event.srcElement:event.target;$(t).attr("data-id");$(t).hasClass("selectionA")?$(t).removeClass("selectionA"):$(t).addClass("selectionA").siblings().removeClass("selectionA")},popupSort:function(){var t=event.srcElement?event.srcElement:event.target;$(t).attr("data-id");$(t).hasClass("selectionA")?$(t).removeClass("selectionA"):$(t).addClass("selectionA").siblings().removeClass("selectionA")},getInfo:function(){var t=event.srcElement?event.srcElement:event.target,e=this,s=$(t).attr("sort"),a=$(t).attr("order");$(t).hasClass("selectionB")||$(t).addClass("selectionB").siblings().removeClass("selectionB"),$(t).find("i").remove(),"DESC"==s?($(t).append('<i class="fa fa-caret-down"></i>'),$(t).attr("sort","ASC")):($(t).append('<i class="fa fa-caret-up"></i>'),$(t).attr("sort","DESC")),this.$api.base.nearby({page:1,size:10,sort:s,order:a,cat_id:e.cat_id,keywords:e.keywords,type:e.type}).then(function(t){e.list=t.list})},addgaze:function(t){var e=event.srcElement?event.srcElement:event.target,s=($(e).attr("status"),this);this.$api.base.collection({shopid:t.shop_id}).then(function(e){switch(e.error){case 1:t.gaze_status="active",s.$toast(e.msg);break;case 2:t.gaze_status="",s.$toast(e.msg)}})},getRegion:function(){var t=event.srcElement?event.srcElement:event.target;this.regionShow=!0,$(t).hasClass("selectionB")||$(t).addClass("selectionB").siblings().removeClass("selectionB")},regionSubmit:function(t){var e=event.srcElement?event.srcElement:event.target,s=this;$(e).hasClass("region-button-active")||($(e).addClass("region-button-active").siblings().removeClass("region-button-active"),this.$api.base.nearby({page:1,size:10,sort:"DESC",cat_id:s.cat_id,district:t.region_id,keywords:s.keywords,type:s.type}).then(function(t){s.list=t.list,s.regionShow=!1}))},baiduMap:function(){this.$router.push({path:"/baiduMap"})},switchTextClick:function(){var t=event.srcElement?event.srcElement:event.target,e=this;$(t).hasClass("selectionB")?(e.self_run="",$(t).removeClass("selectionB")):($(t).addClass("selectionB").siblings().removeClass("selectionB"),e.self_run=1),this.$api.base.nearby({page:1,size:10,cat_id:e.cat_id,sort:e.sort,order:e.order,self_run:e.self_run}).then(function(t){0!=t.list?(e.list=t.list,e.page+=1):e.page=e.page})}}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("van-nav-bar",{attrs:{title:t.title,"left-arrow":""},on:{"click-left":t.onClickLeft}}),t._v(" "),s("div",{staticClass:"select-box"},[s("a",{attrs:{href:"javascript:;",order:"sort",sort:"DESC"},on:{click:t.getInfo}},[t._v("热门"),s("i",{staticClass:"fa fa-caret-down"})]),t._v(" "),s("a",{attrs:{href:"javascript:;"},on:{click:t.getRegion}},[t._v("地区")]),t._v(" "),s("a",{attrs:{href:"javascript:;"},on:{click:t.switchTextClick}},[t._v(t._s(t.switchText))]),t._v(" "),s("a",{attrs:{href:"javascript:;"},on:{click:t.baiduMap}},[t._v("附近")])]),t._v(" "),s("div",{staticClass:"nearby-content"},t._l(t.list,function(e,a){return s("section",{key:a,staticClass:"m-top08"},[s("header",{staticClass:"padding-all"},[s("a",{attrs:{href:e.url}}),t._v(" "),s("van-row",[s("van-col",{staticClass:"g-s-i-img",attrs:{span:"4"}},[s("img",{attrs:{src:"/mobile/public/img/no_image.jpg"}})]),t._v(" "),s("van-col",{staticClass:"g-s-i-title",attrs:{span:"12"}},[s("h3",{staticClass:"ellipsis-one"},[t._v(t._s(e.shop_name))]),t._v(" "),s("p",[t._v("已经有 "),s("span",{staticClass:"num11"},[t._v(t._s(e.gaze_number))]),t._v(" 人关注")]),t._v(" "),1==e.self_run?s("a",{staticClass:"g-s-i-title-tag",attrs:{href:"javascript:;"}},[t._v("自营")]):t._e()]),t._v(" "),s("van-col",{staticClass:"g-s-i-collection",attrs:{span:"4"}},[s("p",[s("van-icon",{attrs:{name:"star",color:"#ec6941"}}),t._v("\n                            "+t._s(e.commentrank)+"\n                        ")],1),t._v(" "),s("a",{directives:[{name:"show",rawName:"v-show",value:""==e.gaze_status,expression:"item.gaze_status == ''"}],staticClass:"store-list",attrs:{href:"javascript:;",status:""},on:{click:function(s){return t.addgaze(e)}}},[t._v("\n                            关注\n                        ")]),t._v(" "),s("a",{directives:[{name:"show",rawName:"v-show",value:"active"==e.gaze_status,expression:"item.gaze_status == 'active'"}],staticClass:"store-list-active",attrs:{href:"javascript:;",status:e.gaze_status},on:{click:function(s){return t.addgaze(e)}}},[t._v("\n                            已关注\n                        ")])])],1)],1),t._v(" "),0!=e.goods?s("section",{staticClass:"padding-all padding-all-box"},t._l(e.goods,function(e,a){return s("div",{key:a,staticClass:"padding-all-li"},[s("a",{attrs:{href:e.goods_url}}),t._v(" "),s("div",{staticClass:"padding-all-img"},[s("img",{attrs:{src:e.goods_thumb,alt:""}})]),t._v(" "),s("div",{staticClass:"price"},[s("p",[t._v("¥"+t._s(e.goods_price))])])])}),0):t._e()])}),0),t._v(" "),s("van-popup",{staticClass:"overlay80vh",attrs:{position:"right"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[s("div",{staticClass:"nearby-popup"},[s("div",[s("div",{staticClass:"nearby-operate h30"},[s("div",{staticClass:"nearby-popup-title"},[t._v("经营类型")]),t._v(" "),s("div",{staticClass:"nearby-operate-button"},t._l(t.operateInfo,function(e,a){return s("a",{key:a,attrs:{href:"javascript:;","data-id":e.id},on:{click:t.popupOperate}},[t._v(t._s(e.name))])}),0)]),t._v(" "),s("div",{staticClass:"nearby-goods-classify h30"},[s("div",{staticClass:"nearby-popup-title"},[t._v("商品分类")]),t._v(" "),s("div",{staticClass:"nearby-goods-button"},t._l(t.goodsInfo,function(e,a){return s("a",{key:a,attrs:{href:"javascript:;","data-id":e.id},on:{click:t.popupGoods}},[t._v(t._s(e.name))])}),0)]),t._v(" "),s("div",{staticClass:"nearby-region h30"},[s("div",{staticClass:"nearby-popup-title"},[t._v("区域")]),t._v(" "),s("div",{staticClass:"nearby-region-button"},t._l(t.regionInfo,function(e,a){return s("a",{key:a,attrs:{href:"javascript:;","data-id":e.id},on:{click:t.popupRegion}},[t._v(t._s(e.name))])}),0)])]),t._v(" "),s("div",{staticStyle:{height:"50px"}})])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"popup-button-box"},[s("van-row",[s("van-col",{attrs:{span:"12"}},[s("van-button",{attrs:{size:"large"},on:{click:t.cancel}},[t._v("取消")])],1),t._v(" "),s("van-col",{attrs:{span:"12"}},[s("van-button",{attrs:{size:"large",type:"danger"},on:{click:t.submitButton}},[t._v("确定")])],1)],1)],1),t._v(" "),s("van-popup",{attrs:{position:"top"},model:{value:t.regionShow,callback:function(e){t.regionShow=e},expression:"regionShow"}},[s("section",[s("header",{staticClass:"region-title"},[t._v("地区")]),t._v(" "),s("section",t._l(t.regionList,function(e,a){return s("a",{key:a,staticClass:"region-button",attrs:{href:"javascript:;"},on:{click:function(s){return t.regionSubmit(e)}}},[t._v(t._s(e.region_name))])}),0)])])],1)},staticRenderFns:[]};var n=s("C7Lr")(a,i,!1,function(t){s("MULo")},"data-v-4f5604e7",null);e.default=n.exports}});