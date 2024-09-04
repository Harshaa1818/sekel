import { configureStore } from "@reduxjs/toolkit"
import Slicereducer from './slices.js'

const store = configureStore({
    reducer: Slicereducer
})

export default store