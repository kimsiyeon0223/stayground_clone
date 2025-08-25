import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

// 얼리버드 데이터 (ImageOverlay 컴포넌트의 데이터와 동일)
const earlybirdData = {
  title: '그리드 제주 제주도 서귀포시',
  subtitle: '알림 신청 시, 3만 원 추가 할인 쿠폰 지급',
  period: '2월 1일, 오후 12시',
  description: '얼리버드 특가로 제공되는 한정 시간 특별 할인 이벤트입니다. 빠른 예약으로 최고의 혜택을 누려보세요. 그리드 제주에서 특별한 얼리버드 혜택을 만나보세요.',
  heroImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop',
  heroTitle: 'Meet the stay.',
  heroSubtitle: '그리드 제주 얼리버드'
}

const Container = styled.div`
  min-height: 100vh;
  background: white;
  width: 100vw;
`

const ContentWrapper = styled.div`
  width: 45%;
  margin: 0 auto;
  margin-top: 100px;
  padding: 0 20px;
`

const PromotionHeader = styled.div`
  padding: 60px 0 40px;
  text-align: left;
  background: white;
`

const PromotionTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #000;
  margin: 0 0 0 0;
`

const PromotionSubtitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #515151;
  margin: 8px 0 24px 0;
`

const PromotionPeriod = styled.div`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`

const ShareButton = styled.button`
  background: transparent;
  border: none;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #000;
  
  &:hover {
    opacity: 0.7;
  }
`

const HeroSection = styled.div`
  position: relative;
  width: 100%;
  height: 700px;
  margin-bottom: 80px;
  overflow: hidden;
`

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.3));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
`

const HeroTitle = styled.h2`
  font-size: 64px;
  font-weight: bold;
  margin: 0 0 16px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`

const HeroSubtitle = styled.h3`
  font-size: 28px;
  font-weight: 600;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`

const DateStrip = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 16px 0;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
`

const DescriptionSection = styled.div`
  padding: 0 0 0 60px;
  width: 70%;
`

const DescriptionTitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin: 0 0 24px 0;
`

const DescriptionSubtitle = styled.h3`
  font-size: 22px;
  font-weight: bold;
  color: #2b2b2b;
  margin: 0 0 40px 0;
`

const DescriptionText = styled.div`
  margin: 0 auto;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.8;
  color: #333;
  
  p {
    margin: 0 0 24px 0;
  }
`

const HowToUseSection = styled.div`
  margin: 80px 0 0 0;
`

const HowToUseTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #333;
  margin: 0 0 60px 0;
  text-align: center;
`

const HowToUseImage = styled.img`
  width: 100%;
  max-width: 1000px;
  height: auto;
  display: block;
  margin: 0 auto;
`

const NoticeSection = styled.div`
  padding: 80px 50px 60px 50px;
  background-color: #363636;
`

const NoticeTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #333;
  margin: 0 0 40px 0;
  color: #fff;
`

const NoticeList = styled.ul`
  max-width: 800px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  color: #fff;
`

const NoticeItem = styled.li`
  font-size: 16px;
  line-height: 1.6;
  color: #fff;
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
  
  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: #fff;
  }
`

const ActionSection = styled.div`
  padding: 80px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  width: 100%;
`

const ActionButton = styled.button`
  background: #8c8c8c;
  border: none;
  color: white;
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 1000px;
  width: 100%;
`

const DownloadButton = styled.button`
  background: white;
  border: 1px solid #e0e0e0;
  color: #333;
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 1000px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  &:hover {
    background: #f5f5f5;
  }
`

const InquiryButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 60px;
  height: 60px;
  background: white;
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

const EarlybirdDetailPage = () => {
  const router = useRouter()
  
  // 얼리버드 데이터 (하나뿐이므로 그대로 사용)
  const earlybird = earlybirdData

  return (
    <Container>
      <Header isScrolled={true} />

      
      <ContentWrapper>
        <PromotionHeader>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '20px', position: 'relative' }}>
            <div>
              <PromotionTitle>{earlybird.title}</PromotionTitle>
              <PromotionSubtitle>{earlybird.subtitle}</PromotionSubtitle>
              <PromotionPeriod>{earlybird.period}</PromotionPeriod>
            </div>
            <ShareButton style={{ position: 'absolute', top: '0', right: '0' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6" cy="12" r="2" stroke="currentColor" strokeWidth="1" fill="none"/>
                <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1" fill="none"/>
                <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="1" fill="none"/>
                <line x1="8" y1="12" x2="16" y2="6" stroke="currentColor" strokeWidth="1"/>
                <line x1="8" y1="12" x2="16" y2="18" stroke="currentColor" strokeWidth="1"/>
              </svg>
            </ShareButton>
          </div>
        </PromotionHeader>

        <HeroSection>
          <HeroImage 
            src={earlybird.heroImage} 
            alt={earlybird.title}
          />
          <HeroOverlay>
            <HeroTitle>{earlybird.heroTitle}</HeroTitle>
            <HeroSubtitle>{earlybird.heroSubtitle}</HeroSubtitle>
          </HeroOverlay>
          <DateStrip>{earlybird.period}</DateStrip>
        </HeroSection>

        <DescriptionSection>
          <DescriptionTitle>EARLYBIRD<br /> SPECIAL.</DescriptionTitle>
          <DescriptionSubtitle>얼리버드와 함께하는 특별한 혜택</DescriptionSubtitle>
          <DescriptionText>
            <p>
              {earlybird.description.split('. ').slice(0, -1).join('. ')}.
            </p>
            <p>
              {earlybird.description.split('. ').slice(-1)[0]}
            </p>
          </DescriptionText>
        </DescriptionSection>

        <HowToUseSection>
          <HowToUseImage 
            src="/shared/images/copone.png" 
            alt="얼리버드 할인 이용 방법"
          />
        </HowToUseSection>

        <NoticeSection>
          <NoticeTitle>얼리버드 이용 안내</NoticeTitle>
          <NoticeList>
            <NoticeItem>해당 얼리버드 혜택은 모든 숙소, 모든 객실에 사용이 가능합니다.</NoticeItem>
            <NoticeItem>얼리버드 할인은 조기 예약 고객에게만 적용됩니다.</NoticeItem>
            <NoticeItem>할인율은 객실 타입에 따라 다를 수 있습니다.</NoticeItem>
            <NoticeItem>예약 변경 및 취소 시 할인 혜택이 적용되지 않을 수 있습니다.</NoticeItem>
            <NoticeItem>한정 수량으로 제공되며, 조기 마감될 수 있습니다.</NoticeItem>
            <NoticeItem>다른 할인 혜택과 중복 적용되지 않습니다.</NoticeItem>
            <NoticeItem>얼리버드 혜택 관련 문의사항은 고객센터로 연락해 주시기 바랍니다.</NoticeItem>
          </NoticeList>
        </NoticeSection>

        <ActionSection>
          <ActionButton>2월 1일, 오후 12시 알림 신청하기</ActionButton>
        </ActionSection>
      </ContentWrapper>

      <InquiryButton>
        문의<br />하기
      </InquiryButton>
      
      <Footer />
    </Container>
  )
}

export default EarlybirdDetailPage
