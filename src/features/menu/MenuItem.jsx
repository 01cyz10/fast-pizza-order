import { formatCurrency } from '../../utils/helpers';

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
    <li>
      <img src={pizza.imageUrl} alt={pizza.name} />
      <div>
        <p>{pizza.name}</p>
        <p>{pizza.ingredients.join(', ')}</p>
        <div>
          {!pizza.soldOut ? (
            <p>{formatCurrency(pizza.unitPrice)}</p>
          ) : (
            <p>Sold out</p>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
