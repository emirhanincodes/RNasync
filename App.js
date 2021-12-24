// import React,{useState} from 'react'
// import { StyleSheet, Text, View ,TextInput,Button, SafeAreaView} from 'react-native'
// import AsyncStorage from '@react-native-async-storage/async-storage';
// const App = () => {
//   const [bussinesName,setBussinesName] = useState('');
//   const [ownerName,setOwnerName] = useState('')
//   const [phoneNumber,setPhoneNumber] = useState('')
//   const [adress,setAdress] = useState('')
//   const [ilce,setIlce] = useState('')
//   const [city,setCity] = useState('')


//   const saveData = async () => {
//       if ((bussinesName.length == 0) || (ownerName.length == 0) || (phoneNumber.length == 0) || (adress.length == 0) || (ilce.length == 0) || (city.length == 0)) {
//           alert('Lütfen isim giriniz')
           
//       } else {
//           try {
//               await AsyncStorage.setItem('bussinesName', bussinesName);
//               await AsyncStorage.setItem('ownerName', ownerName);
//               await AsyncStorage.setItem('phoneNumber', phoneNumber);
//               await AsyncStorage.setItem('adress', adress);
//               await AsyncStorage.setItem('ilce', ilce);
//               await AsyncStorage.setItem('city', city);
//               alert('isim ' + bussinesName + ' ownerName: ' + ownerName + ' phoneNumber: ' + phoneNumber + ' adress: ' + adress + ' ilce: ' + ilce + ' city: ' + city)
//             } catch (error) {
//               alert(error)
//           }
//       }
//   }
//   const getData = async () => {
//       try {
//           const bussinesName = await AsyncStorage.getItem('bussinesName');
//           const ownerName = await AsyncStorage.getItem('ownerName');
//           const phoneNumber = await AsyncStorage.getItem('phoneNumber');
//           const adress = await AsyncStorage.getItem('adress');
//           const ilce = await AsyncStorage.getItem('ilce');
//           const city = await AsyncStorage.getItem('city');
//           if ((bussinesName !== null) && (ownerName !== null) && (phoneNumber !== null) && (adress !== null) && (ilce !== null) && (city !== null)) {
//               // We have data!!
//               alert('isim ' + bussinesName + ' ownerName: ' + ownerName + ' phoneNumber: ' + phoneNumber + ' adress: ' + adress + ' ilce: ' + ilce + ' city: ' + city)
        
//           }
//       } catch (error) {
//           alert(error)
//       }

//     }
//   return (
//       <SafeAreaView style={styles.container}>
//           <TextInput
//           placeholder='İşletmenin Adı'
//           style={styles.input}
//           value={bussinesName}
//           onChangeText={(data) => setBussinesName(data)}

//           />
//           <TextInput
//           placeholder='Sahibinin Adı'
//           style={styles.input}
//           value={ownerName}
//           onChangeText={(data) => setOwnerName(data)}
          
//           />
//           <TextInput
          
//           placeholder='Telefon Numarası'
//           style={styles.input}
//           value={phoneNumber}
//           onChangeText={(text) => setPhoneNumber(text)}
          
//           />
//           <TextInput
//           placeholder='Adres'
//           style={styles.input}
//           value={adress}
//           onChangeText={(text) => setAdress(text)}
          
//           />
//           <TextInput
//           placeholder='İlçe'
//           style={styles.input}
//           value={ilce}
//           onChangeText={(text) => setIlce(text)}
          
//           />
//           <TextInput
//           placeholder='Şehir'
//           style={styles.input}
//           value={city}
//           onChangeText={(text) => setCity(text)}
          
//           />
//           <Button
//           title='Kaydet'
//           onPress={saveData}
//           />
//           <Button
//           onPress={getData}
//           title='Göster'
//           />
        
//       </SafeAreaView>
//   )
// }

// export default App

// const styles = StyleSheet.create({

//   container:{
//   },
//   input:{
//       marginTop:20,
//       paddingTop:10,
//       borderWidth:1,
//       borderColor:'grey',
//       borderRadius:5,
//       padding:'2%',
//       fontSize:15,
//       color:'grey',
//       margin:5
//   }
// })

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CategoriesSelect from './screen/CategoriesSelect'
import MarkerSelect from './screen/MarkerSelect'

const App = () => {
    return (
        <CategoriesSelect/>
    )
}

export default App

const styles = StyleSheet.create({})
