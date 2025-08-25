import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ImageOverlay from '../components/ImageOverlay'

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: white;
`

const MainContent = styled.main`
  padding-top: 180px;
`

const ContentWrapper = styled.div`
  padding: 0 210px;
`

const EarlybirdSection = styled.section`
  margin-bottom: 200px;
`

const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #333;
  margin-bottom: 40px;
`



const InquiryButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 60px;
  height: 60px;
  background: #f5f5f5;
  border: none;
  border-radius: 40%;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #333;
  line-height: 1.2;
  font-weight: 700;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.3);
  }
`

const EarlybirdPage = () => {
  const router = useRouter()

  const handleEarlybirdClick = () => {
    router.push('/earlybird/1')
  }

  return (
    <Container>
      <Header isScrolled={true} />
      
      <MainContent>
        <ContentWrapper>
          <EarlybirdSection>
            <SectionTitle>EARLYBIRD</SectionTitle>
            <div onClick={handleEarlybirdClick} style={{ cursor: 'pointer' }}>
              <ImageOverlay />
            </div>
          </EarlybirdSection>
        </ContentWrapper>
      </MainContent>

      <InquiryButton>
        문의<br />하기
      </InquiryButton>

      <Footer />
    </Container>
  )
}

export default EarlybirdPage
