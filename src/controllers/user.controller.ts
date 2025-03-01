import type { handleUnaryCall, UntypedHandleCall } from "@grpc/grpc-js";
import type {
    FetchUserRequest,
    FetchUserResponse,
    GetUserRequest,
    GetUserResponse,
    UserSayHelloRequest,
    UserSayHelloResponse,
} from "../generated/models/user.model";
import { Status } from "@grpc/grpc-js/build/src/constants";
import type { UserServiceServer } from "../generated/services/user.services";

export class UserController implements UserServiceServer {
    [key: string]: UntypedHandleCall;

    getUser: handleUnaryCall<GetUserRequest, GetUserResponse> = (
        call,
        callback
    ) => {
        try {
            console.log("GetUserRequest called", call.request);
            const userResponse: GetUserResponse = {
                id: "somethingId",
                name: "somethingName Peerapat kariart",
            };
            callback(null, userResponse);
        } catch (error) {
            console.error(error);
            callback({
                code: Status.UNKNOWN,
                details: "An error occurred while processing the request.",
            });
        }
    };

    userSayHello: handleUnaryCall<UserSayHelloRequest, UserSayHelloResponse> = (
        call,
        callback
    ) => {
        try {
            console.log("UserSayHelloRequest called", call.request);
            const userSayHelloResponse: UserSayHelloResponse = {
                message: `Hello, ${call.request.name}`,
            };
            callback(null, userSayHelloResponse);
        } catch (error) {
            console.error(error);
            callback({
                code: Status.UNKNOWN,
                details: "An error occurred while processing the request.",
            });
        }
    };

    fetchUser: handleUnaryCall<FetchUserRequest, FetchUserResponse> = (
        call,
        callback
    ) => {
        try {
            console.log("FetchUserRequest called", call.request);
            const fetchUserResponse: FetchUserResponse = {
                users: [
                    {
                        id: "somethingId",
                        name: "somethingName Peerapat kariart",
                    },
                    {
                        id: "anotherId",
                        name: "anotherName",
                    },
                    {
                        id: "thirdId",
                        name: "thirdName",
                    },
                ],
            };
            callback(null, fetchUserResponse);
        } catch (error) {
            console.error(error);
            callback({
                code: Status.UNKNOWN,
                details: "An error occurred while processing the request.",
            });
        }
    };
}
