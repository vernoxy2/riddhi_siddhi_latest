import { useEffect } from 'react';

export const useMetaTags = ({
  title,
  description,
  keywords,
  image = "../../public/WebLogo.svg",
  url,
  type = 'website'
}) => {
  useEffect(() => {
    // Store original values to restore on unmount
    const originalTitle = document.title;
    const originalDescription = document.querySelector('meta[name="description"]')?.content;

    // Update title
    if (title) {
      document.title = title;
    }

    // Helper to set meta tag
    const setMetaTag = (selector, content) => {
      if (!content) return;
      
      let element = document.querySelector(selector);
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        // Parse selector properly
        if (selector.includes('property=')) {
          const propertyMatch = selector.match(/property="([^"]+)"/);
          if (propertyMatch) {
            element.setAttribute('property', propertyMatch[1]);
          }
        } else if (selector.includes('name=')) {
          const nameMatch = selector.match(/name="([^"]+)"/);
          if (nameMatch) {
            element.setAttribute('name', nameMatch[1]);
          }
        }
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    // Update all meta tags
    setMetaTag('meta[name="description"]', description);
    setMetaTag('meta[name="keywords"]', keywords);
    
    // Open Graph
    setMetaTag('meta[property="og:title"]', title);
    setMetaTag('meta[property="og:description"]', description);
    setMetaTag('meta[property="og:image"]', image);
    setMetaTag('meta[property="og:url"]', url);
    setMetaTag('meta[property="og:type"]', type);
    
    // Twitter
    setMetaTag('meta[name="twitter:title"]', title);
    setMetaTag('meta[name="twitter:description"]', description);
    setMetaTag('meta[name="twitter:image"]', image);
    setMetaTag('meta[name="twitter:card"]', 'summary_large_image'); // Added default card type
    
    // Canonical URL
    if (url) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', url);
      } else {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        canonical.setAttribute('href', url);
        document.head.appendChild(canonical);
      }
    }

    // Cleanup function
    return () => {
      document.title = originalTitle;
      if (originalDescription) {
        const descMeta = document.querySelector('meta[name="description"]');
        if (descMeta) {
          descMeta.setAttribute('content', originalDescription);
        }
      }
    };
  }, [title, description, keywords, image, url, type]);
};