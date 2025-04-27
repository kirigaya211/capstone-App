import { View, Text } from 'react-native'
import React from 'react'
import {Tabs} from "expo-router";

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title:'Home',
          headerShown:false
        }}
      
      />
      <Tabs.Screen
        name="spam"
        options={{
          title:'Spam',
          headerShown:false
        }}
      
      />
      <Tabs.Screen
        name="ham"
        options={{
          title:'Ham',
          headerShown:false
        }}
      
      />
    </Tabs>
  )
}

export default _layout