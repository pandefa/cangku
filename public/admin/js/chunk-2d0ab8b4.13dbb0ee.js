(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab8b4"],{1670:function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"i-layout-page-header"},[i("div",{staticClass:"i-layout-page-header"},[i("span",{staticClass:"ivu-page-header-title"},[e._v(e._s(e.$route.meta.title))])])]),i("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[i("Form",{ref:"levelFrom",attrs:{model:e.levelFrom,"label-width":e.labelWidth,"label-position":e.labelPosition},nativeOn:{submit:function(e){e.preventDefault()}}},[i("Row",{attrs:{type:"flex",gutter:24}},[i("Col",e._b({},"Col",e.grid,!1),[i("FormItem",{attrs:{label:"搜索：","label-for":"keyword"}},[i("Input",{attrs:{search:"","enter-button":"",placeholder:"请输入模板名称"},on:{"on-search":e.userSearchs},model:{value:e.levelFrom.name,callback:function(t){e.$set(e.levelFrom,"name",t)},expression:"levelFrom.name"}})],1)],1)],1),i("Row",{attrs:{type:"flex"}},[i("Col",e._b({},"Col",e.grid,!1),[i("Button",{attrs:{type:"primary",icon:"md-add"},on:{click:e.freight}},[e._v("添加运费模板")])],1)],1)],1),i("Table",{ref:"table",staticClass:"mt25",attrs:{columns:e.columns1,data:e.levelLists,loading:e.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:e._u([{key:"icons",fn:function(e){var t=e.row;e.index;return[i("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"tabBox_img"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.icon,expression:"row.icon"}]})])]}},{key:"action",fn:function(t){var r=t.row,a=t.index;return[i("a",{on:{click:function(t){return e.edit(r.id)}}},[e._v("修改")]),1!==r.id?i("Divider",{attrs:{type:"vertical"}}):e._e(),1!==r.id?i("a",{on:{click:function(t){return e.del(r,"删除分组",a)}}},[e._v("删除")]):e._e()]}}])}),i("div",{staticClass:"acea-row row-right page"},[i("Page",{attrs:{total:e.total,current:e.levelFrom.page,"show-elevator":"","show-total":"","page-size":e.levelFrom.limit},on:{"on-change":e.pageChange}})],1)],1),i("freight-template",{ref:"template",on:{addSuccess:e.getList}})],1)},a=[],n=(i("8e6e"),i("ac6a"),i("456d"),i("96cf"),i("3b8d")),o=i("bd86"),l=i("2f62"),s=i("90e7"),c=i("5334");function u(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function d(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?u(Object(i),!0).forEach((function(t){Object(o["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var m={name:"setting_templates",components:{freightTemplate:c["a"]},data:function(){return{grid:{xl:7,lg:7,md:12,sm:24,xs:24},loading:!1,columns1:[{title:"ID",key:"id",width:80},{title:"模板名称",key:"name",minWidth:100},{title:"计费方式",key:"type",minWidth:120},{title:"指定包邮",key:"appoint",minWidth:120},{title:"排序",key:"sort",minWidth:120},{title:"添加时间",key:"add_time",minWidth:120},{title:"操作",slot:"action",fixed:"right",minWidth:120}],levelFrom:{name:"",page:1,limit:15},levelLists:[],total:0,FromData:null}},created:function(){this.getList()},computed:d(d({},Object(l["e"])("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:75},labelPosition:function(){return this.isMobile?"top":"left"}}),methods:{freight:function(){this.$refs.template.id=0,this.$refs.template.isTemplate=!0},del:function(e,t,i){var r=this,a={title:t,num:i,url:"setting/shipping_templates/del/".concat(e.id),method:"DELETE",ids:""};this.$modalSure(a).then((function(e){r.$Message.success(e.msg),r.levelLists.splice(i,1)})).catch((function(e){r.$Message.error(e.msg)}))},getList:function(){var e=this;this.loading=!0,Object(s["Ab"])(this.levelFrom).then(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(i){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=i.data,e.levelLists=r.data,e.total=r.count,e.loading=!1;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.loading=!1,e.$Message.error(t.msg)}))},pageChange:function(e){this.levelFrom.page=e,this.getList()},edit:function(e){this.$refs.template.isTemplate=!0,this.$refs.template.editFrom(e)},userSearchs:function(){this.levelFrom.page=1,this.getList()}}},p=m,h=i("2877"),f=Object(h["a"])(p,r,a,!1,null,null,null);t["default"]=f.exports}}]);