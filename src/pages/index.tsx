import { RandomFox } from '@/components/RandomFox'
import { useState } from 'react';
import type { MouseEventHandler } from "react";
import Head from 'next/head'
import Image from 'next/image'

const random = () => Math.floor(Math.random() * 122) + 1;
const generateId = () => Math.random().toString(36).substring(2, 9);

type imageItem = { id: string, url: string}

export default function Home() {
  
  const [images, setimages] = useState<imageItem[]>([]);
  
      const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault;

        const newImageItem: imageItem = {
          id: generateId(),
          url: `https://randomfox.ca/images/${random()}.jpg`,
        };
        setimages([...images, newImageItem]);
      };

  return (
    <>
      <Head>
        <title>Typescript</title> 
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hello</h1>
        <button onClick={addNewFox}>Add new fox</button>
        {images.map(({id, url}) => (
          <div key={id} className="p-4">
            <RandomFox image={url} />
          </div>
        ))}
      </main>
      <footer></footer>
    </>
  );
}
