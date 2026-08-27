// ==========================================
// CAKE TYPES
// ==========================================

export type CakeCategory =
  | "birthday"
  | "wedding"
  | "velvet"
  | "trending"
  | "cupcakes"
  | "custom";

export interface Cake {
  id: string;
  name: string;
  category: CakeCategory;
  price: number;          // starting price
  image: string;          // image path e.g. "/images/cakes/chocolate.jpg"
  description?: string;   // optional short description
  isBestSeller?: boolean; // to show on home page
}

// ==========================================
// REVIEW / TESTIMONIAL TYPES
// ==========================================

export interface Review {
  id: string;
  customerName: string;
  rating: number;        // 1 to 5
  comment: string;
  image?: string;         // optional customer photo (avatar)
}

// ==========================================
// ORDER FORM TYPES
// ==========================================

export interface OrderFormData {
  customerName: string;
  phoneNumber: string;
  message: string;
}

// ==========================================
// SITE CONFIG TYPES
// ==========================================

export interface SocialLinks {
  instagram?: string;
  facebook?: string;
  tiktok?: string;
}

export interface SiteConfig {
  bakeryName: string;
  tagline: string;
  url: string;
  description: string;
  whatsappNumber: string;   // format: "923001234567" (no + or spaces)
  phoneNumber?: string;
  email?: string;
  address?: string;
  socialLinks?: SocialLinks;
}