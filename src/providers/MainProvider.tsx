import { FC, ReactNode } from 'react'
import { Layout } from '../components/layout/Layout'
import { HeaderProvider } from './HeaderProvider'

export const MainProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <HeaderProvider>
      <Layout>{children}</Layout>
    </HeaderProvider>
  )
}
