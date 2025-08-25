import React from 'react'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AccommodationSlider from '../components/AccommodationSlider'
import AccommodationGrid from '../components/AccommodationGrid'
import HomeAccommodationGrid from '../components/HomeAccommodationGrid'
import OnlyStaygroundGrid from '../components/OnlyStaygroundGrid'
import PromotionCards from '../components/PromotionCards'
import styled from 'styled-components'
import ImageOverlay from '../components/ImageOverlay'
import SearchFilter from '../components/SearchFilter'

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const HeroSection = styled.div`
  position: relative;
  width: 100%;
  height: 95vh;
  background-image: url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&h=1080&fit=crop');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
`

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
`

const MainTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 40px;
`

const ContactButton = styled.button`
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

const MainContent = styled.main`
  flex: 1;
  width: 100%;
`

const SectionHeader = styled.div<{ isVisible: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 160px 0 40px 0;
  padding: 0 210px;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? 0 : '30px'});
  transition: all 0.8s ease;
`

const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin: 0;
`

const PromotionSectionHeader = styled.div<{ isVisible: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 40px 0;
  padding: 0 210px;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? 0 : '30px'});
  transition: all 0.8s ease;
`

const PromotionSectionTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin: 0;
`

const MagazineSection = styled.div<{ isVisible: boolean }>`
  padding: 160px 210px;
  background: white;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? 0 : '50px'});
  transition: all 0.8s ease;
`

const MagazineHeader = styled.div<{ isVisible: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? 0 : '30px'});
  transition: all 0.8s ease;
`

const MagazineSectionTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin: 0;
`

const ViewAllButton = styled.button`
  background: white;
  border: none;
  color: #666;
  font-size: 14px;
  cursor: pointer;
  padding: 10px 15px;
  border: 1px solid #e5e5e5;
  border-radius: 1000px;

`

const PromotionSection = styled.div<{ isVisible: boolean }>`
  padding: 60px 0 60px 0;
  background: #ebebeb;
  margin-top: 100px;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? 0 : '50px'});
  transition: all 0.8s ease;
`

const MagazineGrid = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`

const MagazineCard = styled.div`
  cursor: pointer;
  flex: 1;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
`

const MagazineImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`

const MagazineOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  padding: 40px 20px 20px 20px;
  border-radius: 0 0 12px 12px;
`

const MagazineNumber = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: white;
  margin-bottom: 8px;
`

const MagazineTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: white;
  margin: 0;
  line-height: 1.4;
`

const Home = () => {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [visibleSections, setVisibleSections] = React.useState({
    onlyStayground: false,
    pick: false,
    earlybird: false,
    checkInTravel: false,
    promotion: false,
    magazine: false
  })

  const handleStayClick = () => {
    router.push('/stay')
  }

  const handleEarlybirdClick = () => {
    router.push('/earlybird')
  }

  const handlePromotionClick = () => {
    router.push('/promotion')
  }

  const handleMagazineClick = () => {
    router.push('/magazine')
  }

  // 스크롤 이벤트 핸들러
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const heroHeight = window.innerHeight * 0.95
      
      if (scrollPosition > heroHeight * 0.5) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    // Intersection Observer 설정
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section')
          if (sectionId) {
            setVisibleSections(prev => ({
              ...prev,
              [sectionId]: true
            }))
          }
        }
      })
    }, observerOptions)

    // 각 섹션에 observer 연결
    const sections = document.querySelectorAll('[data-section]')
    sections.forEach(section => observer.observe(section))

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])
  // 홈페이지용 더미 숙소 데이터 (ONLY STAYGROUND용)
  const homeAccommodationData = [
    {
      id: 1,
      name: '느린미학',
      location: '경상북도 경주시',
      capacity: '기준 2인(최대4인)',
      price: '330,000원~',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
      hasDeal: false
    },
    {
      id: 2,
      name: '달리야드',
      location: '제주도 서귀포시',
      capacity: '기준 4인(최대4인)',
      price: '350,000원~',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
      hasDeal: false
    },
    {
      id: 3,
      name: '누운 섶',
      location: '제주도 제주시',
      capacity: '기준 2인(최대6인)',
      price: '390,000원',
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&h=300&fit=crop',
      hasDeal: false
    },
    {
      id: 4,
      name: '그리드 제주',
      location: '경기도 가평군',
      capacity: '기준 2인(최대4인)',
      price: '280,000원~',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop',
      hasDeal: true,
      dealText: 'DEAL -15%'
    },
    {
      id: 5,
      name: '서와정',
      location: '강원도 평창군',
      capacity: '기준 4인(최대6인)',
      price: '420,000원~',
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=300&fit=crop',
      hasDeal: true,
      dealText: 'DEAL -10%'
    },
    {
      id: 6,
      name: '조각밤',
      location: '충청남도 태안군',
      capacity: '기준 2인(최대4인)',
      price: '310,000원~',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
      hasDeal: false
    }
  ]

  // CHECK IN TRAVEL용 더미 숙소 데이터 (6개)
  const checkInTravelData = [
    {
      id: 7,
      name: '숲속의 집',
      location: '전라남도 여수시',
      capacity: '기준 3인(최대5인)',
      price: '380,000원~',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
      hasDeal: true,
      dealText: 'DEAL -20%'
    },
    {
      id: 8,
      name: '바다뷰 펜션',
      location: '경상남도 거제시',
      capacity: '기준 4인(최대6인)',
      price: '450,000원~',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop',
      hasDeal: false
    },
    {
      id: 9,
      name: '산중턱 별장',
      location: '강원도 강릉시',
      capacity: '기준 2인(최대4인)',
      price: '520,000원~',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
      hasDeal: true,
      dealText: 'DEAL -12%'
    },
    {
      id: 10,
      name: '도시의 오아시스',
      location: '충청북도 단양군',
      capacity: '기준 3인(최대5인)',
      price: '290,000원~',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
      hasDeal: false
    },
    {
      id: 11,
      name: '전원생활',
      location: '전라북도 전주시',
      capacity: '기준 4인(최대6인)',
      price: '360,000원~',
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&h=300&fit=crop',
      hasDeal: true,
      dealText: 'DEAL -18%'
    },
    {
      id: 12,
      name: '힐링 스테이',
      location: '경상북도 안동시',
      capacity: '기준 2인(최대4인)',
      price: '340,000원~',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop',
      hasDeal: false
    }
  ]

  const magazineData = [
    {
      id: 1,
      number: '46',
      title: '바쁜 일상에서 벗어나 즐기는 찰나의 휴식',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=600&fit=crop'
    },
    {
      id: 2,
      number: '45',
      title: '한 걸음 쉬어가며 마주하는 평온, 서와정',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=600&fit=crop'
    },
    {
      id: 3,
      number: '44',
      title: '바다와 대나무, 별의 울림이 깃든 공간',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=600&fit=crop'
    },
    {
      id: 4,
      number: '43',
      title: '나를 위한 시간, 비우담',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=600&fit=crop'
    }
  ]

  return (
    <Container>
      <Header isScrolled={isScrolled} />
      <HeroSection>
        <HeroOverlay />
        <HeroContent>
          <MainTitle>TRAVEL SELECT SHOP <br /> STAYGROUND</MainTitle>
          <SearchFilter />
        </HeroContent>
      </HeroSection>
      
      <MainContent>
        <div data-section="onlyStayground">
          <SectionHeader isVisible={visibleSections.onlyStayground}>
            <SectionTitle>ONLY STAYGROUND</SectionTitle>
            <ViewAllButton onClick={handleStayClick} style={{ cursor: 'pointer' }}>전체보기 &gt;</ViewAllButton>
          </SectionHeader>
          <div style={{
            opacity: visibleSections.onlyStayground ? 1 : 0,
            transform: `translateY(${visibleSections.onlyStayground ? 0 : '50px'})`,
            transition: 'all 0.8s ease'
          }}>
            <OnlyStaygroundGrid accommodationData={homeAccommodationData} />
          </div>
        </div>
        
        <div data-section="pick">
          <div style={{
            opacity: visibleSections.pick ? 1 : 0,
            transform: `translateY(${visibleSections.pick ? 0 : '50px'})`,
            transition: 'all 0.8s ease'
          }}>
            <AccommodationSlider />
          </div>
        </div>
        
        <div data-section="earlybird">
          <SectionHeader isVisible={visibleSections.earlybird}>
            <SectionTitle>EARLYBIRD</SectionTitle>
            <ViewAllButton onClick={handleEarlybirdClick} style={{ cursor: 'pointer' }}>전체보기 &gt;</ViewAllButton>
          </SectionHeader>
          <div style={{
            padding: '0 210px',
            opacity: visibleSections.earlybird ? 1 : 0,
            transform: `translateY(${visibleSections.earlybird ? 0 : '50px'})`,
            transition: 'all 0.8s ease'
          }}>
            <ImageOverlay />
          </div>
        </div>
        
        <div data-section="checkInTravel">
          <SectionHeader isVisible={visibleSections.checkInTravel}>
            <SectionTitle>CHECK IN TRAVEL</SectionTitle>
            <ViewAllButton onClick={handleStayClick} style={{ cursor: 'pointer' }}>전체보기 &gt;</ViewAllButton>
          </SectionHeader>
          <div style={{
            opacity: visibleSections.checkInTravel ? 1 : 0,
            transform: `translateY(${visibleSections.checkInTravel ? 0 : '50px'})`,
            transition: 'all 0.8s ease'
          }}>
            <HomeAccommodationGrid accommodationData={checkInTravelData} />
          </div>
        </div>
        
        <div data-section="promotion">
          <PromotionSection isVisible={visibleSections.promotion}>
            <PromotionSectionHeader isVisible={visibleSections.promotion}>
              <PromotionSectionTitle>PROMOTION</PromotionSectionTitle>
              <ViewAllButton onClick={handlePromotionClick} style={{ cursor: 'pointer' }}>전체보기 &gt;</ViewAllButton>
            </PromotionSectionHeader>
            <div style={{
              opacity: visibleSections.promotion ? 1 : 0,
              transform: `translateY(${visibleSections.promotion ? 0 : '50px'})`,
              transition: 'all 0.8s ease'
            }}>
              <PromotionCards />
            </div>
          </PromotionSection>
        </div>
        
        <div data-section="magazine">
          <MagazineSection isVisible={visibleSections.magazine}>
            <MagazineHeader isVisible={visibleSections.magazine}>
              <MagazineSectionTitle>MAGAZINE</MagazineSectionTitle>
              <ViewAllButton onClick={handleMagazineClick} style={{ cursor: 'pointer' }}>전체보기 &gt;</ViewAllButton>
            </MagazineHeader>
            <div style={{
              opacity: visibleSections.magazine ? 1 : 0,
              transform: `translateY(${visibleSections.magazine ? 0 : '50px'})`,
              transition: 'all 0.8s ease'
            }}>
              <MagazineGrid>
                {magazineData.map((item) => (
                  <MagazineCard key={item.id}>
                    <MagazineImage src={item.image} alt={item.title} />
                    <MagazineOverlay>
                      <MagazineNumber>{item.number}</MagazineNumber>
                      <MagazineTitle>{item.title}</MagazineTitle>
                    </MagazineOverlay>
                  </MagazineCard>
                ))}
              </MagazineGrid>
            </div>
          </MagazineSection>
        </div>
      </MainContent>
      
      <ContactButton>문의<br />하기</ContactButton>
      <Footer />
    </Container>
  )
}

export default Home;
