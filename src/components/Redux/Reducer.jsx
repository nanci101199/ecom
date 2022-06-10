export const reducer = (state=0, action) => {

        switch(action.type) {
            case 'login' : 
            return action.payload
            default:
      return state;
        }
};