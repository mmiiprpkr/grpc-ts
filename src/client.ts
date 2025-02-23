import { credentials } from "@grpc/grpc-js";
import { UserServiceClient } from "./generated/services/user";
import type { GetUserRequest } from "./generated/models/user.model";

const client = new UserServiceClient("localhost:50051", credentials.createInsecure());

const getUserRequest: GetUserRequest = {
    id: "something",
};

client.getUser(getUserRequest, (err, response) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log("res", response);
});

client.userSayHello({ name: "Peerapat" }, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log("res", res);
})
