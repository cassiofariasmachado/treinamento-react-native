import React, { useEffect, useState } from 'react';
import { useRepositories } from '../../api/queries/repositories';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';
import { Repository } from '../../types/repository';

import { 
    Container,
    Loader,
    Error,
    RepositoryWrapper,
    RepositoryInfos,
    Image,
    RepositoryOwnerInfo,
    RepositoryName,
    RepositoryDescription,
    LinkIcon,
} from './styles';

export const Home: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [repositories, setRepositories] = useState<Repository[]>([]);

    const { data, isLoading, isError, refetch } = useRepositories(inputValue, {
        enabled: false,
    });
    
    const handleSubmit = async () => {
        try {
            await refetch();
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (data) setRepositories(old => [...old, data]);
    }, [data]);

    return (
        <Container>
            <header>
                <h1>Explore repositórios no Github.</h1>

                <div>
                    <TextInput 
                        placeholder="Digite aqui"
                        onChange={e => setInputValue(e.target.value)}
                    />
                    <Button 
                        title='Pesquisar'
                        onClick={handleSubmit}
                    />
                </div>
            </header>

            <section>
                {isLoading && (
                    <Loader>Carregando...</Loader>
                )}
                {isError && (
                    <Error>
                        Houve um erro ao buscar o repositório. Por favor, tente novamente.
                    </Error>
                )}
                {repositories && repositories.map(repo => (
                    <RepositoryWrapper key={repo.id}>
                        <RepositoryInfos>
                            <Image src={repo.owner.avatar_url} />
                            <RepositoryOwnerInfo>
                                <RepositoryName>
                                    {repo.full_name}
                                </RepositoryName>
                                <RepositoryDescription>
                                    {repo.description}
                                </RepositoryDescription>
                            </RepositoryOwnerInfo>
                        </RepositoryInfos>
                        <LinkIcon>{'>'}</LinkIcon>
                    </RepositoryWrapper>
                ))}
            </section>
        </Container>
    );
}