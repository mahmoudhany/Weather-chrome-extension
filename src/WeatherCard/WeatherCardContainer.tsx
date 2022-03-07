import React from 'react';
import { Box } from '@mui/system';
import { Card, CardContent, Button } from '@mui/material';

const WeatherCardContainer: React.FC<{ children: React.ReactNode, onDelete?: () => void }> = ({ children, onDelete }) => {

  return (
    <Box my='16px' mx='4px'>
      <Card>
        <CardContent>{children}</CardContent>
        {onDelete &&
          <Button onClick={onDelete}>Delete</Button>
        }
      </Card>
    </Box>
  )
}

export default WeatherCardContainer;
