'use client';
import { useState } from 'react';

export const ModalImage = ({
  thumbnail,
  fullImage,
  alt,
}: {
  thumbnail: string;
  fullImage: string;
  alt: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <img
        src={thumbnail}
        alt={alt}
        className="cursor-pointer w-full max-w-xs mx-auto rounded-md"
        onClick={() => setOpen(true)}
      />
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <img src={fullImage} alt={alt} className="max-w-3xl max-h-[90vh] rounded shadow-lg" />
        </div>
      )}
    </>
  );
};
