import { APP } from './utility/types';

export const appInit = () => {
    return (dispatch) =>  {
        dispatch({
            type: APP,
            payload: {
                app: {}
              }
        });
    }
}