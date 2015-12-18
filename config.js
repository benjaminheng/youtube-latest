const config = {
    isProduction: process.env.NODE_ENV === 'production',
    port: process.env.PORT,
    apiKey: process.env.YTLATEST_API_KEY,
    githubRepo: 'https://github.com/benjaminheng/youtube-latest'
}

export default config;

