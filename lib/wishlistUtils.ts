export interface WishlistItem {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
  addedDate: string;
  link: string;
}

export const WISHLIST_LIMIT = 8;

export const addToWishlist = (item: Omit<WishlistItem, 'id' | 'addedDate'>): { success: boolean; message: string; currentCount: number } => {
  try {
    const existingWishlist: WishlistItem[] = JSON.parse(localStorage.getItem('wishlist') || '[]');
    
    // Check if wishlist is full
    if (existingWishlist.length >= WISHLIST_LIMIT) {
      return {
        success: false,
        message: `Wishlist limit reached (${WISHLIST_LIMIT} items max)!`,
        currentCount: existingWishlist.length
      };
    }

    // Check for duplicates (same name + category)
    const isDuplicate = existingWishlist.some(existingItem => 
      existingItem.name === item.name && existingItem.category === item.category
    );

    if (isDuplicate) {
      return {
        success: false,
        message: 'Already in wishlist!',
        currentCount: existingWishlist.length
      };
    }

    // Create new wishlist item
    const newItem: WishlistItem = {
      ...item,
      id: `${item.category.toLowerCase()}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      addedDate: new Date().toISOString()
    };

    // Add to wishlist
    const updatedWishlist = [...existingWishlist, newItem];
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));

    return {
      success: true,
      message: '💖 Added to Wishlist. Your favorite deal is saved for later.',
      currentCount: updatedWishlist.length
    };
  } catch (error) {
    console.error('Error adding to wishlist:', error);
    return {
      success: false,
      message: 'Error adding to wishlist. Please try again.',
      currentCount: 0
    };
  }
};

export const getWishlist = (): WishlistItem[] => {
  try {
    return JSON.parse(localStorage.getItem('wishlist') || '[]');
  } catch (error) {
    console.error('Error getting wishlist:', error);
    return [];
  }
};

export const removeFromWishlist = (itemId: string): { success: boolean; message: string; currentCount: number } => {
  try {
    const existingWishlist: WishlistItem[] = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const updatedWishlist = existingWishlist.filter(item => item.id !== itemId);
    
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    
    return {
      success: true,
      message: 'Removed from wishlist!',
      currentCount: updatedWishlist.length
    };
  } catch (error) {
    console.error('Error removing from wishlist:', error);
    return {
      success: false,
      message: 'Error removing from wishlist. Please try again.',
      currentCount: 0
    };
  }
};

export const isWishlistFull = (): boolean => {
  const wishlist = getWishlist();
  return wishlist.length >= WISHLIST_LIMIT;
};

export const getWishlistCount = (): number => {
  const wishlist = getWishlist();
  return wishlist.length;
};
