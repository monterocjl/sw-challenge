import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className='flex flex-col gap-8 pb-16'>
        <div className='relative h-[357px] w-full overflow-hidden rounded-xl md:rounded-2xl'>
          <div
            className='absolute inset-0 bg-cover bg-center bg-no-repeat'
            style={{
              backgroundImage:
                "url('https://webres-atmoph.global.ssl.fastly.net/assets/images/thumbnails/starwars_hero.jpeg')",
              backgroundPosition: "right 62%",
            }}
          />
          <div className='absolute inset-0 bg-black/50' />
          <div className='absolute inset-0 flex flex-col items-center justify-center text-center'>
            <h1 className='max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl'>
              DISCOVER
              <br />
              THE WORLD OF
              <br />
              STAR WARS
            </h1>
          </div>
        </div>

        <div className='grid gap-4 md:grid-cols-3'>
          <Link
            to='/people'
            className='flex h-20 md:h-32 items-center justify-center rounded-lg md:rounded-2xl bg-red-750 text-2xl font-bold transition-colors hover:bg-red-800'
          >
            PEOPLE
          </Link>
          <Link
            to='/planets'
            className='flex h-20 md:h-32 items-center justify-center rounded-lg md:rounded-2xl border-[3px] border-red-750 text-2xl font-bold text-red-750 transition-colors hover:bg-red-750/10'
          >
            PLANETS
          </Link>
          <Link
            to='/starships'
            className='flex h-20 md:h-32 items-center justify-center rounded-lg md:rounded-2xl bg-red-750 text-2xl font-bold transition-colors hover:bg-red-800'
          >
            STARSHIPS
          </Link>
        </div>
      </div>
    </>
  );
};
