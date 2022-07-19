import React from "react";

function SaveButton() {
	const buttonStyle = {
		padding: '5px 13px',
		borderRadius: '20px',
		backgroundColor: '#cde5c4',
		border: 'none',
		color: '#989f94',
		fontFamily: 'Slack-Lato, Slack-Fractions, applelogo, sans-serif',
		fontSize: '1rem'
	};

	return (
		<div>
          <button style={buttonStyle}>Save</button>  
		</div>
	);
};

export default SaveButton;