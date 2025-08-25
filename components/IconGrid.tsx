import React from 'react'
import styled from 'styled-components'
import { useLanguage } from '../contexts/LanguageContext'

interface IconGridProps {
  selectedIcon: number
  onIconClick: (index: number) => void
}

const IconGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  gap: 20px;
  margin-top: 40px;
`

const IconItem = styled.div<{ isSelected?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 15px 10px;
  border-radius: 8px;
  transition: all 0.3s ease;
`

const IconWrapper = styled.div<{ isSelected?: boolean }>`
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  width: fit-content;
  color: ${props => props.isSelected ? '#333' : '#999'};
  transition: color 0.3s ease;
`

const IconLabel = styled.div<{ isSelected?: boolean }>`
  font-size: 12px;
  font-weight: ${props => props.isSelected ? '600' : '500'};
  color: ${props => props.isSelected ? '#333' : '#999'};
  text-align: center;
  position: relative;
  
  ${props => props.isSelected && `
    &::after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      height: 2px;
      background-color: #333;
      border-radius: 1px;
    }
  `}
`

const IconGridComponent: React.FC<IconGridProps> = ({ selectedIcon, onIconClick }) => {
  const { t } = useLanguage()
  const iconData = [
          { 
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ), 
        label: t('stay.icons.all_stays') 
      },
          { 
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <text x="12" y="10" textAnchor="middle" fontSize="8" fill="currentColor">%</text>
          </svg>
        ), 
        label: t('stay.icons.ending_soon') 
      },
          { 
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 6L10 4L12 6L14 4L16 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
          </svg>
        ), 
        label: t('stay.icons.private_stay') 
      },
      { 
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 10L12 4L20 10V20H4V10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 20V12H16V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1"/>
            <path d="M6 18L8 16L10 18L12 16L14 18" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
          </svg>
        ), 
        label: t('stay.icons.camping') 
      },
      { 
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 8V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 12L12 8L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ), 
        label: t('stay.icons.pet_friendly') 
      },
      { 
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
            <path d="M2 10H22" stroke="currentColor" strokeWidth="2"/>
            <path d="M6 6V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M18 6V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M8 14L10 16L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ), 
        label: t('stay.icons.pool') 
      },
      { 
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="8" width="16" height="8" rx="2" stroke="currentColor" strokeWidth="2"/>
            <path d="M4 12H20" stroke="currentColor" strokeWidth="2"/>
            <path d="M6 6L8 8L10 6L12 8L14 6L16 8L18 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
          </svg>
        ), 
        label: t('stay.icons.jacuzzi') 
      },
      { 
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 14L9 12L11 14L13 12L15 14L17 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
            <path d="M8 18H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ), 
        label: t('stay.icons.hanok') 
      },
      { 
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 12L6 8L10 12L14 8L18 12L22 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="20" cy="4" r="2" stroke="currentColor" strokeWidth="1"/>
            <path d="M2 16L6 12L10 16L14 12L18 16L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ), 
        label: t('stay.icons.ocean_view') 
      },
      { 
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 14L10 12L12 14L14 12L16 14" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
          </svg>
        ), 
        label: t('stay.icons.forest_view') 
      },
      { 
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="7" y="14" width="2" height="2" stroke="currentColor" strokeWidth="1"/>
            <rect x="11" y="14" width="2" height="2" stroke="currentColor" strokeWidth="1"/>
            <rect x="15" y="14" width="2" height="2" stroke="currentColor" strokeWidth="1"/>
          </svg>
        ), 
        label: t('stay.icons.city_view') 
      },
      { 
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12L6 10L8 12L10 10L12 12L14 10L16 12L18 10L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 8L8 6L10 8L12 6L14 8L16 6L18 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 16L10 14L12 16L14 14L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ), 
        label: t('stay.icons.harbor_view') 
      },
      { 
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 18L10 16L12 18L14 16L16 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 6L8 4L10 6L12 4L14 6L16 4L18 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
          </svg>
        ), 
        label: t('stay.icons.sauna') 
      }
  ]

  return (
    <IconGridContainer>
      {iconData.map((item, index) => (
        <IconItem 
          key={index} 
          isSelected={selectedIcon === index}
          onClick={() => onIconClick(index)}
        >
          <IconWrapper isSelected={selectedIcon === index}>
            {item.icon}
          </IconWrapper>
          <IconLabel isSelected={selectedIcon === index}>{item.label}</IconLabel>
        </IconItem>
      ))}
    </IconGridContainer>
  )
}

export default IconGridComponent
