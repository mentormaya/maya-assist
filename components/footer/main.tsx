import React from 'react'
import { ModeToggle } from '../dark-theme-toggle'

function MainFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className='w-full fixed bottom-0'>
      <div className="bg-gray-600">
        <div className="flex m-auto border-t text-gray-800 text-sm flex-col md:flex-row">
          <div className="text-white py-1 px-2">© Copyright {year}. All Rights Reserved.</div>
          <div className="md:flex-auto md:flex-row-reverse flex-row flex h-6 m-auto mr-1">
            <ModeToggle />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default MainFooter