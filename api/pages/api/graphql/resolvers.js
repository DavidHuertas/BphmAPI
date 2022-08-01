import { JSONDriver } from "db/driver";
import { parseLimit } from "utils/responsePipes";

export const resolvers = {
  Query: {
    bar: async (_, args) => {
      try {
        const limit = parseLimit(args.limit);
        const page = args.page || 0;
        delete args.limit;
        delete args.page;
        const Bar = new JSONDriver("bar");
        await Bar.init();
        return Bar.findMany(args)
          .skip(page * limit)
          .limit(limit).data;
      } catch (error) {
        throw error;
      }
    },
    getBar: async (_, args) => {
      try {
        const Bar = new JSONDriver("bar");
        await Bar.init();
        const bar = Bar.findById(args.id);
        return bar.data;
      } catch (error) {
        throw error;
      }
    },
    foo: async (_, args) => {
      try {
        const limit = parseLimit(args.limit);
        const page = args.page || 0;
        delete args.limit;
        delete args.page;
        const Foos = new JSONDriver("foo");
        await Foos.init();
        Foos.findMany(args)
          .skip(page * limit)
          .limit(limit);
        await Foos.join({ model: "bar", on: "bar" });
        return Foos.data;
      } catch (error) {
        throw error;
      }
    },
    getFoo: async (_, args) => {
      try {
        const Foos = new JSONDriver("foo");
        await Foos.init();
        const foo = Foos.findById(args.id);
        await foo.join({ model: "bar", on: "bar" });
        return foo.data;
      } catch (error) {
        throw error;
      }
    },
  },
};
