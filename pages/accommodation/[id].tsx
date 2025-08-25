import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useLanguage } from '../../contexts/LanguageContext'

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const MainContent = styled.main`
  flex: 1;
  position: relative;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const FullScreenImage = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
  position: relative;
  overflow: visible;
`

const MainImage = styled.img`
  width: 100%;
  height: 90%;
  object-fit: cover;
  animation: zoomInOut 800ms ease-out;
  
  @keyframes zoomInOut {
    0% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`

const ImageOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 2;
`

const EnglishTitle = styled.div`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 8px;
  font-weight: 300;
`

const KoreanTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: white;
  margin: 0;
  line-height: 1.2;
`

const BookingBar = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 15px 70px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  width: 80%;
  z-index: 10;
`

const BookingInfo = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
  align-items: center;
  justify-content: center;
`

const BookingItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 30%;
  
  &:not(:last-child) {
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      right: -20px;
      top: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 30px;
      background-color: #e0e0e0;
    }
  }
`

const BookingLabel = styled.span`
  font-size: 14px;
  color: #666;
  font-weight: 500;
`

const BookingValue = styled.span`
  font-size: 16px;
  color: #333;
  font-weight: 600;
`

const InquiryButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background: white;
  color: #333;
  border: none;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  line-height: 1.2;
  z-index: 10;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`

const RoomDetailContainer = styled.div`
  width: 100%;
  background: white;
  padding: 40px 0;
  margin-top: 100px;
`

const RoomDetailContent = styled.div`
  display: flex;
  padding: 0 210px;
  width: 100%;
`

const RoomTypeSection = styled.div`
    display: flex;
  margin-bottom: 40px;
  width: 100%;
`

const RoomTypeTitle = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #333;
  margin-bottom: 20px;
  width: 40%;
`

const RoomCard = styled.div`
  display: flex;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 60%;
`

const RoomImage = styled.div`
  width: 400px;
  height: 250px;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px 0 0 16px;
  }
`

const RoomInfo = styled.div`
  flex: 1;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const RoomHeader = styled.div`
  margin-bottom: 16px;
`

const RoomName = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
`

const RoomCapacity = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 8px;
`

const RoomDetails = styled.p`
  font-size: 14px;
  color: #888;
  margin-bottom: 8px;
`

const RoomTimes = styled.p`
  font-size: 14px;
  color: #888;
`

const RoomPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const PriceInfo = styled.div`
  text-align: right;
`

const OriginalPrice = styled.div`
  font-size: 16px;
  color: #999;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
`

const DiscountLabel = styled.span`
  color: #ff4444;
  font-weight: bold;
`

const Label = styled.span`
  text-decoration: line-through;
`

const DiscountPrice = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  display: flex;
  align-items: baseline;
  gap: 4px;
`

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #eeeeee;
  margin:0 0 10px 0;
`

const PriceUnit = styled.span`
  font-size: 16px;
  font-weight: normal;
  color: #666;
`

const BookNowButton = styled.button`
  background: #333;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 1000px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: #555;
  }
`

const PropertySection = styled.div`
  width: 100%;
  background: white;
  padding: 80px 210px;
`

const PropertyContent = styled.div`
`

const PropertyImage = styled.div`
  width: 100%;
  height: 700px;
  overflow: hidden;
  border-radius: 16px;
  margin-bottom: 40px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const PropertyTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin-bottom: 30px;
`

const PropertyDescription = styled.div`
`

const DescriptionText = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: #333;
`

const PointSection = styled.div`
  width: 100%;
  background: white;
  padding: 80px 0;
`

const PointContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

const PointImageSection = styled.div<{ currentIndex: number; maxIndex: number }>`
  width: 100%;
  display: flex;
  gap: 30px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-bottom: 10px;
  padding-left: ${props => props.currentIndex === 0 ? '210px' : '0'};
  
  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }
  
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  
  /* 4번째 이미지에 오른쪽 패딩 추가 */
  & > div:nth-child(4) {
    margin-right: 210px;
  }
`

const PointImage = styled.div`
  flex-shrink: 0;
  width: 450px;
  height: 450px;
  overflow: hidden;
  border-radius: 12px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const RoomInfoSection = styled.div`
  width: 100%;
  background: white;
  padding: 80px 0;
`

const RoomInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

const RoomInfoTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #333;
  padding: 0 210px;
`

const RoomInfoImageSection = styled.div<{ currentIndex: number }>`
  width: ${props => props.currentIndex === 4 ? 'calc(100% + 210px)' : '100%'};
  display: flex;
  gap: 20px;
  overflow: ${props => props.currentIndex === 4 ? 'visible' : 'hidden'};
  position: relative;
  
  /* 첫 번째 이미지에 왼쪽 패딩 (첫 번째 상태일 때) */
  & > div:first-child {
    margin-left: ${props => props.currentIndex === 0 ? '210px' : '0'};
  }
  
  /* 6번째 이미지에 오른쪽 패딩 (마지막 상태일 때) */
  & > div:nth-child(6) {
    margin-right: ${props => props.currentIndex === 4 ? '210px' : '0'};
  }
`

const RoomInfoImage = styled.div`
  flex-shrink: 0;
  width: 400px;
  height: 400px;
  overflow: hidden;
  border-radius: 12px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const CarouselArrow = styled.div<{ direction: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  ${props => props.direction === 'left' ? 'left: 10px' : 'right: 10px'};
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;

  &:hover {
    background: white;
    transform: translateY(-50%) scale(1.1);
  }

  &::before {
    content: '';
    width: 0;
    height: 0;
    ${props => props.direction === 'left' 
      ? 'border-right: 8px solid #333; border-top: 6px solid transparent; border-bottom: 6px solid transparent; margin-right: 2px;'
      : 'border-left: 8px solid #333; border-top: 6px solid transparent; border-bottom: 6px solid transparent; margin-left: 2px;'
    }
  }
`

const RoomInfoDetails = styled.div`
  padding: 0 210px;
`

const RoomInfoName = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`

const RoomInfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const RoomInfoItem = styled.li`
  font-size: 16px;
  color: #333;
  display: flex;
  align-items: center;
  
  &:before {
    content: '•';
    color: #666;
    margin-right: 12px;
    font-weight: bold;
  }
`

const RoomInfoInquiryButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background: white;
  color: #333;
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 25px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  line-height: 1.2;
  z-index: 10;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`

const AmenitiesSection = styled.section`
  padding: 20px 210px 100px 210px;
`

const AmenitiesContent = styled.div`
  width: 100%;
`

const AmenitiesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`

const AmenitiesTitle = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #333;
`

const ViewAllButton = styled.button`
background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 25px;
  padding: 8px 16px;
  color: #333;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: all 0.3s ease;

  &:hover {
    background: #e0e0e0;
  }
`

const AmenitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  justify-items: start;
  justify-content: start;
`

const AmenityItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
`

const AmenityIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
`

const AmenityName = styled.span`
  font-size: 14px;
  color: #333;
  font-weight: 500;
`

const RulesContent = styled.div`
  width: 100%;
`

const RulesSection = styled.div`
  margin-bottom: 30px;
`

const RulesTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
`

const RulesSubTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 20px 0 10px 0;
`

const RulesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const RulesItem = styled.li`
  font-size: 14px;
  color: #333;
  line-height: 1.6;
  margin-bottom: 8px;
  padding-left: 15px;
  position: relative;

  &::before {
    content: '·';
    position: absolute;
    left: 0;
    color: #666;
  }
`

const RulesNote = styled.div`
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-top: 20px;
  padding: 15px;
  border-radius: 8px;
`

const RefundContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const RefundTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  border: 1px solid #e0e0e0;
`

const RefundTableHeader = styled.thead`
  background-color: #f8f8f8;
`

const RefundTableHeaderCell = styled.th`
  padding: 15px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  border-bottom: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;

  &:last-child {
    border-right: none;
  }
`

const RefundTableBody = styled.tbody`
  background-color: white;
`

const RefundTableRow = styled.tr`
  border-bottom: 1px solid #f0f0f0;
`

const RefundTableCell = styled.td`
  padding: 15px;
  font-size: 14px;
  color: #333;
  line-height: 1.5;
  text-align: center;
  border-right: 1px solid #e0e0e0;

  &:last-child {
    border-right: none;
  }
`

const RefundNote = styled.div`
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  border-radius: 8px;
  margin-top: 20px;
  width: 100%;
`

const SafetyContent = styled.div`
  width: 100%;
`

const SafetySection = styled.div`
  margin-bottom: 30px;
`

const SafetyTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
`

const SafetyList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const SafetyItem = styled.li`
  font-size: 14px;
  color: #333;
  line-height: 1.6;
  margin-bottom: 8px;
  position: relative;

  &::before {
    position: absolute;
    left: 0;
    color: #666;
  }
`

const PricingContent = styled.div`
  width: 100%;
`

const PricingTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin-bottom: 30px;
`

const PricingSection = styled.div`
  margin-bottom: 40px;
`

const PricingSubTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
`

const PricingTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  border: 1px solid #e0e0e0;
`

const PricingTableHeader = styled.thead`
  background-color: #f8f8f8;
`

const PricingTableHeaderCell = styled.th`
  padding: 15px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  border-bottom: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;

  &:last-child {
    border-right: none;
  }
`

const PricingTableBody = styled.tbody`
  background-color: white;
`

const PricingTableRow = styled.tr`
  border-bottom: 1px solid #f0f0f0;
`

const PricingTableCell = styled.td`
  padding: 8px;
  font-size: 14px;
  color: #333;
  line-height: 1.5;
  text-align: center;
  border-right: 1px solid #e0e0e0;

  &:last-child {
    border-right: none;
  }
`

const PricingNote = styled.div`
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-top: 20px;
`

const ExperienceSection = styled.section`
  width: 100%;
  margin-top: 80px;
`

const ExperienceTopSection = styled.div`
  display: flex;
  gap: 0;
  margin-bottom: 0;
`

const ExperiencePanel = styled.div`
  flex: 1;
  position: relative;
  height: 400px;
  overflow: hidden;
`

const ExperienceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`

const ExperienceOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  z-index: 2;
`

const ExperienceTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`

const ExperienceSubtitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 4px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`

const ExperienceDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`

const ExperienceBottomSection = styled.div`
  position: relative;
  height: 300px;
  overflow: hidden;
`

const ExperienceBottomImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`

const ExperienceBottomOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  z-index: 2;
`

const ExperienceBottomTitle = styled.h3`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 8px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`

const ExperienceBottomSubtitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`

const InfoSection = styled.section`
  padding: 80px 210px;
  background-color: #f5f5f5;
`

const InfoTitle = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #333;
  margin-bottom: 40px;
`

const InfoTabs = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 15px;
`

const InfoTab = styled.button<{ active: boolean }>`
  background: transparent;
  color: ${props => props.active ? 'black' : '#6d6c6c'};
  border: none;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
`

const InfoCard = styled.div`
  background: white;
  border-radius: 25px;
  padding: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: left;
`

const ContactInfo = styled.div`
  margin-bottom: 30px;
`

const ContactItem = styled.div`
  font-size: 16px;
  color: #333;
`

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
  contain: layout;
  isolation: isolate;
  scroll-behavior: auto;
`

const MapPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: #e8f5e8;
  border-radius: 8px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: #d0e8d0;
  }
`

const MapContent = styled.div`
  text-align: center;
  color: #333;
`

const MapText = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
`

const MapDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  color: #666;
`

const PointTextSection = styled.div`
  width: 100%;
  display: flex;
  gap: 50px;
  /* align-items: flex-start; */
`

const PointLeftSection = styled.div`
  width: 40%;
  padding: 0 0 0 210px;
`

const PointRightSection = styled.div`
  padding: 0 210px 0 0;
  width: 60%;
`

const PointNumber = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #999;
  margin-bottom: 16px;
`

const PointTitle = styled.h3`
  font-size: 28px;
  font-weight: 800;
  color: #333;
  line-height: 1.3;
`

const PointDescription = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: #333;
`



const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  color: #333;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  z-index: 3;
  transition: all 0.3s ease;

  &:hover {
    background: white;
  }
`



const AccommodationDetailPage = () => {
  const router = useRouter()
  const { t } = useLanguage()
  
  const accommodationData = {
    1: {
      id: 1,
      name: t('accommodation.names.neulimihak'),
      location: t('location.gyeongju'),
      description: t('accommodation.descriptions.neulimihak'),
      price: 330000,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=500&fit=crop',
      amenities: ['무료 Wi-Fi', '주차 가능', '전통 한옥', '정원', '차 시연', '문화 체험'],
      mapUrl: 'https://map.kakao.com/link/map/느린미학,35.8428,129.2117',
      roomInfo: {
        capacity: `2${t('accommodation.people')}(${t('accommodation.max_capacity')} 4${t('accommodation.people')})`,
        checkIn: '15:00',
        checkOut: '11:00',
        area: '65.8m²',
        spaces: '침실(1), 화장실(2), 거실(1), 주방(1)',
        bedTypes: '퀸(1), 싱글(1)'
      }
    },
    2: {
      id: 2,
      name: t('accommodation.names.dallyard'),
      location: t('location.jeju_seogwipo'),
      description: t('accommodation.descriptions.dallyard'),
      price: 350000,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=500&fit=crop',
      amenities: ['무료 Wi-Fi', '주차 가능', '오션뷰', '바베큐 시설', '수영장', '조식 제공'],
      mapUrl: 'https://map.kakao.com/link/map/달리야드,33.2541,126.5601',
      roomInfo: {
        capacity: `2${t('accommodation.people')}(${t('accommodation.max_capacity')} 4${t('accommodation.people')})`,
        checkIn: '15:00',
        checkOut: '11:00',
        area: '65.8m²',
        spaces: '침실(1), 화장실(2), 거실(1), 주방(1)',
        bedTypes: '퀸(1), 싱글(1)'
      }
    },
    3: {
      id: 3,
      name: t('accommodation.names.nuun_seop'),
      location: t('location.jeju_city'),
      description: t('accommodation.descriptions.nuun_seop'),
      price: 390000,
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&h=500&fit=crop',
      amenities: ['무료 Wi-Fi', '주차 가능', '전통 한옥', '정원', '차 시연', '문화 체험'],
      mapUrl: 'https://map.kakao.com/link/map/누운 섶,33.4996,126.5312',
      roomInfo: {
        capacity: `2${t('accommodation.people')}(${t('accommodation.max_capacity')} 6${t('accommodation.people')})`,
        checkIn: '15:00',
        checkOut: '11:00',
        area: '65.8m²',
        spaces: '침실(1), 화장실(2), 거실(1), 주방(1)',
        bedTypes: '퀸(1), 싱글(1)'
      }
    },
    4: {
      id: 4,
      name: t('accommodation.names.forest_house'),
      location: t('location.gapyeong'),
      description: '숲속의 집은 깊은 숲 속에서 자연과 함께하는 힐링 숙소입니다. 신선한 공기와 아름다운 자연 경관을 만끽하실 수 있습니다.',
      price: 280000,
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=500&fit=crop',
      amenities: ['무료 Wi-Fi', '주차 가능', '미니멀 디자인', '테라스', '커피머신', '스마트홈'],
      mapUrl: 'https://map.kakao.com/link/map/그리드 제주,37.8315,127.5095',
      roomInfo: {
        capacity: `2${t('accommodation.people')}(${t('accommodation.max_capacity')} 4${t('accommodation.people')})`,
        checkIn: '15:00',
        checkOut: '11:00',
        area: '65.8m²',
        spaces: '침실(1), 화장실(2), 거실(1), 주방(1)',
        bedTypes: '퀸(1), 싱글(1)'
      }
    },
    5: {
      id: 5,
      name: t('magazine.seowajeong'),
      location: t('location.pyeongchang'),
      description: '서와정은 전통 한옥의 아름다움을 현대적으로 재해석한 프리미엄 숙소입니다. 자연과 조화를 이루는 공간에서 평화로운 시간을 보내세요.',
      price: 420000,
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&h=500&fit=crop',
      amenities: ['무료 Wi-Fi', '주차 가능', '전통 한옥', '온돌', '정원', '차 시연'],
      mapUrl: 'https://map.kakao.com/link/map/서와정,37.3745,128.3905',
      roomInfo: {
        capacity: `2${t('accommodation.people')}(${t('accommodation.max_capacity')} 6${t('accommodation.people')})`,
        checkIn: '15:00',
        checkOut: '11:00',
        area: '65.8m²',
        spaces: '침실(1), 화장실(2), 거실(1), 주방(1)',
        bedTypes: '퀸(1), 싱글(1)'
      }
    },
    6: {
      id: 6,
      name: t('promotion.jogak_night'),
      location: t('location.taean'),
      description: '조각밤은 바다와 함께하는 특별한 숙소입니다. 아름다운 해변과 조용한 밤하늘을 감상할 수 있는 로맨틱한 공간을 제공합니다.',
      price: 310000,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=500&fit=crop',
      amenities: ['무료 Wi-Fi', '주차 가능', '오션뷰', '해변 접근', '바베큐 시설', '야외 테라스'],
      roomInfo: {
        capacity: `2${t('accommodation.people')}(${t('accommodation.max_capacity')} 4${t('accommodation.people')})`,
        checkIn: '15:00',
        checkOut: '11:00',
        area: '65.8m²',
        spaces: '침실(1), 화장실(2), 거실(1), 주방(1)',
        bedTypes: '퀸(1), 싱글(1)'
      }
    },
    7: {
      id: 7,
      name: t('accommodation.names.forest_house'),
      location: t('location.yeosu'),
      description: '숲속의 집은 깊은 숲 속에서 자연과 함께하는 힐링 숙소입니다. 신선한 공기와 아름다운 자연 경관을 만끽하실 수 있습니다.',
      price: 380000,
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=500&fit=crop',
      amenities: ['무료 Wi-Fi', '주차 가능', '숲뷰', '등산로', '캠프파이어', '자전거 대여'],
      roomInfo: {
        capacity: `2${t('accommodation.people')}(${t('accommodation.max_capacity')} 5${t('accommodation.people')})`,
        checkIn: '15:00',
        checkOut: '11:00',
        area: '65.8m²',
        spaces: '침실(1), 화장실(2), 거실(1), 주방(1)',
        bedTypes: '퀸(1), 싱글(1)'
      }
    },
    8: {
      id: 8,
      name: t('accommodation.names.ocean_view_pension'),
      location: t('location.geoje'),
      description: '바다뷰 펜션은 아름다운 바다를 한눈에 볼 수 있는 프리미엄 펜션입니다. 넓은 테라스와 최신 시설을 갖춘 객실에서 편안한 휴식을 즐기실 수 있습니다.',
      price: 450000,
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=500&fit=crop',
      amenities: ['무료 Wi-Fi', '주차 가능', '오션뷰', '수영장', '바베큐 시설', '조식 제공'],
      roomInfo: {
        capacity: `2${t('accommodation.people')}(${t('accommodation.max_capacity')} 6${t('accommodation.people')})`,
        checkIn: '15:00',
        checkOut: '11:00',
        area: '65.8m²',
        spaces: '침실(1), 화장실(2), 거실(1), 주방(1)',
        bedTypes: '퀸(1), 싱글(1)'
      }
    },
    9: {
      id: 9,
      name: t('accommodation.names.mountain_villa'),
      location: t('location.gangneung'),
      description: '산중턱 별장은 산의 정상에서 아름다운 경관을 감상할 수 있는 럭셔리 별장입니다. 프리미엄 서비스와 최고급 시설을 제공합니다.',
      price: 520000,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=500&fit=crop',
      amenities: ['무료 Wi-Fi', '발렛파킹', '산뷰', '스파', '피트니스센터', '레스토랑'],
      roomInfo: {
        capacity: `2${t('accommodation.people')}(${t('accommodation.max_capacity')} 4${t('accommodation.people')})`,
        checkIn: '15:00',
        checkOut: '11:00',
        area: '65.8m²',
        spaces: '침실(1), 화장실(2), 거실(1), 주방(1)',
        bedTypes: '퀸(1), 싱글(1)'
      }
    },
    10: {
      id: 10,
      name: t('accommodation.names.city_oasis'),
      location: t('location.danyang'),
      description: '도시의 오아시스는 도시 한가운데에서 편안한 휴식을 제공하는 특별한 숙소입니다. 현대적이면서도 따뜻한 분위기를 연출합니다.',
      price: 290000,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=500&fit=crop',
      amenities: ['무료 Wi-Fi', '주차 가능', '시티뷰', '피트니스센터', '카페', '스마트홈'],
      roomInfo: {
        capacity: `2${t('accommodation.people')}(${t('accommodation.max_capacity')} 5${t('accommodation.people')})`,
        checkIn: '15:00',
        checkOut: '11:00',
        area: '65.8m²',
        spaces: '침실(1), 화장실(2), 거실(1), 주방(1)',
        bedTypes: '퀸(1), 싱글(1)'
      }
    }
  }

  const { id } = router.query
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)
  const [activeTab, setActiveTab] = React.useState('위치안내')
  const [point1Index, setPoint1Index] = React.useState(0)
  const [point2Index, setPoint2Index] = React.useState(0)
  const [point3Index, setPoint3Index] = React.useState(0)

  const [accommodation, setAccommodation] = React.useState<any>(null)
  
  // 이미지 개수와 한 번에 보이는 개수로 최대 인덱스 계산
  const totalImages = 6
  const imagesPerView = 2
  const maxIndex = Math.ceil(totalImages / imagesPerView) - 1

  // accommodation 데이터가 변경될 때마다 accommodation 상태 업데이트
  React.useEffect(() => {
    if (id && accommodationData) {
      const currentAccommodation = accommodationData[id as unknown as keyof typeof accommodationData]
      setAccommodation(currentAccommodation)
    }
  }, [id, t])

  // 페이지 로드 시 스크롤을 맨 위로 이동
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])



  // PointSection 스크롤 감지
  React.useEffect(() => {
    const handleScroll = () => {
      const pointSections = document.querySelectorAll('.point-image-section')
      
      pointSections.forEach((section, sectionIndex) => {
        const container = section as HTMLElement
        const scrollLeft = container.scrollLeft
        const scrollWidth = container.scrollWidth
        const clientWidth = container.clientWidth
        const maxScroll = scrollWidth - clientWidth
        
        // 스크롤 위치에 따라 인덱스 계산
        let currentIndex = 0
        
        // 각 이미지의 너비 (450px + 30px gap) = 480px
        const imageWidth = 480
        
        if (scrollLeft > 0) {
          currentIndex = Math.floor(scrollLeft / imageWidth)
        }
        
        // 마지막에 도달했는지 확인 (더 정확한 계산)
        if (scrollLeft >= maxScroll - 10) { // 10px 여유
          currentIndex = 3 // 마지막 인덱스
        }
        
        // 디버깅용 로그
        console.log(`Section ${sectionIndex}:`, {
          scrollLeft,
          maxScroll,
          currentIndex,
          isAtEnd: scrollLeft >= maxScroll - 10
        })
        
        // 각 섹션별로 state 업데이트
        if (sectionIndex === 0) {
          setPoint1Index(currentIndex)
        } else if (sectionIndex === 1) {
          setPoint2Index(currentIndex)
        } else if (sectionIndex === 2) {
          setPoint3Index(currentIndex)
        }
      })
    }

    // 스크롤 이벤트 리스너 추가
    const pointSections = document.querySelectorAll('.point-image-section')
    pointSections.forEach(section => {
      section.addEventListener('scroll', handleScroll)
    })

    // 초기 상태 설정
    setTimeout(() => {
      handleScroll()
    }, 100)

    return () => {
      pointSections.forEach(section => {
        section.removeEventListener('scroll', handleScroll)
      })
    }
  }, [])

  const handleBack = () => {
    router.back()
  }

  const handlePrevImage = () => {
    setCurrentImageIndex(prev => Math.max(0, prev - 1))
  }

  const handleNextImage = () => {
    setCurrentImageIndex(prev => Math.min(maxIndex, prev + 1))
  }

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName)
  }

  if (!accommodation || !id) {
    return (
      <Container>
        <Header isScrolled={true} isDetailPage={true} />
        <MainContent>
          <BackButton onClick={handleBack}>← 뒤로 가기</BackButton>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: 'calc(100vh - 120px)',
            fontSize: '24px',
            color: '#666'
          }}>
            숙소를 찾을 수 없습니다
          </div>
        </MainContent>
      </Container>
    )
  }



  return (
    <Container>
      <Header isScrolled={true} isDetailPage={true} />
      <MainContent>
        
        <ContentWrapper>
          <FullScreenImage>
            <MainImage src={accommodation.image} alt={accommodation.name} />
            
            <ImageOverlay>
              <EnglishTitle>{t('accommodation.hero_title_en')}</EnglishTitle>
              <KoreanTitle>{t('accommodation.hero_title_kr')}</KoreanTitle>
            </ImageOverlay>
            
            <BookingBar>
              <BookingInfo>
                <BookingItem>
                  <BookingLabel>{t('accommodation.booking_checkin')}</BookingLabel>
                  <BookingValue>09.02 (화)</BookingValue>
                </BookingItem>
                <BookingItem>
                  <BookingLabel>{t('accommodation.booking_checkout')}</BookingLabel>
                  <BookingValue>09.03 (수)</BookingValue>
                </BookingItem>
                <BookingItem>
                  <BookingLabel>{t('accommodation.booking_people')}</BookingLabel>
                  <BookingValue>{t('accommodation.booking_adult')} 2{t('accommodation.booking_people_count')}</BookingValue>
                </BookingItem>
              </BookingInfo>
            </BookingBar>
          </FullScreenImage>
          
                    <RoomDetailContainer>
            <RoomDetailContent>
              <RoomTypeSection>
                <RoomTypeTitle>{t('accommodation.room_type')}</RoomTypeTitle>
                <RoomCard>
                  <RoomImage>
                    <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop" alt="뭇별 객실" />
                  </RoomImage>
                  <RoomInfo>
                    <RoomHeader>
                              <RoomName>{accommodation.name}</RoomName>
        <RoomCapacity>{t('accommodation.standard_capacity')}</RoomCapacity>
        <RoomDetails>{t('accommodation.room_details')}</RoomDetails>
        <RoomTimes>{t('accommodation.checkin_time')}</RoomTimes>
                    </RoomHeader>
                    <Line />
                    <RoomPrice>
                      <PriceInfo>
                        <OriginalPrice>
                          <DiscountLabel>5%</DiscountLabel>
                          <Label>{accommodation.price.toLocaleString()}원</Label>
                        </OriginalPrice>
                        <DiscountPrice>
                          {(accommodation.price * 0.95).toLocaleString()}원
                          <PriceUnit>{t('accommodation.per_night')}</PriceUnit>
                        </DiscountPrice>
                      </PriceInfo>
                      <BookNowButton>{t('accommodation.book_now')}</BookNowButton>
                    </RoomPrice>
                  </RoomInfo>
                </RoomCard>
              </RoomTypeSection>
            </RoomDetailContent>
          </RoomDetailContainer>
          
          <PropertySection>
            <PropertyContent>
              <PropertyTitle>{t('accommodation.room_description')}</PropertyTitle>
              
              <PropertyImage>
                <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=500&fit=crop" alt="바다와 대나무, 별의 울림이 깃든 공간" />
              </PropertyImage>
              
              <PropertyDescription>
                <DescriptionText>
                  {t('accommodation.room_description_detail1')}
                </DescriptionText>
                <DescriptionText>
                  {t('accommodation.room_description_detail2')}
                </DescriptionText>
                <DescriptionText>
                  {t('accommodation.room_description_detail3')}
                </DescriptionText>
              </PropertyDescription>
            </PropertyContent>
          </PropertySection>
          
          <PointSection>
            <PointContent>
              <PointImageSection 
                currentIndex={point1Index} 
                maxIndex={4}
                className="point-image-section"
              >
                <PointImage>
                  <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=500&fit=crop" alt="자쿠지에서 바라보는 대나무 숲" />
                </PointImage>
                <PointImage>
                  <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&h=500&fit=crop" alt="대나무로 둘러싸인 실내 공간" />
                </PointImage>
                <PointImage>
                  <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=500&fit=crop" alt="야외 테라스와 대나무" />
                </PointImage>
                <PointImage>
                  <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=500&fit=crop" alt="대나무 울타리와 실외 공간" />
                </PointImage>
              </PointImageSection>
              
              <PointTextSection>
                <PointLeftSection>
                  <PointNumber>Point 1</PointNumber>
                  <PointTitle>{t('accommodation.point1.title')}</PointTitle>
                </PointLeftSection>
                <PointRightSection>
                  <PointDescription>
                    {t('accommodation.point1.description')}
                  </PointDescription>
                </PointRightSection>
              </PointTextSection>
            </PointContent>
          </PointSection>
          
          <PointSection>
            <PointContent>
              <PointImageSection 
                currentIndex={point2Index} 
                maxIndex={4}
                className="point-image-section"
              >
                <PointImage>
                  <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&h=500&fit=crop" alt="프라이빗 온수풀" />
                </PointImage>
                <PointImage>
                  <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=500&fit=crop" alt="야외 테라스" />
                </PointImage>
                <PointImage>
                  <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=500&fit=crop" alt="자쿠지 전경" />
                </PointImage>
                <PointImage>
                  <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&h=500&fit=crop" alt="야외 공간" />
                </PointImage>
              </PointImageSection>
              
              <PointTextSection>
                <PointLeftSection>
                  <PointNumber>Point 2</PointNumber>
                  <PointTitle>{t('accommodation.point2.title')}</PointTitle>
                </PointLeftSection>
                <PointRightSection>
                  <PointDescription>
                    {t('accommodation.point2.description')}
                  </PointDescription>
                </PointRightSection>
              </PointTextSection>
            </PointContent>
          </PointSection>
          
          <PointSection>
            <PointContent>
              <PointImageSection 
                currentIndex={point3Index} 
                maxIndex={4}
                className="point-image-section"
              >
                <PointImage>
                  <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=500&fit=crop" alt="미니멀한 침실" />
                </PointImage>
                <PointImage>
                  <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=500&fit=crop" alt="자연광이 들어오는 공간" />
                </PointImage>
                <PointImage>
                  <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&h=500&fit=crop" alt="통유리창" />
                </PointImage>
                <PointImage>
                  <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=500&fit=crop" alt="미니멀한 디자인" />
                </PointImage>
              </PointImageSection>
              
              <PointTextSection>
                <PointLeftSection>
                  <PointNumber>Point 3</PointNumber>
                  <PointTitle>{t('accommodation.point3.title')}</PointTitle>
                </PointLeftSection>
                <PointRightSection>
                  <PointDescription>
                    {t('accommodation.point3.description')}
                  </PointDescription>
                </PointRightSection>
              </PointTextSection>
            </PointContent>
          </PointSection>
          
          <RoomInfoSection>
            <hr style={{ 
              border: 'none', 
              height: '1px', 
              backgroundColor: '#e0e0e0', 
              margin: '0 210px 100px 210px' 
            }} />
            <RoomInfoContent>
              <RoomInfoTitle>{t('accommodation.room_info.title')}</RoomInfoTitle>
              
              <RoomInfoImageSection currentIndex={currentImageIndex}>
                <div style={{ 
                  display: 'flex', 
                  gap: '20px', 
                  transform: `translateX(-${currentImageIndex * 420}px)`,
                  transition: 'transform 0.5s ease',
                  width: 'fit-content'
                }}>
                  <RoomInfoImage>
                    <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=400&fit=crop" alt="침실 1" />
                  </RoomInfoImage>
                  <RoomInfoImage>
                    <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=400&fit=crop" alt="침실 2" />
                  </RoomInfoImage>
                  <RoomInfoImage>
                    <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=400&fit=crop" alt="침실 3" />
                  </RoomInfoImage>
                  <RoomInfoImage>
                    <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=400&fit=crop" alt="다이닝 공간" />
                  </RoomInfoImage>
                  <RoomInfoImage>
                    <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=400&fit=crop" alt="야외 공간" />
                  </RoomInfoImage>
                  <RoomInfoImage>
                    <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=400&fit=crop" alt="야외 공간 2" />
                  </RoomInfoImage>
                </div>
                {currentImageIndex > 0 && (
                  <CarouselArrow direction="left" onClick={handlePrevImage} />
                )}
                {currentImageIndex < 4 && (
                  <CarouselArrow direction="right" onClick={handleNextImage} />
                )}
              </RoomInfoImageSection>
              <hr style={{ 
              border: 'none', 
              height: '1px', 
              backgroundColor: '#e0e0e0', 
              margin: '70px 210px 0 210px' 
            }} />
              <RoomInfoDetails>
                <RoomInfoName>{accommodation.name}</RoomInfoName>
                <RoomInfoList>
                  <RoomInfoItem>{t('accommodation.room_info.standard_capacity')} : {(accommodation as any).roomInfo?.capacity || `2${t('accommodation.room_info.people')}(${t('accommodation.room_info.max_people')} 6${t('accommodation.room_info.people')})`}</RoomInfoItem>
                  <RoomInfoItem>{t('accommodation.room_info.checkin')} : {(accommodation as any).roomInfo?.checkIn || '15:00'} / {t('accommodation.room_info.checkout')} {(accommodation as any).roomInfo?.checkOut || '11:00'}</RoomInfoItem>
                  <RoomInfoItem>{t('accommodation.room_info.area')} : {(accommodation as any).roomInfo?.area || '92.25m²'}</RoomInfoItem>
                  <RoomInfoItem>{t('accommodation.room_info.spaces')} : {(accommodation as any).roomInfo?.spaces || t('accommodation.tab.room_spaces')}</RoomInfoItem>
                  <RoomInfoItem>{t('accommodation.room_info.bed_types')}: {(accommodation as any).roomInfo?.bedTypes || '슈퍼싱글(1), 퀸(2)'}</RoomInfoItem>
                </RoomInfoList>
              </RoomInfoDetails>
              <hr style={{ 
              border: 'none', 
              height: '1px', 
              backgroundColor: '#e0e0e0', 
              margin: '0 210px 20px 210px' 
            }} />
            </RoomInfoContent>
          </RoomInfoSection>
          
          <AmenitiesSection>
            <AmenitiesContent>
              <AmenitiesHeader>
                <AmenitiesTitle>{t('accommodation.amenities.title')}</AmenitiesTitle>
                <ViewAllButton>
                  {t('accommodation.amenities.view_all')}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </ViewAllButton>
              </AmenitiesHeader>
              
              <AmenitiesGrid>
                <AmenityItem>
                  <AmenityIcon>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M2 12h20"/>
                    </svg>
                  </AmenityIcon>
                  <AmenityName>{t('accommodation.amenities.hair_dryer')}</AmenityName>
                </AmenityItem>
                <AmenityItem>
                  <AmenityIcon>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M8 12h8M12 8v8"/>
                    </svg>
                  </AmenityIcon>
                  <AmenityName>{t('accommodation.amenities.coffee_machine')}</AmenityName>
                </AmenityItem>
                <AmenityItem>
                  <AmenityIcon>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 7h18M3 11h18M3 15h18"/>
                    </svg>
                  </AmenityIcon>
                  <AmenityName>{t('accommodation.amenities.bathroom_amenities')}</AmenityName>
                </AmenityItem>
                <AmenityItem>
                  <AmenityIcon>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4"/>
                    </svg>
                  </AmenityIcon>
                  <AmenityName>{t('accommodation.amenities.hand_sanitizer')}</AmenityName>
                </AmenityItem>
                <AmenityItem>
                  <AmenityIcon>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M2 12h20"/>
                    </svg>
                  </AmenityIcon>
                  <AmenityName>{t('accommodation.amenities.coffee_pot')}</AmenityName>
                </AmenityItem>
                <AmenityItem>
                  <AmenityIcon>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                      <path d="M3 9h18"/>
                    </svg>
                  </AmenityIcon>
                  <AmenityName>{t('accommodation.amenities.refrigerator')}</AmenityName>
                </AmenityItem>
                <AmenityItem>
                  <AmenityIcon>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M2 12h20"/>
                    </svg>
                  </AmenityIcon>
                  <AmenityName>{t('accommodation.amenities.air_conditioner')}</AmenityName>
                </AmenityItem>
                <AmenityItem>
                  <AmenityIcon>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                      <path d="M17 2l-5 5-5-5"/>
                    </svg>
                  </AmenityIcon>
                  <AmenityName>{t('accommodation.amenities.tv')}</AmenityName>
                </AmenityItem>
                <AmenityItem>
                  <AmenityIcon>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M8 12h8M12 8v8"/>
                    </svg>
                  </AmenityIcon>
                  <AmenityName>{t('accommodation.amenities.induction')}</AmenityName>
                </AmenityItem>
                <AmenityItem>
                  <AmenityIcon>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M2 12h20"/>
                    </svg>
                  </AmenityIcon>
                  <AmenityName>{t('accommodation.amenities.cooking_utensils')}</AmenityName>
                </AmenityItem>
                <AmenityItem>
                  <AmenityIcon>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M8 12h8M12 8v8"/>
                    </svg>
                  </AmenityIcon>
                  <AmenityName>{t('accommodation.amenities.tableware')}</AmenityName>
                </AmenityItem>
                <AmenityItem>
                  <AmenityIcon>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M2 12h20"/>
                    </svg>
                  </AmenityIcon>
                  <AmenityName>{t('accommodation.amenities.wine_opener')}</AmenityName>
                </AmenityItem>
                <AmenityItem>
                  <AmenityIcon>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M2 12h20"/>
                    </svg>
                  </AmenityIcon>
                  <AmenityName>{t('accommodation.amenities.wine_glass')}</AmenityName>
                </AmenityItem>
                <AmenityItem>
                  <AmenityIcon>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                      <path d="M3 9h18"/>
                    </svg>
                  </AmenityIcon>
                  <AmenityName>{t('accommodation.amenities.towel')}</AmenityName>
                </AmenityItem>
                <AmenityItem>
                  <AmenityIcon>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M8 12h8M12 8v8"/>
                    </svg>
                  </AmenityIcon>
                  <AmenityName>{t('accommodation.amenities.diffuser')}</AmenityName>
                </AmenityItem>
                <AmenityItem>
                  <AmenityIcon>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M2 12h20"/>
                    </svg>
                  </AmenityIcon>
                  <AmenityName>{t('accommodation.amenities.condiments')}</AmenityName>
                </AmenityItem>
                <AmenityItem>
                  <AmenityIcon>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M8 12h8M12 8v8"/>
                    </svg>
                  </AmenityIcon>
                  <AmenityName>{t('accommodation.amenities.outdoor_slippers')}</AmenityName>
                </AmenityItem>
                <AmenityItem>
                  <AmenityIcon>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                      <path d="M3 9h18"/>
                    </svg>
                  </AmenityIcon>
                  <AmenityName>{t('accommodation.amenities.microwave')}</AmenityName>
                </AmenityItem>
              </AmenitiesGrid>
            </AmenitiesContent>
          </AmenitiesSection>
          
          <InfoSection>
            <InfoTitle>{t('accommodation.info.title')}</InfoTitle>
            
            <InfoTabs>
              <InfoTab 
                active={activeTab === '위치안내'} 
                onClick={() => handleTabClick('위치안내')}
              >
                {t('accommodation.info.location')}
              </InfoTab>
              <InfoTab 
                active={activeTab === '이용규칙'} 
                onClick={() => handleTabClick('이용규칙')}
              >
                {t('accommodation.info.rules')}
              </InfoTab>
              <InfoTab 
                active={activeTab === '환불정책'} 
                onClick={() => handleTabClick('환불정책')}
              >
                {t('accommodation.info.refund')}
              </InfoTab>
              <InfoTab 
                active={activeTab === '안전시설'} 
                onClick={() => handleTabClick('안전시설')}
              >
                {t('accommodation.info.safety')}
              </InfoTab>
              <InfoTab 
                active={activeTab === '요금정책'} 
                onClick={() => handleTabClick('요금정책')}
              >
                {t('accommodation.info.pricing')}
              </InfoTab>
            </InfoTabs>
            
            <InfoCard>
              {activeTab === '위치안내' && (
                <>
                  <ContactInfo>
                    <ContactItem>
                      {t('accommodation.info.address')}: {accommodation.location}
                    </ContactItem>
                    <ContactItem>
                      {t('accommodation.info.contact')}: 010-2211-2143
                    </ContactItem>
                    <ContactItem>
                      {t('accommodation.info.email')}: lobyulygirl@gmail.com
                    </ContactItem>
                  </ContactInfo>
                  
                  <MapContainer>
                    <iframe
                      src={(accommodation as any).mapUrl || `https://map.kakao.com/link/map/${accommodation.name},37.5665,126.9780`}
                      width="100%"
                      height="400"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight={0}
                      marginWidth={0}
                      loading="lazy"
                      style={{ 
                        pointerEvents: 'auto',
                        border: 'none',
                        contain: 'layout',
                        isolation: 'isolate',
                        transform: 'translateZ(0)',
                        backfaceVisibility: 'hidden'
                      }}
                    />
                  </MapContainer>
                </>
              )}
              
              {activeTab === '이용규칙' && (
                <RulesContent>
                  <RulesSection>
                    <RulesTitle>{t('accommodation.tab.checkin_checkout')}</RulesTitle>
                    <RulesList>
                      <RulesItem>{t('accommodation.tab.checkin_time')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.standard_capacity_detail')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.child_age')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.visitor_policy')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.pet_policy')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.cleaning_service')}</RulesItem>
                    </RulesList>
                  </RulesSection>
                  
                  <RulesSection>
                    <RulesTitle>{t('accommodation.tab.room')}</RulesTitle>
                    <RulesList>
                      <RulesItem>{t('accommodation.tab.room_kids_warning')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.room_cooking_ban')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.room_damage_policy')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.room_wood_care')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.room_slippers')}</RulesItem>
                    </RulesList>
                  </RulesSection>
                  
                  <RulesSection>
                    <RulesTitle>{t('accommodation.tab.outdoor_safety')}</RulesTitle>
                    <RulesList>
                      <RulesItem>{t('accommodation.tab.outdoor_fire_ban')}</RulesItem>
                    </RulesList>
                  </RulesSection>
                  
                  <RulesSection>
                    <RulesTitle>{t('accommodation.tab.jacuzzi_guide')}</RulesTitle>
                    <RulesList>
                      <RulesItem>{t('accommodation.tab.jacuzzi_notice')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.jacuzzi_bath_salt')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.jacuzzi_water_overflow')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.jacuzzi_surface')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.jacuzzi_children')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.jacuzzi_drain')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.jacuzzi_plug')}</RulesItem>
                    </RulesList>
                  </RulesSection>
                  
                  <RulesSection>
                    <RulesTitle>{t('accommodation.tab.barbecue_guide')}</RulesTitle>
                    <RulesList>
                      <RulesItem>{t('accommodation.tab.barbecue_equipment')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.barbecue_weather')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.barbecue_shopping')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.barbecue_cleanup')}</RulesItem>
                    </RulesList>
                  </RulesSection>
                  
                  <RulesSection>
                    <RulesTitle>{t('accommodation.tab.pool_guide')}</RulesTitle>
                    <RulesList>
                      <RulesItem>{t('accommodation.tab.pool_temperature')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.pool_weather_effect')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.pool_depth')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.pool_diaper')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.pool_debris')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.pool_water_quality')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.pool_contamination')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.pool_depth_range')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.pool_weather_limit')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.pool_hours')}</RulesItem>
                    </RulesList>
                  </RulesSection>
                  
                  <RulesSection>
                    <RulesTitle>{t('accommodation.tab.ethanol_fire')}</RulesTitle>
                    <RulesList>
                      <RulesItem>{t('accommodation.tab.ethanol_reservation')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.ethanol_usage')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.ethanol_danger')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.ethanol_weather')}</RulesItem>
                    </RulesList>
                  </RulesSection>
                  
                  <RulesSection>
                    <RulesTitle>{t('accommodation.tab.supplies')}</RulesTitle>
                    <RulesSubTitle>{t('accommodation.tab.main_building')}</RulesSubTitle>
                    <RulesList>
                      <RulesItem>{t('accommodation.tab.seasoning')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.kitchen_appliances')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.entertainment')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.slippers')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.laundry')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.tubes')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.beach_towel')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.insect_repellent')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.chargers')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.baby_chair')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.grill_table')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.bathroom_supplies')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.bathrobe')}</RulesItem>
                    </RulesList>
                    
                    <RulesSubTitle>{t('accommodation.tab.guest_house')}</RulesSubTitle>
                    <RulesList>
                      <RulesItem>{t('accommodation.tab.slippers')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.marshall_speaker')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.chargers')}</RulesItem>
                      <RulesItem>{t('accommodation.tab.bathroom_supplies')}</RulesItem>
                    </RulesList>
                    
                    <RulesNote>
                      {t('accommodation.tab.supplies_note')}
                      <br />
                      {t('accommodation.tab.damage_note')}
                    </RulesNote>
                  </RulesSection>
                </RulesContent>
               )}
               
               {activeTab === '환불정책' && (
                 <RefundContent>
                   <RefundTable>
                     <RefundTableHeader>
                       <RefundTableHeaderCell>{t('accommodation.tab.refund_date')}</RefundTableHeaderCell>
                       <RefundTableHeaderCell>{t('accommodation.tab.refund_amount')}</RefundTableHeaderCell>
                     </RefundTableHeader>
                     <RefundTableBody>
                       <RefundTableRow>
                         <RefundTableCell>{t('accommodation.tab.refund_20_days')}</RefundTableCell>
                         <RefundTableCell>{t('accommodation.tab.refund_100')}</RefundTableCell>
                       </RefundTableRow>
                       <RefundTableRow>
                         <RefundTableCell>{t('accommodation.tab.refund_14_days')}</RefundTableCell>
                         <RefundTableCell>{t('accommodation.tab.refund_90')}</RefundTableCell>
                       </RefundTableRow>
                       <RefundTableRow>
                         <RefundTableCell>{t('accommodation.tab.refund_8_days')}</RefundTableCell>
                         <RefundTableCell>{t('accommodation.tab.refund_80')}</RefundTableCell>
                       </RefundTableRow>
                       <RefundTableRow>
                         <RefundTableCell>{t('accommodation.tab.refund_7_days')}</RefundTableCell>
                         <RefundTableCell>{t('accommodation.tab.refund_70')}</RefundTableCell>
                       </RefundTableRow>
                       <RefundTableRow>
                         <RefundTableCell>{t('accommodation.tab.refund_6_days')}</RefundTableCell>
                         <RefundTableCell>{t('accommodation.tab.refund_60')}</RefundTableCell>
                       </RefundTableRow>
                       <RefundTableRow>
                         <RefundTableCell>{t('accommodation.tab.refund_5_days')}</RefundTableCell>
                         <RefundTableCell>{t('accommodation.tab.refund_50')}</RefundTableCell>
                       </RefundTableRow>
                       <RefundTableRow>
                         <RefundTableCell>{t('accommodation.tab.refund_4_days')}</RefundTableCell>
                         <RefundTableCell>{t('accommodation.tab.refund_40')}</RefundTableCell>
                       </RefundTableRow>
                       <RefundTableRow>
                         <RefundTableCell>{t('accommodation.tab.refund_3_days')}</RefundTableCell>
                         <RefundTableCell>{t('accommodation.tab.refund_no')}</RefundTableCell>
                       </RefundTableRow>
                     </RefundTableBody>
                   </RefundTable>
                   
                   <RefundNote>
                     {t('accommodation.tab.refund_note')}
                   </RefundNote>
                 </RefundContent>
               )}
               
               {activeTab === '안전시설' && (
                 <SafetyContent>
                   <SafetySection>
                     <SafetyTitle>{t('accommodation.tab.fire_extinguisher')}</SafetyTitle>
                     <SafetyList>
                       <SafetyItem>{t('accommodation.tab.fire_main_building')}</SafetyItem>
                       <SafetyItem>{t('accommodation.tab.fire_guest_house')}</SafetyItem>
                     </SafetyList>
                   </SafetySection>
                   
                   <SafetySection>
                     <SafetyTitle>{t('accommodation.tab.first_aid')}</SafetyTitle>
                     <SafetyList>
                       <SafetyItem>{t('accommodation.tab.first_aid_items')}</SafetyItem>
                     </SafetyList>
                   </SafetySection>
                 </SafetyContent>
               )}
               
               {activeTab === '요금정책' && (
                 <PricingContent>
                   <PricingTitle>{accommodation.name}</PricingTitle>
                   
                   <PricingSection>
                     <PricingSubTitle>{t('accommodation.pricing.basic_rate')}</PricingSubTitle>
                     <PricingTable>
                       <PricingTableHeader>
                         <PricingTableHeaderCell>{t('accommodation.pricing.weekday')}</PricingTableHeaderCell>
                         <PricingTableHeaderCell>{t('accommodation.pricing.weekend')}</PricingTableHeaderCell>
                       </PricingTableHeader>
                       <PricingTableBody>
                         <PricingTableRow>
                           <PricingTableCell>{accommodation.price.toLocaleString()}{t('common.currency_unit')}</PricingTableCell>
                           <PricingTableCell>{(accommodation.price + 50000).toLocaleString()}{t('common.currency_unit')}~</PricingTableCell>
                         </PricingTableRow>
                       </PricingTableBody>
                     </PricingTable>
                   </PricingSection>
                   
                   <PricingSection>
                     <PricingSubTitle>{t('accommodation.pricing.peak_season_rate')}</PricingSubTitle>
                     <PricingTable>
                       <PricingTableHeader>
                         <PricingTableHeaderCell>{t('accommodation.pricing.category')}</PricingTableHeaderCell>
                         <PricingTableHeaderCell>{t('accommodation.pricing.weekday')}</PricingTableHeaderCell>
                         <PricingTableHeaderCell>{t('accommodation.pricing.weekend')}</PricingTableHeaderCell>
                       </PricingTableHeader>
                       <PricingTableBody>
                         <PricingTableRow>
                           <PricingTableCell>{t('accommodation.pricing.off_peak')}</PricingTableCell>
                           <PricingTableCell>{(accommodation.price + 100000).toLocaleString()}{t('common.currency_unit')}</PricingTableCell>
                           <PricingTableCell>{(accommodation.price + 150000).toLocaleString()}{t('common.currency_unit')}~</PricingTableCell>
                         </PricingTableRow>
                         <PricingTableRow>
                           <PricingTableCell>{t('accommodation.pricing.off_peak')}</PricingTableCell>
                           <PricingTableCell>{(accommodation.price + 100000).toLocaleString()}{t('common.currency_unit')}</PricingTableCell>
                           <PricingTableCell>{(accommodation.price + 150000).toLocaleString()}{t('common.currency_unit')}~</PricingTableCell>
                         </PricingTableRow>
                         <PricingTableRow>
                           <PricingTableCell>{t('accommodation.pricing.peak')}</PricingTableCell>
                           <PricingTableCell>{(accommodation.price + 150000).toLocaleString()}{t('common.currency_unit')}</PricingTableCell>
                           <PricingTableCell>{(accommodation.price + 200000).toLocaleString()}{t('common.currency_unit')}~</PricingTableCell>
                         </PricingTableRow>
                         <PricingTableRow>
                           <PricingTableCell>{t('accommodation.pricing.peak')}</PricingTableCell>
                           <PricingTableCell>{(accommodation.price + 150000).toLocaleString()}{t('common.currency_unit')}</PricingTableCell>
                           <PricingTableCell>{(accommodation.price + 200000).toLocaleString()}{t('common.currency_unit')}~</PricingTableCell>
                         </PricingTableRow>
                         <PricingTableRow>
                           <PricingTableCell>{t('accommodation.pricing.high_peak')}</PricingTableCell>
                           <PricingTableCell>{(accommodation.price + 280000).toLocaleString()}{t('common.currency_unit')}</PricingTableCell>
                           <PricingTableCell>{(accommodation.price + 280000).toLocaleString()}{t('common.currency_unit')}~</PricingTableCell>
                         </PricingTableRow>
                       </PricingTableBody>
                     </PricingTable>
                   </PricingSection>
                   
                   <PricingNote>
                     {t('accommodation.pricing.note')}
                   </PricingNote>
                 </PricingContent>
               )}
             </InfoCard>
          </InfoSection>
          
          <ExperienceSection>
            <ExperienceTopSection>
              <ExperiencePanel>
                <ExperienceImage 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop" 
                  alt={t('experience.yeoju.title')} 
                />
                <ExperienceOverlay>
                  <ExperienceTitle>{t('experience.yeoju.title')}</ExperienceTitle>
                  <ExperienceSubtitle>{t('experience.yeoju.subtitle')}</ExperienceSubtitle>
                </ExperienceOverlay>
              </ExperiencePanel>
              
              <ExperiencePanel>
                <ExperienceImage 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop" 
                  alt={t('experience.layr.subtitle')} 
                />
                <ExperienceOverlay>
                  <ExperienceTitle>{t('experience.layr.title')}</ExperienceTitle>
                  <ExperienceSubtitle>{t('experience.layr.subtitle')}</ExperienceSubtitle>
                  <ExperienceDescription>{t('experience.layr.description')}</ExperienceDescription>
                </ExperienceOverlay>
              </ExperiencePanel>
              
              <ExperiencePanel>
                <ExperienceImage 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop" 
                  alt={t('experience.timezone.title')} 
                />
                <ExperienceOverlay>
                  <ExperienceTitle>{t('experience.timezone.title')}</ExperienceTitle>
                  <ExperienceSubtitle>{t('experience.timezone.subtitle')}</ExperienceSubtitle>
                </ExperienceOverlay>
              </ExperiencePanel>
            </ExperienceTopSection>
            
            <ExperienceBottomSection>
              <ExperienceBottomImage 
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=400&fit=crop" 
                alt={t('experience.ideal.title')} 
              />
              <ExperienceBottomOverlay>
                <ExperienceBottomTitle>{t('experience.ideal.title')}</ExperienceBottomTitle>
                <ExperienceBottomSubtitle>{t('experience.ideal.subtitle')}</ExperienceBottomSubtitle>
              </ExperienceBottomOverlay>
            </ExperienceBottomSection>
          </ExperienceSection>
          
          <RoomInfoInquiryButton>
            <span>{t('accommodation.inquiry')}</span>
          </RoomInfoInquiryButton>
        </ContentWrapper>
      </MainContent>
      
      <Footer />
    </Container>
  )
}

export default AccommodationDetailPage
