import { createRouter, createWebHashHistory, RouterView} from "vue-router";
import './app.scss'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Bio from './components/bio/Bio'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
// import Cursor from './components/cursor/Cursor'
import Resume from './components/resume/Resume'
import Experience from './components/experience/Experience'

function Routes(){

        return (
                <div>
                    <div >
                        <div ><Navbar /></div>
                        <div >
                            <RouterView/>
                        </div>
                    </div>
                </div>
            );

}

export function makeRouter(model){
    return createRouter({
      history: createWebHashHistory(),
      routes:[
    {
        path: "/",
        component: <Hero/>,
    },
    {
        path:"/bio",
        component: <Bio/>,
    },
    {
        path:"/experience",
        component: <Experience/>,
    },
    {
        path: "/portfolio",
        component: <Portfolio/>,
    },
    {
        path: "/resume",
        component: <Resume/>,
    },
    {
        path: "/contact",
        component: <Contact/>,
    },

]});
}



export { Routes }

