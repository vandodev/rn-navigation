import { View } from 'react-native'
import { StackRoutesProps } from '@/routes/StackRoutes'

import { ButtonIcon } from '@/components/ButtonIcon'
import { Header } from '@/components/Header'
import { Title } from '@/components/Title'


export function Home({ navigation }: StackRoutesProps<'home'>) {
  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
      <Header>
        <Title>Home</Title>        
        
        <ButtonIcon
          name="add-circle"
          onPress={() => navigation.navigate('product', { id: '153' })}
        />

      </Header>
    </View>
  )
}