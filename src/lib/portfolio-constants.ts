export interface Client {
    name: string;
    slug: string;
    category: "FNB" | "Coffee" | "Government" | "Event" | "Agency" | "App";
    instagram?: string;
    handle?: string;
    url?: string;
    image?: string;
    description?: string;
    techStack?: string[];
}

export const CLIENT_INFO: Client[] = [
    // Web Projects
    {
        name: "Government Profile – Desa Karanglo",
        slug: "desa-karanglo",
        category: "Government",
        url: "https://desa-karanglo.vercel.app/",
        image: "/web/desa-karanglo.png",
        description: "A modern government profile website designed to improve transparency, accessibility, and public engagement for Desa Karanglo, Klaten. The platform presents essential village information such as population data, village budget (APBD), financial reports, and development programs. It also includes a public feedback and suggestion feature, allowing residents to directly communicate with the local government.",
        techStack: ["Next.js", "Tailwind CSS", "shadcn/ui", "PostgreSQL", "Prisma ORM"]
    },
    {
        name: "Burjolevelup Challenge",
        slug: "burjolevelup-challenge",
        category: "Event",
        url: "https://burjolevelup.com/",
        image: "/web/burjolevelup.png",
        description: "An event-based web platform created for the Burjolevelup CEO Challenge, transforming a café website into an interactive challenge system. Users receive a digital lottery coupon for every product purchase, making transactions more engaging through gamification. The system manages products, coupon distribution, and challenge participation seamlessly.",
        techStack: ["Next.js", "Tailwind CSS", "MongoDB", "Clerk", "Vercel"]
    },
    {
        name: "Tenbeat – Digital Agency Profile",
        slug: "tenbeat",
        category: "Agency",
        url: "https://tenbeat.vercel.app/",
        image: "/web/tenbeat.png",
        description: "A company profile website for Tenbeat Digital Agency, showcasing services such as content creation, graphic design, social media management, and web development. The website emphasizes a clean, modern presentation to strengthen brand identity and build trust with potential clients.",
        techStack: ["Next.js", "Tailwind CSS", "Framer Motion"]
    },
    {
        name: "Ngantin",
        slug: "ngantin",
        category: "App",
        url: "https://ngantin.in/",
        image: "/web/ngantin.png",
        description: "A digital food ordering platform for the Politeknik Negeri Semarang cafeteria. Users can order meals online while accessing nutritional values and carbon footprint information for each menu item. The platform promotes healthy eating habits and environmental awareness alongside operational efficiency.",
        techStack: ["Next.js", "Tailwind CSS", "Midtrans Payment Gateway", "PostgreSQL", "Prisma ORM"]
    },
    {
        name: "Lakasir",
        slug: "lakasir",
        category: "App",
        url: "https://lakasir-roy.vercel.app/",
        image: "/web/lakasir.png",
        description: "A web-based Point of Sale (POS) system designed for small to medium-sized businesses. Lakasir simplifies daily operations by providing product management, transaction handling, and sales reporting in a fast and intuitive interface.",
        techStack: ["Next.js", "Tailwind CSS", "PostgreSQL", "Prisma ORM", "Clerk"]
    },
    // Existing Clients
    { name: "Burjolevelup Ungaran", slug: "burjolevelup", category: "FNB", instagram: "https://www.instagram.com/burjolevelup/", handle: "@burjolevelup" },
    { name: "Burjoibukota Semarang", slug: "burjoibukota", category: "FNB", instagram: "https://www.instagram.com/burjoibukota2/", handle: "@burjoibukota2" },
    { name: "Warmindo88 Semarang", slug: "warmindo88", category: "FNB", instagram: "https://www.instagram.com/warmi.ndo88/", handle: "@warmi.ndo88" },
    { name: "Pray Semarang", slug: "pray-semarang", category: "FNB", instagram: "https://www.instagram.com/pray.smg/", handle: "@pray.smg" },
    { name: "D Sagara Cilacap", slug: "d-sagara", category: "FNB", instagram: "https://www.instagram.com/d.sagara_/", handle: "@d.sagara_" },
    { name: "Purwakawan Coffee", slug: "purwakawan", category: "Coffee", instagram: "https://www.instagram.com/purwakawan.coffee/", handle: "@purwakawan.coffee" },
    { name: "Ceritakan Coffee", slug: "ceritakancoffee", category: "Coffee", instagram: "https://www.instagram.com/ceritakancoffee/", handle: "@ceritakancoffee" },
];
