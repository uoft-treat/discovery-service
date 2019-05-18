import {IApi} from "../model/Api";

export interface ApiService {
    createNewApi(name: string): Promise<IApi>;

    listAllApis(): Promise<IApi[]>;
}