import styled from 'styled-components';
import React from 'react';


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
const Input = styled.input`
    display: flex;
    margin: 10px 10px;
`

class Form extends React.Component {
    render() {
        return (
            <Wrapper>
                <Title>
                    Meo meo meo
                </Title>
                <Input ></Input>
                <Input ></Input>
                <Input ></Input>
                <Input ></Input>
            </Wrapper>
        )
    }
}

export default Form;