import React from 'react';

export function ToolCard({ name }: { name: string }) {
  return (
    <div className="bg-white rounded-[1.25rem] w-full h-[120px] lg:h-[135px] flex items-center justify-center p-8 cursor-pointer transition-all duration-300 hover:shadow-[0_0_35px_rgba(227,59,101,0.22)]">
      <img 
        src={`https://placehold.co/200x70/transparent/333333?text=${name.replace(' ', '+')}`} 
        className="w-full h-full object-contain opacity-[0.85] hover:opacity-100 transition-opacity" 
        alt={name} 
      />
    </div>
  );
}
