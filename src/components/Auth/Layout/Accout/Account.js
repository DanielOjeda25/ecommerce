import { useAuth } from '@/hooks';
import { useRouter } from 'next/router';
import React from 'react';
import { Badge } from 'react-bootstrap';
import { FaShoppingCart, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const total = 5;

export default function Account() {
  const router = useRouter();
  const { user } = useAuth();

  const goToLogin = () => {
    router.push('/join/sign-in');
  };

  const goToAccount = () => {
    router.push('/account');
  };

  const goToCart = () => {
    if (!user) {
      goToLogin();
    } else {
      router.push('/cart');
    }
  };

  return (
    <div className="flex space-x-4">
      <button
        onClick={goToCart}
        className="flex items-center text-white rounded"
      >
        <FaShoppingCart className="hover:text-amber-500" />
        <Badge pill bg="warning" className="ml-2">
          {total}
        </Badge>
      </button>

      {!user ? (
        <button
          title="Iniciar sesión"
          onClick={goToLogin}
          className="flex items-center text-white rounded"
        >
          <FaSignInAlt className="hover:text-amber-600" />
        </button>
      ) : (
        <button
          title="Registro"
          onClick={goToAccount}
          className="flex items-center text-white bg-stone-800 rounded-md p-2 border-t hover:border-amber-600"
        >
          <FaUserPlus className="hover:text-amber-600 " />
        </button>
      )}
    </div>
  );
}
