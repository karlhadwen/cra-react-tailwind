import React from 'react';
import './styles/app.css';

function App() {
  return (
    <section className="w-3/6 m-auto flex flex-wrap mt-20">
      <div className="flex flex-wrap">
        <div className="w-full mb-8 p-10 bg-gray-100 relative rounded shadow">
          <span className="text-gray-300 text-6xl absolute italic right-10">
            01
          </span>
          <h2 className="z-10 relative text-2xl text-gray-900 absolute">
            Log Rocket
          </h2>
          <hr className="block mb-6 mt-5 w-8 border-red-500 h-0 border-t-2" />
          <p className="text-gray-700">
            LogRocket is a frontend application monitoring solution that lets
            you replay problems as if they happened in your own browser. Instead
            of guessing why errors happen, or asking users for screenshots and
            log dumps, LogRocket lets you replay the session to quickly
            understand what went wrong. It works perfectly with any app,
            regardless of framework, and has plugins to log additional context
            from Redux, Vuex, and @ngrx/store.
          </p>
        </div>
      </div>
    </section>
  );
}

export default App;
