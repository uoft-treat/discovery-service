import {IApi} from "../../model/Api";

export class ListAllApisResponse {

    _id: string;
    name: string;
    endpoints: string[];

    /**
     * Construct this DTO from models.
     * @param model Message model.
     */
    static constructFromModel(model: IApi) {
        let dto = new ListAllApisResponse();
        dto._id = model._id.toString();
        dto.name = model.name;
        dto.endpoints = model.endpoints;
        return dto;
    }
}
