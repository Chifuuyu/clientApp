import { createRouter } from "./context";
import { z } from "zod";

export const exampleRouter = createRouter()
  .query("get-all", {
    async resolve({ ctx }) {
      return await ctx.prisma.newListing.findMany();
    },
  }).mutation("create", {
    input: z.object({
      clientNames:  z.string(),
    }),

    async resolve({ ctx, input }) {
      return await ctx.prisma.newListing.create({
        data: {
          clientNames: input.clientNames,
        },
      });
    }
  })