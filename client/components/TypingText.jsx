import { View, Text } from 'react-native';
import React, {useState, useEffect} from 'react';
import TypeWriter from 'react-native-typewriter';

const TypingText = () => {
    const [curText, setCurText] = useState(0);

    useEffect(() => {
        let timeoutId;
        const interval = setInterval(() => {
          setCurText((prevText) => (prevText === 0 ? 1 : prevText === 1 ? 2 : 0));
    
          clearTimeout(timeoutId);
    
          timeoutId = setTimeout(() => {
            clearInterval(interval); // Clear interval to prevent overlapping
          }, 2000);
    
        }, curText === 0 ? 3000 : curText === 1 ? 3000 : 3000); // Change interval based on curText value
    
        // Clear the interval on component unmount to avoid memory leaks
        return () => {
          clearInterval(interval);
          clearTimeout(timeoutId);
        };
      }, [curText]); // Re-run effect whenever curText changes

  return (
    <View className="w-full justify-center items-center min-h-[85vh] px-4">
        {curText === 0 ? 
        (<TypeWriter typing={1} className="text-gray-100">Hold the Screen to Chat.</TypeWriter>):
        curText == 1 ?
        (<TypeWriter typing={1} className="text-gray-100 text-align-center">Release When Done Talking..</TypeWriter>):
        (<TypeWriter typing={1} className="text-gray-100 text-align-center">Hold the Screen to Chat...</TypeWriter>)
        }
    </View>
  )
}

export default TypingText