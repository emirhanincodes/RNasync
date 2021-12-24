import React, { useState } from "react";
import { View, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Button } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
const Categories = [
    {
        id: "erkek_kuafor",
        title: "Erkek Kuaför",
    },
    {
        id: "kadin_kuafor",
        title: "Kadın Kuaför",
    },
    {
        id: "guzellik_salonu",
        title: "Güzellik Salonu",
    },
    {
        id: "dis_doktoru",
        title: "Diş Doktoru",
    },
    {
        id: "dovme",
        title: "Dövme Piercing",
    },
];




const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
    
);

const CategoriesSelect = () => {
    const [selectedId, setSelectedId] = useState(null);


    const saveSelectedData = async () => {
        try {
            await AsyncStorage.setItem('selectedData', selectedId);
            alert('Kategoriniz ' + selectedId + ' olarak kaydedildi')
        } catch (error) {
            alert(error)
        }
    }
    
    const getSelectedData = async () => {
        try {
            const selectedData = await AsyncStorage.getItem('selectedData');
            if (selectedData !== null) {
                // We have data!!
                alert('Kategoriniz ' + selectedData );
            }
            else {
                alert('No data')
            }
        } catch (error) {
            alert(error)
        }
    }

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#e99557" : "white";
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };
    console.log(selectedId);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.itemlist}>

                <FlatList
                    data={Categories}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                />



                <Button
                    title="Kaydet"
                    onPress={saveSelectedData}
                />
                <Button
                    title="Göster"
                    onPress={getSelectedData}
                />

            </View>


        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f4e6c1",
        marginTop: StatusBar.currentHeight || 0,
    },
    itemlist: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: '5%',
        paddingVertical: '5%',
        paddingTop: 20,
        width: '100%',
        height: '100%',
    },

    item: {
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: '#fff',
        width: 150,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 20,

    },
    title: {
        fontSize: 32,
    },
});

export default CategoriesSelect;