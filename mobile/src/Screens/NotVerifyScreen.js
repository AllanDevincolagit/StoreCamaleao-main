import React from 'react'
import {Box,Center,Image,VStack} from 'native-base'
import { Colors } from '../color';
import Buttone from '../Components/Buttone';

function NotVerifyScreen() {
  return (
    <Box flex={1} bg={Colors.main} safeAreaTop>
        <Center w="full" h={250} bg={Colors.blue}>
          <Image source={require("../../assets/favicon.jpeg")}/>
          alt="Logo"
          size="lg"
        </Center>
        <VStack space={6} px={5} alingItems="center">
          <Buttone bg={Colors.black} color={Colors.white}>
            REGISTRAR
          </Buttone>
          <Buttone bg={Colors.white} color={Colors.black}>
            LOGIN
          </Buttone>
        </VStack>
    </Box>
  );
}

export default NotVerifyScreen