//import { diff } from 'deep-object-diff';

const logger = store => next => action => {
    console.group(action.type)
    let result = next(action)
    const newState = store.getState()
    console.log('next state', newState)
    console.groupEnd()
    return result
}
export default logger