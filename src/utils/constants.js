export const APP_LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-01-09/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const AVATAR_URL = "https://occ-0-6247-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABauoHATTBM_Co69wepwo2EoiXCaTfXBeMBenvD8EJjOA9AO6FX-zsUXpNuOTkujMZDili6BLc1sxlFMjENPrbyoxoII3rT6sGKa7WcjZdQs5JH_aB3bqDVCvUMiIwb1DA36wRxg3eQ5VXQ.png?r=e6e";
export const BROWSE_BACKGROUND_IMAGE_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/ce462eb6-4d7f-4c9a-9f61-93cb535a64fd/web/IN-en-20260105-TRIFECTA-perspective_5ec818ea-11f4-4bff-a409-8f36e9f9a1e2_large.jpg"
export const MOVIE_LIST_API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2FiNGJmOTc3ZWYyZjI4YWFjY2JkNDhiMjY4YjIyNSIsIm5iZiI6MTc2OTE1NjAzNS4zMDIsInN1YiI6IjY5NzMyZGMzOTJiYWIyNjFhN2UzZDZlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6JAOupdjGwMfpy35FSzHTOvnY2Mj0sKVxg-FkqWn5sY'
    }
};
export const LANGUAGE_CONSTANTS = {
    EN: 'en',
    ES: 'es',
    HIN: 'hindi'
};

export const DEFAULT_MOVIES_LIST = ['Don', 'Hum appke hain kaun', '3 Idiots', 'Hera Pheri', 'welcome'];
export const LANGUAGE_OPTIONS = [
    { identifier: LANGUAGE_CONSTANTS.EN, label: 'English' },
    { identifier: LANGUAGE_CONSTANTS.ES, label: 'Spanish' },
    { identifier: LANGUAGE_CONSTANTS.HIN, label: 'Hindi' }
];

export const GPT_API_KEY = process.env.REACT_APP_OPENAI_KEY;