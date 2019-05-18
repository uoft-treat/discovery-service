import {IApi} from "../../model/Api";

export class CreateNewApiResponse {
    _id: string;

    /**
     * Construct this DTO from a model.
     * @param model Message model.
     */
    static constructFromModel(model: IApi) {
        let dto = new CreateNewApiResponse();
        dto._id = model._id.toString();
        return dto;
    }
}
