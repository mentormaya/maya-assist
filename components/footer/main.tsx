import React from 'react'
import { ModeToggle } from '../dark-theme-toggle'

function MainFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className='w-full sticky bottom-0'>
      <div className="bg-gray-600">
        <div className="flex justify-between flex-wrap m-auto border-t text-sm">
          <div className="text-white py-1 px-2">© Copyright {year}. All Rights Reserved.</div>
          <div className="md:flex-auto md:flex-row-reverse flex-row flex h-6 py-0.5 mr-1">
            <ModeToggle />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default MainFooter