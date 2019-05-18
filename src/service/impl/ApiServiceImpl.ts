import {ApiService}    from "../ApiService";
import {ApiInputError} from "../error/ApiInputError";
import {IApi, Api}          from "../../model/Api";

export class ApiServiceImpl implements ApiService {

    /**
     * Create a new API instance.
     * @param name
     */
    async createNewApi(name: string): Promise<IApi> {
        if (!name) {
            throw new ApiInputError("You must provide an API name.");
        }
        let api = new Api({
            name,
            endpoints: [],
        });
        await api.save();
        return api;
    }

    /**
     * Return all APIs in system.
     */
    async listAllApis(): Promise<IApi[]> {
        return await Api.find({});
    }
}