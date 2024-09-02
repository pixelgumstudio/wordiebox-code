import { useEffect } from 'react';


interface OpenGraphMetadata {
    [key: string]: string;
  }
  
  interface TwitterMetadata {
    [key: string]: string;
  }
  
  interface Metadata {
    title?: string;
    description?: string;
    keywords?: string;
    openGraph?: OpenGraphMetadata;
    twitter?: TwitterMetadata;
  }

const useMetadata = (metadata: Metadata) => {
  useEffect(() => {
    if (metadata.title) {
      document.title = metadata.title;
    }

    if (metadata.description) {
      let metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        document.head.appendChild(metaDescription);
      }
      metaDescription.content = metadata.description;
    }

    if (metadata.keywords) {
      let metaKeywords = document.querySelector<HTMLMetaElement>('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.content = metadata.keywords;
    }

    if (metadata.openGraph) {
      Object.keys(metadata.openGraph).forEach((property) => {
        let metaTag = document.querySelector<HTMLMetaElement>(`meta[property="og:${property}"]`);
        if (!metaTag) {
          metaTag = document.createElement('meta');
          metaTag.setAttribute('property', `og:${property}`);
          document.head.appendChild(metaTag);
        }
        metaTag.content = metadata.openGraph![property];
      });
    }

    if (metadata.twitter) {
      Object.keys(metadata.twitter).forEach((name) => {
        let metaTag = document.querySelector<HTMLMetaElement>(`meta[name="twitter:${name}"]`);
        if (!metaTag) {
          metaTag = document.createElement('meta');
          metaTag.setAttribute('name', `twitter:${name}`);
          document.head.appendChild(metaTag);
        }
        metaTag.content = metadata.twitter![name];
      });
    }
  }, [metadata]);
};

export default useMetadata;