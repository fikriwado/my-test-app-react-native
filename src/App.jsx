import React from 'react';
import {ScrollView, View} from 'react-native';
import {SampleComponent, StylingComponent, FlexBox, Position} from './pages';

const App = () => {
  return (
    <View>
      <ScrollView>
        <SampleComponent />
        <StylingComponent />
        <FlexBox />
        <Position />
      </ScrollView>
    </View>
  );
};

export default App;
