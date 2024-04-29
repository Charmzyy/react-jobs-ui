import React from 'react'
import Hero from "../components/Hero"
import HomeCards from "../components/HomeCards"
import JobListings from "../components/JobListings"
import ViewAll from "../components/ViewAllJobs"
const HomePage = () => {
  return (
    <>
    <Hero/>
    <HomeCards/>
    <JobListings isHome = {true}/>
    <ViewAll/>

    </>
  )
}

export default HomePage