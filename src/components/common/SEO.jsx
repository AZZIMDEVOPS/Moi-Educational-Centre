import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, image, url }) => {
    const siteTitle = "Moi Educational Centre";
    const defaultDescription = "Moi Educational Centre - Inclusive and Cultural Diverse School striving for excellence.";
    const defaultImage = "/assets/logo.png";
    const siteUrl = "https://moieducentre.ac.ke";

    return (
        <Helmet>
            <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title ? `${title} | ${siteTitle}` : siteTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={image || defaultImage} />
            <meta property="og:url" content={url ? `${siteUrl}${url}` : siteUrl} />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
    );
};

export default SEO;
