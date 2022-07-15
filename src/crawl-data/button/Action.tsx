import styled from 'styled-components';

const Button = styled.button`
	background: palevioletred;
	color:white;
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
  cursor: pointer;
`;

function Action() {
  function handleSubmit(e: any) {
    e.preventDefault();
    console.log('You clicked submit.');
  }
    return (
      <div className="Action">
        <Button onClick={() => handleSubmit}>Click Here!!</Button>
      </div>
    );
  }
  
export default Action;