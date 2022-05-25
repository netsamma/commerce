import Product from "./Product";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import {url} from "../config/url"

const addProduct = () => {
  const article = { 
    title: 'Prodotto numero 2',
    price: 20.00,
    stock: 20,
    store_id: 1,
    vat_id: 1,
    image: "http://162.19.65.77:8081/lorem-256x256.png"
  };

  axios.post(url.products, article,
    {
      headers: {
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("token"))
      }
    })
    .then(response => {console.log(response); window.location.reload()})
    .catch(error => {
        console.error('There was an error!', error);
    });
};

const editProduct = () => {
	alert("Modifica prodotto");
};

const deleteProduct = (id) => {
  axios.delete(url.products+'/'+"208",
  {
    headers: {
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("token"))
    }
  }
  )
    .then(response => {console.log(response); window.location.reload()})
    .catch(error => {
      console.error('There was an error!', error);
  });
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
              delete = {deleteProduct}
            />
          ))}
        </>
      )}
    </StyledProducts>
  );
}

export default Products;

const StyledProducts = styled.div`
  grid-template-columns: repeat(4, 1fr);
  display: ${(props) => (props.inline ? "flex" : "grid")};
  flex-direction: ${(props) => (props.inline ? "column" : "row")};
  @media (max-width: 900px) {
     grid-template-columns: repeat(2, 1fr);
  }
`;
