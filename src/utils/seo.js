/**
 * SEO Schema.org - Estruturação de dados para buscas
 */

/**
 * Gerar Schema.org LocalBusiness
 * Melhora aparecer em buscas locais e Google Maps
 */
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://masterclean.com.br',
    name: 'MasterClean',
    description: 'Higienização profissional de estofados, veículos, ônibus e náuticos em Itaguaí e região',
    url: 'https://masterclean.com.br',
    telephone: '+55 21 99245-7714',
    priceRange: 'R$',
    image: 'https://masterclean.com.br/images/logo.jpeg',
    
    // Serviços
    knowsAbout: [
      'Higienização de Estofados',
      'Limpeza de Veículos',
      'Higienização de Ônibus',
      'Limpeza de Náuticos',
    ],
    
    // Classificação
    areaServed: [
      {
        '@type': 'City',
        name: 'Itaguaí',
      },
      {
        '@type': 'City',
        name: 'Rio de Janeiro',
      },
      {
        '@type': 'City',
        name: 'Seropédica',
      },
      {
        '@type': 'City',
        name: 'Mangaratiba',
      },
    ],
    
    // Localização
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BR',
      addressRegion: 'RJ',
      addressLocality: 'Itaguaí',
    },
    
    // Contato
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+55 21 99245-7714',
      availableLanguage: ['pt-BR'],
    },
    
    // Redes sociais
    sameAs: [
      'https://www.instagram.com/oficialmasterclean_',
      'https://www.facebook.com/share/1BMUPn7N15/',
      'https://wa.me/5521992457714',
    ],
    
    // Avaliações agregadas
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '100',
      bestRating: '5',
      worstRating: '1',
    },
  };
}

/**
 * Gerar Schema.org Service
 * Para cada serviço oferecido
 */
export function getServiceSchema(serviceName, description, price) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'MasterClean',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Itaguaí',
      },
      {
        '@type': 'City',
        name: 'Seropédica',
      },
      {
        '@type': 'City',
        name: 'Mangaratiba',
      },
    ],
    priceRange: price,
  };
}

/**
 * Gerar Schema.org Organization
 * Dados da empresa
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MasterClean',
    url: 'https://masterclean.com.br',
    logo: 'https://masterclean.com.br/images/logo.jpeg',
    description: 'Higienização profissional de estofados, veículos, ônibus e náuticos com tecnologia de ponta',
    
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+55 21 99245-7714',
    },
    
    sameAs: [
      'https://www.instagram.com/oficialmasterclean_',
      'https://www.facebook.com/share/1BMUPn7N15/',
    ],
  };
}

/**
 * Injetar Schema.org no head
 * Chame no App.jsx ou main.jsx
 */
export function injectSchemaMarkup(schema) {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.innerHTML = JSON.stringify(schema);
  document.head.appendChild(script);
}

/**
 * Atualizar meta tags dinamicamente
 */
export function updateMetaTags(title, description, imageUrl) {
  // Title
  document.title = title;
  
  // Meta description
  const descTag = document.querySelector('meta[name="description"]');
  if (descTag) descTag.setAttribute('content', description);
  
  // Open Graph
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', title);
  
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', description);
  
  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage) ogImage.setAttribute('content', imageUrl);
  
  // Twitter
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle) twitterTitle.setAttribute('content', title);
  
  const twitterDesc = document.querySelector('meta[name="twitter:description"]');
  if (twitterDesc) twitterDesc.setAttribute('content', description);
  
  const twitterImage = document.querySelector('meta[name="twitter:image"]');
  if (twitterImage) twitterImage.setAttribute('content', imageUrl);
}

export default {
  getLocalBusinessSchema,
  getServiceSchema,
  getOrganizationSchema,
  injectSchemaMarkup,
  updateMetaTags,
};
