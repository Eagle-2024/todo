
import * as React from 'react';
import "./App.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Container from '@mui/material/Container';
import CloudIcon from '@mui/icons-material/Cloud';
import axios from "axios";
import {useState, useEffect } from 'react';
import moment from "moment";
import "moment/min/locales";
import { useTranslation } from 'react-i18next';
import "./i18n";
moment.locale("ar"); 

moment.locale("ar")
const theme=createTheme({
  typography:{
    fontFamily:["Ibm"],
  },
})


let cancelAxios=null
 function App(){
  const { t, i18n } = useTranslation();
  
  const [dateAndTime,SetDateAndTime]=React.useState('')
  
 
  const [temp,SetTemp]=React.useState({
    number:null,
    description:null,
    min:null,
    max:null,
    icon: null,
  });
  const [locale,SetLocale]=React.useState("ar")

  // // event handlers 
  function handleLanguageClick(){
    if (locale==="en"){
      SetLocale("ar")
      i18n.changeLanguage("ar");
      moment.locale("ar")
    }else{
      SetLocale("en")
    i18n.changeLanguage("en");
    moment.locale("en")
  }
  SetDateAndTime(moment().format('MMMM Do YYYY, h:mm:ss a'))
}



  useEffect(()=>{
    i18n.changeLanguage(locale);
  },[])

  useEffect(()=>{
     SetDateAndTime(moment().format('MMMM Do YYYY, h:mm:ss a'))
    axios.get("https://api.openweathermap.org/data/2.5/weather?lat=24.774265&lon=46.738586&appid=0f15f7cd55c5a761eb424a2fe626099f",
      {
        cancelToken:new axios.CancelToken((c)=>{
          cancelAxios=c
        })
      }
    )
    
    .then(function (response) {
      // handle success
      // console.log(Math.round(response.data.main.temp-272.15));
      // or i can put above console in variable and use it later below 
      const responseTemp= Math.round(response.data.main.temp-272.15)
      // console.log(response)
      const min= Math.round(response.data.main.temp_min-272.15);
      const max= Math.round(response.data.main.temp_max-272.15);
      const description=response.data.weather[0].description;
      const responseIcon= response.data.weather[0].icon;
      SetTemp({number:responseTemp,min:min,max:max,description:description,icon:`https://openweathermap.org/img/wn/${responseIcon}/@2x.png`})
      // // console.log(min,max,description)

      
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

    return ()=>{
      cancelAxios()
   
    }
  },[])
    return (
      <div>
            <ThemeProvider theme={theme}>
                 <Container maxWidth="sm" >
                    {/* content container  */}
                    <div style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        {/* card */}
        <div style={{width:"100%",background:"grey", color:"white",padding:"10px",borderRadius:" 15px", boxShadow:" 0px 11px 1px rgba (0,0,0,0,0.5)"}} dir={locale==="ar"?"rtl":"ltr"}>
            {/* content  */}
            <div >
                {/* city and time  */}
                <div style={{display:"flex", alignItems:"end", justifyContent:"start", marginRight:"5px"}} dir={locale==="ar"?"rtl":"ltr"}>
                <Typography variant="h3">

                  {t('Riyadh')}

               </Typography> 
               <Typography variant="h6" style={{marginRight:"5px"}}>
                 {dateAndTime}               
                </Typography>   
                </div>
                  {/* city and time  */}
                <hr style={{color:"white"}}/>
                {/* degree and description  */}
                {/* container of degree and cloud icon */}
                <div style={{display:"flex", justifyContent:"space-around"}}>
               
                <div>
                    {/* temp  */}
                    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <Typography variant="h1" style={{textAlign:"right"}}>
                          {temp.number}
                          </Typography>
                       <img alt='' src={temp.icon}/>
               </div>
                    {/* temp  */}
                    <Typography variant="h6" >{t(temp.description)} </Typography>
                    {/* min and max */}
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <h5>{t("min")}:{temp.min}</h5>
                        <h5>|</h5>
                        <h5>{t("max")}: {temp.max}</h5>
                    </div>
                    {/* min and max */}

                </div>
              
                 {/* container of degree and cloud icon */}
                {/* degree and description  */}
                <CloudIcon style={{fontSize:"200px",color:"white"}}/>
                </div>
              
            </div>
            {/* content  */}
        </div>
        {/* card */}
        {/* translation container  */}
        <div style={{display:"flex",justifyContent:"end",width:"100%",}} dir={locale==="ar"?"rtl":"ltr"}>
        <Button onClick={handleLanguageClick} variant="text" style={{color:"white"}}>

          {locale==="en"?"Arabic":"انجليري"}

        </Button>
        </div>
        {/* translation container  */}
        </div>
            {/* content container  */}
      </Container>
            
              </ThemeProvider>
        </div>
    )
  }
export default App;

