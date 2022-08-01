import { JSONDriver } from "db/driver";
import { parseOneObject } from "utils/responsePipes";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  const Foo = new JSONDriver("foo");
  await Foo.init();

  switch (method) {
    case "GET":
      try {
        const foo = Foo.findById(id);
        foo.data = parseOneObject(Foo.data, "bar/", "bar");
        res.status(200).json({
          success: true,
          count: foo.data.length,
          data: foo.data,
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
