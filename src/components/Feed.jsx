// // import React, { useEffect, useState } from "react";
// // import { Box, Stack, Typography } from "@mui/material";

// // import { Videos, Categories } from "./";
// // import { axiosGetReq } from "../utils";
// // import { fetchFromAPI } from "../utils/fetchFromAPI";
// // const Feed = () => {
// //   const [selectedCategory, setSelectedCategory] = useState("all");
// //   const [videos, setVideos] = useState(null);

// //   useEffect(() => {
// //     setVideos(null);
// //     const fetchVideos = async () => {
// //       const data = await axiosGetReq(
// //         `search?part=snippet&q=${selectedCategory}`
// //       );
// //       setVideos(data.items);
// //     };

// //     fetchVideos();
// //   }, [selectedCategory]);

// //   return (
// //     <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
// //       <Box
// //         sx={{
// //           position: "relative",
// //           justifyContent: "space-between",
// //           alignItems: "center",
// //           height: { sx: "auto", md: "92vh" },
// //           borderRight: "1px solid #3d3d3d",
// //           px: { sx: 0, md: 2 },
// //         }}
// //       >
// //         <Categories
// //           selectedCategory={selectedCategory}
// //           setSelectedCategory={setSelectedCategory}
// //         />
// //         <p
// //           className="copyright"
// //           style={{
// //             color: "#fff",
// //             fontSize: "15px",
// //             backgroundColor: "black",
// //             textAlign: "center",
// //           }}
// //         >
// //           Copyright © 2022 YT, Inc.
// //         </p>
// //       </Box>

// //       <Box
// //         p={2}
// //         sx={{
// //           overflowY: "auto",
// //           height: "88vh",
// //           flex: 2,
// //         }}
// //       >
// //         <Typography
// //           fontSize={25}
// //           fontWeight={900}
// //           textAlign="left"
// //           mb={2}
// //           sx={{ textTransform: "capitalize", color: "white" }}
// //         >
// //           {selectedCategory || "Recommended"}{" "}
// //           <span style={{ color: "#FC1503" }}>Videos</span>
// //         </Typography>
// //         {/* <Stack direction='row' gap='20px' sx={{ width: '80%', margin: 'auto' }}>
// //           <Link to='/video/jfKfPfyJRdk' style={{width:'100%'}}>
// //             <img
// //               style={{ height: '400px', width: '100%' }}
// //               src={
// //                 'https://media.npr.org/assets/img/2022/07/14/lofi-girl-picture_custom-27a34c6d0ca36f828940156e7bd3c964140cff9c.jpg'
// //               }
// //               alt='recommended video'
// //             />
// //           </Link>
// //         </Stack> */}
// //         <Videos videos={videos} />
// //       </Box>
// //     </Stack>
// //   );
// // };

// // export default Feed;



// import {useState , useEffect} from 'react'
// import {Box , Stack , Typography} from '@mui/material'
// import Sidebar from './Sidebar'
// import Videos from './Videos'
// import { fetchFromAPI } from '../utils/fetchFromAPI'
// const Feed = () => {

//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [videos, setVideos] = useState([])
 
//   useEffect(() => {
//     fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
//       .then((data) => setVideos(data.items))
//     }, [selectedCategory]);

//   return (
//     <Stack
//     sx = {{flexDirection : {xs:"column" , md:"row"}}}>
//     <Box sx={{height:{xs:"auto" , md:"92vh"},borderRight:"1px solid #171717",px:{xs:0 , md:2}}}>
//     <Sidebar
//     selectedCategory = {selectedCategory}
//     setSelectedCategory = {setSelectedCategory}
//     />
//     <Typography className='copyright' variant="body2" sx={{mt:1.5 , color:'#fff'}}>
//     Copyright 2023 KhateebXtreme
//     </Typography>
//     </Box>
//     <Box p ={2.5} sx ={{overflowY:'auto' , height : '90vh' ,flex:2}}>
//       <Typography variant = "h4" fontWeight = "bold" mb = {2}
//       sx={{color : 'white'}}>
//         {selectedCategory} <span style={{color : '#FA8072'}}>Videos</span>
//       </Typography>
//       <Videos videos = {videos/*video placeholder */}/>
//     </Box>
//     </Stack>
//   )
// }

// export default Feed

// //most important component that also handles fetching of videos from youtube api
// //it has 2 box parts -> the sidebar and the videofield that actually retrieves the video
// //typography is used for all text elements
// //we will use rapid api to fetch video data
// //fetchFromApi is used with useEffect as we want it to execute as soon as our feed loads because we want to immediately fetch the data
// //useEffect is a lifecycle hook which gets called when the component initially loads
// //code inside useEffect will run only on page reload and as we are using the useState selectedCategory in it , it should be provided in the dependency array i.e it will recall fetchFromAPI function whenever there is a change in that useState
// //to reflect the selected category on our site , we need to provide some states to our sidebar
// //after that we need to provide a then fuction to fetchFromAPI to actually retrieve the video




// src/components/Feed.js
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Sidebar from './Sidebar';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI'; // Adjust import based on your file

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items));
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
      <Box
        sx={{
          height: { xs: "auto", md: "92vh" },
          borderRight: "1px solid #171717",
          px: { xs: 0, md: 2 }
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className='copyright'
          variant="body2"
          sx={{ mt: 1.5, color: '#fff' }}
        >
          Copyright 2024 Shubham
        </Typography>
      </Box>
      <Box p={2.5} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: 'white' }}
        >
          {selectedCategory || "Recommended"} <span style={{ color: '#FA8072' }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
}

export default Feed;

