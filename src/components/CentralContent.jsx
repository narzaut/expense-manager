import React from 'react'
import { NavBar } from './NavBar'
export const CentralContent = () => {
	
	
	const Content = () => {
		return (
			<div className='w-full flex-grow flex h-full  bg-green-400'>
asd
			</div>
		)
	}

	return(
		<div className='bg-red-400 w-full  '>
			<NavBar />
			<Content />
    </div>
	)
}