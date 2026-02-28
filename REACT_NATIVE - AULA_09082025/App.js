import {SafeAreaView,View,Text,} from 'react-native';
import mascara from './css/estilo';

export default function App (){
return (
  <SafeAreaView style={mascara.container}>
    <Text style={mascara.paragraph}>
      Aula5
    </Text>
    <View style={mascara.cx1}></View>
    <Text style={mascara.titulo}>Suzano</Text>
    <View style={mascara.cx2}></View>
  </SafeAreaView>

  );
}
