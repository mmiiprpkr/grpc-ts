import { Server, ServerCredentials } from "@grpc/grpc-js";
import { UserServiceService } from "./generated/services/user";
import { UserController } from "./controllers/user.controller";

const userServiceController = new UserController();
(async () => {
    try {
        const service = new Server();

        service.addService(UserServiceService, userServiceController);

        const port = process.env.PORT || 50051;

        service.bindAsync(
            `localhost:${port}`,
            ServerCredentials.createInsecure(),
            (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log(`Server running on port ${port}`);
            }
        );
    } catch (error) {
        console.error(error);
    }
})();
