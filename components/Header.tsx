import React, { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import SearchFilter from './SearchFilter'
import { useLanguage } from '../contexts/LanguageContext'

interface HeaderProps {
  isScrolled?: boolean;
  isDetailPage?: boolean;
}

const HeaderContainer = styled.header<HeaderProps>`
  position: ${props => props.isDetailPage ? 'static' : 'fixed'};
  top: ${props => props.isDetailPage ? 'auto' : '0'};
  left: ${props => props.isDetailPage ? 'auto' : '0'};
  right: ${props => props.isDetailPage ? 'auto' : '0'};
  z-index: 1000;
  background: ${props => props.isScrolled ? 'white' : 'transparent'};
  width: 100%;
  transition: background-color 0.3s ease;
`

const PromoBanner = styled.div`
  background: #000;
  color: white;
  text-align: center;
  padding: 12px 0;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: #333;
  }
`

const MainHeader = styled.div<HeaderProps>`
  display: flex;
  align-items: center;
  padding: 20px 210px;
  background: ${props => props.isScrolled ? 'white' : 'transparent'};
  transition: background-color 0.3s ease;
  gap: 40px;
`

const Logo = styled.div<HeaderProps>`
  color: ${props => props.isScrolled ? '#333' : 'white'};
  font-size: 24px;
  font-weight: bold;
  line-height: 1.2;
  transition: color 0.3s ease;
  flex-shrink: 0;
  
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
  flex: 1;
  justify-content: flex-end;
`

const NavLinks = styled.div<HeaderProps>`
  display: flex;
  gap: 30px;
  flex-shrink: 0;
  
  a {
    color: ${props => props.isScrolled ? '#333' : 'white'};
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    transition: color 0.3s ease;
    
  }
`

const LoginContainer = styled.div`
  position: relative;
  flex-shrink: 0;
`

const LoginButton = styled.button<HeaderProps>`
  background: transparent;
  border: 1px solid ${props => props.isScrolled ? '#333' : 'white'};
  color: ${props => props.isScrolled ? '#333' : 'white'};
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
`

const LanguageSelector = styled.div<HeaderProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${props => props.isScrolled ? '#333' : 'white'};
  font-size: 14px;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;
  flex-shrink: 0;
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

const HeaderSearchFilter = styled.div<HeaderProps>`
  opacity: ${props => props.isScrolled ? 1 : 0};
  visibility: ${props => props.isScrolled ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  flex: 1;
  display: flex;
  justify-content: center;
  > div {
    padding: 0;
  } 
`

const Header: React.FC<HeaderProps> = ({ isScrolled = false, isDetailPage = false }) => {
  const router = useRouter()
  const { language, setLanguage, t } = useLanguage()
  const [isModalVisible, setIsModalVisible] = React.useState(false)
  const [isLanguageModalVisible, setIsLanguageModalVisible] = React.useState(false)
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)
  const languageTimeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  // 언어 표시 텍스트
  const getLanguageText = (lang: string) => {
    switch (lang) {
      case 'ko': return 'KOR'
      case 'en': return 'ENG'
      case 'zh': return 'CHI'
      default: return 'KOR'
    }
  }

  const handleLogoClick = () => {
    router.push('/')
  }

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

  const handleLanguageSelect = (lang: string) => {
    setLanguage(lang as 'ko' | 'en' | 'zh')
    setIsLanguageModalVisible(false)
  }

  const handlePromoClick = () => {
    router.push('/promotion/6')
  }



  return (
    <HeaderContainer isScrolled={isScrolled} isDetailPage={isDetailPage}>
      <PromoBanner onClick={handlePromoClick}>
        {t('home.summer_festa_coupon')}
      </PromoBanner>
      
      <MainHeader isScrolled={isScrolled}>
        <Logo isScrolled={isScrolled} onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <span className="stay">STAY</span>
          <span className="ground">GROUND.</span>
        </Logo>
        
        <HeaderSearchFilter isScrolled={isScrolled}>
          <SearchFilter />
        </HeaderSearchFilter>
        
        <Navigation>
          <NavLinks isScrolled={isScrolled}>
            <a href="/stay">{t('nav.stay')}</a>
            <a href="/promotion">{t('nav.promotion')}</a>
            <a href="/earlybird">{t('nav.earlybird')}</a>
            <a href="/magazine">{t('nav.magazine')}</a>
            <a href="/about">{t('nav.about')}</a>
          </NavLinks>
          
          <LoginContainer
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <LoginButton isScrolled={isScrolled}>
              {t('header.login')}
            </LoginButton>
            <LoginModal 
              className={isModalVisible ? 'visible' : ''}
              onMouseEnter={handleModalMouseEnter}
              onMouseLeave={handleModalMouseLeave}
            >
              <ModalItem>{t('header.login')} / {t('header.signup')}</ModalItem>
              <ModalItem>{t('header.non_member_reservation')}</ModalItem>
            </LoginModal>
          </LoginContainer>
          
          <LanguageSelector isScrolled={isScrolled} onClick={handleLanguageClick}>
            <span style={{ fontSize: '16px' }}>🌐</span>
            <span>{getLanguageText(language)}</span>
            <LanguageModal className={isLanguageModalVisible ? 'visible' : ''}>
              <LanguageItem onClick={() => handleLanguageSelect('ko')}>KOR</LanguageItem>
              <LanguageItem onClick={() => handleLanguageSelect('en')}>ENG</LanguageItem>
              <LanguageItem onClick={() => handleLanguageSelect('zh')}>CHI</LanguageItem>
            </LanguageModal>
          </LanguageSelector>
        </Navigation>
      </MainHeader>
    </HeaderContainer>
  )
}

export default Header