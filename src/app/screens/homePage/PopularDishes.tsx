import React from "react";
import { Box, Container, Stack } from "@mui/material";
import JoyStack from "@mui/joy/Stack";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import CardOverflow from "@mui/joy/CardOverflow";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrievePopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";
import { ProductCollection } from "../../../lib/enums/product.enums";
import { serverApi } from "../../../lib/config";

/** REDUX SLICE & SELECTOR */
const popularDishesRetriever = createSelector(
  retrievePopularDishes,
  (popularDishes) => ({ popularDishes })
);


export default function PopularDishes() {
  const { popularDishes } = useSelector(popularDishesRetriever);
  console.log("popularDishes:", popularDishes)

  return (
    <div className="popular-dishes-frame">
      <Container>
        <Stack className="popular-section">
          <Box className="category-title">Popular Dishes</Box>
          <Stack className="cards-frame">
            {popularDishes.length !== 0 ? (
              popularDishes.map((ele: Product) => {
                const imagePath = `${serverApi}/${ele.productImages[0]}`;
                return (
                  <CssVarsProvider key={ele._id}>
                    <Card className={"card"}>
                      <CardCover>
                        <img src={imagePath} alt="" />
                      </CardCover>
                      <CardCover className={"card-cover"} />
                      <CardContent sx={{ justifyContent: "flex-end" }}>
                        <JoyStack
                          flexDirection={"row"}
                          justifyContent={"space-between"}
                        >
                          <Typography
                            level="h2"
                            fontSize="lg"
                            textColor="#fff"
                            mb={1}
                          >
                            {ele.productName}
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: "md",
                              color: "neutral.300",
                              alignItems: "center",
                              display: "flex",
                            }}
                          >
                            {ele.productViews}
                            <VisibilityIcon
                              sx={{ fontSize: 25, marginLeft: "5px" }}
                            />
                          </Typography>
                        </JoyStack>
                      </CardContent>
                      <CardOverflow
                        sx={{
                          display: "flex",
                          gap: 1.5,
                          py: 1.5,
                          px: "var(--Card-padding)",
                          borderTop: "1px solid",
                          height: "60px",
                        }}
                      >
                        <Typography
                          startDecorator={<DescriptionOutlinedIcon />}
                          textColor="neutral.300"
                        >
                          ${ele.productDesc}
                        </Typography>
                      </CardOverflow>
                    </Card>
                  </CssVarsProvider>
                );
              })
            ) : (
              <Box className="no-data">Popular products are not available!</Box>
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}




// import React from "react";
// import { Box, Container, Stack } from "@mui/material";
// import Card from '@mui/joy/Card';
// import { CssVarsProvider } from "@mui/joy";
// import CardCover from '@mui/joy/CardCover';
// import CardContent from '@mui/joy/CardContent';
// import Typography from '@mui/joy/Typography';
// import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

// export default function PopularDishes() {
//     return (
//         <div className="popular-dishes-frame">
//             <Container>
//                 <Stack className="popular-section">
//                     <Box className="category-title">Popular Dishes</Box>
//                     <Stack className="cards-frame">
//                         <CssVarsProvider>
//                             <Card sx={{ minHeight: '280px', width: 320 }}>
//                                 <CardCover>
//                                     <img
//                                         src="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320"
//                                         srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
//                                         loading="lazy"
//                                         alt=""
//                                     />
//                                 </CardCover>
//                                 <CardCover
//                                     sx={{
//                                         background:
//                                             'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
//                                     }}
//                                 />
//                                 <CardContent sx={{ justifyContent: 'flex-end' }}>
//                                     <Typography level="title-lg" textColor="#fff">
//                                         Yosemite National Park
//                                     </Typography>
//                                     <Typography
//                                         startDecorator={<LocationOnRoundedIcon />}
//                                         textColor="neutral.300"
//                                     >
//                                         California, USA
//                                     </Typography>
//                                 </CardContent>
//                             </Card> 
//                         </CssVarsProvider>

//                     </Stack>
//                 </Stack>
//             </Container>
//         </div>
//     )
// }