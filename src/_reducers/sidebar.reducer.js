import { sidebarConstant } from "../_constants";
const initialState = {
    sidebarShow: "responsive",
};
    
export function sidebar(state=initialState,{type,...rest}){
    switch (type) {
        case sidebarConstant.SET:
            return {
                ...state,...rest
            }
         default:
            return state
    }

}


// 
// const changeState = (state = initialState, { type, ...rest }) => {
// 	switch (type) {
// 		case "set":
// 			return { ...state, ...rest };
// 		default:
// 			return state;
// 	}
// };