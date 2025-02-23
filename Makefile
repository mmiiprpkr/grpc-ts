run:
	bun run src/server.ts

client:
	bun run src/client.ts

gen:
	rm -rf ./src/generated/* && \
	protoc \
		--plugin=protoc-gen-ts_proto=./node_modules/.bin/protoc-gen-ts_proto \
		--ts_proto_out=./src/generated \
		--ts_proto_opt=outputServices=grpc-js,env=node,esModuleInterop=true \
		--proto_path=src/proto \
		src/proto/services/*
