/**
 * Definições de tipos TypeScript para o projeto MasterClean
 */

// ── Componentes ──

export interface ButtonProps {
  variant?: 'primary' | 'gold' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  children: React.ReactNode;
  className?: string;
}

export interface CardProps {
  variant?: 'default' | 'elevated' | 'minimal';
  children: React.ReactNode;
  className?: string;
}

// ── Dados ──

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  price?: number;
  duration?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  text: string;
  image?: string;
}

export interface PricingOption {
  id: string;
  label: string;
  value: string;
  price: number;
}

export interface NavLink {
  label: string;
  href: string;
  id: string;
}

// ── WhatsApp ──

export interface WhatsAppConfig {
  number: string;
  message: string;
  getLink: (text?: string) => string;
}

export interface WhatsAppMessage {
  type: string;
  description?: string;
  quantity?: number;
}

// ── API / Responses ──

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}

export interface ContactFormData {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

// ── Hooks ──

export interface UseWhatsAppReturn {
  openChat: (message?: string) => void;
  createMessage: (items: string | string[] | Record<string, any>) => string;
  whatsappNumber: string;
  whatsappLink: string;
}

export interface UseScrollToReturn {
  scrollTo: (e?: React.MouseEvent | Event, id?: string) => void;
}

export default {};
