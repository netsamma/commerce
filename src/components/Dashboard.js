import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Footer from './Footer'
import Navbar from './NavBar'
import Sidebar from './Sidebar'

export const Dashboard = () => {
  return (
	<div> 
		<Navbar/>
		<Main>
			<Sidebar/>
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
