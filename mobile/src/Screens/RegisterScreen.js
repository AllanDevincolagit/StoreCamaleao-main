import React from 'react';
import {Box,Heading,Image,Input,Text,View,VStack} from 'native-base';
import Colors from "../color";
import { MaterialIcons,FontAwesome,Ionicons } from '@expo/vector-icons';


function RegisterScreen() {
  return (
    <Box flex={1} bg={Colors.black}>
        <Image flex={1} alt="Logo" 
        resizeMode="cover"
        size="lg"
        w="full"
        source={require("../../assets/cover.png")}/>
        <Box
         w="full"
         h="full"
         position="absolute"
         top="0"
         px="6"
         justifyContent="center">

          <Heading>CADASTRO</Heading>
          <VStack space={5} pt="6">
            {/*USERNAME*/}
            <Input
             InputLeftElement={
              <FontAwesome name="user" size={20} color={Colors.main} />
             }
             variant="underline" 
             placeholder="JOHN DOE"
             w="70%"
             pl={2}
             type="text"
             color={Colors.main} borderBottomColor={Colors.underline}/>

             {/*EMAIL*/}
             <Input
             InputLeftElement={
              <MaterialIcons name="email" size={20} color={Colors.main} />
             }
             variant="underline" 
             placeholder="user@gmail.com"
             w="70%"
             pl={2}
             type="text"
             color={Colors.main} borderBottomColor={Colors.underline}/>

             {/* PASSWORD */}
             <Input
             InputLeftElement={
              <Ionicons name="eye" size={20} color="black" />
              
             }
             variant="underline" 
             placeholder="********"
             w="70%"
             type="password"
             pl={2}
             color={Colors.main} borderBottomColor={Colors.underline}/>
          </VStack>
          <Button
           _pressed={{
            bg:Colors.main,
           }}
           my={30}
           w="40%"
           rounded={50}
           bg={Colors.main}
           _text={{
            color: Colors.white,
           }}>
            CADASTRE-SE
          </Button>
          <Pressable mt={4}>
            <Text color={Colors.deepestGray}>LOGIN</Text>
          </Pressable>
          
        </Box>
    </Box>
  );
}

export default RegisterScreen