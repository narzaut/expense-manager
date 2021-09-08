import React from 'react';

export const LeftBar = () => {
	return (
		<div className='w-1/5 bg-gray-600 h-screen'>
			<div className='h-1/6 bg-yellow-600 flex'>
				<h1 className='my-auto mx-auto'>logo app</h1>
			</div>
			<div className='h-1/6 bg-purple-600 flex'>
				<h1 className='my-auto mx-auto'>datos de usuario</h1>
			</div>
			<div className='h-4/6 flex items-center justify-center'>
				<h1 className=' '>opciones</h1>
			</div>
		</div>
	)
}

