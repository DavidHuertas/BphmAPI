import { JSONDriver } from "db/driver";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  const Bar = new JSONDriver("bar");
  await Bar.init();

  switch (method) {
    case "GET":
      try {
        const bar = Bar.findById(id);
        res.status(200).json({
          success: true,
          count: bar.data.length,
          data: bar.data,
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
