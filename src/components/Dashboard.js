import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Footer from './Footer'
import Navbar from './NavBar'
import Sidebar from './Sidebar'
import useProducts from '../hooks/useProducts';

export const Dashboard = (props) => {
  const {setFilter} = useProducts()
  return (
	<div> 
		<Navbar numbOfCartItems={props.numbOfCartItems} setFilter={setFilter}/>
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
	min-height: 100vh;
`
