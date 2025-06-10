import { Box, Typography } from "@mui/material";
import { CoreOfValueData } from "../data/coreOfValueData";

const CoreOfValue = () => {
  return (
    <Box
      p={4}
      bgcolor="#d9d9d9"
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="90%"
      margin="0 auto"
      borderRadius="15px"
      mb={4}
      boxShadow="0px 8px 24px 0px rgba(0,0,0,0.2)"
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        fontSize={{ xs: "1.5rem", md: "2.125rem" }}
        color="#0E2148"
        textAlign="center"
      >
        Sứ mệnh & Giá trị cốt lõi
      </Typography>

      <Box
        mt={{ sx: 2, md: 4 }}
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-evenly"
        alignItems="stretch "
        width="100%"
        gap={4}
        flexWrap="wrap"
      >
        {CoreOfValueData.map((item) => (
          <Box
            key={item.id}
            flex={1}
            maxWidth={{ xs: "100%", sm: "80%", md: "30%" }}
            textAlign="center"
          >
            <Box
              component="img"
              src={item.img}
              alt={item.title}
              sx={{
                width: "100%",
                height: { xs: 180, sm: 220, md: 250 },
                objectFit: "cover",
                borderRadius: 2,
                mb: 2,
              }}
            />
            <Typography
              variant="h6"
              fontWeight="600"
              color="#000"
              fontSize={{ sx: 15, md: 23 }}
              mb={1}
            >
              {item.title}
            </Typography>
            <Typography
              variant="body2"
              color="#000"
              textAlign="justify"
              fontSize={{ sx: 15, md: 23 }}
            >
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CoreOfValue;
