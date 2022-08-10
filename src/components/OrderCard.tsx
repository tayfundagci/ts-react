import { iOrderCard } from "../interfaces/Interfaces";

export const OrderCard: React.FC<iOrderCard> = ({ order, onDelete, onSelect }) => {
  return (
    <div>
      <h5>{order.orderName}</h5>
      <button title="Delete Order" onClick={onDelete} />
      <button title="Select Order" onClick={onSelect} />
    </div>
  );
};
