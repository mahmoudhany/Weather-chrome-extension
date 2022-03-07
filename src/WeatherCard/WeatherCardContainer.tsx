import React from 'react';
import { Box } from '@mui/system';
import { Card, CardContent } from '@mui/material';

const WeatherCardContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <Box my='16px'>
      <Card>
        <CardContent>{children}</CardContent>
      </Card>
    </Box>
  )
}

export default WeatherCardContainer;
