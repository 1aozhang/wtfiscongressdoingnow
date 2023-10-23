import { asset } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <div>
      <img
        class="my-6"
        src={asset("logo.svg")}
        width="128"
        height="128"
        alt="the Fresh logo: a sliced lemon dripping with juice"
      />
      <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
    </div>
  );
}
