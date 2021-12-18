import styled from 'styled-components';

export const Container = styled.button`
    padding: 16px;
    width: 200px;
    border-radius: 0 5px 5px 0;
    border: 0;
    outline: none;
    background-color: ${({ theme }) => theme.colors.green_200};

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }

    span {
        font-weight: bold;
        color: ${({ theme }) => theme.colors.white};
    }
`;
