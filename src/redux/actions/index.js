export const ADD_COMPANY = "ADD_COMPANY";
export const REMOVE_COMPANY = "REMOVE_COMPANY";
export const STAR_COMPANY = "STAR_COMPANY";
export const UNSTAR_COMPANY = "UNSTAR_COMPANY";
export const ADD_TO_COMPARATION = "ADD_TO_COMPARATION";
export const REMOVE_FROM_COMPARATION = "REMOVE_FROM_COMPARATION";
export const REMOVE_ALL_FROM_COMPARATION = "REMOVE_ALL_FROM_COMPARATION";

export function addCompany(company) {
    return {
        type: ADD_COMPANY,
        company
    }
}

export function removeCompany(id) {
    return {
        type: REMOVE_COMPANY,
        id
    }
}

export function starCompany(id) {
    return {
        type: STAR_COMPANY,
        id
    }
}

export function unStarCompany(id) {
    return {
        type: UNSTAR_COMPANY,
        id
    }
}


export function addToComparation(id) {
    return {
        type: ADD_TO_COMPARATION,
        id
    }
}

export function removeFromComparation(id) {
    return {
        type: REMOVE_FROM_COMPARATION,
            id
    }
}
export function removeAllFromComparation() {
    return {
        type: REMOVE_ALL_FROM_COMPARATION
    }
}
