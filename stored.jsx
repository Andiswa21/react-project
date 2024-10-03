import {configureStore} from "react-redux";

const initialState = {
    items : [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) { 
        case 'ADD_ITEM':
            return {
                ...state , items: [...state.items , action.payload],
            };
            case 'DELETE_ITEM':
            return {
                ...state , items: state.items.filter(item => item.id !== action.id)
            };
            case 'TOGGLE_ITEM':
                return { 
                    ...state , items : state.items.map(item => {
                        if (item.id === action.id) {
                            return{
                                ...item , completed: !item.completed
                            };
                            }
                            return item;
                    })
                };
            default:
                return state;
    
    }
};

const store = createStore(rootReducer);

export default store;