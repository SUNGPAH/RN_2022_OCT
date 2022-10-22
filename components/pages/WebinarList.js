import { StatusBar } from 'expo-status-bar';
import {
  Text, View,
  TouchableOpacity, TextInput, Image, FlatList,
} from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "../../styles"
import {cntAtom, appliedAtom} from "../../recoilStates"
import { useRecoilState, useRecoilValue } from 'recoil';


const url = 'https://qa2.ringleserver.com/api/v4/student/landing/webinar'

const WebinarList = ({ navigation }) => {

  // const [cnt, setCnt] = useState(0)
  const [number, setNumber] = useState(0)
  const [name, setName] = useState("")
  const [age, setAge] = useState(null)
  const [webinars, setWebinars] = useState([]);
  const [cnt,setCnt] = useRecoilState(cntAtom)
  const applied = useRecoilValue(appliedAtom)

  useEffect(() => {
    axios.get(url)
      .then(function (response) {
        // handle success
        console.log('000')
        console.log(response.data.webinars);

        const { success, webinars: _webinars } = response.data

        if (success) {
          console.log('---')
          console.log(_webinars)
          setWebinars(_webinars)
        }

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });


    console.log('first useEffect')
  }, [])



  const increaseCnt = (evt, good) => {
    //setCnt(cnt + 1)
    // console.log(evt)
    console.log(good)
    setCnt(prev => prev + 1)
  }

  const decreaseCnt = () => {
    var temp = cnt * 3 - 1
    //
    temp = temp * 2
    //
    setCnt(temp)
  }

  const onChangeNumber = (e) => {
    console.log('on change number!!!')
    console.log(e)
    setNumber(e)
  }

  const submit = () => {
    alert(number)
  }

  const onChangeAge = (e) => {
    setAge(e)
  }

  const onChangeName = (e) => {
    setName(e)
  }

  const renderItem = ({item:webinar}) => {
    return <View style={applied[webinar.id] ? styles.view1: styles.view2}>
      <TouchableOpacity onPress={e => goToPage(webinar)}>
        <Text>{webinar.id}</Text>
        <Text>{webinar.title}</Text>
        <Text>{webinar.formatted_start_time}</Text>
        <Image
          style={styles.customImage}
          source={{
            uri: webinar.image_url,
          }}
        />
      </TouchableOpacity>
    </View>
  }

  const goToPage = (webinar) => {
    navigation.navigate("WebinarDetail", { webinar: webinar })
  }

  return (
    <View style={styles.container}>
      <View style={styles.customView}>
        <Text style={styles.customText}>hi </Text>
      </View>

      {
        <FlatList
        data={webinars}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      }
      {
        /*
        webinars.map((webinar, index) => {
          return <View key={index}>
            <TouchableOpacity onPress={e => goToPage(webinar)}>
              <Text>{index}</Text>
              <Text>{webinar.title}</Text>
              <Text>{webinar.formatted_start_time}</Text>
              <Image
                style={styles.customImage}
                source={{
                  uri: webinar.image_url,
                }}
              />
            </TouchableOpacity>
          </View>
        })
        */
      }


      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        placeholder="useless placeholder"
        value={number}
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={styles.customButton}
        onPress={e => submit()}><Text>submit</Text></TouchableOpacity>


      <TouchableOpacity
        onPress={e => increaseCnt(e, 'joke')}
        style={styles.customButton}>
        <Text style={styles.textInButton}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={e => decreaseCnt()}
        style={styles.customButton}>
        <Text style={styles.textInButton}>-</Text>
      </TouchableOpacity>
      <Text>{cnt}</Text>

      <Text>----</Text>

      <Text>Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        placeholder="useless placeholder"
        value={name}
      />

      <Text>Age</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeAge}
        placeholder="useless placeholder"
        value={age}
        keyboardType="numeric"
      />


      <StatusBar style="auto" />
    </View>
  );
}


export default WebinarList