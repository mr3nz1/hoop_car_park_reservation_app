import React from 'react';
import { Text, Linking } from 'react-native';

const MyLink = (props:any) => {
  const handlePress = () => {
    // Linking.openURL opens the given URL in the default browser of the device
    Linking.openURL('https://google.com.com');
  };

  return (
    <Text style={{ color: 'blue' }} onPress={handlePress}>
      click
    </Text>
  );
};

export default MyLink;