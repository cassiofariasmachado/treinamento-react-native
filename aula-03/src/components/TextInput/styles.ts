import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 5px 0 0 5px;
`;

export const InputField = styled.input`
    width: 100%;
    padding: 24px;
    color: ${({ theme }) => theme.colors.gray_800};
    font-size: 16px;

    border: 0;
    outline: none;
`;