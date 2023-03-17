export const initialState = {
    basket: [],
    user: null,
};

// selector - learn about this more
export const getBasketTotal =(basket)=> 
    basket?.reduce((amount, item) => item.price + amount,0); 



const reducer =(state, action) =>{
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
        // Logic for adding items to the basket 
        return { 
           ...state,
           basket: [...state.basket , action.item]
         };
        
         case 'EMPTY_BASKET':
            return{
                ...state,
                basket: []
            }
            
        case 'REMOVE_FROM_BASKET':
        // Logic for removing items to the basket 
        // we cloned the basket
        let newBasket = [ ...state.basket];


        const index= state.basket.findIndex(
            (basketItem) => basketItem.id === action.id);

        if(index >=0){
            // if items exists then we can remove it 
            newBasket.splice(index,1);
        }else{
            console.warn(`cant remove product (id: ${action.id}) as its empty`);
        }

        return { ...state,
        basket: newBasket,
        };

        case "SET_USER":
        return { ...state,
            user: action.user,
            
        }


        default:
            return state;

    }
}
export default reducer;