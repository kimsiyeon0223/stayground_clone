import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: transparent;
  width: 100%;
`

const PromoBanner = styled.div`
  background: #000;
  color: white;
  text-align: center;
  padding: 12px 0;
  font-size: 14px;
  font-weight: 500;
`

const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 210px;
  background: transparent;
`

const Logo = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
  line-height: 1.2;
  
  .stay {
    display: block;
  }
  
  .ground {
    display: block;
  }
`

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;
`

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  
  a {
    color: white;
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    transition: opacity 0.2s;
    
  }
`

const LoginContainer = styled.div`
  position: relative;
`

const LoginButton = styled.button`
  background: transparent;
  border: 1px solid white;
  color: white;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
`

const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  font-size: 14px;
  cursor: pointer;
  position: relative;
`

const LoginModal = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 10px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  min-width: 170px;
  z-index: 1001;
  display: none;
  padding: 5px 0;
  
  &.visible {
    display: block;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 0;
    right: 0;
    height: 10px;
    background: transparent;
  }
`

const ModalItem = styled.div`
  padding: 16px 20px;
  color: black;
  font-size: 14px;
  cursor: pointer;
  
  &:hover {
    background-color: #f5f5f5;
  }
  
  &:first-child {
    border-radius: 8px 8px 0 0;
  }
  
  &:last-child {
    border-radius: 0 0 8px 8px;
  }
`

const LanguageModal = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 10px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  min-width: 60px;
  z-index: 1001;
  display: none;
  padding: 5px 0;
  
  &.visible {
    display: block;
  }
`

const LanguageItem = styled.div`
  padding: 12px 20px;
  color: black;
  font-size: 14px;
  cursor: pointer;
  
  &:hover {
    background-color: #f5f5f5;
  }
  
  &:first-child {
    border-radius: 8px 8px 0 0;
  }
  
  &:last-child {
    border-radius: 0 0 8px 8px;
  }
`

const Header: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false)
  const [isLanguageModalVisible, setIsLanguageModalVisible] = React.useState(false)
  const [selectedLanguage, setSelectedLanguage] = React.useState('KOR')
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)
  const languageTimeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsModalVisible(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsModalVisible(false)
    }, 300)
  }

  const handleModalMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsModalVisible(true)
  }

  const handleModalMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsModalVisible(false)
    }, 300)
  }

  const handleLanguageClick = () => {
    setIsLanguageModalVisible(!isLanguageModalVisible)
  }

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language)
    setIsLanguageModalVisible(false)
  }



  return (
    <HeaderContainer>
      <PromoBanner>
        썸머 페스타 2만 원 쿠폰 받기
      </PromoBanner>
      
      <MainHeader>
        <Logo>
          <span className="stay">STAY</span>
          <span className="ground">GROUND.</span>
        </Logo>
        
        <Navigation>
          <NavLinks>
            <a href="/stay">스테이</a>
            <a href="/promotion">프로모션</a>
            <a href="/earlybird">얼리버드</a>
            <a href="/magazine">매거진</a>
            <a href="/about">by. STAYBILITY</a>
          </NavLinks>
          
          <LoginContainer
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <LoginButton>
              로그인
            </LoginButton>
            <LoginModal 
              className={isModalVisible ? 'visible' : ''}
              onMouseEnter={handleModalMouseEnter}
              onMouseLeave={handleModalMouseLeave}
            >
              <ModalItem>로그인 / 회원가입</ModalItem>
              <ModalItem>비회원 예약 조회</ModalItem>
            </LoginModal>
          </LoginContainer>
          
          <LanguageSelector onClick={handleLanguageClick}>
            <span style={{ fontSize: '16px' }}>🌐</span>
            <span>{selectedLanguage}</span>
            <LanguageModal className={isLanguageModalVisible ? 'visible' : ''}>
              <LanguageItem onClick={() => handleLanguageSelect('KOR')}>KOR</LanguageItem>
              <LanguageItem onClick={() => handleLanguageSelect('ENG')}>ENG</LanguageItem>
              <LanguageItem onClick={() => handleLanguageSelect('CHI')}>CHI</LanguageItem>
            </LanguageModal>
          </LanguageSelector>
        </Navigation>
      </MainHeader>
    </HeaderContainer>
  )
}

export default Header