import { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'

export default function ApiCall() {

  //call API
  const [apiData, setApiData] = useState([]);

  useEffect(()=>{
    async function getDataFromApi(){
      const apiResponse = await fetch('https://dummyjson.com/users');
      const finalData = await apiResponse.json()
      if(finalData){
        setApiData(finalData.users.map((userItem)=>`${userItem.firstName} ${userItem.lastName} ${userItem.age}` //chỗ này phải dấu ``
        )
        );
      }
    }
    getDataFromApi();
  },[]);

  console.log(apiData);

  return (
    <View>
      <Text>Api Data</Text>
      <FlatList
        data={apiData}
        renderItem= {(itemData) => <Text>{itemData.item}</Text>}
      />
      
    </View>
  )
}
