// Centralized comparison management
export interface ComparisonItem {
  title: string;
  price: string;
  rating: string;
  count: string;
  image: string;
  link: string;
  category: string;
}

export const addToComparison = (product: any, category: string): { success: boolean; message: string; count: number } => {
  const existingComparison = JSON.parse(localStorage.getItem('productComparison') || '[]');
  const maxItems = 4;
  
  // Check if product is already in comparison
  if (existingComparison.some((item: ComparisonItem) => item.title === product.title)) {
    return {
      success: false,
      message: 'Product already in comparison! 🔄',
      count: existingComparison.length
    };
  }
  
  // Check if comparison is full
  if (existingComparison.length >= maxItems) {
    return {
      success: false,
      message: `You can compare up to ${maxItems} products at once! ⚠️`,
      count: existingComparison.length
    };
  }
  
  // Add product to comparison
  const comparisonItem: ComparisonItem = {
    title: product.title === "nan" ? `Premium ${category}` : product.title,
    price: formatPrice(product.price),
    rating: product.rating,
    count: product.count,
    image: product.image,
    link: product.link,
    category: category
  };
  
  const updatedComparison = [...existingComparison, comparisonItem];
  localStorage.setItem('productComparison', JSON.stringify(updatedComparison));
  
  // Dispatch custom event to notify all components
  window.dispatchEvent(new CustomEvent('comparisonUpdated', { 
    detail: { category, product: comparisonItem, action: 'add' } 
  }));
  
  return {
    success: true,
    message: `Added to comparison! (${updatedComparison.length}/${maxItems}) ⚖️`,
    count: updatedComparison.length
  };
};

export const removeFromComparison = (productTitle: string, category: string): void => {
  const existingComparison = JSON.parse(localStorage.getItem('productComparison') || '[]');
  const updatedComparison = existingComparison.filter((item: ComparisonItem) => item.title !== productTitle);
  localStorage.setItem('productComparison', JSON.stringify(updatedComparison));
  
  // Dispatch custom event to notify all components
  window.dispatchEvent(new CustomEvent('comparisonUpdated', { 
    detail: { category, productTitle, action: 'remove' } 
  }));
};

export const getComparisonItems = (category?: string): ComparisonItem[] => {
  const existingComparison = JSON.parse(localStorage.getItem('productComparison') || '[]');
  
  if (category) {
    return existingComparison.filter((item: ComparisonItem) => 
      item.category && item.category.toLowerCase() === category.toLowerCase()
    );
  }
  
  return existingComparison;
};

export const clearComparison = (category?: string): void => {
  if (category) {
    const existingComparison = JSON.parse(localStorage.getItem('productComparison') || '[]');
    const updatedComparison = existingComparison.filter((item: ComparisonItem) => 
      item.category && item.category.toLowerCase() !== category.toLowerCase()
    );
    localStorage.setItem('productComparison', JSON.stringify(updatedComparison));
  } else {
    localStorage.setItem('productComparison', JSON.stringify([]));
  }
  
  // Dispatch custom event to notify all components
  window.dispatchEvent(new CustomEvent('comparisonUpdated', { 
    detail: { category, action: 'clear' } 
  }));
};

const formatPrice = (priceString: string) => {
  if (!priceString || priceString === "nan") return "$0.00";
  const firstPrice = priceString.split(" ")[0];
  let cleanPrice = firstPrice.replace(/[^\d.]/g, "");
  if (!cleanPrice.startsWith("$")) {
    cleanPrice = "$" + cleanPrice;
  }
  return cleanPrice;
};
