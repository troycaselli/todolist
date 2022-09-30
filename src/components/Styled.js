import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #e5e6e1;
`;

const Input = styled.input`
    width: 300px;
    margin: 0 0 0 20px;
    border-radius: 5px;
    border: 2px solid #7c9e9d;
    outline-color: #7c9e9d;
    background: #b6cdc7;
    color: #293535;
`;

const Header = styled.h1`
    color: #293535;
    margin: 20px 0 20px 20px;
`;

const List = styled.li`
    color: #293535;
    margin: 1% 0;
`;

const Button = styled.button`
    background: #b6cdc7;
    color: #293535;
    border: 1px solid #7c9e9d;
    border-radius: 5px;
`;

export {Container, Input, Header, List, Button};