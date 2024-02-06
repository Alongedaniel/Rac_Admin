import React from 'react'

const UseLocalStorage = () => {
    const setItem = (key, value) => { 
        try {
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch (e) {
            console.log(e)
        }
    }

    const getItem = (key) => {
        try {
            return JSON.parse(window.localStorage.getItem(key)) || null;
        } catch (e) {
            console.log(e)
        }
    }

    const removeItem = (key) => {
        try {
            window.localStorage.removeItem(key);
        } catch (e) {
            console.log(e)
       }
    }
    return { setItem , getItem , removeItem}
}

export default UseLocalStorage
