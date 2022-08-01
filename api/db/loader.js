import { readFile } from "fs/promises";
import path from "path";

export const JSONLoader = async (model) => {
  if (!model) {
    return;
  }
  return JSON.parse(await readFile(path.resolve(process.cwd(), `./public/data/${model}.json`)));
};
