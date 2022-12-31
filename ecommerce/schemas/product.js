export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Descriptions',
      type: 'string',
    },
    {
      name: 'mainCategory',
      title: 'Main Category',
      type: 'string',
    },
    {
      name: 'subCategory',
      title: 'Sub Category',
      type: 'string',
    },
    {
      name: 'colors',
      title: 'Colors',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'sizes',
      title: 'Sizes',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}
