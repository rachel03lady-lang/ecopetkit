import { MetadataRoute } from "next";

export default function robots():MetadataRoute.Robots{

    return{
        rules:{
            userAgent:'*',
            allow:'/',
            disallow:['/api/','/_next'], // diabled crawling the internal next.js file and if /api url in future
        },
        sitemap:'https://www.ecopetkit.com/sitemap.xml',
    };
}