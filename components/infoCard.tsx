// button.tsx
'use client';
import React, { Children, useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';

interface infoCardProps {
  link: string;
}

export default function InfoCard({ link }: infoCardProps) {
  return (
    <div>
      <div className="flex flex-col m-5 items-center justify-center w-96 rounded-xl border shadow-neutral-400 shadow-lg ">
        <img src={link} alt="Image" />
        <div className="z-10 p-10 text-lg items-center justify-center text-green-900">
          We offer the most skilled labourers and excellent services
          Satisfaction guaranteed, or have your money back
        </div>
      </div>
    </div>
  );
}
