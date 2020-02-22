const apiKey = 'Spp04X6tlK0AIcPhOYG9eueKWo9jaoBDfzylbX2wmLF0yn4CBzgNmY_osREwNP_6qgJ5pbg3NPK_92h2AVsQ_sY4MBiDtWkj47TMzgKrTvP4I0Dg1kTo_XBAkWJRXnYx';

const yelp = {
    search(term, location, sortBy) {
        return fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`);
    }
};