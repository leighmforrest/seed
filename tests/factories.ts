import { factory } from "@factory-js/factory";
import { faker } from "@faker-js/faker";

export const todoFactory = factory.define({
  props: {
    userId: () => faker.number.int({ min: 1, max: 1000 }),
    id: () => faker.number.int({ min: 1, max: 100000 }),
    title: () => faker.lorem.words({ min: 1, max: 4 }),
    completed: () => faker.datatype.boolean(),
  },
  vars: {}
});