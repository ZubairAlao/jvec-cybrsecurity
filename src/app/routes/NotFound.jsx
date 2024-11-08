import { Link } from 'react-router-dom'
import Button from '@/components/ui/button/button';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center flex-col w-full min-h-screen container">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-gray-500 text-lg my-[20px] text-center">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/" replace
      >
        <Button children="Go Back Home"  />
      </Link>
    </div>
  );
};

export default NotFound;
