import Product from "./Product";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";

const addProduct = () => {
  alert("Aggiungi prodotto");
};

const editProduct = () => {
	alert("Modifica prodotto");
};

function Products(props) {
  return (
    <StyledProducts inline={props.inline}>
      {props.loading ? (
        <h4>Loading...</h4>
      ) : (
        <>
          {props.inline ? (
            <button onClick={addProduct} style={{ height: "60px", margin: "10px" }}>
              <FaPlus size="30px"/>
            </button>
          ) : (
            ""
          )}
          {props.products.map((item) => (
            <Product
              key={item.product_id ? item.product_id : item.id}
              product={item}
              onAdd={props.onAdd}
              inline={props.inline}
			  edit = {editProduct}
            />
          ))}
        </>
      )}
    </StyledProducts>
  );
}

export default Products;

const StyledProducts = styled.div`
  grid-template-columns: repeat(4, 25%);
  display: ${(props) => (props.inline ? "flex" : "grid")};
  flex-direction: ${(props) => (props.inline ? "column" : "row")};
`;
