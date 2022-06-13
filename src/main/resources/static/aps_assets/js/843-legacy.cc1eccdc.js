"use strict";(self["webpackChunkaminer_demo"]=self["webpackChunkaminer_demo"]||[]).push([[843],{13843:function(t,a,s){s.r(a),s.d(a,{default:function(){return h}});var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("div",{staticClass:"menu_paper"},[s("h2",{staticClass:"part_title"},[s("span",{on:{click:t.checkPaper}},[s("button",{staticClass:"title switch-btn",class:{select:t.showPaper}},[t._v(" "+t._s(t.$t("scholarDetails.papers.title"))+" ")])]),s("span",{staticStyle:{"margin-left":"20px"},on:{click:t.checkPatent}},[s("button",{staticClass:"title switch-btn",class:{select:t.showPatent}},[t._v(" "+t._s(t.$t("scholarDetails.patents.title"))+" ")])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showPaper,expression:"showPaper"}],staticClass:"part_content"},[s("div",{staticClass:"opr_line"},[s("div",{staticClass:"pubs_sort"},[s("div",{staticClass:"pubs_sort_line"},[s("span",{staticClass:"label"},[t._v(t._s(t.$t("scholarDetails.papers.sort")))]),s("div",{staticClass:"sorts"},[s("span",{staticClass:"sort",class:{active:"year"===this.paperParams.orderBy},on:{click:t.orderPaperByYear}},[t._v(" "+t._s(t.$t("scholarDetails.papers.byYear"))+" ")]),s("span",{staticClass:"sort",class:{active:"cite"===this.paperParams.orderBy},on:{click:t.orderPaperByCiteCount}},[t._v(" "+t._s(t.$t("scholarDetails.papers.byCitation"))+" ")])])]),t._m(0)])]),s("div",{staticClass:"pubs_year"},[s("span",{staticClass:"label"},[t._v(t._s(t.$t("scholarDetails.papers.year")))]),s("div",{staticClass:"years"},[s("div",[s("span",{staticClass:"year",class:{active:0===this.paperParams.limit&&""===this.paperParams.year},on:{click:t.getAllPaper}},[t._v(t._s(t.$t("scholarDetails.papers.all")))]),s("span",{staticClass:"year",class:{active:10===this.paperParams.limit},on:{click:t.getRecentPaper}},[t._v(t._s(t.$t("scholarDetails.papers.top")))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:"year"===this.paperParams.orderBy,expression:"this.paperParams.orderBy==='year'"}],staticClass:"select_year"},[s("div",{staticClass:"select_year_inner"},t._l(t.yearCount,(function(a,e){return s("span",{key:e,ref:"paper-"+a.year,refInFor:!0,staticClass:"year_bar",on:{click:function(s){return t.getPaperByYear(a.year)}}},[s("span",{staticClass:"bar",staticStyle:{"max-height":"100%"},style:"height: "+a.count/t.maxCount*100+"%;"}),s("span",{staticClass:"bar_label"},[t._v(t._s(a.year))])])})),0)])])]),s("div",{staticClass:"publication_list"},t._l(this.paperList,(function(a,e){return s("div",{key:e,staticClass:"paper_item end"},[s("div",{staticClass:"content"},[s("div",{staticClass:"title"},[s("div",{staticClass:"title_line"},[s("a",{staticClass:"title-link",attrs:{href:t.$store.getters.preUrl+"/pub/"+a.id,target:"_blank"}},[s("svg-icon",{directives:[{name:"show",rawName:"v-show",value:a.showPDF,expression:"item.showPDF"}],attrs:{"icon-class":"pdf","class-name":"icon_pdf"}}),s("span",{staticClass:"paper-title"},[s("span",[t._v(t._s(a.title))])])],1)])]),s("div",{staticClass:"authors"},t._l(a.scholarList,(function(a,e){return s("span",{key:e,staticClass:"author"},[s("span",{staticClass:"no_id",class:{highLight:a.name===t.$route.params.name}},[s("span",[s("a",{attrs:{href:t.$store.getters.preUrl+"/profile/"+a.id+"/"+a.name,target:"_blank"}},[t._v(t._s(a.name))])])]),s("span",{staticClass:"mr"},[t._v(",")])])})),0),s("div",{staticClass:"conf"},[s("div",{staticClass:"venue-line"},[t._v(" "+t._s(a.journalAttr)),s("span",[t._v(t._s(null!==a.journalAttr?", ("+a.year+")":"("+a.year+")"))])])]),s("div",{staticClass:"oprs"},[s("span",{staticClass:"cited"},[s("span",[t._v(t._s(t.$t("scholarDetails.papers.cited")))]),s("span",[t._v(t._s(a.citeCount))])]),s("span",{staticClass:"bibtex"},[s("svg-icon",{attrs:{"icon-class":"cited","class-name":"icon_cited"}}),s("span",[t._v(t._s(t.$t("scholarDetails.papers.bibtex")))])],1),s("span",{staticClass:"urlPart"},[s("a",{staticClass:"url",attrs:{href:"",target:"_black"}},[s("svg-icon",{attrs:{"icon-class":"global","class-name":"icon_global"}})],1)])])])])})),0),s("div",{directives:[{name:"show",rawName:"v-show",value:0!==this.paperParams.limit,expression:"this.paperParams.limit!==0"}],staticClass:"more_paper"},[s("span",{staticClass:"more_btn"},[s("span",{on:{click:t.getAllPaper}},[t._v(t._s(t.$t("scholarDetails.papers.viewAll")))])])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showPatent,expression:"showPatent"}],staticClass:"part_content"},[s("div",{staticClass:"opr_line"},[s("div",{staticClass:"pubs_sort"},[s("div",{staticClass:"pubs_sort_line"},[s("span",{staticClass:"label"},[t._v(t._s(t.$t("scholarDetails.patents.sort")))]),s("div",{staticClass:"sorts"},[s("span",{staticClass:"sort active"},[t._v(t._s(t.$t("scholarDetails.patents.byYear")))])])]),t._m(1)])]),s("div",{staticClass:"pubs_year"},[s("span",{staticClass:"label"},[t._v(t._s(t.$t("scholarDetails.patents.year")))]),s("div",{staticClass:"years"},[s("div",[s("span",{staticClass:"year",class:{active:0===this.patentParams.limit&&""===this.patentParams.year},on:{click:t.getAllPatent}},[t._v(t._s(t.$t("scholarDetails.patents.all")))]),s("span",{staticClass:"year",class:{active:10===this.patentParams.limit},on:{click:t.getRecentPatent}},[t._v(t._s(t.$t("scholarDetails.patents.top")))])]),s("div",{staticClass:"select_year"},[s("div",{staticClass:"select_year_inner"},t._l(t.patentYearCount,(function(a,e){return s("span",{key:e,ref:"patent-"+a.year,refInFor:!0,staticClass:"year_bar",on:{click:function(s){return t.getPatentByYear(a.year)}}},[s("span",{staticClass:"bar",staticStyle:{"max-height":"100%"},style:"height: "+a.count/t.maxCount*100+"%;"}),s("span",{staticClass:"bar_label"},[t._v(t._s(a.year))])])})),0)])])]),s("div",{staticClass:"publication_list"},t._l(this.patentList,(function(a,e){return s("div",{key:e,staticClass:"paper_item end"},[s("div",{staticClass:"content"},[s("div",{staticClass:"title"},[s("div",{staticClass:"title_line"},[s("span",{staticClass:"paper-title"},[s("span",[t._v(t._s(a.name))])])])]),s("div",{staticClass:"authors"},[s("span",{staticClass:"author"},[s("span",{staticClass:"no_id",class:{highLight:a.firstScholar.name===t.$route.params.name}},[s("span",[s("a",{attrs:{href:"/#/profile/"+a.firstScholar.id+"/"+a.firstScholar.name,target:"_blank"}},[t._v(" "+t._s(a.firstScholar.name+"("+t.$t("scholarDetails.patents.firstInventor")+")")+" ")])])]),s("span",{staticClass:"mr"},[t._v(",")])]),t._l(a.scholarList,(function(a,e){return s("span",{key:e,staticClass:"author"},[s("span",{staticClass:"no_id",class:{highLight:a.name===t.$route.params.name}},[s("span",[s("a",{attrs:{href:"/#/profile/"+a.id+"/"+a.name,target:"_blank"}},[t._v(t._s(a.name))])])]),s("span",{staticClass:"mr"},[t._v(",")])])}))],2),s("div",{staticClass:"conf"},[s("div",{staticClass:"venue-line"},[t._v(" "+t._s(a.applicant)),s("span",[t._v(t._s(null!==a.applicant&&a.organization?", "+a.organization:a.organization))])])]),s("div",{staticClass:"oprs"},[s("span",{staticClass:"cited"},[s("span",[t._v(t._s(a.type))])]),s("span",{directives:[{name:"show",rawName:"v-show",value:a.state,expression:"item.state"}],staticClass:"cited2"},[s("span",[t._v(t._s(a.state))])]),s("span",{directives:[{name:"show",rawName:"v-show",value:a.applyNumber,expression:"item.applyNumber"}],staticClass:"cited2"},[s("span",[t._v(t._s(a.applyNumber))])])])])])})),0),s("div",{directives:[{name:"show",rawName:"v-show",value:0!==this.patentParams.limit,expression:"this.patentParams.limit!==0"}],staticClass:"more_paper"},[s("span",{staticClass:"more_btn"},[s("span",{on:{click:t.getAllPatent}},[t._v(t._s(t.$t("scholarDetails.patents.viewAll")))])])])])])])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"pubs_sort_line"},[s("span",{staticClass:"label"}),s("div")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"pubs_sort_line"},[s("span",{staticClass:"label"}),s("div")])}],r=(s(41539),s(54747),s(71570)),n=s(28676),l={data:function(){return{yearCount:[],maxCount:10,paperParams:{scholarId:this.$route.params.id,orderBy:"year",limit:10,year:""},paperList:[],patentYearCount:[],patentMaxCount:10,patentParams:{scholarId:this.$route.params.id,limit:10,year:""},patentList:[],showPaper:!0,showPatent:!1}},created:function(){this.getPublishArticleCount(),this.getPublishPatentCount(),this.getPaper()},methods:{getPublishArticleCount:function(){var t=this;(0,r.Zc)({scholarId:this.$route.params.id}).then((function(a){t.yearCount=a.data.rows,t.maxCount=a.data.maxCount}))},getPaper:function(){var t=this;(0,r.DA)(this.paperParams).then((function(a){a.data.forEach((function(t){t.showPDF=-1!==n.articleIndex.indexOf(t.title)})),t.paperList=a.data}))},orderPaperByYear:function(){""!==this.paperParams.year&&this.$refs["paper-".concat(this.paperParams.year)][0].classList.remove("active"),this.paperParams.orderBy="year",this.paperParams.limit=10,this.paperParams.year="",this.getPaper()},orderPaperByCiteCount:function(){this.$store.getters.logged?(""!==this.paperParams.year&&this.$refs["paper-".concat(this.paperParams.year)][0].classList.remove("active"),this.paperParams.orderBy="cite",this.paperParams.limit=10,this.paperParams.year="",this.getPaper()):this.$store.commit("user/SWITCH_STATUS")},getAllPaper:function(){this.$store.getters.logged?(""!==this.paperParams.year&&this.$refs["paper-".concat(this.paperParams.year)][0].classList.remove("active"),this.paperParams.limit=0,this.paperParams.year="",this.getPaper()):this.$store.commit("user/SWITCH_STATUS")},getRecentPaper:function(){""!==this.paperParams.year&&this.$refs["paper-".concat(this.paperParams.year)][0].classList.remove("active"),this.paperParams.limit=10,this.paperParams.year="",this.getPaper()},getPaperByYear:function(t){this.$store.getters.logged?(""!==this.paperParams.year&&this.$refs["paper-".concat(this.paperParams.year)][0].classList.remove("active"),this.$refs["paper-".concat(t)][0].classList.add("active"),this.paperParams.limit=0,this.paperParams.year=t,this.getPaper()):this.$store.commit("user/SWITCH_STATUS")},getPublishPatentCount:function(){var t=this;(0,r.c5)({scholarId:this.$route.params.id}).then((function(a){t.patentYearCount=a.data.rows,t.patentMaxCount=a.data.maxCount}))},getPatent:function(){var t=this;(0,r.M4)(this.patentParams).then((function(a){t.patentList=a.data}))},getAllPatent:function(){this.$store.getters.logged?(""!==this.patentParams.year&&this.$refs["patent-".concat(this.patentParams.year)][0].classList.remove("active"),this.patentParams.limit=0,this.patentParams.year="",this.getPatent()):this.$store.commit("user/SWITCH_STATUS")},getRecentPatent:function(){""!==this.patentParams.year&&this.$refs["patent-".concat(this.patentParams.year)][0].classList.remove("active"),this.patentParams.limit=10,this.patentParams.year="",this.getPatent()},getPatentByYear:function(t){this.$store.getters.logged?(""!==this.patentParams.year&&this.$refs["patent-".concat(this.patentParams.year)][0].classList.remove("active"),this.$refs["patent-".concat(t)][0].classList.add("active"),this.patentParams.limit=0,this.patentParams.year=t,this.getPatent()):this.$store.commit("user/SWITCH_STATUS")},checkPaper:function(){this.showPatent=!1,this.showPaper=!0,this.getPaper()},checkPatent:function(){this.showPaper=!1,this.showPatent=!0,this.getPatent()},addPaper:function(){this.$store.getters.logged||this.$store.commit("user/SWITCH_STATUS")},addPatent:function(){this.$store.getters.logged||this.$store.commit("user/SWITCH_STATUS")}}},c=l,p=s(1001),o=(0,p.Z)(c,e,i,!1,null,"23a4884c",null),h=o.exports}}]);