import { createRouter } from "./context";
import { z } from "zod";

export const formRouter = createRouter()
  .query("get-all", {
    async resolve({ ctx }) {
      return await ctx.prisma.newListing.findMany();
    },
  }).mutation("create", {
    input: z.object({
      clientNames:  z.string().min(4).max(180),
    }),

    async resolve({ ctx, input }) {
      return await ctx.prisma.newListing.create({
        data: {
          clientNames: input.clientNames,
        },
      });
    }
  })