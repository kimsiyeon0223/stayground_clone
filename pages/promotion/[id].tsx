import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

// 프로모션 데이터 (이벤트와 프로모션 섹션 모두 포함)
const promotionData = [
  // 이벤트 섹션 데이터
  {
    id: 1,
    title: '스테이그라운드 썸머 페스타',
    subtitle: '여름 휴가를 준비하는 여러분에게 2만원 쿠폰을 선물합니다!',
    period: '2025.06.01 - 2025.08.31',
    description: '여름 휴가를 준비하는 여러분에게 스테이그라운드에서 특별한 혜택을 선물합니다. 2만원 할인쿠폰으로 더욱 특별한 여름 휴가를 즐겨보세요!',
    heroImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=600&fit=crop',
    heroTitle: 'Meet the stay.',
    heroSubtitle: '스테이그라운드 썸머 페스타'
  },
  {
    id: 2,
    title: '가정의달 여행지원금',
    subtitle: '2만원 쿠폰 받기',
    period: '2025.05.09 - 2025.05.31',
    description: '가정의 달 5월을 맞아, 스테이그라운드에 입점한 모든 공간 예약 시 적용할 수 있는 2만원 할인쿠폰을 선물 드립니다. 사랑하는 이들과 누리는 특별한 휴식, 스테이그라운드의 선물과 함께해 보세요!',
    heroImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=600&fit=crop',
    heroTitle: 'Meet the stay.',
    heroSubtitle: '가정의 달 쿠폰 선물'
  },
  {
    id: 3,
    title: 'KB Pay가 선물드려요! [5회차]',
    subtitle: 'KB Pay에서 무료로 제공합니다',
    period: '2025.04.01 - 2025.04.30',
    description: '여행하기 좋은 날씨, 감성숙소 어디 갈지 고민 중이신가요? KB Pay에서 무료로 제공합니다. KB Pay 결제 시 추가 혜택을 받아보세요!',
    heroImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=600&fit=crop',
    heroTitle: 'Meet the stay.',
    heroSubtitle: 'KB Pay 특별 혜택'
  },
  // 프로모션 섹션 데이터
  {
    id: 4,
    title: '보스케 썸머 프로모션',
    subtitle: '기간 내 숙박 시 10% 할인',
    period: '2025.06.01 - 2025.08.31',
    description: '보스케에서 특별한 여름 프로모션을 진행합니다. 기간 내 숙박 시 10% 할인 혜택을 받아보세요. 여름 휴가를 더욱 특별하게 만들어드립니다.',
    heroImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=600&fit=crop',
    heroTitle: 'Meet the stay.',
    heroSubtitle: '보스케 썸머 프로모션'
  },
  {
    id: 5,
    title: '조각밤 9월 프로모션',
    subtitle: '기간 내 평일 숙박 시 10% 할인',
    period: '2025.09.01 - 2025.09.30',
    description: '조각밤에서 9월 특별 프로모션을 진행합니다. 기간 내 평일 숙박 시 10% 할인 혜택을 받아보세요. 가을의 정취를 느껴보세요.',
    heroImage: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=600&fit=crop',
    heroTitle: 'Meet the stay.',
    heroSubtitle: '조각밤 9월 프로모션'
  },
  {
    id: 6,
    title: '스테이그라운드 썸머 페스타',
    subtitle: '여름 휴가를 준비하는 여러분에게 2만원 쿠폰을 선물합니다!',
    period: '2025.06.01 - 2025.08.31',
    description: '여름 휴가를 준비하는 여러분에게 스테이그라운드에서 특별한 혜택을 선물합니다. 2만원 할인쿠폰으로 더욱 특별한 여름 휴가를 즐겨보세요!',
    heroImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=600&fit=crop',
    heroTitle: 'Meet the stay.',
    heroSubtitle: '스테이그라운드 썸머 페스타'
  }
]

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
  background: #e0e0e0;
  border: none;
  color: #333;
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 1000px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 70%;
  
  &:hover {
    background: #d0d0d0;
  }
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

const PromotionDetailPage = () => {
  const router = useRouter()
  const { id } = router.query
  
  // 프로모션 데이터 찾기
  const promotion = promotionData.find(p => p.id === Number(id)) || promotionData[0] // 기본값으로 id 1 사용

  return (
    <Container>
      <Header isScrolled={true} />

      
      <ContentWrapper>
        <PromotionHeader>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '20px', position: 'relative' }}>
            <div>
              <PromotionTitle>{promotion.title}</PromotionTitle>
              <PromotionSubtitle>{promotion.subtitle}</PromotionSubtitle>
              <PromotionPeriod>{promotion.period}</PromotionPeriod>
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
            src={promotion.heroImage} 
            alt={promotion.title}
          />
          <HeroOverlay>
            <HeroTitle>{promotion.heroTitle}</HeroTitle>
            <HeroSubtitle>{promotion.heroSubtitle}</HeroSubtitle>
          </HeroOverlay>
          <DateStrip>{promotion.period.replace('2025.', '25.').replace(' - ', ' - ')}</DateStrip>
        </HeroSection>

        <DescriptionSection>
          <DescriptionTitle>STAY<br /> GROUND.</DescriptionTitle>
          <DescriptionSubtitle>스테이그라운드와 함께하는 {promotion.title.includes('가정의 달') ? '가정의 달' : promotion.title.includes('썸머') ? '여름' : '특별한'}</DescriptionSubtitle>
          <DescriptionText>
            <p>
              {promotion.description.split('. ').slice(0, -1).join('. ')}.
            </p>
            <p>
              {promotion.description.split('. ').slice(-1)[0]}
            </p>
          </DescriptionText>
        </DescriptionSection>

        <HowToUseSection>
          <HowToUseImage 
            src="/shared/images/copone.png" 
            alt="쿠폰 사용 방법"
          />
        </HowToUseSection>

        <NoticeSection>
          <NoticeTitle>유의사항 안내</NoticeTitle>
          <NoticeList>
            <NoticeItem>해당 프로모션은 모든 숙소, 모든 객실에 사용이 가능합니다.</NoticeItem>
            <NoticeItem>2025년 5월 9일부터 5월 31일까지 예약에 한해서만 쿠폰이 발급 및 할인 적용됩니다.</NoticeItem>
            <NoticeItem>쿠폰은 1인당 1회만 사용 가능하며, 중복 사용이 불가능합니다.</NoticeItem>
            <NoticeItem>쿠폰 사용 시 다른 할인 혜택과 중복 적용이 불가능합니다.</NoticeItem>
            <NoticeItem>예약 취소 시 쿠폰은 환불되지 않으며, 재발급되지 않습니다.</NoticeItem>
            <NoticeItem>프로모션 기간 외 예약에는 쿠폰이 적용되지 않습니다.</NoticeItem>
            <NoticeItem>쿠폰 사용 관련 문의사항은 고객센터로 연락해 주시기 바랍니다.</NoticeItem>
          </NoticeList>
        </NoticeSection>

        <ActionSection>
          <ActionButton>숙소 예약하기</ActionButton>
          <DownloadButton>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            쿠폰 다운로드
          </DownloadButton>
        </ActionSection>
      </ContentWrapper>

      <InquiryButton>
        문의<br />하기
      </InquiryButton>
      
      <Footer />
    </Container>
  )
}

export default PromotionDetailPage
