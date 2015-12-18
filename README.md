# YouTube Latest 

YouTube Latest shows you the most recently uploaded videos on YouTube, providing you with a unique way to explore new content! Occasionally there are interesting videos, trust me.

[ [Live site](http://youtube.hbenjamin.com/) ]

## Setup

Install dependencies

```bash
npm install
```

Configure your [YouTube Data API key](https://developers.google.com/youtube/v3/getting-started) as an environment variable

```bash
export YTLATEST_API_KEY=<YOUR_API_KEY>
```

Start the app

```bash
npm run start
```

#### Production

```
npm install
export YTLATEST_API_KEY=<YOUR_API_KEY>
export NODE_ENV=production
npm run build
npm run start
```

## License

MIT
