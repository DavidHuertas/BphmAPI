import { JSONDriver } from "db/driver";
import { parseLimit, parseObject } from "utils/responsePipes";

export default async function handler(req, res) {
  const { method } = req;
  const pageOptions = {
    page: parseInt(req.query.page, 10) || 0,
    limit: parseLimit(req.query.limit),
    name: req.query.name || undefined,
  };

  const Foo = new JSONDriver("foo");
  await Foo.init();

  switch (method) {
    case "GET":
      try {
        var Foos;
        if (pageOptions.name) {
          Foos = Foo.search({ name: pageOptions.name })
            .skip(pageOptions.page * pageOptions.limit)
            .limit(pageOptions.limit);
        } else {
          Foos = Foo.findMany()
            .skip(pageOptions.page * pageOptions.limit)
            .limit(pageOptions.limit);
        }
        Foos.data = parseObject(Foos.data, "bar/", "bar");
        res.status(200).json({
          success: true,
          count: Foos.data.length,
          data: Foos.data,
        });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
