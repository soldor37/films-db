export const state = () => ({
    apiKey: 'bcbc69d35e63a4cf19b4dcec5bacaa14',
    lang: localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en'
})

export const getters = {
    getLang: state => {
        return state.lang
    }
}

export const mutations = {
    changeLang(state) {
        state.lang == 'en' ? state.lang = 'ru' : state.lang = 'en';
        localStorage.setItem('lang', state.lang)
        this.$router.go();
    }
}