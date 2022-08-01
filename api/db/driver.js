import { JSONLoader } from "./loader";
import { readFile } from "fs/promises";

const NOT_INITIALIZED_ERROR = "JSON driver not initialized. run init() first";
const ID_NOT_FOUND_ERROR = "ID cannot be undefined.";

function matchStringsNoSpecialCharacters(str1, str2) {
  return str1.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').match(str2.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
}

function equalStringsNoSpecialCharacters(str1, str2) {
  return str1.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') == str2.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export class JSONDriver {
  constructor(model) {
    this.model = model;
    this.isInitialized = false;
  }
  data;
  model;
  isInitialized;

  async init() {
    this.data = await JSONLoader(this.model);
    this.isInitialized = true;
    return this;
  }

  findMany(filterFields, language) {
    if (!this.isInitialized) {
      throw new Error(NOT_INITIALIZED_ERROR);
    }
    if (language) {
      this.data = this.data.map((entry) => {
        for (const property in entry) {
          if (entry[property][language] !== undefined) {
            entry[property] = entry[property][language];
          }
        }
        return entry;
      });
    }
    if (!filterFields) {
      return this;
    }

    this.data = this.data.filter((entry) => {
      for (let key in filterFields) {
        if (entry[key] === undefined ||
            filterFields[key] === undefined ||
            !equalsStringsNoSpecialCharacters(entry[key], filterFields[key])) {
          return false;
        }
      }
      return true;
    });
    return this;
  }

  findById(id, language) {
    if (!id) {
      throw new Error(ID_NOT_FOUND_ERROR);
    }
    if (!this.isInitialized) {
      throw new Error(NOT_INITIALIZED_ERROR);
    }
    if (language){
      this.data = this.data.map((entry) => {
        for (const property in entry) {
          if (entry[property][language] !== undefined) {
            entry[property] = entry[property][language];
          }
        }
        return entry;
      });
    }
    this.data = this.data.find((entry) => entry.id === id);
    return this;
  }

  skip(begin = 0, end) {
    if (!this.isInitialized) {
      throw new Error(NOT_INITIALIZED_ERROR);
    }
    this.data = this.data.slice(begin, end);

    return this;
  }

  limit(amount) {
    if (!this.isInitialized) {
      throw new Error(NOT_INITIALIZED_ERROR);
    }
    this.data = this.data.slice(0, amount);

    return this;
  }

  search(filterFields, language) {
    if (!this.isInitialized) {
      throw new Error(NOT_INITIALIZED_ERROR);
    }
    if (language) {
      this.data = this.data.map((entry) => {
        for (const property in entry) {
          if (entry[property][language] !== undefined) {
            entry[property] = entry[property][language];
          }
        }
        return entry;
      });
    }
    if (!filterFields) {
      return this;
    }

    this.data = this.data.filter((entry) => {
      for (let key in filterFields) {
        if (entry[key] !== undefined &&
            filterFields[key] !== undefined &&
            matchStringsNoSpecialCharacters(entry[key], filterFields[key])) {
          return true;
        }
      }
      return false;
    });

    return this;
  }

  async join({ model, on }) {
    if (!this.isInitialized) {
      throw new Error(NOT_INITIALIZED_ERROR);
    }
    if (!model) {
      throw new Error("Model cannot be undefined.");
    }
    if (!on) {
      throw new Error("On cannot be undefined.");
    }
    const loadedModel = await JSONLoader(model);
    this.data =
      typeof this.data.map === "undefined"
        ? {
            ...this.data,
            [on]:
              typeof this.data[on] === "object"
                ? this.data[on].map((id) => {
                    return loadedModel.find(
                      (modelEntry) => modelEntry.id === id
                    );
                  })
                : [],
          }
        : this.data.map((entry) => {
            return {
              ...entry,
              [on]:
                typeof entry[on] === "object"
                  ? entry[on].map((id) => {
                      return loadedModel.find(
                        (modelEntry) => modelEntry.id === id
                      );
                    })
                  : [],
            };
          });
    return this;
  }
}
