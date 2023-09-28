import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 1rem 2rem;
    border-radius: 5px;
    border: none;
    border: 1px solid rgb(202, 200, 200);
    color: white;
    background-color: rgb(121, 118, 118);
    cursor: pointer;
    transition: 0.4s;

    &:hover {
        background-color: rgb(170, 169, 169);
        color: black;
    }

    &:active {
        background-color: rgb(241, 144, 144);
    }
`;

const StyleComponentExample = () => {
    return (
        <StyledButton>Clique aqui...</StyledButton>
    );
};

export default StyleComponentExample;