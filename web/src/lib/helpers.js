export function mapEdgesToNodes(data) {
  if (!data.edges) return [];
  return data.edges.map(edge => edge.node);
}

export function buildImageObj(source) {
  return {
    asset: {
      _ref: source.asset && (source.asset._ref || source.asset._id)
    },
    // Doesn't add these props if they are empty
    ...(source.crop && { crop: source.crop }),
    ...(source.hotspot && { hotspot: source.hotspot })
  };
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
