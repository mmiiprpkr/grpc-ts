import { Server, ServerCredentials } from "@grpc/grpc-js";
import { UserServiceService } from "./generated/services/user.services";
import { ProductServiceService } from "./generated/services/product.services";

import { UserController } from "./controllers/user.controller";
import { ProductController } from "./controllers/product.controller";

const userServiceController = new UserController();
const productController = new ProductController();

(async () => {
    try {
        const service = new Server();

        service.addService(UserServiceService, userServiceController);
        service.addService(ProductServiceService, productController);

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
