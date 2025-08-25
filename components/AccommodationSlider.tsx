import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useLanguage } from '../contexts/LanguageContext'



const SliderContainer = styled.div`
  display: flex;
  margin: 160px 210px 0 210px;
  height: 50vh;
  background-color: #ececec;
  padding: 70px 50px;
  border-radius: 25px;
`

const LeftPanel = styled.div`
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #ececec;
  width: 40%;
`

const ContentSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
`

const TextContainer = styled.div<{ currentIndex: number; totalSlides: number }>`
  display: flex;
  width: ${props => props.totalSlides * 100}%;
  transition: transform 1.5s ease-in-out;
  transform: translateX(-${props => props.currentIndex * (100 / props.totalSlides)}%);
`

const TextSlide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Category = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #000;
  margin-bottom: 20px;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #000;
  margin-bottom: 10px;
  line-height: 1.2;
`

const Subtitle = styled.p`
  font-size: 24px;
  color: #000;
  line-height: 1.4;
  font-weight: normal;
`

const Pagination = styled.div`
  font-size: 16px;
  color: #000;
  margin-top: 40px;
`

const NavigationControls = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`

const ArrowButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  color: #000;
  cursor: pointer;
  padding: 5px;
`

const PageInfo = styled.span`
  font-size: 14px;
  color: #000;
`

const RightPanel = styled.div`
  position: relative;
  overflow: hidden;
  width: 60%;
`

interface SlideContainerProps {
  currentIndex: number;
  totalSlides: number;
}

const SlideContainer = styled.div<SlideContainerProps>`
  display: flex;
  width: ${props => props.totalSlides * 100}%;
  height: 100%;
  transition: transform 1.5s ease-in-out;
  transform: translateX(-${props => props.currentIndex * (100 / props.totalSlides)}%);
`

const Slide = styled.div<{ totalSlides: number }>`
  width: ${props => 100 / props.totalSlides}%;
  height: 100%;
  position: relative;
`

const SlideImage = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  border-radius: 20px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`





const AccommodationSlider: React.FC = () => {
  const router = useRouter()
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  // 숙소 더미 데이터
  const accommodationData = [
    {
      id: 1,
      title: t('pick.title_1'),
      subtitle: t('pick.subtitle_1'),
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
      category: 'PICK'
    },
    {
      id: 2,
      title: t('pick.title_2'),
      subtitle: t('pick.subtitle_2'),
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop',
      category: 'PICK'
    },
    {
      id: 3,
      title: t('pick.title_3'),
      subtitle: t('pick.subtitle_3'),
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
      category: 'PICK'
    },
    {
      id: 4,
      title: t('pick.title_4'),
      subtitle: t('pick.subtitle_4'),
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      category: 'PICK'
    },
    {
      id: 5,
      title: t('pick.title_5'),
      subtitle: t('pick.subtitle_5'),
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      category: 'PICK'
    },
    {
      id: 6,
      title: t('pick.title_6'),
      subtitle: t('pick.subtitle_6'),
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      category: 'PICK'
    },
    {
      id: 7,
      title: t('pick.title_7'),
      subtitle: t('pick.subtitle_7'),
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
      category: 'PICK'
    },
    {
      id: 8,
      title: t('pick.title_8'),
      subtitle: t('pick.subtitle_8'),
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop',
      category: 'PICK'
    },
    {
      id: 9,
      title: t('pick.title_9'),
      subtitle: t('pick.subtitle_9'),
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
      category: 'PICK'
    },
    {
      id: 10,
      title: t('pick.title_10'),
      subtitle: t('pick.subtitle_10'),
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
      category: 'PICK'
    }
  ]

  // 언어가 변경될 때마다 데이터를 다시 생성하기 위해 useEffect 사용
  useEffect(() => {
    // accommodationData가 변경되면 currentIndex를 0으로 리셋
    setCurrentIndex(0)
  }, [t])

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % accommodationData.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const handlePrevClick = () => {
    setIsAutoPlay(false)
    setCurrentIndex(prev => prev === 0 ? accommodationData.length - 1 : prev - 1)
  }

  const handleNextClick = () => {
    setIsAutoPlay(false)
    setCurrentIndex(prev => (prev + 1) % accommodationData.length)
  }

  const handleSlideClick = (id: number) => {
    router.push(`/accommodation/${id}`)
  }

  const currentAccommodation = accommodationData[currentIndex]

  return (
    <SliderContainer>
      <LeftPanel>
        <ContentSection>
          <TextContainer currentIndex={currentIndex} totalSlides={accommodationData.length}>
            {accommodationData.map((accommodation, index) => (
              <TextSlide key={accommodation.id}>
                <Category>{accommodation.category}</Category>
                <Title>{accommodation.title}</Title>
                <Subtitle>{accommodation.subtitle}</Subtitle>
              </TextSlide>
            ))}
          </TextContainer>
        </ContentSection>
        
                  <div>
            <NavigationControls>
              <ArrowButton onClick={handlePrevClick}>&lt;</ArrowButton>
              <PageInfo>{currentIndex + 1} / {accommodationData.length}</PageInfo>
              <ArrowButton onClick={handleNextClick}>&gt;</ArrowButton>
            </NavigationControls>
            

          </div>
      </LeftPanel>

      <RightPanel>
        <SlideContainer currentIndex={currentIndex} totalSlides={accommodationData.length}>
          {accommodationData.map((accommodation, index) => (
            <Slide key={accommodation.id} totalSlides={accommodationData.length}>
              <SlideImage 
                imageUrl={accommodation.image} 
                onClick={() => handleSlideClick(accommodation.id)}
              />
            </Slide>
          ))}
        </SlideContainer>
      </RightPanel>
    </SliderContainer>
  )
}

export default AccommodationSlider
