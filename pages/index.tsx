import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
`

const MainContent = styled.main`
  flex: 1;
`

const Home = () => {
  return (
    <Container>
      <Header />
      <MainContent>
        {/* 메인 콘텐츠가 들어갈 자리 */}
      </MainContent>
      <Footer />
    </Container>
  )
}

export default Home
