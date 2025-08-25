import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLanguage } from '../contexts/LanguageContext'

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

const MagazinePage = () => {
  const router = useRouter()
  const { t } = useLanguage()
  
  const initialMagazineData = [
    {
      id: 1,
      number: '46',
      title: t('magazine.title_46'),
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=600&fit=crop'
    },
    {
      id: 2,
      number: '45',
      title: t('magazine.title_45'),
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop'
    },
    {
      id: 3,
      number: '44',
      title: t('magazine.title_44'),
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop'
    },
    {
      id: 4,
      number: '43',
      title: t('magazine.title_43'),
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=600&fit=crop'
    },
    {
      id: 5,
      number: '42',
      title: t('magazine.title_42'),
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=600&fit=crop'
    },
    {
      id: 6,
      number: '41',
      title: t('magazine.title_41'),
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&h=600&fit=crop'
    },
    {
      id: 7,
      number: '40',
      title: t('magazine.title_40'),
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=600&fit=crop'
    },
    {
      id: 8,
      number: '39',
      title: t('magazine.title_39'),
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=600&fit=crop'
    },
    {
      id: 9,
      number: '38',
      title: t('magazine.title_38'),
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=600&fit=crop'
    },
    {
      id: 10,
      number: '37',
      title: t('magazine.title_37'),
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=600&fit=crop'
    },
    {
      id: 11,
      number: '36',
      title: t('magazine.title_36'),
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=600&fit=crop'
    },
    {
      id: 12,
      number: '35',
      title: t('magazine.title_35'),
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=600&fit=crop'
    },
    {
      id: 13,
      number: '34',
      title: t('magazine.title_34'),
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=600&fit=crop'
    },
    {
      id: 14,
      number: '33',
      title: t('magazine.title_33'),
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop'
    },
    {
      id: 15,
      number: '32',
      title: t('magazine.title_32'),
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=600&fit=crop'
    },
    {
      id: 16,
      number: '31',
      title: t('magazine.title_31'),
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&h=600&fit=crop'
    }
  ]
  
  const [magazineData, setMagazineData] = useState(initialMagazineData)
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())

  // 언어가 변경될 때마다 데이터를 다시 생성하기 위해 useEffect 사용
  useEffect(() => {
    const newMagazineData = [
      {
        id: 1,
        number: '46',
        title: t('magazine.title_46'),
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=600&fit=crop'
      },
      {
        id: 2,
        number: '45',
        title: t('magazine.title_45'),
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop'
      },
      {
        id: 3,
        number: '44',
        title: t('magazine.title_44'),
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop'
      },
      {
        id: 4,
        number: '43',
        title: t('magazine.title_43'),
        image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=600&fit=crop'
      },
      {
        id: 5,
        number: '42',
        title: t('magazine.title_42'),
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=600&fit=crop'
      },
      {
        id: 6,
        number: '41',
        title: t('magazine.title_41'),
        image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&h=600&fit=crop'
      },
      {
        id: 7,
        number: '40',
        title: t('magazine.title_40'),
        image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=600&fit=crop'
      },
      {
        id: 8,
        number: '39',
        title: t('magazine.title_39'),
        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=600&fit=crop'
      },
      {
        id: 9,
        number: '38',
        title: t('magazine.title_38'),
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=600&fit=crop'
      },
      {
        id: 10,
        number: '37',
        title: t('magazine.title_37'),
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=600&fit=crop'
      },
      {
        id: 11,
        number: '36',
        title: t('magazine.title_36'),
        image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=600&fit=crop'
      },
      {
        id: 12,
        number: '35',
        title: t('magazine.title_35'),
        image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=600&fit=crop'
      },
      {
        id: 13,
        number: '34',
        title: t('magazine.title_34'),
        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=600&fit=crop'
      },
      {
        id: 14,
        number: '33',
        title: t('magazine.title_33'),
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop'
      },
      {
        id: 15,
        number: '32',
        title: t('magazine.title_32'),
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=600&fit=crop'
      },
      {
        id: 16,
        number: '31',
        title: t('magazine.title_31'),
        image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&h=600&fit=crop'
      }
    ]
    setMagazineData(newMagazineData)
  }, [t])

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
              <MagazineSectionTitle>{t('magazine.page_title')}</MagazineSectionTitle>
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
        {t('common.inquiry')}
      </InquiryButton>

      <Footer />
    </Container>
  )
}

export default MagazinePage
