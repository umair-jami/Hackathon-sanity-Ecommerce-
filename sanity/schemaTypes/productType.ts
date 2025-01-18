import { TrolleyIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Products",
  type: "document",
  icon: TrolleyIcon,
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "currency",
      title: "Currency",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Product Price",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    {
      name: "discountPercentage",
      type: "number",
      title: "Discount Percentage",
    },
    {
      name: "priceWithoutDiscount",
      type: "number",
      title: "Price Without Discount",
      description: "Original price before discount",
    },
    {
      name: "rating",
      type: "number",
      title: "Rating",
      description: "Rating of the product",
    },
    {
      name: "ratingCount",
      type: "number",
      title: "Rating Count",
      description: "Number of ratings",
    },
    {
      name: "new",
      type: "boolean",
      title: "New",
    },
    {
      name: "colors",
      title: "Colors",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description: 'Add tags like "new arrival", "bestseller", etc.',
    },
    {
      name: "sizes",
      type: "array",
      title: "Sizes",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description: "Add sizes like S , M , L , XL , XXL",
    },
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "blockContent",
    }),
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "T-Shirt", value: "tshirt" },
          { title: "Short", value: "short" },
          { title: "Jeans", value: "jeans" },
          { title: "Hoddie", value: "hoodie" },
          { title: "Shirt", value: "shirt" },
        ],
      },
    },
    // defineField({
    //   name: "category",
    //   title: "Category",
    //   type: "array",
    //   of: [{ type: "reference", to: { type: "category" } }],
    //   validation: (Rule) => Rule.required(),
    // }),
    defineField({
      name: "stock",
      title: "Stock",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
      price: "price",
    },
    prepare(select) {
      return {
        title: select.title,
        subtitle: `$${select.price}`,
        media: select.media,
      };
    },
  },
});
