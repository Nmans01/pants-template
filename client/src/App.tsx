import { Route, Routes } from '@solidjs/router';
import type { Component } from 'solid-js';
import { Home } from './components/Home';
import { About } from './components/About';

export const App: Component = () => {

  return <div class="  min-h-screen m-0">
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </Routes>
  </div>;
};