# rehype-img-src

Rehype plugin for `next-mdx-remote`. By using it you can rewrite image src to whatever you like. 

## Example

* `dir` is used for a server path.
* `url` is used for public url.

```ts
  const source = await serialize(file.content, {
    mdxOptions: {
      // use the image size plugin, you can also specify which folder to load images from
      // in my case images are in /public/images/, so I just prepend 'public'

      rehypePlugins: [
        [
          setImageSrc,
          {
            dir: "public/images/hello-world-3/",
            url: "/images/hello-world-3/",
          },
        ],
      ],
    },
  });
```

This way you can use:

```mdx
![my image](./test.jpg)
```

And copy assets to `/public` of a `Next.js` instance. 

*More docs soon...*