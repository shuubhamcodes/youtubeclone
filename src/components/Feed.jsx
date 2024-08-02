// import React, { useState, useEffect } from 'react';


// import { Box, Stack, Typography } from "@mui/material";
// import { Videos, Sidebar } from "./";



// import { fetchFromAPI } from '../utils/fetchFromAPI_temp';




// const Feed = () => {

//   const [selectedCategory, setSelectedCategory] = useState("New");
//   const [videos, setVideos] = useState([]);
//   useEffect(() => {
//     setVideos(null);

//     fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
//       .then((data) => setVideos(data.items))
//     }, [selectedCategory]);






//   return (
//     <Stack sx={{flexDirection:{ sx:"column" , md: "row"}}}> 
//     <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>

//     <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
//     <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
//           Copyright © 2022 Media
//         </Typography>
//     </Box>

//     <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
//         <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
//           {selectedCategory}
//            <span style={{ color: "#FC1503" }}>videos</span>
//         </Typography>

//         <Videos videos={videos} />
//       </Box>

//     </Stack>
//   )
// }

// export default Feed





















// import React, { useState, useEffect } from 'react';
// import { Box, Stack, Typography } from "@mui/material";
// import { Videos, Sidebar } from "./";
// import { fetchFromAPI } from '../utils/fetchFromAPI_temp'; // Corrected import path

// const Feed = () => {
//   const [selectedCategory, setSelectedCategory] = useState("New");
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     setVideos([]); // Initialize with an empty array

//     fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
//       .then((data) => {
//         console.log('Fetched Data in Component:', data); // Log the data for debugging
//         if (data && data.items) {
//           setVideos(data.items);
//         } else {
//           console.error('No data received from API');
//           setVideos([]); // Set to an empty array to prevent null issues
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching videos:', error);
//         setVideos([]); // Set to an empty array to prevent null issues
//       });
//   }, [selectedCategory]);

//   return (
//     <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
//       <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
//         <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
//         <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
//           Copyright © 2022 Media
//         </Typography>
//       </Box>

//       <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
//         <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
//           {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
//         </Typography>
//         <Videos videos={videos} />
//       </Box>
//     </Stack>
//   );
// }

// export default Feed;


















import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from "@mui/material";
import { Videos, Sidebar } from "./";
import { fetchFromAPI } from '../utils/fetchFromAPI_temp'; // Corrected import path

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    console.log('Environment Variable:', process.env.REACT_APP_RAPID_API_KEY); // Log the API key

    setVideos([]); // Initialize with an empty array

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        console.log('Fetched Data in Component:', data); // Log the data for debugging
        if (data && data.items) {
          setVideos(data.items);
        } else {
          console.error('No data received from API');
          setVideos([]); // Set to an empty array to prevent null issues
        }
      })
      .catch(error => {
        console.error('Error fetching videos:', error);
        setVideos([]); // Set to an empty array to prevent null issues
      });
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2022 Media
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
}

export default Feed;


       


