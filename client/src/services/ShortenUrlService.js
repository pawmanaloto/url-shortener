import APIBase from '@/services/APIBase';

export default {
    shorten(url) {
        return APIBase().post('/api/shorturl', {
            fullURL: url
        });
    }
};
