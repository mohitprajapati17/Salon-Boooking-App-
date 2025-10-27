import { combineReducers, legacy_createStore, applyMiddleware } from 'redux'
import { salonReducer } from './Salon/reducer'
import bookingReducer from './Booking/reducer'
import authReducer from './Auth/reducer'
import notificationReducer from './Notifications/reducer'
import paymentReducer from './Payment/reducer'
import reviewReducer from './Review/reducer'
import salonServicesReducer from './Salon Services/reducer'
import { thunk } from 'redux-thunk'
const rootReducer=combineReducers({
    salon:salonReducer,
    booking:bookingReducer,
    auth:authReducer,
    notifications:notificationReducer,
    payment:paymentReducer,
    review:reviewReducer,
    salonServices:salonServicesReducer,
})


export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))