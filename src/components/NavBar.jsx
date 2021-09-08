import React from 'react'
export const NavBar = () => {
	
	const Header = () => {
		return (
			<div className='bg-red-600 h-24 flex'>
				<h1 className='my-auto mx-auto'>numeros de gastos</h1>
			</div>
		)
	}
	
	return(
		<React.Fragment>
			<div className='bg-blue-500 h-12 flex'>
				<h1 className='my-auto mx-auto'>titulo de fondo</h1>
				<h1 className='my-auto mx-auto'>menu desplegable</h1>
			</div>
			<Header />
		</React.Fragment>
	)
}