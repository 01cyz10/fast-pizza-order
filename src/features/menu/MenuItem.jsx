import { formatCurrency } from '../../utils/helpers';
import Button from '../../ui/Button';

function MenuItem({ pizza }) {
  // const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  // return (
  //   <li>
  //     <img src={imageUrl} alt={name} />
  //     <div>
  //       <p>{name}</p>
  //       <p>{ingredients.join(', ')}</p>
  //       <div>
  //         {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
  //       </div>
  //     </div>
  //   </li>
  // );

  return (
    <li className="flex gap-4 py-2 ">
      <img
        src={pizza.imageUrl}
        alt={pizza.name}
        className={`h-24 ${pizza.soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{pizza.name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {pizza.ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!pizza.soldOut ? (
            <p className="text-sm">{formatCurrency(pizza.unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          <Button type="small">Add to Cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
