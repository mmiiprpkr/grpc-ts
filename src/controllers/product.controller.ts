import type { handleUnaryCall, UntypedHandleCall } from "@grpc/grpc-js";
import type { ProductServiceServer } from "../generated/services/product.services";
import type {
    FetchProductRequest,
    FetchProductResponse,
} from "../generated/models/product.model";
import { Status } from "@grpc/grpc-js/build/src/constants";

export class ProductController implements ProductServiceServer {
    [key: string]: UntypedHandleCall;

    public fetchProducts: handleUnaryCall<
        FetchProductRequest,
        FetchProductResponse
    > = (call, callback) => {
        try {
            console.log("FetchProductRequest called", call.request);
            const productResponse: FetchProductResponse = {
                product: {
                    category: "Category 1",
                    createdAt: "2021-09-01T00:00:00Z",
                    description: "Description of category 1",
                    id: "1",
                    image: "https://via.placeholder.com/150",
                    name: "Category 1",
                    price: 100,
                    updatedAt: "2021-09-01T00:00:00Z",
                },
            };
            callback(null, productResponse);
        } catch (error) {
            console.error(error);
            callback({
                code: Status.UNKNOWN,
                details: "An error occurred while processing the request.",
            });
        }
    };
}
