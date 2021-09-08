import React from 'react'
import { LeftBar } from './LeftBar'
import { CentralContent  } from './CentralContent'
export const Home = () => {
	return(
		<div className='flex w-full h-screen'>
			<LeftBar />
			<CentralContent />		
    	</div>
	)
}