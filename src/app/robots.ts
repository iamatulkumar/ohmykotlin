import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: 'Googlebot',
                allow: ['/'],
                disallow: ['/kmm', "/kotlingpt", "/composeui"],
            },
            {
                userAgent: ['Applebot', 'Bingbot'],
                allow: ['/'],
                disallow: ['/kmm', "/kotlingpt", "/composeui"],
            },
        ],
        sitemap: 'https://ohmykotlin.com/sitemap.xml',
    }
}