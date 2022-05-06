import Product from './Product'
import styled from 'styled-components'

function Products(props) {
	return (
		<StyledProducts>
			{props.loading ? (
				<h4>Loading...</h4>) :
				(props.products.map((item) => 
					<Product 
						key={item.product_id?item.product_id:item.id} 
						product={item} 
						onAdd={props.onAdd}
						inline={props.inline}
					/>
				)
			)
			}
		</StyledProducts>
  )
}

export default Products

const StyledProducts = styled.div`
	width: 100%;
  	background: var(--peach);
  	display: grid;
  	grid-template-columns: repeat(4, 25%);
`