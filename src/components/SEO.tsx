import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Hayat Khan - Dublin Sisters Series",
  description = "Discover the Dublin Sisters series by Hayat Khan - captivating novels featuring strong characters, beautiful storytelling, and immersive world-building.",
  image = "https://hayatkhantheauthor.com/images/logo.webp",
  imageAlt = "Hayat Khan Author Logo",
  url = "https://hayatkhantheauthor.com",
  type = "website"
}) => {
  // Ensure image URL is absolute
  const absoluteImageUrl = image.startsWith('http') ? image : `https://hayatkhantheauthor.com${image}`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Hayat Khan" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      <meta name="twitter:image:alt" content={imageAlt} />
      <meta name="twitter:site" content="@hayatkhanauthor" />
      <meta name="twitter:creator" content="@hayatkhanauthor" />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="Hayat Khan" />
      <meta name="theme-color" content="#D4AF37" />
    </Helmet>
  );
};

export default SEO;
