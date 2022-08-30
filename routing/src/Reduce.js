import { useReducer } from 'react';

const reducer = (state, action) => {
  switch(action.type){
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText }
    case "toggleShowText":
      return { count: state.count, showText: !(state.showText) }
    default:
      return state
  }
}

function Reduce() {
  const [state, dispatch] = useReducer(reducer, {count: 0, showText: true})
  
  return (
    <div>
      <h3>{state.count}</h3>
      <button onClick={() => {
        dispatch({type: "INCREMENT"})
        dispatch({type: "toggleShowText"})
      }}>
        Click Here</button>
      {state.showText && <h5>This is the only Text</h5>}
    </div>
  );
}

export default Reduce;