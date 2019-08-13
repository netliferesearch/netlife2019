import { format, isFuture } from 'date-fns';

export function mapEdgesToNodes(data) {
  if (!data.edges) return [];
  return data.edges.map(edge => edge.node);
}

export function filterOutDocsWithoutSlugs({ slug }) {
  return (slug || {}).current;
}

export function filterOutDocsPublishedInTheFuture({ publishedAt }) {
  return !isFuture(publishedAt);
}

export function buildImageObj(source = { asset: {} }) {
  const imageObj = {
    asset: { _ref: source.asset._ref || source.asset._id }
  };

  if (source.crop) imageObj.crop = source.crop;
  if (source.hotspot) imageObj.hotspot = source.hotspot;

  return imageObj;
}

export function formatPhoneNumber(num) {
  if (!num) return '';
  return `${num.slice(0, 3)} ${num.slice(3, 5)} ${num.slice(5, 8)}`;
}

export function toPlainText(blocks) {
  return blocks
    .map(block => {
      if (block._type !== 'block' || !block.children) {
        return '';
      }
      return block.children.map(child => child.text).join('');
    })
    .join('\n\n');
}

export function personLabel(role, services) {
  if (role) {
    return role;
  }
  if (services.length > 1) {
    return `${services[0].name} og ${services[1].name.toLowerCase()}`;
  }
  if (services[0]) {
    return services[0].name;
  }
  return '';
}
