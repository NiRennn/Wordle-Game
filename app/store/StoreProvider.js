'use client'


import {store} from './index.js'
import {Provider} from 'react-redux'

export const StoreProvider = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}