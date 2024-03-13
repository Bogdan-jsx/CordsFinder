import React, {memo} from 'react';
import {Text} from 'react-native';
import cords from '../../cords.json';

const MainScreen: React.FC = () => {
  console.log(cords);
  return (
    <>
      <Text>Hello world! Here the application start</Text>
      {cords.map(item => (
        <Text key={item.name}>{item.name}</Text>
      ))}
    </>
  );
};

export default memo(MainScreen);
