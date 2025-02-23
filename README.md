# gRPC TypeScript Server

## 📌 Overview
This project is a gRPC server built using TypeScript, `@grpc/grpc-js`, and `ts-proto` for generating TypeScript types and services from `.proto` files.

## 🚀 Features
- Uses `@grpc/grpc-js` for gRPC server implementation
- Generates TypeScript types using `ts-proto`
- Supports unary RPC calls
- Implements clean architecture with controllers

## 📂 Project Structure
```
grpc-ts/
├── src/
│   ├── client.ts           # gRPC client for testing
│   ├── controllers/        # gRPC method implementations
│   │   ├── user.controller.ts
│   ├── generated/          # Auto-generated TypeScript files from .proto
│   │   ├── models/
│   │   │   ├── user.model.ts
│   │   ├── services/
│   │   │   ├── user.ts
│   ├── proto/              # Protocol Buffers (.proto) files
│   │   ├── models/
│   │   │   ├── user.model.proto
│   │   ├── services/
│   │   │   ├── user.proto
│   ├── repository/         # Data access layer
│   ├── server.ts           # Main gRPC server setup
│   ├── services/           # Business logic layer
```

## 🛠️ Installation
```sh
git clone https://github.com/mmiiprpkr/grpc-ts.git
cd grpc-ts
bun install
```

## 🚀 Run Project
```sh
make gen
make run
make client
```

