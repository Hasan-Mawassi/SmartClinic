// components/KpiCard.jsx
import { Card, CardContent, Typography, Box } from '@mui/material';

const KpiCard = ({ title, value, icon }) => {
  return (
    <Card elevation={2} sx={{ borderRadius: 3 }}>
      <CardContent>
        <Box display="flex" alignItems="center" gap={2}>
          {icon}
          <Box>
            <Typography variant="subtitle2" color="textSecondary">
              {title}
            </Typography>
            <Typography variant="h5">{value}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default KpiCard;
