module.exports = () => ({
    meilisearch: {
        config: {
          host: "http://0.0.0.0:7700",
          apiKey: "XyxlNWxIsyKAHZTtmSuL8v8Lc3ch3YbB5cim_e-WS54",
          product: {
            settings:  {
              filterableAttributes: ['artist.id', 'category.id'],
            }
          },
        }
    }
});
