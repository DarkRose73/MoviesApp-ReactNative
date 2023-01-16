import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './src/navigation/Navigation';
// import {FadeScreen} from './src/screens/FadeScreen';
import {GradientProvider} from './src/context/GradientContext';

const AppState = ({children}: any) => {
  return <GradientProvider>{children}</GradientProvider>;
};

export default function App() {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
        {/* <FadeScreen></FadeScreen> */}
      </AppState>
    </NavigationContainer>
  );
}
