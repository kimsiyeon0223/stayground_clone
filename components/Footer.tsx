import React from 'react'
import styled from 'styled-components'
import { useLanguage } from '../contexts/LanguageContext'

const FooterContainer = styled.footer`
  background: #1a1a1a;
  color: white;
  padding: 40px 0 80px 0;
  font-size: 14px;
  line-height: 1.6;
  width: 100%;
`

const FooterContent = styled.div`
  /* width: 100%; */
  margin: 0 auto;
  padding: 0 210px;
`

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`

const Links = styled.div`
  display: flex;
  gap: 30px;
  
  a {
    color: white;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    
    &:hover {
      text-decoration: underline;
    }
  }
`

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
`

const SocialIcon = styled.div`
  width: 32px;
  height: 32px;
  border: 1px solid white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`

const CompanyInfo = styled.div`
  margin-bottom: 20px;
  font-size: 12px;
  
  p {
    margin: 5px 0;
  }
`

const Divider = styled.hr`
  border: none;
  border-top: 1px solid white;
  margin: 20px 0;
`

const Disclaimer = styled.div`
  margin-bottom: 20px;
  color: white;
  font-size: 14px;
`

const Copyright = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  
  .brand {
    font-weight: bold;
    font-size: 16px;
  }
  
  .copyright-text {
    color: white;
    font-size: 12px;
  }
`

const Footer: React.FC = () => {
  const { t } = useLanguage()
  
  return (
    <FooterContainer>
      <FooterContent>
        {/* Top Section - Links & Social Media */}
        <TopSection>
          <Links>
            <a href="/customer-center">{t('footer.support')}</a>
            <a href="/store-inquiry">{t('footer.contact')}</a>
            <a href="/terms">{t('footer.terms')}</a>
            <a href="/privacy">{t('footer.privacy')}</a>
          </Links>
          
          <SocialIcons>
            <SocialIcon>📷</SocialIcon>
            <SocialIcon>P</SocialIcon>
          </SocialIcons>
        </TopSection>

        {/* Company Information */}
        <CompanyInfo>
          <p>{t('footer.company_name')} | {t('footer.ceo')} : {t('footer.ceo_name')} | {t('footer.phone')} : {t('footer.phone_number')} | {t('footer.email')}</p>
          <p>{t('footer.address')} : {t('footer.address_detail')} | {t('footer.business_number')} : {t('footer.business_number_detail')}</p>
          <p>{t('footer.commerce_number')} : {t('footer.commerce_number_detail')} | {t('footer.tourism_number')} : {t('footer.tourism_number_detail')}</p>
        </CompanyInfo>
        <Disclaimer>
          <p>
            {t('footer.disclaimer')}
          </p>
        </Disclaimer>

        <Divider />

        {/* Copyright */}
        <Copyright>
          <div className="brand">STAY GROUND.</div>
          <div className="copyright-text">{t('footer.copyright')}</div>
        </Copyright>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer