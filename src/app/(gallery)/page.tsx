import { ButtonLink } from '@/components/ButtonLink'
import { Card } from '@/components/Card/Card'
import React from 'react'

export default function Home() {
  return (
    <div>
      <h1>Made with Xata</h1>
      <h2>Explore the possibilities by checking out some amazing apps built with Xata.</h2>

      {/* slider */}

      <div className="page">
        <div className="col-start-4 col-span-6">
          <h2>We'd love to see what you create, share your own projects with us, in our community!</h2>
          <div><ButtonLink href="#" label="Submit Your Project" /></div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-[60px]">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>


    </div>
  )
}
