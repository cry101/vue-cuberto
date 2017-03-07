import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'


Vue.use(Vuex);

// 先写个假数据
const state = {
  	homeDate : {
        first : {
            letter : 'c',
            state : '',
            title : "Digital",
            line1 : "Creative Agency"
        },
        arr : [{
            letter : 'y',
            state : '',
            title : "yolla",
            line1 : "App designed for calls",
            line2 : "with HD sound quality",
            line3 : "and low fees."
          },{
            letter : 'h',
            state : '',
            title : "hyphen",
            line1 : "Built a professional",
            line2 : "instant messenger for",
            line3 : "business communication."
          },{
            letter : 'n',
            state : '',
            title : "neemble",
            line1 : "Built award-winning",
            line2 : "website for a mobile",
            line3 : "acquisition company."
          },{
            letter : 'b',
            state : '',
            title : "borough",
            line1 : "Designed and built",
            line2 : "a social application",
            line3 : "for study-abroad students."
          },{
            letter : 't',
            state : '',
            title : "tradingview",
            line1 : "Building a research and",
            line2 : "blogging web platform",
            line3 : "for financial markets."
          }]
     },
     projectsData : {
     		items : [{
     				year: 2016,
     				data: [{
     					type : 1,
     					name : "raiffeisen",
     					line1 : "Updated a leading",
	            line2 : "banking system with an",
	            line3 : "innovative ATM experience.",
	            letter : 'r',
            	state : 'immediateShow,immediateSplit',
     				},{
     					type : 1,
     					name : "polymatica",
     					line1 : "Building a business",
	            line2 : "analytics web platform",
	            line3 : "based on OLAP-server.",
	            letter : 'p',
            	state : 'immediateShow,immediateSplit',
     				},{
     					type : 1,
     					name : "borough",
     					line1 : "Designed and built",
	            line2 : "a social application",
	            line3 : "for study-abroad students.",
	            letter : 'b',
            	state : 'immediateShow,immediateSplit',
     				},{
     					type : 1,
     					name : "hyphen",
     					line1 : "Building a business",
	            line2 : "analytics web platform",
	            line3 : "based on OLAP-server.",
	            letter : 'h',
            	state : 'immediateShow,immediateSplit',
     				},{
     					type : 2,
     					name : "polymaze",
     					bgcolor : "#f15056",
	            desc : "Polymaze is a digital platform capable of connecting media companies, brands, and publishers with the best content creators on the planet. Our task was to develop a website and branding strategy reflective of the company’s innovative approach to media generation.",
     				},{
     					type : 1,
     					name : "tradingview",
     					line1 : "Building a research and",
	            line2 : "blogging web platform",
	            line3 : "for financial markets.",
	            letter : 't',
            	state : 'immediateShow,immediateSplit',
     				}]
     		},{
     			year : 2015,
     			data : [{
     					type : 1,
     					name : "yolla",
     					line1 : "App designed for calls",
	            line2 : "with HD sound quality",
	            line3 : "and low fees.",
	            letter : 'y',
            	state : 'immediateShow,immediateSplit',
     				},{
     					type : 1,
     					name : "neemble",
     					line1 : "Built award-winning",
	            line2 : "website for a mobile",
	            line3 : "acquisition company.",
	            letter : 'n',
            	state : 'immediateShow,immediateSplit',
     				},{
     					type : 2,
     					name : "bluee",
     					bgcolor : "#53bee3",
	            desc : "Bluee — a free application for international calls and SMS - approached us to help improve their iOS and Android user experience. In order to accomplish their goals, we engaged in a complete overhaul of their UI and UX to make the app unmistakably intuitive.",
     				},{
     					type : 2,
     					name : "socialqnect",
     					bgcolor : "#fee000",
	            desc : "Qnect is a platform that utilities student networks to deliver mobile ticketing and advertising services for public and private events. In order to make Qnect more attractive to their using audience, they engaged us to help improve the UX of their iOS app, specifically, the administration panel on the iOS app.",
     				},{
     					type : 2,
     					name : "tooz",
     					bgcolor : "#3a69d1",
	            desc : "Giving people the power to connect with ease is the essence of Tooz, an app that allows to users to meet new people by pushing their geolocation and online availability to other Tooz users in their area. Tooz asked us to help them bring their app from concept to reality, so we did a ground-floor iOS design, capped off with a seamlessly intuitive dashboard for users.",
     				},{
     					type : 1,
     					name : "ibox",
     					line1 : "Created a mobile",
	            line2 : "payment and business",
	            line3 : "analytics service.",
	            letter : 'i',
            	state : 'immediateShow,immediateSplit',
     				}]
     		}]
     }
};

export default new Vuex.Store({
  state,
  mutations,
  actions
})