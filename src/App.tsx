import React from 'react';
import logo from './logo.png';
import {useQuery} from "@tanstack/react-query";
import {useGetInput} from "./hooks/useGetInput";

function App() {

    const getInput = useGetInput();
    const { data, refetch, isRefetching } = useQuery({
        queryKey: ['input'],
        queryFn: getInput,
    })

    console.log(data?.list?.name);
  const start: boolean = true;
  if (!start) {
      return (
          <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                      Schützenfest Tinnen 2024
                  </p>
              </header>
          </div>
      );
  }

    return (
        <div className="container mx-auto py-4">
            <div className="flex flex-row gap-3">
                <div>
                    <img src={logo} alt="Placeholder" className="h-4/5" />
                </div>
                <div>
                    <p className="font-bold text-6xl text text-emerald-700">Aktueller Schütze:</p>
                    <p className="font-bold text-4xl my-5">{data?.list?.name}</p>
                    <p className="font-bold text-2xl">{data?.list?.line}</p>
                    {/*<p className="font-bold text-2xl py-3">Satz: {data?.list?.count}</p>*/}
                    {/*<p className="font-bold text-2xl">Wertung: {data?.list?.score}</p>*/}
                </div>
            </div>
        </div>
    );

}

export default App;
