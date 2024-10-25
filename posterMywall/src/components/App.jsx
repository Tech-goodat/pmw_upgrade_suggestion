import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import DynamicRoute from './DynamicRoute'
import Home from './Home'
import Login from './Login'
import SignUp from './SignUp'
import ActionCenter from './ActionCenter'
import NavBar from './NavBar'
import MyStuff from './MyStuff'
import Templates from './Templates'
import Pricing from './Pricing'
import Promote from './Promote'
import Discover from './Discover'
import SideNav from './SideNav'
import BrandKits from './BrandKits'
import ContentPlanner from './ContentPlanner'
import Dashboard from './Dashboard'
import Designs from './Designs'
import Emails from './Emails'
import SocialMediaPostes from './SocialMediaPostes'
import Team from './Team'
import CreateDesign from './CreateDesign'
import CaptionImage from './CaptionImage'
import CategorizeDesign from'./CategorizeDesign'

const App = () => {
  return (
    <Router>
      <div>
      <NavBar />
      </div>
      <div className='flex flex-1 '> <SideNav />
      <div className='ml-11 w-[1030px] mt-7 mr-7 text-gray-600'>
      <Routes>
        <Route path='/' element={<DynamicRoute element={<Home />} title='PosterMywall | Home' />}  />
        <Route path='/login' element={<DynamicRoute element={<Login />} title='PosterMywall | Login' />} />
        <Route path='/signup' element={<DynamicRoute element={<SignUp />} title='PosterMywall | SignUp' />} />
        <Route path='/action center' element={<DynamicRoute element={<ActionCenter />} title='Submit | action-center' />} />
        <Route path='/my stuff' element={<DynamicRoute element={<MyStuff />} title='PosterMywall | My Stuff' />} />
        <Route path='/templates' element={<DynamicRoute element={<Templates />} title='PosterMywall | Templates' />} />
        <Route path='/pricing' element={<DynamicRoute element={<Pricing />} title='PosterMywall | Pricing' />} />
        <Route path='/discover' element={<DynamicRoute element={<Discover />} title='PosterMywall | Discover' />} />
        <Route path='/promote' element={<DynamicRoute element={<Promote />} title='PosterMywall | Promote' />} />
        <Route path='/designs' element={<DynamicRoute element={<Designs />} title='PosterMywall | Designs' />} />
        <Route path='/emails' element={<DynamicRoute element={<Emails />} title='PosterMywall | Emails' />} />
        <Route path='/social media posts' element={<DynamicRoute element={<SocialMediaPostes />} title='PosterMywall | Social Media Posts' />} />
        <Route path='/content planner' element={<DynamicRoute element={<ContentPlanner />} title='PosterMywall | Content Planner' />} />
        <Route path='/dashboard' element={<DynamicRoute element={<Dashboard />} title='PosterMywall | Dashboard' />} />
        <Route path='/team' element={<DynamicRoute element={<Team />} title='PosterMywall | Team' />} />
        <Route path='/brand kits' element={<DynamicRoute element={<BrandKits />} title='PosterMywall | Brand Kits' />} />
        <Route path='/action center' element={<DynamicRoute element={<ContentPlanner />} title='Submit | action center' />} />
        <Route path='/new design' element={<DynamicRoute element={<CreateDesign />} title='PosterMywall | new design' />} />
        <Route path='/hashtags/:id' element={<DynamicRoute element={<CaptionImage />} title='PosterMywall | #hashtags' />} />
        <Route path='/categorize design/:id' element={<DynamicRoute element={<CategorizeDesign />} title='PosterMywall | design categories' />} />

      </Routes>
      </div>
      </div>
    </Router>
  )
}

export default App