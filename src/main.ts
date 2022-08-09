import path from 'path'
import {visit} from 'unist-util-visit'
import sizeOf from 'image-size'

type Options = {
  dir: string,
  url: string,
}

export function setImageSrc(options: Options) {
  const { dir, url } = options;

  return (tree: any, file: any) => {
    // Traverse nodes
    visit(tree, 'element', (node) => {
      if (node.tagName === 'img') {
        const src = node.properties.src;
        const absoluteUrl = path.join(url, src);
        const serverPath = path.join(dir, src);
        const dimensions = sizeOf(serverPath);

        node.properties.width = dimensions.width;
        node.properties.height = dimensions.height;
        node.properties.src = absoluteUrl;
      }
    })
  }
}
