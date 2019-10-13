import {
    ADD_COMPANY, REMOVE_COMPANY, STAR_COMPANY, UNSTAR_COMPANY,
    ADD_TO_COMPARATION, REMOVE_FROM_COMPARATION,
    REMOVE_ALL_FROM_COMPARATION
} from "../actions";

export const initialState = {
    companies: [],
    starredCompanies: [],
    compareBetween: []
};

const rootReducer = (store = initialState, action) => {
    let compareBetween;
    let companies;
    let starredCompanies;
    switch (action.type) {
        case ADD_TO_COMPARATION:
            compareBetween = compareBetween = [...store.compareBetween, action.id];
            return { ...store, compareBetween }
        case REMOVE_FROM_COMPARATION:
            compareBetween = store.compareBetween.filter(id => id !== action.id);
            return { ...store, compareBetween }
        case REMOVE_ALL_FROM_COMPARATION:
            return { ...store, compareBetween: [] }
        case ADD_COMPANY:
            if (!store.companies.find(c => c.id === action.company.id)) {
                companies = [...store.companies, action.company];
                return { ...store, companies }
            }
            return { ...store }
        case REMOVE_COMPANY:
            compareBetween = store.compareBetween.filter(id => id !== action.id);
            companies = store.companies.filter(c => c.id !== action.id);
            starredCompanies = store.starredCompanies.filter(id => id !== action.id);
            return {companies, starredCompanies, compareBetween }
        case STAR_COMPANY:
            starredCompanies = [...store.starredCompanies, action.id];
            return { ...store, starredCompanies }
        case UNSTAR_COMPANY:
            starredCompanies = store.starredCompanies.filter(id => id !== action.id);
            return { ...store, starredCompanies }
        default:
            return { ...store }
    }

};

export default rootReducer;