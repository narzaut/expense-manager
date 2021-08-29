import React from 'react';

export const LeftBar = () => {
	return (
		<div className='col-span-1 bg-gray-600 h-screen'>
			<div className='h-16 bg-yellow-600 flex'>
				<h1 className='my-auto mx-auto'>logo app</h1>
			</div>
			<div className='h-24 bg-purple-600 flex'>
				<h1 className='my-auto mx-auto'>datos de usuario</h1>
			</div>
			<h1 className='text-center my-60'>opciones</h1>
		</div>
	)
}

