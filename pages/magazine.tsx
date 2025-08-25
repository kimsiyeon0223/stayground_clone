import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import Footer from '../components/Footer'

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

const MagazineSection = styled.section`
  margin-bottom: 200px;
`

const MagazineHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
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

const MagazineGrid = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
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

const AnimatedCard = styled.div<{ isVisible: boolean; delay?: string }>`
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? 0 : '30px'});
  transition: all 0.6s ease;
  transition-delay: ${props => props.delay || '0s'};
  flex: 1;
  min-width: calc(25% - 15px);
`

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  font-size: 16px;
  color: #666;
`

// 더 많은 매거진 데이터 생성 함수
const generateMoreMagazines = (startId: number, count: number) => {
  const titles = [
    '나를 위한 시간, 비우담',
    '자연 속에서 찾는 내면의 평화',
    '도시를 벗어나 만나는 새로운 경험',
    '시간을 잊고 즐기는 완벽한 휴식',
    '소소한 일상의 아름다움을 발견하는 순간',
    '바람과 함께하는 자유로운 여행',
    '별빛 아래에서의 로맨틱한 밤',
    '산과 바다가 만나는 곳에서의 힐링',
    '전통과 현대가 조화를 이루는 공간',
    '계절의 변화를 느끼는 특별한 공간',
    '마음의 여유를 찾는 힐링 타임',
    '자연과 함께하는 생태 여행'
  ]
  
  const images = [
    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=600&fit=crop'
  ]
  
  return Array.from({ length: count }, (_, index) => ({
    id: startId + index,
    number: String(36 - (startId + index - 11)),
    title: titles[Math.floor(Math.random() * titles.length)],
    image: images[Math.floor(Math.random() * images.length)]
  }))
}

const initialMagazineData = [
  {
    id: 1,
    number: '46',
    title: '바쁜 일상에서 벗어나 즐기는 찰나의 휴식',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=600&fit=crop'
  },
  {
    id: 2,
    number: '45',
    title: '바다와 함께하는 특별한 휴식, 해변가의 평온',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop'
  },
  {
    id: 3,
    number: '44',
    title: '숲속에서 만나는 평온, 자연과 함께하는 휴식',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop'
  },
  {
    id: 4,
    number: '43',
    title: '나를 위한 시간, 비우담',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=600&fit=crop'
  },
  {
    id: 5,
    number: '42',
    title: '자연 속에서 찾는 내면의 평화',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=600&fit=crop'
  },
  {
    id: 6,
    number: '41',
    title: '도시를 벗어나 만나는 새로운 경험',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&h=600&fit=crop'
  },
  {
    id: 7,
    number: '40',
    title: '시간을 잊고 즐기는 완벽한 휴식',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=600&fit=crop'
  },
  {
    id: 8,
    number: '39',
    title: '소소한 일상의 아름다움을 발견하는 순간',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=600&fit=crop'
  },
  {
    id: 9,
    number: '38',
    title: '바람과 함께하는 자유로운 여행',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=600&fit=crop'
  },
  {
    id: 10,
    number: '37',
    title: '별빛 아래에서의 로맨틱한 밤',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=600&fit=crop'
  },
  {
    id: 11,
    number: '36',
    title: '산과 바다가 만나는 곳에서의 힐링',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=600&fit=crop'
  },
  {
    id: 12,
    number: '35',
    title: '전통과 현대가 조화를 이루는 공간',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=600&fit=crop'
  },
  {
    id: 13,
    number: '34',
    title: '계절의 변화를 느끼는 특별한 공간',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=600&fit=crop'
  },
  {
    id: 14,
    number: '33',
    title: '마음의 여유를 찾는 힐링 타임',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop'
  },
  {
    id: 15,
    number: '32',
    title: '자연과 함께하는 생태 여행',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=600&fit=crop'
  },
  {
    id: 16,
    number: '31',
    title: '도시를 벗어나 만나는 새로운 경험',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&h=600&fit=crop'
  }
]

const MagazinePage = () => {
  const router = useRouter()
  const [magazineData] = useState(initialMagazineData)
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())

  const handleMagazineClick = (magazineId: number) => {
    router.push(`/magazine/${magazineId}`)
  }



  // 카드 애니메이션 observer 설정
  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.getAttribute('data-card-id') || '0')
            setVisibleCards(prev => new Set(prev).add(cardId))
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    const cards = document.querySelectorAll('.magazine-card')
    cards.forEach((card) => {
      cardObserver.observe(card)
    })

    return () => {
      cards.forEach((card) => {
        cardObserver.unobserve(card)
      })
    }
  }, [magazineData])

  return (
    <Container>
      <Header isScrolled={true} />
      
      <MainContent>
        <ContentWrapper>
          <MagazineSection>
            <MagazineHeader>
              <MagazineSectionTitle>MAGAZINE</MagazineSectionTitle>
            </MagazineHeader>
            
            <MagazineGrid>
              {magazineData.map((item, index) => (
                <AnimatedCard
                  key={item.id}
                  className="magazine-card"
                  data-card-id={item.id}
                  isVisible={visibleCards.has(item.id)}
                  delay={`${Math.floor(index / 4) * 0.2}s`}
                >
                  <MagazineCard onClick={() => handleMagazineClick(item.id)}>
                    <MagazineImage src={item.image} alt={item.title} />
                    <MagazineOverlay>
                      <MagazineNumber>{item.number}</MagazineNumber>
                      <MagazineTitle>{item.title}</MagazineTitle>
                    </MagazineOverlay>
                  </MagazineCard>
                </AnimatedCard>
              ))}
            </MagazineGrid>
            

          </MagazineSection>
        </ContentWrapper>
      </MainContent>

      <InquiryButton>
        문의<br />하기
      </InquiryButton>

      <Footer />
    </Container>
  )
}

export default MagazinePage
