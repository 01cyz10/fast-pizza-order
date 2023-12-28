import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
  return (
    <header>
      <Link to='/'>Fast React Pizza Company</Link>
      <SearchOrder />
      <p>Chen</p>
    </header>
  );
}
export default Header;
