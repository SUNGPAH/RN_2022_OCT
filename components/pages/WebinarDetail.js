import {
  Text, View,
  Image,
  Touchable,
  TouchableOpacity, 
} from 'react-native';

import styles from "../../styles"

import {cntAtom, appliedAtom} from "../../recoilStates";

import { useRecoilValue, useRecoilState} from 'recoil';

const WebinarDetail = ({ route }) => {
  const { webinar } = route.params
  const { tutor, title, id,
    formatted_start_time, thumbnail_url } = webinar

  const { image_url: tutorImageUrl, name: tutorName } = tutor
  const cnt = useRecoilValue(cntAtom)
  // const applied = useRecoilValue(appliedAtom)

  const [applied,setApplied] = useRecoilState(appliedAtom)


  const apply = () => {
    // webinar's id, appliedAtom
    console.log('---')
    console.log(applied)

    setApplied(prev => {

      const cp = {...prev}
      cp[id] = true
      
      return cp
    })
  }

  const cancel = () => {
    setApplied(prev => {

      const cp = {...prev}
      cp[id] = false
      
      return cp
    })
  }

  return <View>
    <Text>{cnt}</Text>

    {applied[id] && <Text>wow!</Text>}

    <Text>{id} detail</Text>
    <Text>{formatted_start_time}</Text>
    <Image
      style={styles.customImageDetail}
      source={{
        uri: thumbnail_url,
      }}
    />


    <Text>tutor</Text>
    <Text>{tutorName}</Text>
    <Image
      style={styles.customImage}
      source={{
        uri: tutorImageUrl,
      }}
    />

    {applied[id] ?
      <TouchableOpacity 
      style={styles.customButton}
      onPress={e => cancel()}><Text>Cancel</Text></TouchableOpacity>
      :
<TouchableOpacity 
    style={styles.customButton}
    onPress={e => apply()}><Text>Apply!</Text></TouchableOpacity>
  
  }
    


  </View>
}

export default WebinarDetail
