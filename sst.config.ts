import { SSTConfig } from "sst";
import { Api } from "./stacks/Api";

export default {
  config(_input) {
    return {
      name: "cardinal-react-sst",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(Api);
  },
} satisfies SSTConfig;
