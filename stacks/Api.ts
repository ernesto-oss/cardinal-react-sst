import { StackContext, Api as ApiGateway } from "sst/constructs";

export function Api({ stack }: StackContext) {
  const api = new ApiGateway(stack, "api", {
    routes: {
      "POST /graphql": {
        type: "graphql",
        function: {
          handler: "packages/graphql/src/graphql.handler",
        },
        pothos: {
          schema: "packages/graphql/src/schema.ts",
          output: "packages/graphql/schema.graphql",
          commands: [
            "cd packages/graphql && npx @genql/cli --output ./genql --schema ./schema.graphql --esm",
          ],
        },
      },
    },
  });

  stack.addOutputs({
    API: api.url,
  });

  return api;
}
