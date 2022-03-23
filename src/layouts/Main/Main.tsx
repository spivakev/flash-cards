import { Outlet } from 'react-router-dom';
import { AppBar } from '../../components/AppBar/AppBar';

export const Main: React.FC = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
};
