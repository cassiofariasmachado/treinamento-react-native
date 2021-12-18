import React, { useEffect, useState } from 'react';
import { useRepositories } from '../../api/queries/repositories';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';
import { Repository } from '../../types/repository';

import { Container } from './styles';

export const Home: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [repositories, setRepositories] = useState<Repository[]>([]);

    const { data, refetch } = useRepositories(inputValue, {
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
    }, [data])

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
                {repositories && repositories.map(repo => (
                    <div key={repo.id}>
                        <p>{repo.full_name}</p>
                    </div>
                ))}
            </section>
        </Container>
    )
}