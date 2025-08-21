import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

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
  text-decoration: line-through;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
`

const DiscountLabel = styled.span`
  color: #ff4444;
  font-weight: bold;
`

const DiscountPrice = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  display: flex;
  align-items: baseline;
  gap: 4px;
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

// 더미 데이터
const accommodationData = {
  1: {
    id: 1,
    name: '바다가 보이는 아름다운 펜션',
    location: '제주도 서귀포시',
    description: '제주도의 아름다운 바다를 한눈에 볼 수 있는 프리미엄 펜션입니다. 넓은 테라스와 최신 시설을 갖춘 객실에서 편안한 휴식을 즐기실 수 있습니다.',
    price: 150000,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=500&fit=crop',
    amenities: ['무료 Wi-Fi', '주차 가능', '바베큐 시설', '수영장', '조식 제공', '애완동물 동반 가능']
  },
  2: {
    id: 2,
    name: '산속의 조용한 게스트하우스',
    location: '강원도 평창군',
    description: '깊은 산속에서 자연과 함께하는 조용한 게스트하우스입니다. 신선한 공기와 아름다운 자연 경관을 만끽하실 수 있습니다.',
    price: 80000,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=500&fit=crop',
    amenities: ['무료 Wi-Fi', '주차 가능', '등산로', '캠프파이어', '조식 제공', '자전거 대여']
  },
  3: {
    id: 3,
    name: '도시 한가운데 럭셔리 호텔',
    location: '서울시 강남구',
    description: '도시의 중심에서 편리함과 럭셔리를 동시에 경험할 수 있는 프리미엄 호텔입니다. 최고급 서비스와 시설을 제공합니다.',
    price: 300000,
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=500&fit=crop',
    amenities: ['무료 Wi-Fi', '발렛파킹', '스파', '피트니스센터', '레스토랑', '룸서비스']
  }
}

const AccommodationDetailPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)
  const [activeTab, setActiveTab] = React.useState('위치안내')
  const [point1Index, setPoint1Index] = React.useState(0)
  const [point2Index, setPoint2Index] = React.useState(0)
  const [point3Index, setPoint3Index] = React.useState(0)

  const accommodation = accommodationData[id as unknown as keyof typeof accommodationData]
  
  // 이미지 개수와 한 번에 보이는 개수로 최대 인덱스 계산
  const totalImages = 6
  const imagesPerView = 2
  const maxIndex = Math.ceil(totalImages / imagesPerView) - 1

  // 페이지 로드 시 스크롤을 맨 위로 고정하고 지도 로드 후에도 유지
  React.useEffect(() => {
    window.scrollTo(0, 0)
    
    // 지도 로드 후 스크롤 위치를 맨 위로 유지
    const handleScroll = () => {
      if (window.scrollY > 100) {
        window.scrollTo(0, 0)
      }
    }

    // 지도 로드 후 약간의 지연을 두고 스크롤 이벤트 리스너 추가
    const timer = setTimeout(() => {
      window.addEventListener('scroll', handleScroll)
      
      // 3초 후 이벤트 리스너 제거 (사용자가 스크롤할 수 있도록)
      setTimeout(() => {
        window.removeEventListener('scroll', handleScroll)
      }, 3000)
    }, 500)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
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

  if (!accommodation) {
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
              <EnglishTitle>Rest in a cluster of stars</EnglishTitle>
              <KoreanTitle>별의 군락 속에서 맞이하는 안식</KoreanTitle>
            </ImageOverlay>
            
            <BookingBar>
              <BookingInfo>
                <BookingItem>
                  <BookingLabel>체크인</BookingLabel>
                  <BookingValue>09.02 (화)</BookingValue>
                </BookingItem>
                <BookingItem>
                  <BookingLabel>체크아웃</BookingLabel>
                  <BookingValue>09.03 (수)</BookingValue>
                </BookingItem>
                <BookingItem>
                  <BookingLabel>인원</BookingLabel>
                  <BookingValue>성인 2명</BookingValue>
                </BookingItem>
              </BookingInfo>
            </BookingBar>
            
            <InquiryButton>
              <span>문의</span>
              <span>하기</span>
            </InquiryButton>
          </FullScreenImage>
          
                    <RoomDetailContainer>
            <RoomDetailContent>
              <RoomTypeSection>
                <RoomTypeTitle>객실타입</RoomTypeTitle>
                <RoomCard>
                  <RoomImage>
                    <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop" alt="뭇별 객실" />
                  </RoomImage>
                  <RoomInfo>
                    <RoomHeader>
                      <RoomName>뭇별(본채+별채)</RoomName>
                      <RoomCapacity>기준 2인 (최대 6인)</RoomCapacity>
                      <RoomDetails>침실(2) 화장실(3) 거실(1) 주방(1)</RoomDetails>
                      <RoomTimes>체크인 15:00 - 체크아웃 11:00</RoomTimes>
                    </RoomHeader>
                    <RoomPrice>
                      <PriceInfo>
                        <OriginalPrice>
                          <DiscountLabel>5%</DiscountLabel>
                          520,000원
                        </OriginalPrice>
                        <DiscountPrice>
                          494,000원
                          <PriceUnit>/ 1박</PriceUnit>
                        </DiscountPrice>
                      </PriceInfo>
                      <BookNowButton>예약하기</BookNowButton>
                    </RoomPrice>
                  </RoomInfo>
                </RoomCard>
              </RoomTypeSection>
            </RoomDetailContent>
          </RoomDetailContainer>
          
          <PropertySection>
            <PropertyContent>
              <PropertyTitle>바다와 대나무, 별의 울림이 깃든 공간</PropertyTitle>
              
              <PropertyImage>
                <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=500&fit=crop" alt="바다와 대나무, 별의 울림이 깃든 공간" />
              </PropertyImage>
              
              <PropertyDescription>
                <DescriptionText>
                  이곳은 바다를 향해 열린 프라이빗한 공간으로, 노출 콘크리트와 유리, 대나무를 활용하여 자연의 요소를 건축 안으로 들였다. 마당의 수공간과 실내외를 잇는 통유리창은 외부의 풍경을 내부로 끌어들이며, 어느 곳에서든 자연을 감상할 수 있게 한다.
                </DescriptionText>
                <DescriptionText>
                  객실 내부는 미니멀한 디자인으로 꾸며져 있으며, 필요한 모든 편의시설을 갖추고 있어 편안한 휴식을 제공한다. 공간에 들어서면 가장 먼저 대나무가 바람에 스치는 소리가 방문객을 맞이한다. 이는 자연이 연주하는 음악처럼, 마음의 평온을 가져다준다.
                </DescriptionText>
                <DescriptionText>
                  내부의 욕조에 몸을 담그고 창밖의 대나무 숲을 바라보며 온전한 쉼을 경험할 수 있다. 프라이빗한 마당에는 사계절 내내 즐길 수 있는 온수풀이 마련되어 있다. 따뜻한 물에 몸을 담그고, 변화하는 자연의 풍경을 감상하며 여유로운 시간을 보낼 수 있다.
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
                  <PointTitle>대나무가 전하는 치유의 소리</PointTitle>
                </PointLeftSection>
                <PointRightSection>
                  <PointDescription>
                    바람에 흩날리는 대나무숲의 소리에 집중해 보세요. 뭇별은 대나무로 둘러싸인 자연 속에 위치하여 머무는 내내 대나무의 싱그러운 초록빛을 누릴 수 있습니다. 뭇별의 담벼락이 되어주는 대나무는 침실, 거실, 화장실까지 그 싱그러운 빛을 내어주어 치유의 에너지를 전해줍니다. 특히 울창히 펼쳐진 대나무 숲과 그 끝에 보이는 삼척 바다, 뭇별의 자쿠지에서 맞이하는 경관은 오래도록 잊지 못할 치유가 되어줄 겁니다.
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
                  <PointTitle>계절이 머무는 마당</PointTitle>
                </PointLeftSection>
                <PointRightSection>
                  <PointDescription>
                    프라이빗한 마당에는 사계절 내내 즐길 수 있는 온수풀이 마련되어 있습니다. 따뜻한 물에 몸을 담그고, 변화하는 자연의 풍경을 감상하며 여유로운 시간을 보낼 수 있습니다. 밤에는 별이 쏟아지는 하늘 아래에서 낭만적인 수영을 즐겨보세요. 마당 한가운데 자리 잡은 온수풀은 계절의 변화를 온몸으로 느낄 수 있는 특별한 공간입니다. 봄에는 새싹이 돋아나는 소리, 여름에는 매미 울음소리, 가을에는 낙엽이 떨어지는 소리, 겨울에는 고요한 적막함까지 모든 계절의 아름다움을 담고 있습니다.
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
                  <PointTitle>미니멀한 디자인의 편안함</PointTitle>
                </PointLeftSection>
                <PointRightSection>
                  <PointDescription>
                    객실 내부는 미니멀한 디자인으로 꾸며져 있으며, 필요한 모든 편의시설을 갖추고 있어 편안한 휴식을 제공합니다. 통유리창을 통해 외부의 풍경을 내부로 끌어들이며, 어느 곳에서든 자연을 감상할 수 있습니다. 노출 콘크리트와 유리, 대나무를 활용하여 자연의 요소를 건축 안으로 들여온 디자인은 현대적이면서도 따뜻한 분위기를 연출합니다. 모든 공간에서 자연과의 조화를 느낄 수 있어 진정한 휴식과 치유의 시간을 보낼 수 있습니다.
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
              <RoomInfoTitle>객실별 안내 사항</RoomInfoTitle>
              
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
                <RoomInfoName>뭇별(본채+별채)</RoomInfoName>
                <RoomInfoList>
                  <RoomInfoItem>기준 인원 : 2명(최대 6명)</RoomInfoItem>
                  <RoomInfoItem>체크인 : 15:00 / 체크아웃 11:00</RoomInfoItem>
                  <RoomInfoItem>객실 면적 : 92.25m²</RoomInfoItem>
                  <RoomInfoItem>객실 공간 : 침실(2), 화장실(3), 거실(1), 주방(1)</RoomInfoItem>
                  <RoomInfoItem>침대 유형: 슈퍼싱글(1), 퀸(2)</RoomInfoItem>
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
                <AmenitiesTitle>전 객실 포함 사항</AmenitiesTitle>
                <ViewAllButton>
                  전체보기
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
                  <AmenityName>드라이어</AmenityName>
                </AmenityItem>
                <AmenityItem>
                  <AmenityIcon>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M8 12h8M12 8v8"/>
                    </svg>
                  </AmenityIcon>
                  <AmenityName>커피머신</AmenityName>
                </AmenityItem>
                <AmenityItem>
                  <AmenityIcon>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 7h18M3 11h18M3 15h18"/>
                    </svg>
                  </AmenityIcon>
                  <AmenityName>욕실 어메니티</AmenityName>
                </AmenityItem>
                <AmenityItem>
                  <AmenityIcon>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4"/>
                    </svg>
                  </AmenityIcon>
                  <AmenityName>손 세정제</AmenityName>
                </AmenityItem>
                <AmenityItem>
                  <AmenityIcon>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M2 12h20"/>
                    </svg>
                  </AmenityIcon>
                  <AmenityName>커피포트</AmenityName>
                </AmenityItem>
                <AmenityItem>
                  <AmenityIcon>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                      <path d="M3 9h18"/>
                    </svg>
                  </AmenityIcon>
                  <AmenityName>냉장고</AmenityName>
                </AmenityItem>
                <AmenityItem>
                  <AmenityIcon>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M2 12h20"/>
                    </svg>
                  </AmenityIcon>
                  <AmenityName>에어컨</AmenityName>
                </AmenityItem>
                <AmenityItem>
                  <AmenityIcon>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                      <path d="M17 2l-5 5-5-5"/>
                    </svg>
                  </AmenityIcon>
                  <AmenityName>TV</AmenityName>
                </AmenityItem>
                <AmenityItem>
                  <AmenityIcon>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M8 12h8M12 8v8"/>
                    </svg>
                  </AmenityIcon>
                  <AmenityName>인덕션</AmenityName>
                </AmenityItem>
                <AmenityItem>
                  <AmenityIcon>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M2 12h20"/>
                    </svg>
                  </AmenityIcon>
                  <AmenityName>조리도구</AmenityName>
                </AmenityItem>
                <AmenityItem>
                  <AmenityIcon>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M8 12h8M12 8v8"/>
                    </svg>
                  </AmenityIcon>
                  <AmenityName>식기</AmenityName>
                </AmenityItem>
                <AmenityItem>
                  <AmenityIcon>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M2 12h20"/>
                    </svg>
                  </AmenityIcon>
                  <AmenityName>와인 오프너</AmenityName>
                </AmenityItem>
                <AmenityItem>
                  <AmenityIcon>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M2 12h20"/>
                    </svg>
                  </AmenityIcon>
                  <AmenityName>와인잔</AmenityName>
                </AmenityItem>
                <AmenityItem>
                  <AmenityIcon>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                      <path d="M3 9h18"/>
                    </svg>
                  </AmenityIcon>
                  <AmenityName>타올</AmenityName>
                </AmenityItem>
                <AmenityItem>
                  <AmenityIcon>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M8 12h8M12 8v8"/>
                    </svg>
                  </AmenityIcon>
                  <AmenityName>디퓨저</AmenityName>
                </AmenityItem>
                <AmenityItem>
                  <AmenityIcon>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M2 12h20"/>
                    </svg>
                  </AmenityIcon>
                  <AmenityName>조미료</AmenityName>
                </AmenityItem>
                <AmenityItem>
                  <AmenityIcon>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M8 12h8M12 8v8"/>
                    </svg>
                  </AmenityIcon>
                  <AmenityName>외부용 슬리퍼</AmenityName>
                </AmenityItem>
                <AmenityItem>
                  <AmenityIcon>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                      <path d="M3 9h18"/>
                    </svg>
                  </AmenityIcon>
                  <AmenityName>전자레인지</AmenityName>
                </AmenityItem>
              </AmenitiesGrid>
            </AmenitiesContent>
          </AmenitiesSection>
          
          <InfoSection>
            <InfoTitle>안내사항을 확인하세요</InfoTitle>
            
            <InfoTabs>
              <InfoTab 
                active={activeTab === '위치안내'} 
                onClick={() => handleTabClick('위치안내')}
              >
                위치안내
              </InfoTab>
              <InfoTab 
                active={activeTab === '이용규칙'} 
                onClick={() => handleTabClick('이용규칙')}
              >
                이용규칙
              </InfoTab>
              <InfoTab 
                active={activeTab === '환불정책'} 
                onClick={() => handleTabClick('환불정책')}
              >
                환불정책
              </InfoTab>
              <InfoTab 
                active={activeTab === '안전시설'} 
                onClick={() => handleTabClick('안전시설')}
              >
                안전시설
              </InfoTab>
              <InfoTab 
                active={activeTab === '요금정책'} 
                onClick={() => handleTabClick('요금정책')}
              >
                요금정책
              </InfoTab>
            </InfoTabs>
            
            <InfoCard>
              {activeTab === '위치안내' && (
                <>
                  <ContactInfo>
                    <ContactItem>
                      주소: 강원특별자치도 삼척시 근덕면 부남해변길 4 (부남리)
                    </ContactItem>
                    <ContactItem>
                      연락처: 010-2211-2143
                    </ContactItem>
                    <ContactItem>
                      이메일: lobyulygirl@gmail.com
                    </ContactItem>
                  </ContactInfo>
                  
                  <MapContainer>
                    <iframe
                      src="https://map.kakao.com/link/map/강원특별자치도 삼척시 근덕면 부남해변길 4,37.4417,129.1647"
                      width="100%"
                      height="400"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight={0}
                      marginWidth={0}
                      style={{ 
                        pointerEvents: 'auto',
                        border: 'none'
                      }}
                    />
                  </MapContainer>
                </>
              )}
              
              {activeTab === '이용규칙' && (
                <RulesContent>
                  <RulesSection>
                    <RulesTitle>입실과 퇴실</RulesTitle>
                    <RulesList>
                      <RulesItem>체크인은 오후 3시, 체크아웃은 오전 11시입니다.</RulesItem>
                      <RulesItem>기준인원 2인, 최대 6인(영유아포함)이며 성인 및 아동은 5인까지입니다. 최대 인원 초과시 절대 입실이 불가합니다</RulesItem>
                      <RulesItem>아동 적용 나이는 12세까지 입니다</RulesItem>
                      <RulesItem>게스트 외 방문객은 기준인원 내 추가요금 부과 후 이용가능합니다(인원 초과시 불가)</RulesItem>
                      <RulesItem>반려동물을 사랑하지만 여러사람이 사용하는 공간이기에 동반 입실은 불가합니다</RulesItem>
                      <RulesItem>연박시 청소서비스는 제공되지 않습니다.</RulesItem>
                    </RulesList>
                  </RulesSection>
                  
                  <RulesSection>
                    <RulesTitle>객실</RulesTitle>
                    <RulesList>
                      <RulesItem>Yes-kids zone이나 어린이를 배려해서 설계된 공간이 아니므로 보호자님의 각별한 주의가 필요하며 부주의에 의한 사고시에 책임지지 않습니다. (자쿠지, 수영장, 계단 등의 공간은 특히 조심 해 주세요.)</RulesItem>
                      <RulesItem>객실 내에서 고기, 생선, 튀김 등 냄새가 많이나거나 기름기가 많은 음식조리를 엄격히 금지합니다.</RulesItem>
                      <RulesItem>입실 전 비품관리를 세게히 하고있습니다. 파손된 부분 등은 미리 말씀드리고있으니 체크 부탁드리며 입실 후 발생되는 심한오염, 튜브파손, 염색으로인한 오염, 등 회복어려운 훼손은 부득이 동일제품 구매가격을 청구나 수리비용이 청구되니 주의해 주시면 감사하겠습니다. (오염사례가 빈번한 염색, 아이들 슬라임 놀이등은 금해주시기 바랍니다.)</RulesItem>
                      <RulesItem>식탁 및 싱크대가 나무로 되어 있기에 화기에 취약합니다. 조리시 가열된 냄비를 바로 올려놓지 않도록 주의 해주세요.</RulesItem>
                      <RulesItem>실내슬리퍼는 실내에서만, 외부슬리퍼는 정원내에서만 사용 부탁드립니다.</RulesItem>
                    </RulesList>
                  </RulesSection>
                  
                  <RulesSection>
                    <RulesTitle>야외활동 및 안전</RulesTitle>
                    <RulesList>
                      <RulesItem>화재의 위험성으로 가든내에서의 흠연, 촛불 및 불꽃놀이, 개인화로, 부탄가스 등은 절대 사용금지입니다.</RulesItem>
                    </RulesList>
                  </RulesSection>
                  
                  <RulesSection>
                    <RulesTitle>자쿠지안내</RulesTitle>
                    <RulesList>
                      <RulesItem>자쿠지에 비치된 안내사항을 참고 부탁드립니다.</RulesItem>
                      <RulesItem>준비된 입욕제 외 사용시 욕조가 물들 수 있어 모든 개인입욕제 사용을 금지하며 개인입욕제 사용 후 물듬경우 부득이 청소요금이 부과되오니 주의 부탁드립니다.</RulesItem>
                      <RulesItem>욕조물이 넘치지 않도록 주의 바랍니다. (물 받는 시간 40분 소요)</RulesItem>
                      <RulesItem>자쿠지 내부 논슬립 시공 후 최대한 안전하게 조치를 하였으나(둥글게 갈아냄) 거칠게 느껴질 수 있으니 가벼운 옷, 수영복 착용 후 이용하시기 바랍니다.</RulesItem>
                      <RulesItem>유아.어린이 사용시 꼭 보호자 동반하에 이용 바랍니다.</RulesItem>
                      <RulesItem>사용 후 받은 물은 완전히 배수 부탁드립니다.</RulesItem>
                      <RulesItem>자쿠지 마개는 손잡이 부분이 위쪽으로 향하도록 닫아주시고 혹시 뒤집어 닫으셨을 경우에는 당황하지 마시고 연락 부탁드립니다.</RulesItem>
                    </RulesList>
                  </RulesSection>
                  
                  <RulesSection>
                    <RulesTitle>바베큐 안내</RulesTitle>
                    <RulesList>
                      <RulesItem>바베큐를 옵션에서 추가하신 경우 전기그릴이 준비됩니다.</RulesItem>
                      <RulesItem>눈.비. 강풍시 이용이 무조건 불가합니다</RulesItem>
                      <RulesItem>입실당일 날씨확인 후 고기류 장보기 해주세요</RulesItem>
                      <RulesItem>바베큐 그릴 사용 후 키친타올로 가볍게 닦아주시고 꼭 코드를 뽑아주세요(화재위험)</RulesItem>
                    </RulesList>
                  </RulesSection>
                  
                  <RulesSection>
                    <RulesTitle>수영장안내</RulesTitle>
                    <RulesList>
                      <RulesItem>수영장은 32-33도 미온수로 유지됩니다.</RulesItem>
                      <RulesItem>야외수영장 특성상 수온은 날씨와 온도 영향을 많이 받으므로 체감온도는 다를 수 있습니다.</RulesItem>
                      <RulesItem>수영장 내부가 점차적으로 깊어지는 형태로 논슬립 시공 되어있으나 뛰어 들어가는 행위는 안전사고를 유발하니 각별히 주의 부탁 드립니다.</RulesItem>
                      <RulesItem>영유아는 방수 기저귀 착용 후 이용 부탁드립니다.</RulesItem>
                      <RulesItem>외부수영장 특성상 낙엽. 곤충 등의 이물질이 유입될 수 있음을 알려드리며 구비된 뜰채를 사용하여 제거 후 사용 부탁드립니다.</RulesItem>
                      <RulesItem>수질은 여과장치를 통해 관리되고 있으며 주기적인 청소를 진행하니 안심하고 사용 해 주세요.</RulesItem>
                      <RulesItem>수영장에 입욕제 및 이물질(배뇨, 입욕제, 꽃잎, 거품, 모래)의 투입을 절대 삼가하여 주시기 바랍니다.</RulesItem>
                      <RulesItem>수영장 수심은 0.2m~1.2m로 보호자의 동반 입수시에만 어린이의 이용이 가능하도록 협조 부탁드리며 안전사고에 유의 바랍니다.</RulesItem>
                      <RulesItem>폭설, 태풍 등 기상악화에 따른 이용제한이 있을 수 있습니다. 게스트분들의 안전을 위한 조치이니 양해 부탁드립니다.</RulesItem>
                      <RulesItem>수영장 이용시간 제한은 없으나 미온수는 4시~9시까지 유지됩니다.</RulesItem>
                    </RulesList>
                  </RulesSection>
                  
                  <RulesSection>
                    <RulesTitle>에탄올불멍</RulesTitle>
                    <RulesList>
                      <RulesItem>에탄올 불멍은 사전예약의 경우 사용하실 수 있도록 준비해 드립니다.</RulesItem>
                      <RulesItem>준비된 에탄올을 골고루 투입구에 주입 후 불을 붙이면 수분 내로 타오릅니다.</RulesItem>
                      <RulesItem>사용 중 에탄올을 추가 투입하는 행위는 매우 위험하니 도중에 에탄올을 투입라는 행위는 삼가주시기 바랍니다.</RulesItem>
                      <RulesItem>기상상황에 따라 제한될 수 있습니다. 비오는날은 이용 불가합니다</RulesItem>
                    </RulesList>
                  </RulesSection>
                  
                  <RulesSection>
                    <RulesTitle>본채/별채 구비물품</RulesTitle>
                    <RulesSubTitle>본채</RulesSubTitle>
                    <RulesList>
                      <RulesItem>조미료(간장 오일 설탕 소금)</RulesItem>
                      <RulesItem>토스터기, 전기포트, 캡슐커피머신, 인덕션, 정수기, 전자레인지</RulesItem>
                      <RulesItem>디터람스브라운 스피커, 스탠바이미(넷플릭스)</RulesItem>
                      <RulesItem>실내화 및 외부슬리퍼(흰색)</RulesItem>
                      <RulesItem>빨래건조대, 튜브공기주입기</RulesItem>
                      <RulesItem>성인용 튜브1, 아동용튜브1(요청시)</RulesItem>
                      <RulesItem>비치타올</RulesItem>
                      <RulesItem>모기기피제, 모기향, 벌레퇴치제, 물파스</RulesItem>
                      <RulesItem>충전기 (c타입, 5핀, 아이폰)</RulesItem>
                      <RulesItem>아기의자(요청시 제공)</RulesItem>
                      <RulesItem>전기그릴 / 야외접이식 테이블(요청시)</RulesItem>
                      <RulesItem>칫솔, 치약, 욕실어메니티, 입욕제</RulesItem>
                      <RulesItem>샤워가운은 입실전 요청시에만 제공됩니다</RulesItem>
                    </RulesList>
                    
                    <RulesSubTitle>별채</RulesSubTitle>
                    <RulesList>
                      <RulesItem>실내화 및 외부슬리퍼(흰색)</RulesItem>
                      <RulesItem>마샬스피커</RulesItem>
                      <RulesItem>충전기(c타입, 5핀, 아이폰)</RulesItem>
                      <RulesItem>칫솔, 치약, 욕실어메니티</RulesItem>
                    </RulesList>
                    
                    <RulesNote>
                      *구비 물품 외 아기식기 및 유아용품, 폼클렌징, 화장품은 준비 해 주세요.
                      <br />
                      *모든 비품은 입실전 정상작동 체크하며 퇴실시 파손발견된 경우 배상요구됩니다
                    </RulesNote>
                  </RulesSection>
                                 </RulesContent>
               )}
               
               {activeTab === '환불정책' && (
                 <RefundContent>
                   <RefundTable>
                     <RefundTableHeader>
                       <RefundTableHeaderCell>기준일</RefundTableHeaderCell>
                       <RefundTableHeaderCell>환불 금액</RefundTableHeaderCell>
                     </RefundTableHeader>
                     <RefundTableBody>
                       <RefundTableRow>
                         <RefundTableCell>체크인 20일 전까지</RefundTableCell>
                         <RefundTableCell>100% 환불</RefundTableCell>
                       </RefundTableRow>
                       <RefundTableRow>
                         <RefundTableCell>체크인 14일 전까지</RefundTableCell>
                         <RefundTableCell>90% 환불</RefundTableCell>
                       </RefundTableRow>
                       <RefundTableRow>
                         <RefundTableCell>체크인 8일 전까지</RefundTableCell>
                         <RefundTableCell>80% 환불</RefundTableCell>
                       </RefundTableRow>
                       <RefundTableRow>
                         <RefundTableCell>체크인 7일 전까지</RefundTableCell>
                         <RefundTableCell>70% 환불</RefundTableCell>
                       </RefundTableRow>
                       <RefundTableRow>
                         <RefundTableCell>체크인 6일 전까지</RefundTableCell>
                         <RefundTableCell>60% 환불</RefundTableCell>
                       </RefundTableRow>
                       <RefundTableRow>
                         <RefundTableCell>체크인 5일 전까지</RefundTableCell>
                         <RefundTableCell>50% 환불</RefundTableCell>
                       </RefundTableRow>
                       <RefundTableRow>
                         <RefundTableCell>체크인 4일 전까지</RefundTableCell>
                         <RefundTableCell>40% 환불</RefundTableCell>
                       </RefundTableRow>
                       <RefundTableRow>
                         <RefundTableCell>체크인 3일 전부터</RefundTableCell>
                         <RefundTableCell>환불 불가</RefundTableCell>
                       </RefundTableRow>
                     </RefundTableBody>
                   </RefundTable>
                   
                   <RefundNote>
                     환불 수수료는 예약 완료 후 24시간 이내 취소와 관련없이 무조건 환불규정을 따름
                   </RefundNote>
                 </RefundContent>
               )}
               
               {activeTab === '안전시설' && (
                 <SafetyContent>
                   <SafetySection>
                     <SafetyTitle>소화기</SafetyTitle>
                     <SafetyList>
                       <SafetyItem>본채-객실 내 1층 화장실</SafetyItem>
                       <SafetyItem>별채-세면대 아래 수납함</SafetyItem>
                     </SafetyList>
                   </SafetySection>
                   
                   <SafetySection>
                     <SafetyTitle>상비약</SafetyTitle>
                     <SafetyList>
                       <SafetyItem>물파스, 모기기피제, 대일밴드, 소독약</SafetyItem>
                     </SafetyList>
                   </SafetySection>
                 </SafetyContent>
               )}
               
               {activeTab === '요금정책' && (
                 <PricingContent>
                   <PricingTitle>뭇별(본채+별채)</PricingTitle>
                   
                   <PricingSection>
                     <PricingSubTitle>기본 요금</PricingSubTitle>
                     <PricingTable>
                       <PricingTableHeader>
                         <PricingTableHeaderCell>평일</PricingTableHeaderCell>
                         <PricingTableHeaderCell>주말</PricingTableHeaderCell>
                       </PricingTableHeader>
                       <PricingTableBody>
                         <PricingTableRow>
                           <PricingTableCell>520,000원</PricingTableCell>
                           <PricingTableCell>570,000원~</PricingTableCell>
                         </PricingTableRow>
                       </PricingTableBody>
                     </PricingTable>
                   </PricingSection>
                   
                   <PricingSection>
                     <PricingSubTitle>성수기 요금</PricingSubTitle>
                     <PricingTable>
                       <PricingTableHeader>
                         <PricingTableHeaderCell>구분</PricingTableHeaderCell>
                         <PricingTableHeaderCell>평일</PricingTableHeaderCell>
                         <PricingTableHeaderCell>주말</PricingTableHeaderCell>
                       </PricingTableHeader>
                       <PricingTableBody>
                         <PricingTableRow>
                           <PricingTableCell>준성수기</PricingTableCell>
                           <PricingTableCell>620,000원</PricingTableCell>
                           <PricingTableCell>680,000원~</PricingTableCell>
                         </PricingTableRow>
                         <PricingTableRow>
                           <PricingTableCell>준성수기</PricingTableCell>
                           <PricingTableCell>620,000원</PricingTableCell>
                           <PricingTableCell>680,000원~</PricingTableCell>
                         </PricingTableRow>
                         <PricingTableRow>
                           <PricingTableCell>성수기</PricingTableCell>
                           <PricingTableCell>670,000원</PricingTableCell>
                           <PricingTableCell>730,000원~</PricingTableCell>
                         </PricingTableRow>
                         <PricingTableRow>
                           <PricingTableCell>성수기</PricingTableCell>
                           <PricingTableCell>670,000원</PricingTableCell>
                           <PricingTableCell>730,000원~</PricingTableCell>
                         </PricingTableRow>
                         <PricingTableRow>
                           <PricingTableCell>극성수기</PricingTableCell>
                           <PricingTableCell>800,000원</PricingTableCell>
                           <PricingTableCell>800,000원~</PricingTableCell>
                         </PricingTableRow>
                       </PricingTableBody>
                     </PricingTable>
                   </PricingSection>
                   
                   <PricingNote>
                     자세한 요금은 일정 선택 후 확인하시길 바랍니다.
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
                  alt="여주현 : 동천" 
                />
                <ExperienceOverlay>
                  <ExperienceTitle>여주현 : 동천</ExperienceTitle>
                  <ExperienceSubtitle>아름다운 산세 속 하룻밤의 신선놀음</ExperienceSubtitle>
                </ExperienceOverlay>
              </ExperiencePanel>
              
              <ExperiencePanel>
                <ExperienceImage 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop" 
                  alt="레이어 한옥 하우스" 
                />
                <ExperienceOverlay>
                  <ExperienceTitle>LAYR</ExperienceTitle>
                  <ExperienceSubtitle>레이어 한옥 하우스</ExperienceSubtitle>
                  <ExperienceDescription>내면의 취향을 일깨우는 공간</ExperienceDescription>
                </ExperienceOverlay>
              </ExperiencePanel>
              
              <ExperiencePanel>
                <ExperienceImage 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop" 
                  alt="고유시차" 
                />
                <ExperienceOverlay>
                  <ExperienceTitle>고유시차</ExperienceTitle>
                  <ExperienceSubtitle>우리만을 위한 고유한 시간</ExperienceSubtitle>
                </ExperienceOverlay>
              </ExperiencePanel>
            </ExperienceTopSection>
            
            <ExperienceBottomSection>
              <ExperienceBottomImage 
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=400&fit=crop" 
                alt="이상적 하루의 경험" 
              />
              <ExperienceBottomOverlay>
                <ExperienceBottomTitle>이상적 하루의 경험</ExperienceBottomTitle>
                <ExperienceBottomSubtitle>스테이그라운드와 함께하기</ExperienceBottomSubtitle>
              </ExperienceBottomOverlay>
            </ExperienceBottomSection>
          </ExperienceSection>
          
          <RoomInfoInquiryButton>
            <span>문의</span>
            <span>하기</span>
          </RoomInfoInquiryButton>
        </ContentWrapper>
      </MainContent>
      
      <Footer />
    </Container>
  )
}

export default AccommodationDetailPage
