const config = {
    isProduction: process.env.NODE_ENV === 'production',
    port: process.env.PORT,
    apiKey: process.env.API_KEY,
    gaTrackingId: 'UA-49019812-2',
    githubRepo: 'https://github.com/benjaminheng/youtube-latest'
}

export default config;

