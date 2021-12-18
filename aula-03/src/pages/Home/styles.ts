import styled from 'styled-components';

export const Container = styled.div`
   padding: 5% 0;

   header {
       h1 {
           font-size: 48px;
           margin-bottom: 40px;
       }

       div {
           display: flex;
           flex-direction: row;
           width: 100%;
       }
    }

    section {
        margin-top: 100px;
    }
`;

export const Loader = styled.p`
    margin-bottom: 24px;
    font-size: 18px;
`;

export const Error = styled.p`
    margin-bottom: 24px;
    font-size: 18px;
`;

export const RepositoryWrapper = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 16px;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;

    & + & {
        margin-top: 16px;
    }
`;

export const RepositoryInfos = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Image = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 40px;
`;

export const RepositoryOwnerInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 24px;
`;

export const RepositoryName = styled.strong`
    font-size: 24px;
`;

export const RepositoryDescription = styled.span`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.gray_400};
    margin-top: 4px;
`;

export const LinkIcon = styled.span`
    font-size: 20px;
    color: ${({ theme }) => theme.colors.gray_400};
`;
