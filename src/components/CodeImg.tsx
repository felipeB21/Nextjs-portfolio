
import Link from "next/link";
import Image from "next/image";
import HTML_IMG from '@/../public/code-img/html.png'
import CSS_IMG from '@/../public/code-img/css.png'
import JS_IMG from '@/../public/code-img/JavaScript.png'
import TS_IMG from '@/../public/code-img/typescript.png'
import Tailwind_IMG from '@/../public/code-img/tailwind.png'
import React_IMG from '@/../public/code-img/React.png'
import NextJS_IMG from '@/../public/code-img/nextjs.png'
import Astro_IMG from '@/../public/code-img/astro.png'
import NodeJS_IMG from '@/../public/code-img/nodejs.png'
import Git_IMG from '@/../public/code-img/git.png'
import MySQL_IMG from '@/../public/code-img/mysql.png'
import Sequelize_IMG from '@/../public/code-img/sequelize.png'


const IMAGES_URL = [
    {
        name: 'HTML',
        img: HTML_IMG,
        path: 'https://developer.mozilla.org/es/docs/Web/HTML'
    },
    {
        name: 'CSS',
        img: CSS_IMG,
        path: 'https://developer.mozilla.org/es/docs/Web/CSS'
    },
    {
        name: 'JavaScript',
        img: JS_IMG,
        path: 'https://developer.mozilla.org/es/docs/Web/JavaScript'
    },
    {
        name: 'TypeScript',
        img: TS_IMG,
        path: 'https://www.typescriptlang.org/'
    },
    {
        name: 'NodeJS',
        img: NodeJS_IMG,
        path: 'https://nodejs.org/en'
    },
    {
        name: 'Git',
        img: Git_IMG,
        path: 'https://git-scm.com/'
    },
    {
        name: 'React',
        img: React_IMG,
        path: 'https://es.react.dev/'
    },
    {
        name: 'NextJS',
        img: NextJS_IMG,
        path: 'https://nextjs.org/'
    },
    {
        name: 'AstroBuild',
        img: Astro_IMG,
        path: 'https://astro.build/'
    },
    {
        name: 'Tailwind',
        img: Tailwind_IMG,
        path: 'https://tailwindcss.com/'
    },
    {
        name: 'MySQL',
        img: MySQL_IMG,
        path: 'https://www.mysql.com/'
    },
    {
        name: 'Sequelize',
        img: Sequelize_IMG,
        path: 'https://sequelize.org/'
    },
]

export default function CodeImg() {
    return (
        <div className="animate-fade-right animate-once animate-duration-3000 animate-ease-in-out lg:flex items-center justify-center gap-6 grid grid-cols-6 justify-items-center place-content-center ">
            {IMAGES_URL.map(images => (
                <Link href={images.path} key={images.name} target="_blank">
                    <Image className="hover:-translate-y-1 duration-500" src={images.img} alt={`Image of ${images.name}`} width={50} height={50}/>
                </Link>
            ))}
        </div>
    )
}