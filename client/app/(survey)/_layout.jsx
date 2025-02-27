import { View, Text } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function SurveyLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="survey"
          options={{
            headerShown: false
          }}
        />
      </Stack>

      <StatusBar backgroundColor="#161622" style="light" />
    </>
  )
}
