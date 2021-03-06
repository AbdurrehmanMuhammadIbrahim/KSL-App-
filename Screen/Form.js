import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, Image , Picker } from 'react-native';
import { db, getAuth, createUserWithEmailAndPassword, addDoc, collection, onSnapshot, doc, setDoc } from '../Navigator/Firebase';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Form({ navigation }) {

    const [name, setname] = useState('');
    const [fname, setfname] = useState('');
    const [email, setemail] = useState('');
    const [dob, setdob] = useState('');
    const [fmember, setfmember] = useState('');
    const [income, setincome] = useState('');
    const [selectedValue,setSelectedValue] = useState('');

    const Rashan = async () => {

        try {
            let dataRef = doc(db, 'Rashan', "999")
            await setDoc(dataRef, {
                name: name,
                fname:fname,
                email: email,
                dob: dob,
                fmember: fmember,
                income: income,
                selectedValue:selectedValue,
            });
            alert("Application Submitted")

        } catch (err) {
            console.log(err.message)
        }

    }


    return (

        <View style={styles.container}>
          <Image source={require('../assets/kahana.png')} style={styles.image}/>
          <Text style={{fontSize:30 , color:"green"}}>Application </Text>
            <TextInput style={styles.input} onChange={(e) => setname(e.target.value)} placeholder="Name" />
            <TextInput style={styles.input} onChange={(e) => setfname(e.target.value)} placeholder="Father Name" />
            <TextInput style={styles.input} onChange={(e) => setemail(e.target.value)} placeholder="CNIC Number" />
            <TextInput style={styles.input} onChange={(e) => setdob(e.target.value)} placeholder="Date Of Birth" />
            <TextInput style={styles.input} onChange={(e) => setfmember(e.target.value)} placeholder="Family members" />
            <Picker
        selectedValue={selectedValue}
        style={styles.dropdown}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
      <Picker.Item label="Monthly Ration" value="Monthly Ration" />
        <Picker.Item label="Daily 1 Time Food" value="Daily 1 Time Food" />
        <Picker.Item label="Daily 2 Time Food" value="Daily 2 Time Food" />
        <Picker.Item label="Daily 3 Time Food" value="Daily 3 Time Food" />
      </Picker>
            
            <TextInput style={styles.input} onChange={(e) => setincome(e.target.value)} placeholder="Income" />

            <Pressable style={styles.button} onPress={Rashan} >
                <Text style={styles.text}>Submit</Text>
            </Pressable>
          

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',

    },
    image: {
        height: 100,
        width: 200,
      },
    button: {
        alignItems: "center",
        backgroundColor: "green",
        padding: 10,
        borderRadius:15,
        margin: 5,
        width:260
    },
    dropdown:{
        height: 45,
        width: 250,
        margin: 6,
        borderWidth: 1,
        padding: 10,
        borderRadius: 15
    },
    input: {
        height: 40,
        width: 250,
        margin: 6,
        borderWidth: 1,
        padding: 10,
        borderRadius: 15
    },
    text: {
        backgroundColor: "green",
        color: "white",
        borderRadius: 15,
    }
});