module.exports = {
    plugins: {
        '@fullhuman/postcss-purgecss': {
            content: [
                'layouts/**/*.html'
            ],
            whitelist: [
            ]
        },
        autoprefixer: {},
        cssnano: { preset: 'default' }
    },
    noMap: false
}
