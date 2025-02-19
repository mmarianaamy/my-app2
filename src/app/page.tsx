export default function Home() {
  return (
    <div className="w-full max-w-screen min-h-screen">
      <main className="items-center text-center min-h-screen flex flex-col items-center justify-around">
        <div className="h-80 flex flex-col justify-around">
          <h1 className="text-8xl">Texto</h1>
          <h3 className="text-xl">Subtexto</h3>
          <button className="border-green-500 rounded-md bg-green-500 p-8 text-xl">hola</button>
        </div>
      </main>
    </div>
  );
}
