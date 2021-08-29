import React from 'react'
import { NavBar } from './NavBar'
export const CentralContent = () => {
	
	
	const Content = () => {
		return (
			<div className='container mx-auto p-4'>
				<div className='grid grid-cols-2 grid-rows-2 gap-4'>
					<div className='col-span-2 row-span-1 bg-pink-600 h-60 flex'>
						<h1 className='my-auto mx-auto'>grafico grande</h1>
					</div>
					<div className='col-span-1 row-span-1 bg-blue-500 flex' >
						<h1 className='my-auto mx-auto'>grafico torta</h1>
					</div>
					<div className='col-span-1 row-span-1 bg-purple-600 flex'>
						<h1 className='my-auto mx-auto'>tabla detallada</h1>
					</div>
				</div>
			</div>
			
		)
	}

	return(
		<div className='col-span-4 bg-green-500 h-screen'>
			<NavBar />
			<Content />
    	</div>
	)
}