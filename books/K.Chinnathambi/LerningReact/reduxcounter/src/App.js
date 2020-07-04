import { connect } from "react-redux";
import Counter from "./Counter.js";

//powiązanie stanu z właściwością komponentu
function mapStateToProps(state){
  return{
    countValue: state.count
  };
}

//akcje
const increaseAction = { type: "increase" };
const decreaseAction = { type: "decrease" };

//powiązanie akcji z właściwościami komponentu
function mapDispatchToProps(dispatch){
  return{
    increaseCount: function(){
      return dispatch(increaseAction);
    },
    decreaseCount: function(){
      return dispatch(decreaseAction);
    },
  };
}

//komponent wyższego rzędu
const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default connectedComponent;