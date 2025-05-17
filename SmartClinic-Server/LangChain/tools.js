import { tool } from "@langchain/core/tools";

const multiply = tool(
  ({ a, b }) => {
    /**
     * Multiply a and b.
     */
    return a * b;
  },
  {
    name: "getAvailableSlots",
    description: "Extract date from message and fetch available appointment slots",
    schema: z.object({
      a: z.number(),
      b: z.number(),
    }),
  }
);