const { createStore } = require("redux");

// constants

const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

// state

const initialProductState={
    products:["salt","sugar"],
    numberOfProducts: 2,
};

// action

const getProductAction =()=>{
    return{
        type: GET_PRODUCTS,
    };
};
const addProductAction =(product)=>{
    return{
        type: ADD_PRODUCTS,
        payload: product,
    };
};

// reducer

const productsReducer =(state=initialProductState,action)=>{
switch (action.type) {
    case GET_PRODUCTS:
        return{
            ...state,
        };
    case ADD_PRODUCTS:
        return{
            products: [...state.products,action.payload],
            numberOfProducts: state.numberOfProducts + 1,
        };
        

    default:
    return state;
    }
}

// store

const store = createStore(productsReducer);

store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(getProductAction());
store.dispatch(addProductAction("ata"));
store.dispatch(addProductAction("moida"));