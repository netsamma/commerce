import React, { useReducer, useState } from "react";
import styled from "styled-components";

const formReducer = (state, event) => {
	return {
	  ...state,
	  [event.target.name]: event.target.value
	}
   }

function Form() {

  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = (event) => {
    setSubmitting(true);
	console.log(formData);
    event.preventDefault();
    alert("You have submitted the form.");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      {submitting && <div>Submitting Form...</div>}
      <fieldset>
        <legend>Caratteristiche prodotto</legend>
        <Container>
          <label htmlFor="title"> Prodotto </label>
          <input name="title" onChange={setFormData}/>
        </Container>
        <Container>
          <label htmlFor="price"> Descrizione </label>
          <input name="price" onChange={setFormData}/>
        </Container>
      </fieldset>
      <fieldset disabled>
        <legend>Magazzino</legend>
        <Container>
          <label htmlFor="title"> Pezzi inseriti </label>
          <input name="title" onChange={setFormData}/>
        </Container>
        <Container>
          <label htmlFor="price"> Prezzo </label>
          <input name="price" onChange={setFormData}/>
        </Container>
      </fieldset>
	<fieldset >
		<Container>
			<label style={{cursor: "pointer"}}htmlFor="available"> Disponibile </label>
			<input type="checkbox" id="available" name="available" onChange={setFormData}/>
		</Container>
	</fieldset>

      <button type="submit">Submit</button>
    </StyledForm>
  );
}

export default Form;

const StyledForm = styled.form`
  fieldset {
    display: flex;
    margin: 20px 0;
    padding: 20px;
  }

  input {
    margin-bottom: 20px;
    margin-top: 10px;
	cursor: pointer;
  }

  legend {
    padding: 0 20px;
    color: gray;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;
