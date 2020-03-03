//Action Types
   export const INCREASE='INCREASE';
   export const DECREASE = 'DECREASE';

//Action creators
export const increaseAction = () => {
   return ({
       type: INCREASE
   })
}

export const decreaseAction = () =>{
    return(
        {
            type: DECREASE
        }
    )
}


