import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import { View, Image,Dimensions} from 'react-native-web'
import Images from './Images'

let deviceHeight=Dimensions.get('window').height;
let deviceWidth=Dimensions.get('window').width;

const Home = () => {
  return (
    <ScrollView>
   <View style={{diplay:'flex'}}>
    {
        Images.map((image,index)=>{
            <TouchableOpacity key={index} onPress=
            {()=>{}}>
                <Image source={image.url} style={
                    {height:deviceHeight/3,
                    width:deviceWidth/3,
                    borderRadius:10,margin:2}}/>
            </TouchableOpacity>
        })
    }

   </View>
   </ScrollView>
  )
}

export default Home