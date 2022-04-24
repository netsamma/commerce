import styled from 'styled-components'

export const StarRating = ({className}) => {
	return (
		<StyledStarRating>
			<h5>Rating</h5>         
			{[1, 2, 3, 4, 5].map((index) => {   
				return (
					<span key={index}>&#9733;</span>   
				);
			})}
	  </StyledStarRating>
	);
};

const StyledStarRating = styled.div`
	margin-bottom: 10px;
	span{
		color: red;
	}
	h5{
		margin: 0 0 5px 0;
		color: green;
	}	
`