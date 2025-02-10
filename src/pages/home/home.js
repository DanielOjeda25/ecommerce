import BasicLayout from '@/layouts/BasicLayout/BasicLayout';
import React from 'react';

export default function Home() {
  return (
    <BasicLayout>
      <div className="flex justify-center items-center h-screen ">
        <h1 className="text-4xl text-white">Welcome to Next.js</h1>
      </div>
    </BasicLayout>
  );
}
