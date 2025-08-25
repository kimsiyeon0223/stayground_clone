import React, { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PromotionCards from '../components/PromotionCards'
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
  /* padding: 0 210px; */
`

const EventSection = styled.section`
  margin-bottom: 80px;
  padding: 0 210px;
`

const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #333;
  margin-bottom: 40px;
`

const EventCardsContainer = styled.div`
  position: relative;
`

const EventCardsWrapper = styled.div`
  display: flex;
  gap: 24px;
  transition: transform 0.3s ease;
`

const EventCard = styled.div`
  flex: 0 0 calc(33.333% - 16px);
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
`

const EventImage = styled.div`
  position: relative;
  height: 280px;
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
`

const OverlayTitle = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 24px;
  font-weight: 700;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`

const Badge = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 40px;
  height: 40px;
  background: black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  font-weight: 600;
`

const EventDates = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  font-size: 14px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
`

const EventContent = styled.div`
  padding: 24px;
`

const EventTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin-bottom: 8px;
`

const EventDescription = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 16px;
`

const EventLink = styled.a`
  color: #333;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &:hover {
    text-decoration: underline;
  }
`

const NavigationControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
`

const NavButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #333;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: background-color 0.2s;
  
  &:hover {
    background: #f5f5f5;
  }
`

const PageIndicator = styled.span`
  font-size: 14px;
  color: #666;
`

const PromotionSection = styled.section`
  margin-bottom: 200px;
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

const AnimatedSection = styled.div<{ isVisible: boolean }>`
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? 0 : '30px'});
  transition: all 0.8s ease;
`





const PromotionPage = () => {
  const router = useRouter()
  const { t } = useLanguage()
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  const eventData = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=280&fit=crop',
      badge: 'D-9',   
      title: t('promotion.summer_festa'),
      description: t('promotion.summer_festa_desc'),
      link: t('common.view_more') + ' >',
      detailTitle: t('promotion.summer_festa'),
      detailSubtitle: t('promotion.summer_festa_desc'),
      detailPeriod: '2025.06.01 - 2025.08.31',
      detailDescription: t('promotion.summer_festa_detail'),
      heroImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=600&fit=crop'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=280&fit=crop',
      badge: 'END',
      title: t('promotion.family_month'),
      description: t('promotion.family_month_desc'),
      link: t('common.view_more') + ' >',
      detailTitle: t('promotion.family_month'),
      detailSubtitle: t('promotion.family_month_desc'),
      detailPeriod: '2025.05.09 - 2025.05.31',
      detailDescription: t('promotion.family_month_detail'),
      heroImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=600&fit=crop'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=280&fit=crop',
      badge: 'END',
      title: t('promotion.kb_pay'),
      description: t('promotion.kb_pay_desc'),
      link: t('common.view_more') + ' >',
      detailTitle: t('promotion.kb_pay'),
      detailSubtitle: t('promotion.kb_pay_desc'),
      detailPeriod: '2025.04.01 - 2025.04.30',
      detailDescription: t('promotion.kb_pay_detail'),
      heroImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=600&fit=crop'
    }
  ]

  const handleEventClick = (eventId: number) => {
    router.push(`/promotion/${eventId}`)
  }

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set(prev).add(entry.target.id))
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    const sections = document.querySelectorAll('.animate-section')
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 4

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(1, prev - 1))
  }

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(totalPages, prev + 1))
  }

  return (
    <Container>
      <Header isScrolled={true} />
      
      <MainContent>
        <ContentWrapper>
          <AnimatedSection 
            id="event-section"
            className="animate-section"
            isVisible={visibleSections.has('event-section')}
          >
            <EventSection>
              <SectionTitle>{t('promotion.events')}</SectionTitle>
              
              <EventCardsContainer>
                <NavigationControls>
                  <NavButton onClick={handlePrevPage} disabled={currentPage === 1}>
                    ‹
                  </NavButton>
                  <PageIndicator>{currentPage}/{totalPages}</PageIndicator>
                  <NavButton onClick={handleNextPage} disabled={currentPage === totalPages}>
                    ›
                  </NavButton>
                </NavigationControls>
                
                <EventCardsWrapper>
                  {eventData.map((event) => (
                    <EventCard key={event.id} onClick={() => handleEventClick(event.id)}>
                      <EventImage>
                        <Image src={event.image} alt={event.title} />
                        <Badge>{event.badge}</Badge>
                      </EventImage>
                      <EventContent>
                        <EventTitle>{event.title}</EventTitle>
                        <EventDescription>{event.description}</EventDescription>
                        <EventLink>
                          {event.link}
                        </EventLink>
                      </EventContent>
                    </EventCard>
                  ))}
                </EventCardsWrapper>
              </EventCardsContainer>
            </EventSection>
          </AnimatedSection>

          <AnimatedSection 
            id="promotion-section"
            className="animate-section"
            isVisible={visibleSections.has('promotion-section')}
          >
            <PromotionSection>
                              <SectionTitle style={{paddingLeft: '210px', marginTop: "170px"}}>{t('promotion.promotions')}</SectionTitle>
              <PromotionCards />
            </PromotionSection>
          </AnimatedSection>
        </ContentWrapper>
      </MainContent>

      <InquiryButton>
        문의<br />하기
      </InquiryButton>

      <Footer />
    </Container>
  )
}

export default PromotionPage
