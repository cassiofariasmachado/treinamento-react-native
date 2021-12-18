import { useQuery, UseQueryOptions, QueryObserverResult } from "react-query";
import { Repository } from "../../../types/repository";
import { getRepositories } from "../../services/repositories";

export const useRepositories = (repository: string, options?: Omit<UseQueryOptions<Repository, unknown>, 'queryKey' | 'queryFn'>): QueryObserverResult<Repository> => 
    useQuery(['repositories', repository], () => getRepositories(repository), options);