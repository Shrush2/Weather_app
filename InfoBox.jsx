import React from "react"; // Import React
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  // Accept info as a prop
  const INIT_URL =
    "https://play-lh.googleusercontent.com/pCQw51XRP4UPr-FCYDjvNnEpFa0HDGJjjLDldN3rmw4KkwhqPu0PZXE8EopmAxzH9mQ";

  const HOT_URL =
    "https://images.unsplash.com/photo-1496347315686-5f274d046ccc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1477468572316-36979010099d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL =
    "https://plus.unsplash.com/premium_photo-1697385274849-9c8141331c73?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  

  return (
<div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 700 }}>
          <CardMedia
            sx={{ height: 150,objectFit: 'cover' }}
            // image={
            //   info.humidity > 80 // Use 'info' with a lowercase 'i'
            //     ? RAIN_URL
            //     : info.temp > 15
            //     ? HOT_URL
            //     : COLD_URL
            // }
            image={INIT_URL}
            title="Weather Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 80 ? ( // Use 'info' with a lowercase 'i'
                <ThunderstormIcon  style={{color:"#7695FF",width:"40px"}}/>
              ) : info.temp > 15 ? (
                <WbSunnyIcon style={{color:"#F3C623",width:"40px"}}/>
              ) : (
                <AcUnitIcon style={{color:"#C4E1F6",width:"40px"}}/>
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component="div"
            >
                <p style={{fontWeight: "900",color:"black"}}> {info.temp}&deg;C</p>
              <p>Humidity: {info.humidity}%</p>
              <p>Min Temp: {info.tempMin}&deg;C</p>
              <p>Max Temp: {info.tempMax}&deg;C</p>
              <p>Feels Like: {info.feelsLike}&deg;C</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
