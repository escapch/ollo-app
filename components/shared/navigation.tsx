'use client';
import React from 'react';
import { Container } from './container';
import { useEffect } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ImageIcon from '@mui/icons-material/Image';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useRouter } from 'next/navigation';
import styles from './index.module.scss';

const navData = [
  {
    id: 1,
    icon: HomeIcon,
    value: '/',
    path: '/',
  },
  {
    id: 2,
    icon: FavoriteIcon,
    value: 'favorites',
    path: '/',
  },
  {
    id: 3,
    icon: AddCircleOutlineIcon,
    value: 'create',
    path: '/',
  },
  {
    id: 4,
    icon: ImageIcon,
    value: 'gallery',
    path: '/',
  },
  {
    id: 5,
    icon: AccountCircleIcon,
    value: 'profile',
    path: '/',
  },
];

type Props = {};

const Navigation = (props: Props) => {
  const router = useRouter();
  const [value, setValue] = React.useState('');

  useEffect(() => {
    const currentUrl = window.location.href.split('/');

    if (currentUrl[currentUrl.length - 1]) {
      setValue(currentUrl[currentUrl.length - 1]);
    }
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    router.push(newValue);
  };
  return (
    <div className="fixed bottom-0 w-full">
      <BottomNavigation
        sx={{ width: '100%', background: 'black' }}
        value={value}
        onChange={handleChange}
      >
        {navData.map((item) => (
          <BottomNavigationAction
            value={item.value}
            sx={{
              maxWidth: '100px',
              minWidth: '60px',
            }}
            icon={
              <item.icon
                sx={{
                  color: value === item.value ? 'white' : '#4e4e4e',
                }}
              />
            }
          />
        ))}
      </BottomNavigation>
    </div>
  );
};

export default Navigation;
