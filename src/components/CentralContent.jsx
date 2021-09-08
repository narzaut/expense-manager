import React from 'react'
import { NavBar } from './NavBar'
export const CentralContent = () => {
	
	
	const Content = () => {
		return (
				<div className='flex   flex-1 bg-red-400 py-6 gap-4 px-40 flex-col '>
					<div className=' w-full h-1/2 bg-red-600'>
						<h1 className=''>grafico grande</h1>
					</div>
					<div className='flex w-full h-1/2 gap-4'>
						<div className='bg-green-700  w-1/2' >
							<h1 className=''>grafico torta</h1>
						</div>
						<div className='bg-green-900  w-1/2' >
							<h1 className=''>tabla detallada</h1>
						</div>
					</div>
					
				</div>
		)
	}

	return(
		<div className='flex flex-col w-full h-full'>
			<NavBar />
			<Content />
    </div>
	)
}