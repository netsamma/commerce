import Product from './Product'

function Products(props) {
	return (
		<div className='products_wrapper'>
			{props.loading ? (
				<h4>Loading...</h4>) :
				(props.products.map((item) => <Product key={item.id} product={item} onAdd={props.onAdd}/>
				)
			)
			}
		</div>
  )
}

export default Products