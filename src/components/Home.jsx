import React from 'react'
import { LeftBar } from './LeftBar'
import { CentralContent  } from './CentralContent'
export const Home = () => {
	return(
		<div className='grid grid-cols-5'>
			<LeftBar />
			<CentralContent />		
    	</div>
	)
}