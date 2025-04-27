import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import {Tabs} from "expo-router";
import {images} from "@/constants/images";
import {icons} from "@/constants/icons";

const TabIcon =({focused, icon, title}:any)=>{
  if(focused){
    return (
      <ImageBackground source={images.highlight}
      className="flex flex-row w-full flex-1 min-w-[132px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
      > 
       <Image source={icon} tintColor="#151312" className="size-5"/>
       <Text className="text-secondary text-base font-semibold ml-2">{title}</Text>
     </ImageBackground>
    )
  }

  return(
    <View>
      <Image source={icon} tintColor="#A8B5DB" className="size-7 mt-4"/>
    </View>
  )
  
}

const _layout = () => {
  return (
    <Tabs
      screenOptions={
        {
          tabBarShowLabel:false,
          tabBarItemStyle:{
            width:"100%",
            height:"100%",
            justifyContent:"center",
            alignItems:"center"
          },
          tabBarStyle:{
            backgroundColor:"#0f0D23",
            borderRadius:50,
            marginHorizontal:20,
            marginBottom:10,
            height: 52,
            position: "absolute",
            overflow: "hidden",
            borderWidth:1,
            borderColor:"#0f0D23",
          }
        }
      }
    >
      <Tabs.Screen
        name="index"
        options={{
          title:'Home',
          headerShown:false,
          tabBarIcon:({focused})=>(
            <TabIcon 
            focused={focused} 
            icon={icons.home} 
            title="Home" />
          )
        }}
      
      />
      <Tabs.Screen
        name="spam"
        options={{
          title:'Spam',
          headerShown:false,
          tabBarIcon:({focused})=>(
            <TabIcon 
            focused={focused} 
            icon={icons.spam} 
            title="Spam" />
          )
        }}
      
      />
      <Tabs.Screen
        name="ham"
        options={{
          title:'Ham',
          headerShown:false,
          tabBarIcon:({focused})=>(
            <TabIcon 
            focused={focused} 
            icon={icons.ham} 
            title="Ham" />
          )
        }}
      
      />
    </Tabs>
  )
}

export default _layout