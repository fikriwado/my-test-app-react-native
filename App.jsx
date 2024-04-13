import React from 'react';
import {ScrollView, View} from 'react-native';
import {
  // SampleComponent,
  // StylingComponent,
  // MateriFlexBox,
  PositionComponent,
} from './components';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingComponent />
        <MateriFlexBox /> */}
        <PositionComponent />
      </ScrollView>
    </View>
  );
};

export default App;
