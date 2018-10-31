import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Agent from '@/components/Agent'
import List from '@/components/List'
import ScenicList from '@/components/ScenicList'
import CultureList from '@/components/CultureList'
import PersonList from '@/components/PersonList'
import ImgList from '@/components/ImgList'
import ScenicDetail from '@/components/ScenicDetail'
import CultureDetail from '@/components/CultureDetail'
import PersonDetail from '@/components/PersonDetail'
import SelfResearch from '@/components/SelfResearch'
import Form from '@/components/Form'
import Table from '@/components/Table'
import Other from '@/components/Other'
import AboutUs from '@/components/AboutUs'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {path: '/HelloWorld',name: 'HelloWorld',component: HelloWorld},
    {
        path: '/Agent',
        name: 'Agent',
        component: Agent,
    },
    {
        path: '/List',
        name:'List',
        component: List,
        children:[
                  {path: 'ScenicList',name: 'ScenicList',component: ScenicList},
                  {path: 'CultureList',name: 'CultureList',component: CultureList},
                  {path: 'PersonList',name: 'PersonList',component: PersonList,},
                  {path: 'ImgList',name: 'ImgList',component:ImgList,},             
                ]
    },
    {
        path: '/ScenicDetail/:id',
        name: 'ScenicDetail',
        component: ScenicDetail
    },
    {
        path: '/CultureDetail/:id',
        name: 'CultureDetail',
        component: CultureDetail
    },
   {
        path: '/PersonDetail/:id',
        name: 'PersonDetail',
        component: PersonDetail
    },
    {
    	path: '/SelfResearch',
    	name: 'SelfResearch',
    	component:SelfResearch,
        redirect: '/SelfResearch/Form',
        children:[
                    {path: 'Form',name: 'Form',component: Form},
				    {path: 'Table',name: 'Table',component: Table},
				    {path: 'Other',name: 'Other',component:Other},           
                ]
    },
    {path: '/AboutUs',name: 'AboutUs',component: AboutUs},
    {path:'*', redirect:'/HelloWorld'} 
  ]
})

