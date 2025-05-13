import { View } from 'react-native'
import { DrawerRoutesProps } from '@/routes/DrawerRoutes'

import { ButtonIcon } from '@/components/ButtonIcon'
import { Header } from '@/components/Header'
import { Title } from '@/components/Title'


export function Product({ navigation, route }: DrawerRoutesProps<'product'>) {
  
  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
      <Header>

        <ButtonIcon
          name="arrow-circle-left"
          onPress={() => navigation.goBack()}
        />

        {/*<Title>Product {route.params?.id}</Title> */}
        <Title>Product {route.params?.id}</Title>
      </Header>
    </View>
  )
}