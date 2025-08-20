import React from 'react'
import styled from 'styled-components'

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
  return (
    <FooterContainer>
      <FooterContent>
        {/* Top Section - Links & Social Media */}
        <TopSection>
          <Links>
            <a href="/customer-center">고객센터</a>
            <a href="/store-inquiry">입점 문의</a>
            <a href="/terms">이용약관</a>
            <a href="/privacy">개인정보처리방침</a>
          </Links>
          
          <SocialIcons>
            <SocialIcon>📷</SocialIcon>
            <SocialIcon>P</SocialIcon>
          </SocialIcons>
        </TopSection>

        {/* Company Information */}
        <CompanyInfo>
          <p>스테이그라운드 | 대표이사 : 정민혁 | 대표전화 : 1588-6198 | stayground@staybility.co.kr</p>
          <p>주소 : 대구광역시 북구 호암로 51, 4층 | 사업자등록번호 : 808-85-02772</p>
          <p>통신판매업등록번호 : 제 2024-대구북구-0886 호 | 관광사업자등록번호 : 제 2023-000005호</p>
        </CompanyInfo>
        <Disclaimer>
          <p>
            스테이그라운드는 통신판매 중개자로서 통신판매의 당사자가 아니며 상품의 예약, 이용 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
          </p>
        </Disclaimer>

        <Divider />

        {/* Copyright */}
        <Copyright>
          <div className="brand">STAY GROUND.</div>
          <div className="copyright-text">Copyright © 2023 STAYBILITY All Rights Reserved.</div>
        </Copyright>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer