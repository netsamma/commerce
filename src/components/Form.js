import React from 'react'
import styled from 'styled-components'

function Form() {
  return (
	<StyledForm>
		<fieldset >
			<legend>Caratteristiche prodotto</legend>
			<label htmlFor='tile' > Prodotto </label>
			<input name="title" />
			<label htmlFor='price' > Prezzo </label>
			<input name="price" />
      	</fieldset>
       <button type="submit">Submit</button>
	</StyledForm>
  )
}

export default Form

const StyledForm = styled.form`
	
	fieldset{
		display: flex;
		flex-direction: column;
		margin: 20px 0;
		padding: 20px;
	}

	input{
		margin-bottom: 20px;
		margin-top: 10px;
	}

	legend{
		padding: 0 20px;
	}
`