import { z } from "zod";

export const SquarespaceImageSchema = z.object({
  id: z.string().optional(),
  url: z.string().url(),
  altText: z.string().nullable().optional(),
});

const SquarespaceVariantSchema = z.object({
  id: z.string(),
  sku: z.string().nullable().optional(),
  pricing: z
    .object({
      basePrice: z
        .object({
          value: z.string(),
          currency: z.string(),
        })
        .optional(),
      salePrice: z
        .object({
          value: z.string(),
          currency: z.string(),
        })
        .nullable()
        .optional(),
    })
    .optional(),
  stock: z
    .object({
      quantity: z.number().nullable().optional(),
      unlimited: z.boolean().optional(),
    })
    .optional(),
  attributes: z
    .array(
      z.object({
        name: z.string(),
        value: z.string(),
      }),
    )
    .optional(),
});

export const SquarespaceProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullable().optional(),
  url: z.string().optional(),
  urlSlug: z.string().optional(),
  productType: z.string().optional(),

  images: z.array(SquarespaceImageSchema).optional(),

  variants: z.array(SquarespaceVariantSchema).optional(),

  tags: z.array(z.string()).optional(),

  isVisible: z.boolean().optional(),

  createdOn: z.string().optional(),
  modifiedOn: z.string().optional(),
});

export const SquarespaceProductsResponseSchema = z.object({
  products: z.array(SquarespaceProductSchema),
});

export type SquarespaceProduct = z.infer<typeof SquarespaceProductSchema>;

export type SquarespaceProductsResponse = z.infer<
  typeof SquarespaceProductsResponseSchema
>;
