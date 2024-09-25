

function Home() {
  return (
    <div className='flex justify-end items-center flex-1 bg-[url(../assets/background.jpg)] bg-center bg-cover min-h-screen bg-no-repeat'>
      <div className= 'mr-72'>
      <h1 className="text-6xl text-yellow-100 font-bold">Let&apos;s go shopping</h1>
      <button className="w-2/6 bg-slate-700 text-stone-300 font-semibold rounded-md text-2xl p-2 mt-4 hover:bg-slate-50 hover:text-slate-700">Shop now</button>
      </div>
    </div>
  );
}

export default Home;
