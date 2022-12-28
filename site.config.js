module.exports = {
    base: 'anfra-op.tk',
    siteMetadata: {
        title: 'AnFra Supreme | Best Discord Bot',
        description: 'AnFra Supreme is Best Discord Bot to manage your servers.',
        author: 'AnFra Supreme',
        authorImage: "https://cdn.discordapp.com/attachments/960208290506215456/992524631351238716/T2.png",
        image: 'https://cdn.discordapp.com/attachments/960208290506215456/992524631636459560/T3.png',
        favicon: '/anfra-logo.png',
        url: 'anfra-op.tk',
        themeColor: '#4e1ead',
        email: 'contact@tresthost.com',
        logo: "https://cdn.discordapp.com/attachments/960208290506215456/992524631351238716/T2.png"
    },

    social: {
        twitter: 'https://twitter.com/badass_1337',
        github: 'https://github.com/badassdc',
        linkedin: '',
        instagram: 'https://www.instagram.com/yashj6969/',
        facebook: '',
        discord: 'https://discord.gg/d5kKHRn53S',
    },

    pages: [
        {
            name: "Home",
            href: "/",
            icon: {
                default: 'fal fa-home',
                active: 'fas fa-home'
            },
            current: false,
        },
        {
            name: "Services",
            href: "/services",
            icon: {
                default: 'fal fa-server',
                active: 'fas fa-server'
            },
            current: false,
        },
        {
            name: "Pricing",
            href: "/pricing",
            icon: {
                default: 'fal fa-dollar-sign',
                active: 'fas fa-dollar-sign'
            },
            current: false,
        },
        {
            name: "Partners",
            href: "/partners",
            icon: {
                default: 'fal fa-handshake',
                active: 'fas fa-handshake'
            },
            current: false,
        },
        {
            name: "Community",
            href: "/discord",
            icon: {
                default: 'fal fa-users',
                active: 'fas fa-users'
            },
            current: false,
        }
    ]
}
