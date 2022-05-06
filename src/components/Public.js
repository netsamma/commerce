import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Footer from './Footer'
import Navbar from './NavBar'

export const Public = () => {
  return (
	<div> 
		<Navbar/>
		<Main>
			<Outlet/>
		</Main>
		<Footer />
	</div>
  )
}


const Main = styled.div`
	display: flex;
	padding: 20px;
	gap: 50px;
`