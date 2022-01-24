import React, { useRef } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';

export default function Bottom() {

    const modalizeRef = useRef(null);

    const onOpen = () => {
      modalizeRef.current?.open();
    };

    return (
        <>
            <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center', marginTop: 200}}
            onPress={onOpen}>
                <Text>Open the modal</Text>
            </TouchableOpacity>

            <Modalize ref={modalizeRef}>...your content</Modalize>
        </>
    );
}