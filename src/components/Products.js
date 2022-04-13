import Product from './Product'

function Products(props) {
	return (
		<>
			{props.loading ? (
				<h4>Loading...</h4>) :
				(props.products.map((item) => <Product key={item.product_id} product={item} onAdd={props.onAdd}/>
				)
			)
			}
		</>
  )
}

export default Products