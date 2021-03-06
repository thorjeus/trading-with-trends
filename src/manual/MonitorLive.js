const MarketDataService = require('../main/service/MarketDataService');
const config = require('../../config/manual/monitorLive');

// Enable live trading
process.env.LIVE_TRADING = true;

MarketDataService.init()
    .then(() => {
        MarketDataService.watch(config.tickers, config.interval);
    });