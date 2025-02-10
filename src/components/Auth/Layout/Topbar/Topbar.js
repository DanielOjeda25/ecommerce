import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../../../../public/logo.png';
import Account from '../Accout';

export default function Topbar({ isOpenSearch }) {
  return (
    <div className="fixed  flex  items-center w-full p-4  z-10">
      <div className="w-1/5">
        <Link href="/">
          <Image width={100} height={100} src={logo} />
        </Link>
      </div>
      <div className="w-3/5 flex justify-center">
        <span className="text-white">menu</span>
      </div>
      <div className="w-1/5 flex justify-end">
        <Account />
      </div>
    </div>
  );
}
