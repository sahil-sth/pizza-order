import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";
import Button from "../../ui/Button";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button
      type="small"
      onClick={() => {
        console.log("DeleteItem was clicked");
        dispatch(deleteItem(pizzaId));
      }}
    >
      Delete &times;
    </Button>
  );
}

export default DeleteItem;
