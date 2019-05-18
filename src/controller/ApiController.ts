import {ApiService}           from "../service/ApiService";
import {CreateNewApiResponse} from "./dto/CreateNewApiResponse";
import {ListAllApisResponse}  from "./dto/ListAllApisResponse";

export class ApiController {

    apiService: ApiService;

    constructor(apiService: ApiService) {
        this.apiService = apiService;
    }

    /**
     * Handle POST /apis
     * @param req
     * @param res
     * @param next
     */
    createNewApi = async (req, res, next) => {
        try {
            res.status(201);
            res.send(
                CreateNewApiResponse.constructFromModel(
                    await this.apiService.createNewApi(req.body.name)
                )
            );
        } catch (e) {
            next(e);
        }
    };

    /**
     * Handle GET /apis
     * @param req
     * @param res
     * @param next
     */
    listAllApis = async (req, res, next) => {
        let apis = await this.apiService.listAllApis();
        let result = [];
        for(let api of apis) {
            result.push(ListAllApisResponse.constructFromModel(api));
        }
        res.send(result);
    }

    //
    // /**
    //  * Handle POST /messages request
    //  * @param req
    //  * @param res
    //  * @param next
    //  */
    // createNewMessage = async (req, res, next) => {
    //     if(!req.body.message) {
    //         return next(Boom.badRequest("You must provide a message"));
    //     }
    //     let message = await this.messageService.createNewMessage(req.body.message);
    //     res.send(CreateNewMessageResponse.constructFromModel(message));
    // };
    //
    // /**
    //  * Handle GET /messages request
    //  * @param req
    //  * @param res
    //  * @param next
    //  */
    // listAllMessages = async (req, res, next) => {
    //     let messages = await this.messageService.getAll();
    //     let response: GetOneMessageResponse[] = [];
    //     for(let msg of messages) {
    //         response.push(GetOneMessageResponse.constructFromModel(msg));
    //     }
    //     res.send(response);
    // };

}