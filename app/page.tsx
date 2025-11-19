import ExploreBtn from '@/components/button'
import React from 'react'
import { Events } from './lib/consts'
import Eventcard from '@/components/eventcard'

const Page = () => {
  return (
    <>
    <section>

   <h1 className='text-center'>The Hub for Every Dev <br/>Event u Can't miss</h1>
   <p className='text-center mt-5'>Hackthons, Meetups, and Conferences, All in One Place</p>
    <ExploreBtn/>

    <div className='mt-20 space-y-7'>

      <h1>Featured Events</h1>
    
    <ul className='events'>
      {
        Events.map((event)=>(
          <li key={event.slug}>
            
            <Eventcard {...event}/>

          </li>
        ))
      }
    </ul>
    </div>
    </section>
    </>
  )
}

export default Page
