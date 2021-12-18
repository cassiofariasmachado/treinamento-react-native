import { Repository } from "../../../types/repository";
import axiosInstance from "../axios"

export const getRepositories = async (repository: string): Promise<Repository> => {
    const response = await axiosInstance.get<Repository>(`repos/${repository}`);

    return response.data;
}