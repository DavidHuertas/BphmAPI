import { JSONDriver } from "db/driver";
import { parseLimit } from "utils/responsePipes";

export default async function handler(req, res) {
  const { method } = req;
  const pageOptions = {
    page: parseInt(req.query.page, 10) || 0,
    limit: parseLimit(req.query.limit),
    name: req.query.name || undefined,
  };

  const Bar = new JSONDriver("bar");
  await Bar.init();

  switch (method) {
    case "GET":
      try {
        var Bars;
        if (pageOptions.name) {
          Bars = Bar.search({ name: pageOptions.name })
            .skip(pageOptions.page * pageOptions.limit)
            .limit(pageOptions.limit);
        } else {
          Bars = Bar.findMany()
            .skip(pageOptions.page * pageOptions.limit)
            .limit(pageOptions.limit);
        }
        res.status(200).json({
          success: true,
          count: Bars.data.length,
          data: Bars.data,
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
